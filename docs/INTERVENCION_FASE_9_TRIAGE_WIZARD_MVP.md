# Intervencion Fase 9 Triage Wizard MVP

## Objetivo

Construir la primera version funcional del wizard UI del modulo de triage veterinario MVP y exponerlo en una ruta publica del sitio marketing, reutilizando la base estructural ya existente de tipos, datos y scoring.

## Ruta creada

- [page.tsx](/d:/Projects/newwebnusketech/src/app/(marketing)/triage/page.tsx)

Ruta publica activa:

- `/triage`

## Componentes creados

- [TriageWizard.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/TriageWizard.tsx)
- [TriageIntro.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/TriageIntro.tsx)
- [SpeciesStep.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/SpeciesStep.tsx)
- [CategoryStep.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/CategoryStep.tsx)
- [SymptomsStep.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/SymptomsStep.tsx)
- [ModifiersStep.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/ModifiersStep.tsx)
- [TriageResultCard.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/TriageResultCard.tsx)

## Flujo implementado

Flujo funcional implementado:

1. aviso inicial
2. seleccion de especie
3. seleccion de categoria clinica
4. seleccion de sintomas compatibles con especie y categoria
5. seleccion de modificadores agravantes
6. resultado final

Capacidades incluidas:

- avanzar
- retroceder
- reiniciar
- filtrado de sintomas por especie y categoria
- resultado conectado a `score-triage.ts`
- CTA primario y secundario segun nivel

## Base reutilizada

El wizard reutiliza sin reescribir la base creada en la fase anterior:

- [types.ts](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/types.ts)
- [triage-data.ts](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/triage-data.ts)
- [score-triage.ts](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/score-triage.ts)

## Que quedo fuera de esta fase

- backend
- persistencia
- analytics
- login
- historial de casos
- ajuste clinico avanzado del scoring
- eventos de tracking
- panel medico
- IA real

Tambien quedo fuera:

- refinamiento clinico con validacion veterinaria formal
- integraciones con agenda o CRM

## Validaciones ejecutadas

- `npm run guardrails` -> OK
- `npm run lint` -> OK
- `npm run build` -> OK

Rutas confirmadas por build:

- `/`
- `/contacto`
- `/servicios`
- `/tecnologia`
- `/triage`

## Riesgos evitados

- Crear un `page.tsx` monolitico con UI y reglas mezcladas.
- Duplicar scoring dentro de componentes visuales.
- Exponer una ruta publica sin apoyarse en la base estructural ya documentada.
- Introducir complejidad de backend o persistencia antes de validar el flujo MVP.

## Pendientes abiertos

- Revisar la calibracion del scoring con criterio veterinario antes de promocionar ampliamente el modulo.
- Evaluar si el copy final del resultado necesita revision clinica adicional.
- Definir en una fase posterior si `/triage` debe entrar a navegacion principal o mantenerse como entrypoint secundario.
