# INTERVENCION FASE 13 TRIAGE OBSERVABILIDAD LIGERA

## Objetivo

Mejorar la observabilidad minima del soft launch actual de `/triage` sin cambiar su nivel de exposicion, sin agregar nuevos entrypoints y sin introducir infraestructura analitica pesada.

## Mejora aplicada

La mejora se limito a dos frentes:

- trazabilidad explicita del origen actual del entrypoint secundario
- senales ligeras de progresion y abandono por paso dentro del wizard

No se tocaron scoring, navegacion principal, backend ni arquitectura general del sitio.

## Eventos nuevos o ampliados

Eventos nuevos:

- `triage_entrypoint_detected`
- `triage_step_viewed`
- `triage_step_abandoned`

Eventos ampliados con payload adicional:

- `triage_started`
- `triage_species_selected`
- `triage_category_selected`
- `triage_result_shown`
- `triage_primary_cta_clicked`
- `triage_secondary_cta_clicked`
- `triage_reset`

## Payload agregado

Campos agregados:

- `entrypoint_source`
- `step_name`
- `step_index`

Estos campos se suman al payload minimo ya existente:

- `species`
- `category`
- `result_level`
- `total_score`
- `selected_symptom_count`
- `selected_modifier_count`

## Como se detecta el origen del entrypoint

El CTA secundario existente en [ServicesGrid.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/ServicesGrid.tsx) ahora apunta a `/triage?entrypoint=services-grid-urgencias`.

Al cargar el wizard, [TriageWizard.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/TriageWizard.tsx) lee ese query param en cliente y emite `triage_entrypoint_detected`.

Esto permite diferenciar el acceso proveniente del CTA contextual actual sin introducir una capa externa adicional.

## Como se interpreta el abandono por paso

La señal `triage_step_abandoned` se implemento como aproximacion ligera, no como medicion exacta de abandono.

Casos cubiertos:

- cuando el usuario reinicia el flujo desde un paso intermedio
- cuando la pagina se oculta o se abandona teniendo el usuario un paso intermedio abierto

Casos no cubiertos con precision:

- abandono silencioso sin evento observable
- abandono con multiples pestañas o navegaciones no capturadas por `pagehide`
- abandono fino entre interacciones dentro del mismo paso

## Archivos creados o modificados

Archivos modificados:

- [ServicesGrid.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/ServicesGrid.tsx)
- [TriageWizard.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/TriageWizard.tsx)
- [track-triage.ts](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/track-triage.ts)
- [TRIAGE_SOFT_LAUNCH_CHECKLIST.md](/d:/Projects/newwebnusketech/docs/TRIAGE_SOFT_LAUNCH_CHECKLIST.md)
- [AI_CONTEXT_LOG.md](/d:/Projects/newwebnusketech/docs/AI_CONTEXT_LOG.md)

Archivo creado:

- [INTERVENCION_FASE_13_TRIAGE_OBSERVABILIDAD_LIGERA.md](/d:/Projects/newwebnusketech/docs/INTERVENCION_FASE_13_TRIAGE_OBSERVABILIDAD_LIGERA.md)

## Validaciones ejecutadas

- `npm run guardrails`
- `npm run lint`
- `npm run build`

## Limitaciones

- El tracking sigue siendo local y ligero.
- `entrypoint_source` solo cubre el origen explicitamente etiquetado.
- `triage_step_abandoned` debe leerse como senal orientativa de friccion, no como verdad absoluta.
- No existe todavia dashboard integrado ni analitica consolidada de produccion.

## Riesgos evitados

- seguir evaluando el soft launch sin saber de donde llega el usuario
- seguir observando el funnel sin lectura minima de progresion por paso
- sobreingenierizar una solucion analitica antes de validar valor real del feature

## Siguiente paso recomendado

Observar durante una ventana controlada si el entrypoint contextual actual genera:

- inicios reales del flujo
- progresion razonable entre pasos
- abandonos concentrados en pasos concretos
- clics accionables despues del resultado

Con esa lectura minima, decidir si conviene mantener el soft launch actual tal como esta o preparar una segunda exposicion secundaria en una fase posterior.
