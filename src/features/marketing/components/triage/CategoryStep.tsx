import { Activity, CircleAlert, Eye, HeartPulse, ScanHeart, ShieldPlus, Syringe, Wind } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { triageCategories } from "@/features/marketing/components/triage/triage-data";
import type { TriageCategory } from "@/features/marketing/components/triage/types";
import { cn } from "@/lib/utils";

type CategoryStepProps = {
  selectedCategory: TriageCategory | null;
  onSelect: (category: TriageCategory) => void;
  onBack: () => void;
  onNext: () => void;
  onReset: () => void;
};

const categoryIcons = {
  general: Activity,
  digestive: Syringe,
  respiratory: Wind,
  neurological: ScanHeart,
  urinary: ShieldPlus,
  trauma: CircleAlert,
  "eyes-skin": Eye,
  reproductive: HeartPulse,
} satisfies Record<TriageCategory, React.ComponentType<{ className?: string }>>;

export function CategoryStep({
  selectedCategory,
  onSelect,
  onBack,
  onNext,
  onReset,
}: CategoryStepProps) {
  return (
    <Card className="border-slate-200 bg-white/95">
      <CardHeader className="space-y-3">
        <Badge variant="secondary">Paso 2 de 4</Badge>
        <CardTitle className="text-2xl font-semibold text-slate-950">
          ¿Qué tipo de problema se parece más a lo que le está pasando a tu mascota?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          {triageCategories.map((category) => {
            const Icon = categoryIcons[category.value];
            const isSelected = selectedCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                className={cn(
                  "rounded-2xl border p-5 text-left transition-all",
                  isSelected
                    ? "border-primary bg-primary/5 shadow-[0_16px_40px_-24px_rgba(29,63,104,0.55)]"
                    : "border-slate-200 bg-slate-50 hover:border-primary/30 hover:bg-white",
                )}
                onClick={() => onSelect(category.value)}
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-lg font-semibold text-slate-950">
                  {category.label}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {category.description}
                </p>
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
              Volver a empezar
            </Button>
          </div>
          <Button
            type="button"
            size="lg"
            className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
            disabled={!selectedCategory}
            onClick={onNext}
          >
            Continuar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}