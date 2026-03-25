"use client";

import { useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, AlertTriangle, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  resolveGlobalClinicalBarModel,
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

  const barModel = useMemo(() => {
    if (!clinicalPathname || !orchestration) {
      return null;
    }

    return resolveGlobalClinicalBarModel({
      pathname: clinicalPathname,
      orchestration,
      clinicalSession: sessionSnapshot,
    });
  }, [clinicalPathname, orchestration, sessionSnapshot]);

  if (shouldHide || !orchestration || !barModel || !barModel.shouldRender) {
    return null;
  }

  return (
    <section className="border-b border-slate-200/80 bg-white/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex min-w-0 items-start gap-3">
          <div
            className={
              barModel.visualPriority === "high"
                ? "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#a60f14]/10 text-[#a60f14]"
                : "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary"
            }
          >
            {barModel.iconKind === "critical" ? (
              <AlertTriangle aria-hidden={true} className="h-5 w-5" />
            ) : barModel.iconKind === "guidance" ? (
              <Activity aria-hidden={true} className="h-5 w-5" />
            ) : (
              <Stethoscope aria-hidden={true} className="h-5 w-5" />
            )}
          </div>

          <div className="min-w-0 space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {barModel.eyebrow}
            </p>
            <p className="text-sm leading-6 text-slate-700">{barModel.message}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          <ResultAction
            href={barModel.primaryAction?.href ?? "/contacto"}
            label={barModel.primaryAction?.label ?? "Solicitar valoración"}
            isExternal={barModel.primaryAction?.isExternal ?? false}
          />
          {barModel.secondaryAction ? (
            <ResultAction
              href={barModel.secondaryAction.href}
              label={barModel.secondaryAction.label}
              isExternal={barModel.secondaryAction.isExternal}
              variant="outline"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
