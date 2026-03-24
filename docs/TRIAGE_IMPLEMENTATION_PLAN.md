# TRIAGE IMPLEMENTATION PLAN

## 1. Objetivo de implementacion

El objetivo de implementacion del modulo de triage es construir un MVP seguro, simple y mantenible dentro de la arquitectura activa del repo.

La primera version debe priorizar:

- orientacion inicial
- clasificacion de urgencia
- conversion hacia canales de contacto o atencion
- legibilidad tecnica
- facilidad de evolucion controlada

La primera version no debe priorizar:

- complejidad clinica avanzada
- precision diagnostica
- motor medico sofisticado
- integraciones pesadas

Principio rector:

- el triage MVP debe resolver una necesidad concreta de orientacion y conversion sin abrir una deuda tecnica innecesaria desde la primera entrega

## 2. Ruta sugerida

Ruta publica sugerida:

- `src/app/(marketing)/triage/page.tsx`

Rol esperado de la ruta:

- exponer la pagina publica del triage
- mantener `page.tsx` como archivo de composicion
- delegar la logica interactiva al wizard y la logica de negocio al scoring separado

## 3. Estructura sugerida de componentes

Estructura recomendada:

- `src/app/(marketing)/triage/page.tsx`
- `src/features/marketing/components/triage/TriageWizard.tsx`
- `src/features/marketing/components/triage/TriageIntro.tsx`
- `src/features/marketing/components/triage/SpeciesStep.tsx`
- `src/features/marketing/components/triage/CategoryStep.tsx`
- `src/features/marketing/components/triage/SymptomsStep.tsx`
- `src/features/marketing/components/triage/ModifiersStep.tsx`
- `src/features/marketing/components/triage/TriageResultCard.tsx`
- `src/features/marketing/components/triage/types.ts`
- `src/features/marketing/components/triage/triage-data.ts`
- `src/features/marketing/components/triage/score-triage.ts`

Esta estructura es coherente con el patron ya usado en `services/` y `technology/`:

- `page.tsx` reducido
- componentes de dominio bajo `src/features/marketing/components`
- datos y tipos separados
- reglas de negocio fuera de la UI

## 4. Responsabilidad de cada archivo

### `src/app/(marketing)/triage/page.tsx`

Responsabilidad:

- composicion de la pagina
- metadata local si se decide implementarla en esa fase
- integracion del shell publico con el modulo triage

No debe contener:

- scoring
- datasets extensos
- logica del wizard

### `src/features/marketing/components/triage/TriageWizard.tsx`

Responsabilidad:

- orquestar el flujo completo del wizard
- controlar pasos
- mantener estado local del usuario
- invocar la funcion de scoring
- decidir cuando mostrar el resultado final

### `src/features/marketing/components/triage/TriageIntro.tsx`

Responsabilidad:

- renderizar aviso inicial
- explicar limites del triage
- preparar al usuario para iniciar el flujo

### `src/features/marketing/components/triage/SpeciesStep.tsx`

Responsabilidad:

- mostrar y capturar seleccion de especie

### `src/features/marketing/components/triage/CategoryStep.tsx`

Responsabilidad:

- mostrar categorias clinicas disponibles
- capturar categoria activa del flujo

### `src/features/marketing/components/triage/SymptomsStep.tsx`

Responsabilidad:

- mostrar sintomas segun especie y categoria
- permitir seleccion multiple
- mantener claridad UX aun con listas medianas

### `src/features/marketing/components/triage/ModifiersStep.tsx`

Responsabilidad:

- capturar factores agravantes
- explicar al usuario por que esas respuestas modifican prioridad

### `src/features/marketing/components/triage/TriageResultCard.tsx`

Responsabilidad:

- presentar resultado final
- mostrar nivel de clasificacion
- renderizar mensaje orientativo no diagnostico
- exponer CTAs segun nivel

### `src/features/marketing/components/triage/types.ts`

Responsabilidad:

- centralizar tipos del modulo
- evitar duplicacion de contratos entre datos, wizard y scoring

### `src/features/marketing/components/triage/triage-data.ts`

Responsabilidad:

- concentrar especies, categorias, sintomas, modificadores y mensajes base
- aislar el contenido configurable de la UI

### `src/features/marketing/components/triage/score-triage.ts`

Responsabilidad:

- encapsular la logica heuristica de scoring
- resolver override de emergencia
- devolver un `TriageResult` claro y estable

No debe contener:

- JSX
- dependencias visuales
- acoplamiento al estado de React

## 5. Estructura de datos sugerida

Tipos sugeridos para fase 1:

### `Species`

Union sugerida:

- `"dog"`
- `"cat"`
- `"exotic"`

### `TriageCategory`

Union sugerida:

- `"general"`
- `"digestive"`
- `"respiratory"`
- `"neurological"`
- `"urinary"`
- `"trauma-pain"`
- `"eyes-skin"`
- `"reproductive"`

### `TriageLevel`

Union sugerida:

- `"emergency"`
- `"urgent"`
- `"consult"`

### `TriageSymptom`

Estructura sugerida:

```ts
type TriageSymptom = {
  id: string;
  label: string;
  species: Species[];
  categories: TriageCategory[];
  score: number;
  emergencyOverride?: boolean;
};
```

