import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const blockedPattern = "@/".concat("src/");
const allowedExtensions = new Set([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs"]);
const ignoredDirectories = new Set([
  ".git",
  ".next",
  "docs",
  "node_modules",
  "out",
  "build",
]);

function walk(currentDir, files = []) {
  for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
    if (ignoredDirectories.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    if (allowedExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

const violations = [];

for (const filePath of walk(projectRoot)) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const lines = fileContent.split(/\r?\n/);

  lines.forEach((line, index) => {
    if (line.includes(blockedPattern)) {
      violations.push({
        filePath: path.relative(projectRoot, filePath),
        lineNumber: index + 1,
        line: line.trim(),
      });
    }
  });
}

if (violations.length > 0) {
  console.error(`Se detectaron imports o referencias prohibidas con '${blockedPattern}':`);

  for (const violation of violations) {
    console.error(
      `- ${violation.filePath}:${violation.lineNumber} -> ${violation.line}`,
    );
  }

  process.exit(1);
}

console.log(`OK: no se detectaron referencias '${blockedPattern}' en codigo ni configuracion activa.`);
