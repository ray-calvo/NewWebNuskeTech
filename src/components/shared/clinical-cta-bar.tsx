"use client";

import { useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, AlertTriangle, ArrowRight, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  resolveGlobalClinicalCtaForRoute,
} from "@/lib/clinical-runtime/application";
import {
  CLINICAL_PAGE_ROUTES,
  type ClinicalPageRoute,
} from "@/lib/clinical-runtime/domain";
import {
  subscribeClinicalSession,
  readClinicalSessionSnapshot,
} from "@/lib/clinical-runtime/session";

function isClinicalRoute(pathname: string | null): pathname is ClinicalPageRoute {
  if (!pathname) {
    return false;
  }

  return CLINICAL_PAGE_ROUTES.includes(pathname as ClinicalPageRoute);
}

function getClinicalBarMessage({
  hasSession,
  pathname,
  resolvedState,
}: {
  hasSession: boolean;
  pathname: ClinicalPageRoute;
  resolvedState: ReturnType<typeof resolveGlobalClinicalCtaForRoute>["uiModel"]["resolvedState"];
}) {
  if (hasSession) {
    switch (resolvedState) {
      case "urgency-perceived":
        return "Hay un contexto clínico activo que sugiere priorizar atención inmediata.";
      case "recognized-complexity":
        return "Tu navegación conserva un contexto clínico que orienta a una ruta de mayor complejidad.";
      case "stability-followup":
        return "Hay continuidad clínica activa para sostener el siguiente paso sin perder seguimiento.";
      case "clinical-uncertainty":
      default:
        return "Hay un contexto clínico reciente que puede ayudarte a seguir la ruta correcta sin volver a empezar.";
    }
  }

  switch (pathname) {
    case "/servicios":
      return "Si todavía no tienes clara la ruta clínica, usa esta orientación breve para elegir mejor.";
    case "/diagnostico":
      return "Si el caso no está claro, aquí puedes mantener una salida prudente sin salir de la ruta actual.";
    case "/medicina-interna":
    case "/oncologia":
    case "/cirugia":
    case "/endoscopia":
      return "Esta barra mantiene una acción clínica segura y discreta mientras navegas el hospital digital.";
    default:
      return "Mantén una acción clínica segura disponible mientras navegas el hospital digital.";
  }
}

function ResultAction({
  href,
  label,
  isExternal,
  variant = "default",
}: {
  href: string;
  label: string;
  isExternal: boolean;
  variant?: "default" | "outline" | "ghost";
}) {
  if (isExternal) {
    return (
      <Button
        asChild
        size="sm"
        variant={variant}
        className="h-9 rounded-2xl px-4"
      >
        <a href={href} target="_blank" rel="noreferrer">
          {label}
        </a>
      </Button>
    );
  }

  return (
    <Button
      asChild
      size="sm"
      variant={variant}
      className="h-9 rounded-2xl px-4"
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}

export function ClinicalCtaBar() {
  const pathname = usePathname();
  const sessionSnapshot = useSyncExternalStore(
    (onStoreChange) =>
      subscribeClinicalSession(() => {
        onStoreChange();
      }),
    () => readClinicalSessionSnapshot().snapshot,
    () => null,
  );

  const clinicalPathname = isClinicalRoute(pathname) ? pathname : null;

  const shouldHide =
    !clinicalPathname ||
    clinicalPathname === "/urgencias" ||
    clinicalPathname === "/triage";

  const orchestration = useMemo(() => {
    if (!clinicalPathname) {
      return null;
    }

    return resolveGlobalClinicalCtaForRoute({
      pathname: clinicalPathname,
      clinicalSession: sessionSnapshot,
    });
  }, [clinicalPathname, sessionSnapshot]);

  if (shouldHide || !orchestration) {
    return null;
  }

  const hasSession = orchestration.orchestrationSource === "clinical-session";
  const primaryCta = orchestration.consumption.primaryCta;
  const secondaryCta = hasSession ? orchestration.consumption.secondaryCta : null;
  const fallbackCta = orchestration.consumption.shouldShowSafeFallback
    ? orchestration.consumption.fallbackCta
    : null;
  const message = getClinicalBarMessage({
    hasSession,
    pathname: clinicalPathname,
    resolvedState: orchestration.uiModel.resolvedState,
  });
  const showHighPriority =
    orchestration.consumption.visualPriority === "maximum" ||
    orchestration.consumption.visualPriority === "high";

  return (
    <section className="border-b border-slate-200/80 bg-white/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex min-w-0 items-start gap-3">
          <div
            className={
              showHighPriority
                ? "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#a60f14]/10 text-[#a60f14]"
                : "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary"
            }
          >
            {showHighPriority ? (
              <AlertTriangle aria-hidden={true} className="h-5 w-5" />
            ) : hasSession ? (
              <Activity aria-hidden={true} className="h-5 w-5" />
            ) : (
              <Stethoscope aria-hidden={true} className="h-5 w-5" />
            )}
          </div>

          <div className="min-w-0 space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {hasSession ? "Continuidad clínica activa" : "Orientación clínica disponible"}
            </p>
            <p className="text-sm leading-6 text-slate-700">{message}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          <ResultAction
            href={primaryCta.href}
            label={primaryCta.label}
            isExternal={primaryCta.isExternal}
          />
          {secondaryCta ? (
            <ResultAction
              href={secondaryCta.href}
              label={secondaryCta.label}
              isExternal={secondaryCta.isExternal}
              variant="outline"
            />
          ) : null}
          {fallbackCta ? (
            fallbackCta.isExternal ? (
              <a
                href={fallbackCta.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              >
                {fallbackCta.label}
                <ArrowRight aria-hidden={true} className="h-4 w-4" />
              </a>
            ) : (
              <Link
                href={fallbackCta.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              >
                {fallbackCta.label}
                <ArrowRight aria-hidden={true} className="h-4 w-4" />
              </Link>
            )
          ) : null}
        </div>
      </div>
    </section>
  );
}
