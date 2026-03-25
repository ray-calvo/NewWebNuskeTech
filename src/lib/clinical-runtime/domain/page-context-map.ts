import type {
  ClinicalPageContext,
  ClinicalPageRoute,
} from "@/lib/clinical-runtime/domain/clinical-types";
import { CLINICAL_PAGE_ROUTES } from "@/lib/clinical-runtime/domain/clinical-types";

const clinicalPageContextMap = {
  "/": {
    route: "/",
    routeKey: "home",
    pageType: "front-door",
    clinicalLayer: "entrypoint",
    predominantState: "clinical-uncertainty",
    canBeOverriddenByUrgency: true,
    defaultFallbackRoute: "/urgencias",
    primaryTransitions: ["/urgencias", "/diagnostico", "/servicios"],
  },
  "/servicios": {
    route: "/servicios",
    routeKey: "services",
    pageType: "clinical-hub",
    clinicalLayer: "hub",
    predominantState: "clinical-uncertainty",
    canBeOverriddenByUrgency: true,
    defaultFallbackRoute: "/urgencias",
    primaryTransitions: [
      "/diagnostico",
      "/urgencias",
      "/cirugia",
      "/medicina-interna",
    ],
  },
  "/urgencias": {
    route: "/urgencias",
    routeKey: "urgencias",
    pageType: "core-parent",
    clinicalLayer: "core",
    predominantState: "urgency-perceived",
    canBeOverriddenByUrgency: true,
    defaultFallbackRoute: "/urgencias",
    primaryTransitions: ["/diagnostico", "/cirugia"],
  },
  "/cirugia": {
    route: "/cirugia",
    routeKey: "cirugia",
    pageType: "core-parent",
    clinicalLayer: "core",
    predominantState: "clinical-uncertainty",
    canBeOverriddenByUrgency: true,
    defaultFallbackRoute: "/urgencias",
    primaryTransitions: ["/urgencias", "/diagnostico"],
  },
  "/diagnostico": {
    route: "/diagnostico",
    routeKey: "diagnostico",
    pageType: "core-parent",
    clinicalLayer: "core",
    predominantState: "clinical-uncertainty",
    canBeOverriddenByUrgency: true,
    defaultFallbackRoute: "/urgencias",
    primaryTransitions: ["/medicina-interna", "/oncologia", "/cirugia"],
  },
  "/endoscopia": {
    route: "/endoscopia",
    routeKey: "endoscopia",
    pageType: "core-parent",
    clinicalLayer: "core",
    predominantState: "recognized-complexity",
    canBeOverriddenByUrgency: true,
    defaultFallbackRoute: "/urgencias",
    primaryTransitions: ["/diagnostico", "/cirugia"],
  },
  "/prevencion": {
    route: "/prevencion",
    routeKey: "prevencion",
    pageType: "continuity-parent",
    clinicalLayer: "continuity",
    predominantState: "stability-followup",
    canBeOverriddenByUrgency: true,
    defaultFallbackRoute: "/diagnostico",
    primaryTransitions: ["/diagnostico", "/urgencias"],
  },
  "/exoticos": {
    route: "/exoticos",
    routeKey: "exoticos",
    pageType: "complementary-parent",
    clinicalLayer: "complementary",
    predominantState: "recognized-complexity",
    canBeOverriddenByUrgency: true,
    defaultFallbackRoute: "/urgencias",
    primaryTransitions: ["/urgencias", "/diagnostico"],
  },
  "/oncologia": {
    route: "/oncologia",
    routeKey: "oncologia",
    pageType: "complementary-parent",
    clinicalLayer: "complementary",
    predominantState: "recognized-complexity",
    canBeOverriddenByUrgency: true,
    defaultFallbackRoute: "/diagnostico",
    primaryTransitions: ["/diagnostico", "/medicina-interna"],
  },
  "/medicina-interna": {
    route: "/medicina-interna",
    routeKey: "medicinaInterna",
    pageType: "complementary-parent",
    clinicalLayer: "complementary",
    predominantState: "recognized-complexity",
    canBeOverriddenByUrgency: true,
    defaultFallbackRoute: "/diagnostico",
    primaryTransitions: ["/diagnostico", "/oncologia"],
  },
  "/triage": {
    route: "/triage",
    routeKey: "triage",
    pageType: "triage-entry",
    clinicalLayer: "entrypoint",
    predominantState: "clinical-uncertainty",
    canBeOverriddenByUrgency: true,
    defaultFallbackRoute: "/urgencias",
    primaryTransitions: ["/urgencias", "/diagnostico", "/medicina-interna"],
  },
} as const satisfies Record<ClinicalPageRoute, ClinicalPageContext>;

export const CLINICAL_PAGE_CONTEXTS = Object.freeze(clinicalPageContextMap);

export function normalizeClinicalPageRoute(
  pathname: string,
): ClinicalPageRoute | null {
  const normalizedPathname = pathname.length > 1
    ? pathname.replace(/\/+$/, "")
    : pathname;

  return CLINICAL_PAGE_ROUTES.find((route) => route === normalizedPathname) ?? null;
}

export function isClinicalPageRoute(pathname: string): pathname is ClinicalPageRoute {
  return normalizeClinicalPageRoute(pathname) !== null;
}

export function getClinicalPageContext(
  pathname: string,
): ClinicalPageContext | null {
  const normalizedRoute = normalizeClinicalPageRoute(pathname);

  if (!normalizedRoute) {
    return null;
  }

  return CLINICAL_PAGE_CONTEXTS[normalizedRoute];
}

export function getClinicalPageContextOrThrow(pathname: string): ClinicalPageContext {
  const context = getClinicalPageContext(pathname);

  if (!context) {
    throw new Error(`Unknown clinical page route: ${pathname}`);
  }

  return context;
}
