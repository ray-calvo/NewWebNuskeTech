# Triage Soft Launch Evaluation

## Resumen ejecutivo

El soft launch actual de `/triage` se encuentra en un estado controlado y coherente con el nivel de madurez real del feature.

La exposicion actual consiste en un solo entrypoint secundario dentro de la tarjeta `Urgencias 24/7` en [ServicesGrid.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/ServicesGrid.tsx), sin presencia en navbar, mobile menu ni hero.

La recomendacion actual es mantener ese entrypoint tal como esta mientras se observa el comportamiento del funnel minimo ya instrumentado. Todavia no hay evidencia suficiente para promover `/triage` a una posicion mas visible ni para justificar una segunda exposicion controlada.

## Estado actual del soft launch

- La ruta publica `/triage` existe y forma parte de `src/app/(marketing)`.
- El feature sigue siendo un MVP heuristico.
- El tracking minimo ya esta implementado dentro del modulo.
- El sitio no expone `/triage` en la navegacion principal.
- El soft launch actual depende de un unico CTA secundario contextual.

## Entrypoint actual

Ubicacion actual:

- [ServicesGrid.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/ServicesGrid.tsx)

Contexto exacto:

- Tarjeta `Urgencias 24/7`
- Pregunta contextual: `¿No sabes qué tan urgente es lo que estás viendo?`
- Texto de apoyo orientado a guia inicial
- CTA actual: `Abrir triage orientativo`

## Fortalezas del enfoque actual

- El CTA aparece en un contexto clinico coherente con el problema que el triage intenta orientar.
- La exposicion sigue siendo secundaria y reversible.
- La expectativa esta relativamente bien alineada porque el copy habla de una guia inicial, no de diagnostico.
- El usuario con duda de urgencia encuentra una via intermedia sin convertir el triage en protagonista del sitio.
- El entrypoint no interfiere con navbar ni con la arquitectura publica principal ya saneada.

## Riesgos del enfoque actual

- El contexto de `Urgencias 24/7` puede generar confusion si un usuario interpreta que debe orientarse primero cuando ya presenta signos criticos.
- El CTA podria canibalizar parcialmente la conversion principal de urgencias si no se mantiene claramente subordinado a la atencion inmediata.
- El tracking actual no distingue de forma explicita el entrypoint de origen, por lo que la evaluacion sigue siendo parcial.
- No existe analitica real conectada a una plataforma externa ni persistencia de eventos.
- El scoring sigue siendo heuristico, por lo que una mayor visibilidad seguiria siendo prematura.

## Cobertura actual del tracking

Fuente auditada:

- [track-triage.ts](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/track-triage.ts)
- [TriageWizard.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/TriageWizard.tsx)

Eventos actualmente cubiertos:

- `triage_started`
- `triage_species_selected`
- `triage_category_selected`
- `triage_result_shown`
- `triage_primary_cta_clicked`
- `triage_secondary_cta_clicked`
- `triage_reset`

Payload minimo actualmente disponible:

- `species`
- `category`
- `result_level`
- `total_score`
- `selected_symptom_count`
- `selected_modifier_count`

Que puede observarse ya sin infraestructura adicional:

- Si el usuario inicia o no el triage
- Si llega o no al resultado
- El nivel de resultado que se muestra
- Si hace clic en el CTA principal o secundario
- Si reinicia el flujo

Senales faltantes para una evaluacion mas completa:

- fuente exacta del entrypoint
- abandono por paso con mayor granularidad
- tiempos entre pasos
- volumen consolidado fuera de entorno local si no se conecta `window.dataLayer`

## Senales que deberian observarse

- Proporcion entre clics al CTA secundario y resultados efectivamente mostrados
- Proporcion entre resultados mostrados y clics en CTA principal
- Frecuencia relativa de resultados `Emergencia`, `Urgencia` y `Consulta`
- Cantidad de resets frente a completados
- Indicios cualitativos de confusion entre `ir a urgencias ahora` y `usar primero el triage`

## Criterios para mantener el entrypoint tal como esta

- El CTA secundario genera uso real del triage sin desplazar la accion principal de urgencias.
- La mayoria de usuarios que inician el flujo llegan al resultado o a un CTA accionable.
- No aparecen senales de confusion clinica o comunicacional.
- El resultado y sus CTAs se mantienen consistentes con el tono actual del sitio.

## Criterios para retirarlo

- El CTA genera confusion evidente con la atencion de urgencias directa.
- Se detecta que el triage entorpece la conversion principal del contexto de urgencias.
- El funnel muestra muy bajo valor practico: muchos inicios, pocos resultados, pocos clics accionables.
- Surge retroalimentacion clinica o legal que recomiende reducir exposicion.

## Criterios para probar una segunda exposicion controlada

- El entrypoint actual demuestra descubribilidad razonable sin friccion evidente.
- El funnel muestra finalizacion aceptable y clics accionables consistentes.
- Existe al menos una lectura basica de resultados por nivel y uso de CTAs.
- Se realiza antes una revision breve del copy final y del criterio clinico general del scoring.
- La nueva exposicion sigue siendo secundaria, no principal, y no compite con navbar o hero.

## Recomendacion final para la siguiente fase

Mantener el soft launch exactamente como esta en esta etapa.

No se recomienda retirar el CTA secundario actual porque su contexto es coherente y el feature ya cuenta con observabilidad minima. Tampoco se recomienda una segunda exposicion todavia, porque falta evidencia de uso real consolidado y la instrumentacion aun es deliberadamente basica.

La siguiente fase recomendable es observar el comportamiento del funnel actual durante una ventana controlada, revisar si el CTA contextual convive bien con la conversion de urgencias y, solo despues, decidir si vale la pena probar una segunda exposicion secundaria.
