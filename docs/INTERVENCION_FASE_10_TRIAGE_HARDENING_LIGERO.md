# Intervencion Fase 10 Triage Hardening Ligero

## Objetivo

Endurecer ligeramente el modulo de triage veterinario MVP antes de darle mayor visibilidad publica, mejorando copy critico, avisos y microcopy de experiencia sin tocar navegacion, scoring de fondo ni arquitectura general del sitio.

## Archivos revisados

- [TriageIntro.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/TriageIntro.tsx)
- [SpeciesStep.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/SpeciesStep.tsx)
- [CategoryStep.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/CategoryStep.tsx)
- [SymptomsStep.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/SymptomsStep.tsx)
- [ModifiersStep.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/ModifiersStep.tsx)
- [TriageResultCard.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/TriageResultCard.tsx)
- [score-triage.ts](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/score-triage.ts)

## Cambios de copy realizados

- Se reforzo que el triage orienta el siguiente paso, pero no confirma diagnosticos.
- Se hizo mas explicito que signos criticos no deben esperar el final del flujo.
- Se suavizo lenguaje potencialmente demasiado concluyente en resultados.
- Se hizo mas clara la intencion de los CTA:
  - urgencias ahora
  - solicitar atencion hoy
  - agendar valoracion
- Se cambio el rotulo de `Razones consideradas` por `Señales y factores considerados`.
- Se redujo la sensacion de precision del score mostrandolo como `Referencia interna del flujo`.
- Se agrego un mensaje de fallback cuando no hay sintomas cargados para una combinacion del MVP.

## Cambios NO realizados y por que

- No se modifico navbar, mobile menu, hero ni footer.
- No se expuso `/triage` en navegacion principal.
- No se cambiaron umbrales ni reglas del scoring heuristico.
- No se agrego analytics.
- No se introdujo backend ni persistencia.
- No se reestructuro el wizard porque el objetivo de esta fase era solo endurecimiento ligero.

## Riesgos detectados

- El scoring sigue siendo heuristico y requiere validacion clinica posterior.
- El feature sigue sin medicion de uso o conversion.
- La experiencia aun puede beneficiarse de pruebas con usuarios reales o revision clinica de lenguaje.

## Checklist de soft launch

Referencia creada:

- [TRIAGE_SOFT_LAUNCH_CHECKLIST.md](/d:/Projects/newwebnusketech/docs/TRIAGE_SOFT_LAUNCH_CHECKLIST.md)

Ese checklist cubre:

- revision clinica
- revision legal y comunicacional
- QA funcional
- medicion futura
- criterios para decidir cuando exponer `/triage`

## Validaciones ejecutadas

- `npm run guardrails`
- `npm run lint`
- `npm run build`

## Siguiente paso recomendado

El siguiente paso mas seguro no es exponer `/triage` en navegacion principal, sino ejecutar una prueba controlada con:

- revision clinica del scoring
- revision de copy final
- definicion minima de medicion

Solo despues conviene reevaluar si `/triage` debe entrar a navbar, hero o algun CTA visible del funnel principal.
