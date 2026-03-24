# Intervencion Fase 11 Triage Tracking Minimo

## Objetivo

Agregar instrumentacion minima y segura al modulo de triage MVP para poder observar uso, resultados y clics principales durante un soft launch controlado, sin introducir infraestructura analitica pesada ni tocar la navegacion principal del sitio.

## Estrategia de tracking elegida

Se eligio una estrategia local y ligera dentro del modulo de triage:

- helper dedicado en [track-triage.ts](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/track-triage.ts)
- emision de `CustomEvent` en navegador con nombre `triage:track`
- puente opcional a `window.dataLayer` si en el futuro existe una capa real conectada
- salida `console.info` en desarrollo para observacion local del flujo

Esta estrategia permite:

- no bloquear el soft launch por falta de analytics formal
- evitar dependencias nuevas
- mantener el tracking separado del scoring
- dejar una interfaz simple para conectar despues una herramienta real

## Eventos implementados

- `triage_started`
- `triage_species_selected`
- `triage_category_selected`
- `triage_result_shown`
- `triage_primary_cta_clicked`
- `triage_secondary_cta_clicked`
- `triage_reset`

## Payload minimo definido

Campos enviados cuando son razonables y disponibles:

- `species`
- `category`
- `result_level`
- `total_score`
- `selected_symptom_count`
- `selected_modifier_count`

## Archivos creados o modificados

### Creados

- [track-triage.ts](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/track-triage.ts)
- [INTERVENCION_FASE_11_TRIAGE_TRACKING_MINIMO.md](/d:/Projects/newwebnusketech/docs/INTERVENCION_FASE_11_TRIAGE_TRACKING_MINIMO.md)

### Modificados

- [TriageWizard.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/TriageWizard.tsx)
- [TriageResultCard.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/TriageResultCard.tsx)
- [TRIAGE_SOFT_LAUNCH_CHECKLIST.md](/d:/Projects/newwebnusketech/docs/TRIAGE_SOFT_LAUNCH_CHECKLIST.md)
- [AI_CONTEXT_LOG.md](/d:/Projects/newwebnusketech/docs/AI_CONTEXT_LOG.md)

## Validaciones ejecutadas

- `npm run guardrails`
- `npm run lint`
- `npm run build`

## Riesgos evitados

- meter infraestructura analitica pesada antes de tiempo
- mezclar tracking con scoring heuristico
- dejar el soft launch sin observabilidad minima
- acoplar el wizard a una herramienta externa no existente en el repo

## Limitaciones actuales

- no existe backend de eventos
- no existe dashboard ni pipeline analitico formal
- el tracking no garantiza persistencia por si solo
- `console.info` solo sirve como apoyo local en desarrollo
- `dataLayer` solo se usara si otra capa la inyecta mas adelante

## Siguiente paso recomendado

Realizar un soft launch controlado con monitoreo manual y validar:

- volumen de inicios
- distribucion de resultados
- clics en CTA primario y secundario
- posibles puntos de abandono por especie o categoria

Con esa observacion y con revision clinica del scoring, decidir despues si `/triage` puede ganar mas visibilidad dentro del sitio.