### `TriageModifier`

Estructura sugerida:

```ts
type TriageModifier = {
  id: string;
  label: string;
  score: number;
};
```

### `TriageResult`

Estructura sugerida:

```ts
type TriageResult = {
  level: TriageLevel;
  score: number;
  emergencyOverrideTriggered: boolean;
  matchedSymptomIds: string[];
  matchedModifierIds: string[];
  headline: string;
  message: string;
  recommendedActions: string[];
};
```

## 6. Modelo de scoring sugerido

### Override de emergencia

Regla propuesta:

- si al menos un sintoma marcado tiene `emergencyOverride: true`, el resultado debe pasar directamente a `emergency`

### Score acumulado por sintomas

Regla propuesta:

- cada sintoma aporta puntaje base
- sintomas moderados pueden acumularse y elevar el nivel aunque ninguno sea critico por si solo

### Score por modificadores

Regla propuesta:

- los modificadores agregan puntaje adicional
- sirven para elevar prioridad en casos ambiguos o deterioro progresivo

### Umbrales de clasificacion

Ejemplo inicial sugerido para fase 1:

- `0-3` -> `consult`
- `4-7` -> `urgent`
- `8+` -> `emergency`

Nota:

- estos umbrales son sugeridos y deben calibrarse con criterio veterinario antes de implementacion final

### Subida de nivel por multiples sintomas moderados

Regla propuesta:

- aunque no exista override, multiples sintomas moderados deben poder empujar el caso de `consult` a `urgent`, o de `urgent` a `emergency`, segun score acumulado

Justificacion:

- evita subestimar escenarios complejos sin introducir diagnostico

## 7. Estado y flujo tecnico

Recomendacion tecnica para fase 1:

- `TriageWizard.tsx` como componente cliente
- estado local con `useState`
- sin persistencia
- sin backend
- sin autenticacion

Estado minimo sugerido:

- especie seleccionada
- categoria seleccionada
- sintomas seleccionados
- modificadores seleccionados
- paso actual
- resultado calculado

Regla de implementacion:

- el wizard debe ser autosuficiente a nivel de UI, pero delegar scoring a `score-triage.ts`

## 8. Integracion con conversion

El resultado del triage debe conectar directamente con conversion del sitio.

Destinos recomendados:

- urgencias
- WhatsApp
- agendar consulta
- servicios

Uso esperado por nivel:

- `emergency` -> urgencias, llamar, WhatsApp
- `urgent` -> WhatsApp, atencion hoy
- `consult` -> agendar consulta, ver servicios

Principio:

- el triage no termina en la clasificacion
- el triage termina en una accion clara para el propietario

## 9. Tracking recomendado

Sin implementarlo todavia, se recomienda planear estos eventos futuros:

- inicio triage
- especie seleccionada
- categoria seleccionada
- resultado mostrado
- CTA clicado

Objetivo de tracking:

- medir abandono del flujo
- identificar categorias mas frecuentes
- entender distribucion de resultados
- medir conversion por nivel de triage

Regla:

- el tracking debe agregarse en una fase posterior y no debe contaminar la primera implementacion con complejidad analitica prematura

## 10. Que queda fuera de fase 1

Fuera de alcance explicito:

- guardar historial
- diagnostico automatico
- IA generativa
- panel medico
- cuentas de usuario
- integraciones backend
- analitica avanzada en tiempo real

Tambien queda fuera:

- calibracion clinica avanzada por raza
- reglas profundas por edad o peso
- motor de recomendaciones medicas

## 11. Riesgos tecnicos

Riesgos principales a vigilar:

- sobrecrecimiento del wizard
- exceso de sintomas
- scoring mal calibrado
- lenguaje demasiado medico
- mezclar UI y reglas de negocio

Riesgos derivados:

- `page.tsx` convirtiendose en monolito
- datasets demasiado grandes embebidos en componentes visuales
- componentes de paso haciendo logica que deberia vivir en `score-triage.ts`
- dificultad para ajustar copy o scoring por no tener datos separados

## 12. Criterios de implementacion segura

La futura implementacion debe seguir estas reglas:

- separar datos, tipos y scoring
- mantener `page.tsx` como composicion
- evitar monolito
- no meter complejidad innecesaria
- validar `lint` y `build` al implementarlo

Checklist operativo minimo:

1. Crear la ruta publica solo cuando el wizard y sus dependencias existan.
2. Mantener el dataset fuera de componentes visuales.
3. Aislar scoring en `score-triage.ts`.
4. No introducir backend, autenticacion ni persistencia en fase 1.
5. Ejecutar `npm run guardrails`.
6. Ejecutar `npm run lint`.
7. Ejecutar `npm run build`.

## 13. Decision de arquitectura recomendada

Decision recomendada para futura implementacion:

- implementar el triage como modulo de dominio marketing dentro de `src/features/marketing/components/triage`
- exponerlo mediante `src/app/(marketing)/triage/page.tsx`
- mantener separacion estricta entre:
  - pagina publica
  - UI del wizard
  - datos del triage
  - reglas de scoring

Esta decision reduce riesgo de improvisacion, facilita pruebas futuras y mantiene coherencia con la arquitectura saneada del repo.
