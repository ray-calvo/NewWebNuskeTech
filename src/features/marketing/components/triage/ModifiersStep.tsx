import { CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { triageModifiers } from "@/features/marketing/components/triage/triage-data";
import { cn } from "@/lib/utils";

type ModifiersStepProps = {
  selectedModifierIds: readonly string[];
  onToggle: (modifierId: string) => void;
  onBack: () => void;
  onComplete: () => void;
  onReset: () => void;
};

export function ModifiersStep({
  selectedModifierIds,
  onToggle,
  onBack,
  onComplete,
  onReset,
}: ModifiersStepProps) {
  return (
    <Card className="border-slate-200 bg-white/95">
      <CardHeader className="space-y-3">
        <Badge variant="secondary">Paso 4 de 4</Badge>
        <CardTitle className="text-2xl font-semibold text-slate-950">
          ¿Hay factores que estén haciendo el problema más preocupante?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm leading-7 text-slate-600">
          Este paso es opcional, pero ayuda a ajustar la prioridad si el cuadro
          está empeorando o si tu mascota está en una condición más sensible.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {triageModifiers.map((modifier) => {
            const isSelected = selectedModifierIds.includes(modifier.id);

            return (
              <button
                key={modifier.id}
                type="button"
                className={cn(
                  "rounded-2xl border p-5 text-left transition-all",
                  isSelected
                    ? "border-primary bg-primary/5 shadow-[0_16px_40px_-24px_rgba(29,63,104,0.55)]"
                    : "border-slate-200 bg-slate-50 hover:border-primary/30 hover:bg-white",
                )}
                onClick={() => onToggle(modifier.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-slate-950">
                      {modifier.label}
                    </p>
                    {modifier.description ? (
                      <p className="text-sm leading-7 text-slate-600">
                        {modifier.description}
                      </p>
                    ) : null}
                  </div>
                  <div
                    className={cn(
                      "mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border",
                      isSelected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-slate-300 bg-white text-transparent",
                    )}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>
              </button>
            );
          })}
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
          <Button
            type="button"
            size="lg"
            className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
            onClick={onComplete}
          >
            Ver resultado
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
