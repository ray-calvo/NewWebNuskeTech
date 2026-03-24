import { PawPrint, Rabbit, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supportedSpecies } from "@/features/marketing/components/triage/triage-data";
import type { Species } from "@/features/marketing/components/triage/types";
import { cn } from "@/lib/utils";

type SpeciesStepProps = {
  selectedSpecies: Species | null;
  onSelect: (species: Species) => void;
  onNext: () => void;
  onReset: () => void;
};

const speciesIcons = {
  dog: PawPrint,
  cat: ShieldCheck,
  exotic: Rabbit,
} satisfies Record<Species, React.ComponentType<{ className?: string }>>;

export function SpeciesStep({
  selectedSpecies,
  onSelect,
  onNext,
  onReset,
}: SpeciesStepProps) {
  return (
    <Card className="border-slate-200 bg-white/95">
      <CardHeader className="space-y-3">
        <Badge variant="secondary">Paso 1 de 4</Badge>
        <CardTitle className="text-2xl font-semibold text-slate-950">
          ¿Qué tipo de mascota necesitas evaluar?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {supportedSpecies.map((species) => {
            const Icon = speciesIcons[species.value];
            const isSelected = selectedSpecies === species.value;

            return (
              <button
                key={species.value}
                type="button"
                className={cn(
                  "rounded-2xl border p-5 text-left transition-all",
                  isSelected
                    ? "border-primary bg-primary/5 shadow-[0_16px_40px_-24px_rgba(29,63,104,0.55)]"
                    : "border-slate-200 bg-slate-50 hover:border-primary/30 hover:bg-white",
                )}
                onClick={() => onSelect(species.value)}
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-lg font-semibold text-slate-950">
                  {species.label}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Esto ayuda a mostrar opciones más cercanas a tu caso.
                </p>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Button type="button" variant="ghost" onClick={onReset}>
            Reiniciar
          </Button>
          <Button
            type="button"
            size="lg"
            className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
            disabled={!selectedSpecies}
            onClick={onNext}
          >
            Continuar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
