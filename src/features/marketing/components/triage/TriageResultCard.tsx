import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { TriageResult } from "@/features/marketing/components/triage/types";

type TriageResultCardProps = {
  result: TriageResult;
  onBack: () => void;
  onReset: () => void;
};

const levelCopy = {
  emergency: {
    badge: "Emergencia",
    title: "Lo más prudente es buscar atención inmediata.",
    description:
      "Según este flujo, hay señales que justifican priorizar urgencias y contacto inmediato.",
    variant: "destructive" as const,
  },
  urgent: {
    badge: "Urgencia",
    title: "Conviene buscar atención el mismo día.",
    description:
      "Según este flujo, no parece conveniente posponer la valoración sin orientación clínica.",
    variant: "secondary" as const,
  },
  consult: {
    badge: "Consulta",
    title: "Conviene programar una valoración.",
    description:
      "En este flujo no se marcaron señales críticas, pero sí conviene una valoración veterinaria para orientar el siguiente paso.",
    variant: "default" as const,
  },
};

function ResultCta({
  href,
  label,
  variant = "default",
}: {
  href: string;
  label: string;
  variant?: "default" | "outline";
}) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <Button
        asChild
        size="lg"
        variant={variant}
        className="h-11 rounded-2xl px-6"
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
      size="lg"
      variant={variant}
      className="h-11 rounded-2xl px-6"
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}

export function TriageResultCard({
  result,
  onBack,
  onReset,
}: TriageResultCardProps) {
  const copy = levelCopy[result.level];

  return (
    <Card className="border-slate-200 bg-white/95">
      <CardHeader className="space-y-4">
        <Badge variant={copy.variant}>{copy.badge}</Badge>
        <div className="space-y-2">
          <CardTitle className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">
            {copy.title}
          </CardTitle>
          <CardDescription className="max-w-3xl text-base leading-7 text-slate-600">
            {copy.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Señales y factores considerados
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            {result.reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-primary/10 bg-primary/5 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Aviso legal breve
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Este triage es una herramienta de orientación inicial y no sustituye
            la valoración médica veterinaria. No confirma diagnósticos. Si tu
            mascota empeora o presenta signos graves, acude de inmediato a
            urgencias.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <ResultCta
            href={result.primaryCta.href}
            label={result.primaryCta.label}
          />
          <ResultCta
            href={result.secondaryCta.href}
            label={result.secondaryCta.label}
            variant="outline"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={onBack}>
              Regresar
            </Button>
            <Button type="button" variant="ghost" onClick={onReset}>
              Reiniciar
            </Button>
          </div>
          <p className="text-sm leading-7 text-slate-500">
            Referencia interna del flujo: {result.totalScore}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
