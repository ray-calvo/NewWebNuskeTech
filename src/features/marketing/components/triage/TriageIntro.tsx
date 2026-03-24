import Link from "next/link";
import { AlertTriangle, ArrowRight, HeartPulse } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TriageIntroProps = {
  onStart: () => void;
};

export function TriageIntro({ onStart }: TriageIntroProps) {
  return (
    <Card className="border-slate-200 bg-white/95">
      <CardHeader className="space-y-4">
        <Badge>Antes de comenzar</Badge>
        <CardTitle className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-slate-950">
          Esta herramienta orienta el siguiente paso, pero no sustituye la
          valoración veterinaria.
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-start gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <AlertTriangle aria-hidden={true} className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Aviso importante
                </p>
                <p className="text-sm leading-7 text-slate-600">
                  El triage ayuda a clasificar urgencia y orientar el siguiente
                  paso. No confirma diagnósticos y no reemplaza una revisión
                  médica.
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              <li>
                Si observas signos críticos, no esperes a terminar el flujo y
                busca atención inmediata.
              </li>
              <li>
                Usa respuestas lo más cercanas posible a lo que estás viendo.
              </li>
              <li>
                El resultado orienta si conviene priorizar urgencias, atención
                hoy o consulta.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-primary/10 bg-primary/5 p-5">
            <div className="flex items-start gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                <HeartPulse aria-hidden={true} className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-destructive">
                  Urgencias inmediatas
                </p>
                <p className="text-sm leading-7 text-slate-600">
                  Si tu mascota tiene dificultad para respirar, convulsiones,
                  sangrado abundante o no responde, acude a urgencias de
                  inmediato sin esperar el resultado del triage.
                </p>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="h-11 w-full rounded-2xl border-destructive/25 bg-white text-destructive hover:bg-destructive/5"
            >
              <Link href="/contacto">Ver contacto de urgencias</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            size="lg"
            className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
            onClick={onStart}
          >
            Iniciar triage
            <ArrowRight aria-hidden={true} className="h-4 w-4" />
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 rounded-2xl border-accent bg-accent/10 px-6 text-secondary hover:bg-accent/20 hover:text-primary"
          >
            <a href="https://wa.me/524433369624" target="_blank" rel="noreferrer">
              Pedir apoyo por WhatsApp
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
