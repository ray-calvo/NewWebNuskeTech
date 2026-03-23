import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const appRoot = path.join(projectRoot, "src", "app");
const sourceFiles = [
  path.join(projectRoot, "src", "components", "shared", "navbar.tsx"),
  path.join(projectRoot, "src", "components", "shared", "MobileMenu.tsx"),
  path.join(projectRoot, "src", "components", "shared", "footer.tsx"),
  path.join(projectRoot, "src", "features", "marketing", "components", "Hero.tsx"),
];

const routeFileNames = new Set(["page.tsx", "page.ts", "page.jsx", "page.js"]);
const internalHrefPattern = /href\s*[:=]\s*["'`](\/(?!\/)[^"'`?#]*)/g;

function normalizeRoute(route) {
  if (route === "/") {
    return route;
  }

  return route.endsWith("/") ? route.slice(0, -1) : route;
}

function toRouteFromAppDir(relativeDir) {
  if (relativeDir === ".") {
    return "/";
  }

  const segments = relativeDir
    .split(path.sep)
    .filter(Boolean)
    .filter((segment) => !(segment.startsWith("(") && segment.endsWith(")")))
    .filter((segment) => !segment.startsWith("_"));

  return segments.length === 0 ? "/" : `/${segments.join("/")}`;
}

function collectRoutes(currentDir, routes = new Set()) {
  for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      collectRoutes(fullPath, routes);
      continue;
    }

    if (!routeFileNames.has(entry.name)) {
      continue;
    }

    const relativeDir = path.relative(appRoot, path.dirname(fullPath));
    routes.add(normalizeRoute(toRouteFromAppDir(relativeDir)));
  }

  return routes;
}

function extractInternalHrefs(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const matches = [];

  for (const match of content.matchAll(internalHrefPattern)) {
    matches.push(normalizeRoute(match[1]));
  }

  return [...new Set(matches)];
}

const activeRoutes = collectRoutes(appRoot);
const missingRoutes = [];

for (const sourceFile of sourceFiles) {
  const relativeSource = path.relative(projectRoot, sourceFile);

  if (!fs.existsSync(sourceFile)) {
    missingRoutes.push({
      source: relativeSource,
      href: "N/A",
      reason: "archivo fuente no encontrado para validacion",
    });
    continue;
  }

  for (const href of extractInternalHrefs(sourceFile)) {
    if (!activeRoutes.has(href)) {
      missingRoutes.push({
        source: relativeSource,
        href,
        reason: "ruta no encontrada en src/app/**/page.*",
      });
    }
  }
}

if (missingRoutes.length > 0) {
  console.error("Se detectaron enlaces internos criticos sin ruta publica activa:");

  for (const failure of missingRoutes) {
    console.error(`- ${failure.source} -> ${failure.href} (${failure.reason})`);
  }

  process.exit(1);
}

console.log("OK: enlaces internos criticos verificados contra rutas activas.");
console.log(`Rutas activas detectadas: ${[...activeRoutes].sort().join(", ")}`);
