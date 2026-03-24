# Intervencion Fase 8 Triage Base Estructural

## Objetivo

Crear la base tecnica inicial del modulo de triage veterinario MVP sin abrir todavia la ruta publica, sin construir UI del wizard y sin introducir complejidad de producto fuera del alcance seguro de esta fase.

## Archivos creados

- [types.ts](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/types.ts)
- [triage-data.ts](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/triage-data.ts)
- [score-triage.ts](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/score-triage.ts)
- [INTERVENCION_FASE_8_TRIAGE_BASE_ESTRUCTURAL.md](/d:/Projects/newwebnusketech/docs/INTERVENCION_FASE_8_TRIAGE_BASE_ESTRUCTURAL.md)

## Criterios usados

- Mantener separacion estricta entre tipos, datos y logica pura.
- No crear todavia `page.tsx` para `triage`.
- No mezclar scoring con UI.
- Usar lenguaje entendible para propietarios en sintomas y modificadores.
- Mantener el set inicial dentro de un MVP razonable y no exhaustivo.
- Alinear la estructura con [TRIAGE_FUNCTIONAL_SPEC.md](/d:/Projects/newwebnusketech/docs/TRIAGE_FUNCTIONAL_SPEC.md) y [TRIAGE_IMPLEMENTATION_PLAN.md](/d:/Projects/newwebnusketech/docs/TRIAGE_IMPLEMENTATION_PLAN.md).

## Que si quedo implementado

- Tipos base del modulo:
  - `Species`
  - `TriageCategory`
  - `TriageLevel`
  - `TriageSymptom`
  - `TriageModifier`
  - `TriageResult`
- Datos iniciales de especies soportadas.
- Categorias clinicas iniciales del MVP.
- Lista inicial de sintomas con overrides criticos.
- Lista inicial de modificadores agravantes.
- Funcion pura `scoreTriage` para:
  - recibir sintomas seleccionados
  - recibir modificadores seleccionados
  - detectar `emergency override`
  - sumar score
  - elevar nivel por multiples sintomas moderados
  - devolver `level`, `totalScore`, `reasons`, `primaryCta` y `secondaryCta`

## Que no se implemento todavia

- Ruta publica `src/app/(marketing)/triage/page.tsx`
- Wizard UI
- pasos visuales del flujo
- integracion de conversion en interfaz
- persistencia
- backend
- autenticacion
- analytics
- metadata de ruta

## Validaciones ejecutadas

- `npm run lint`
- `npm run build`

## Riesgos evitados

- Crear un wizard monolitico desde la primera intervencion.
- Mezclar datos clinicos, scoring y UI en un solo archivo.
- Abrir una ruta publica incompleta antes de tener estructura interna estable.
- Sobrediseñar el motor de triage antes de validar el alcance MVP.

## Siguiente paso recomendado

La siguiente fase segura deberia implementar solo la capa de interfaz minima del triage:

- `src/app/(marketing)/triage/page.tsx`
- `TriageWizard.tsx`
- componentes de pasos
- tarjeta de resultado

Manteniendo intacta la separacion ya creada entre:

- datos
- tipos
- scoring
- UI
