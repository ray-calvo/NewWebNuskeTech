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
          Esta herramienta te ayuda a saber qué hacer a continuación, pero no
          reemplaza la revisión de un médico veterinario.
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
                  Este triage te orienta según lo que estás observando en tu
                  mascota. No da un diagnóstico y no sustituye una valoración
                  médica presencial.
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              <li>
                Si notas algo grave, no esperes a terminar esta herramienta:
                busca atención veterinaria inmediata.
              </li>
              <li>
                Responde con lo más cercano posible a lo que estás viendo en
                este momento.
              </li>
              <li>
                Al final te orientará si conviene ir a urgencias, acudir hoy
                mismo o agendar una consulta.
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
                  Ve a urgencias de inmediato si tu mascota
                </p>
                <p className="text-sm leading-7 text-slate-600">
                  tiene dificultad para respirar, convulsiones, sangrado
                  abundante, está inconsciente o no responde. En estos casos, no
                  esperes el resultado del triage.
                </p>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="h-11 w-full rounded-2xl border-destructive/25 bg-white text-destructive hover:bg-destructive/5"
            >
              <Link href="/contacto">Ver cómo llegar o pedir ayuda</Link>
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
            Comenzar triage
            <ArrowRight aria-hidden={true} className="h-4 w-4" />
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 rounded-2xl border-accent bg-accent/10 px-6 text-secondary hover:bg-accent/20 hover:text-primary"
          >
            <a href="https://wa.me/524433369624" target="_blank" rel="noreferrer">
              Pedir ayuda por WhatsApp
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}