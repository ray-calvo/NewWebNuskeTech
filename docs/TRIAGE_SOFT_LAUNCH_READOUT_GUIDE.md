# TRIAGE SOFT LAUNCH READOUT GUIDE

## A. Objetivo de observacion

Esta guia existe para leer el soft launch actual de `/triage` con los eventos ya disponibles, sin cambiar producto ni tracking.

Lo que se quiere aprender en esta ventana:

- si el entrypoint secundario actual realmente genera entradas al modulo
- si esas entradas se convierten en inicios reales del flujo
- en que parte del wizard aparece mas friccion
- si los resultados llevan a una accion util
- si el patron observado justifica mantener, ajustar o retirar la exposicion actual

## B. Ventana sugerida de observacion

Ventana sugerida:

- 1 a 2 semanas de uso real

Esta ventana puede ajustarse segun el volumen real del sitio. Si el trafico es bajo, conviene priorizar patron y calidad de senales antes que sacar conclusiones por volumen bruto.

## C. Eventos a revisar

Eventos actuales:

- `triage_entrypoint_detected`
  - confirma que hubo entrada al modulo con `entrypoint_source` identificado
- `triage_started`
  - confirma inicio real del flujo
- `triage_step_viewed`
  - permite ver progresion general por pantalla
- `triage_step_abandoned`
  - da una senal aproximada de friccion o salida desde pasos intermedios
- `triage_species_selected`
  - confirma avance despues de empezar
- `triage_category_selected`
  - confirma avance hacia el tramo clinico del flujo
- `triage_result_shown`
  - confirma finalizacion funcional del wizard
- `triage_primary_cta_clicked`
  - indica accion principal despues del resultado
- `triage_secondary_cta_clicked`
  - indica accion alternativa despues del resultado
- `triage_reset`
  - indica reinicio del flujo

Campos utiles ya disponibles:

- `entrypoint_source`
- `step_name`
- `step_index`
- `species`
- `category`
- `result_level`
- `total_score`
- `selected_symptom_count`
- `selected_modifier_count`

## D. Senales minimas a observar

- Cuantas entradas reales llegan desde `services-grid-urgencias`
- Cuantos usuarios inician el triage despues de entrar
- En que paso se concentran mas abandonos aproximados
- Cuantos llegan hasta `triage_result_shown`
- Que `result_level` aparece con mayor frecuencia
- Cuantos hacen clic en CTA principal
- Cuantos hacen clic en CTA secundaria
- Cuantos reinician el flujo

## E. Lectura basica del funnel

Lectura sugerida:

- `triage_entrypoint_detected` -> `triage_started`
- `triage_started` -> `triage_species_selected` y `triage_category_selected`
- `triage_category_selected` -> `triage_step_viewed` en `symptoms` y `modifiers`
- `modifiers` -> `triage_result_shown`
- `triage_result_shown` -> `triage_primary_cta_clicked` o `triage_secondary_cta_clicked`

Interpretacion simple:

- si hay entrada pero no inicio, la friccion puede estar antes de empezar
- si hay inicio pero no progreso, la friccion puede estar en la comprension del flujo
- si hay resultado pero no CTA, el valor percibido del resultado puede ser bajo o ambiguo

## F. Interpretacion de senales

### Mucho clic al entrypoint pero poco `triage_started`

Posible lectura:

- la promesa del CTA genera curiosidad, pero la intro no termina de convencer
- el usuario esperaba otra cosa al llegar a `/triage`

### Mucho abandono temprano

Posible lectura:

- las primeras decisiones del wizard no estan siendo suficientemente claras
- el usuario no entiende si el flujo le aplica o no
- la carga de lectura puede ser mayor a la deseada para un contexto de urgencia

### Mucho resultado de emergencia

Posible lectura:

- el scoring podria estar siendo demasiado conservador
- el entrypoint puede estar atrayendo sobre todo casos de alta urgencia
- se requiere revision clinica antes de ampliar visibilidad

### Mucho clic en CTA secundaria vs principal

Posible lectura:

- el CTA principal no se percibe como el siguiente paso mas natural
- la alternativa secundaria puede estar mejor alineada con el nivel de incertidumbre del usuario
- el copy del resultado puede requerir ajuste

### Muchos resets

Posible lectura:

- el usuario se equivoca o duda dentro del flujo
- el wizard puede requerir mejor claridad en labels o expectativa
- el triage puede estar siendo usado para explorar mas que para decidir

## G. Criterios para decidir siguiente paso

### 1. Mantener exposicion actual

Considerarlo si:

- el entrypoint recibe entradas reales
- hay progresion razonable hasta resultado
- el CTA no parece generar confusion con urgencias directas
- el comportamiento posterior al resultado es coherente

### 2. Ajustar copy o UX del wizard

Considerarlo si:

- hay mucho `triage_started` pero bajo avance temprano
- el abandono se concentra de forma repetida en un mismo paso
- los resets son altos comparados con resultados mostrados

### 3. Recalibrar scoring

Considerarlo si:

- la distribucion por `result_level` parece desbalanceada
- aparecen demasiados `emergency` para el tipo de trafico observado
- la lectura clinica del patron no coincide con la expectativa del equipo medico

### 4. Agregar una segunda exposicion secundaria

Considerarlo solo si:

- el funnel actual muestra uso real y finalizacion razonable
- no hay senales fuertes de confusion o friccion
- el entrypoint actual ya entrego una base minima de aprendizaje
- existe decision explicita documentada antes de ampliar visibilidad

### 5. Retirar temporalmente el CTA

Considerarlo si:

- casi no hay uso real despues de la entrada
- el CTA parece interferir con la conversion principal de urgencias
- aparecen senales clinicas o comunicacionales que recomienden bajar exposicion

### 6. Preparar eventual conexion a analytics real

Considerarlo si:

- la ventana de observacion confirma valor del soft launch
- se necesita consolidar lectura fuera de inspeccion manual
- el equipo ya tiene una decision clara de seguimiento mas formal

## H. Limitaciones actuales

- No hay dashboard consolidado dentro del repo
- No hay persistencia de eventos
- `triage_step_abandoned` es una aproximacion, no una medicion exacta
- Solo hay un `entrypoint_source` etiquetado de forma explicita: `services-grid-urgencias`
- El scoring sigue siendo heuristico

## I. Recomendacion operativa

No conviene tomar una decision grande con volumen demasiado bajo.

Primero hay que leer patron y friccion, no solo contar clics.

Secuencia recomendada:

- observar una ventana corta real
- revisar si el embudo muestra progresion util
- revisar si hay friccion concentrada
- revisar si el resultado deriva en accion razonable
- recien despues decidir si se mantiene, se ajusta, se recalibra o se amplifica la exposicion
