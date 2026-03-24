# Intervencion Fase 12 Triage Soft Launch

## Objetivo

Dar al modulo de triage un primer punto de exposicion secundaria y controlada dentro del sitio, sin moverlo todavia a la navegacion principal y sin alterar el rol general del home.

## Entrypoint elegido

Entrypoint elegido:

- tarjeta `Urgencias 24/7` en [ServicesGrid.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/ServicesGrid.tsx)

Ruta expuesta:

- `/triage`

## Por que se eligio

Motivos:

- esta zona ya tiene intencion clinica alta
- el usuario que explora urgencias puede necesitar orientacion inicial
- el bloque ya habla de respuesta inmediata y casos criticos, por lo que el triage encaja como ayuda contextual
- el cambio es pequeno y reversible
- no interfiere con navbar, mobile menu ni hero

## Archivos creados o modificados

### Modificados

- [ServicesGrid.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/ServicesGrid.tsx)
- [TRIAGE_SOFT_LAUNCH_CHECKLIST.md](/d:/Projects/newwebnusketech/docs/TRIAGE_SOFT_LAUNCH_CHECKLIST.md)
- [AI_CONTEXT_LOG.md](/d:/Projects/newwebnusketech/docs/AI_CONTEXT_LOG.md)

### Creados

- [INTERVENCION_FASE_12_TRIAGE_SOFT_LAUNCH.md](/d:/Projects/newwebnusketech/docs/INTERVENCION_FASE_12_TRIAGE_SOFT_LAUNCH.md)

## Alcance exacto del soft launch

Se implemento un solo entrypoint nuevo:

- un CTA contextual dentro de la tarjeta de `Urgencias 24/7` en home

No se hizo:

- exposicion en navbar
- exposicion en mobile menu
- exposicion en hero
- cambios de scoring
- cambios de backend
- cambios de persistencia

## Validaciones ejecutadas

- `npm run guardrails`
- `npm run lint`
- `npm run build`

## Riesgos evitados

- sobreexponer un MVP heuristico en la navegacion principal
- dispersar el experimento en multiples puntos de entrada
- alterar el flujo principal del sitio sin control

## Metricas a observar

- `triage_started`
- `triage_result_shown`
- clic en CTA primario
- clic en CTA secundario
- volumen relativo de uso desde este punto de entrada

## Siguiente paso recomendado

Observar el comportamiento del soft launch controlado desde este entrypoint secundario y reevaluar despues:

- si el triage merece mantenerse igual
- si el CTA necesita ajuste de copy o posicion
- si el modulo puede ganar visibilidad adicional en otra fase
