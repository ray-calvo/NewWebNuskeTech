# IMPLEMENTATION PHASE PLAN

## Propósito

Traducir el inventario legacy y el backlog priorizado en una secuencia real de construcción dentro del repo actual, sin tocar todavía código productivo.

## Diagnóstico de ejecutabilidad

### Sí hay base suficiente para ejecutar

El repo ya tiene base suficiente para empezar implementación real de nuevas páginas canónicas porque:

- la arquitectura está saneada
- la narrativa hospitalaria principal ya existe en home
- `/servicios` ya fue reordenada como agregador hospitalario
- el inventario legacy ya define clusters, duplicidades y fuentes modulares

### Pero no todo está cerrado

Persisten huecos que afectan el orden de ejecución:

- slugs canónicos aún no definidos formalmente
- algunas fuentes legacy de P2 y P3 tienen densidad baja
- el plan actual de crecimiento mezcla objetivos de roadmap con backlog de contenido, pero no los baja a sprints técnicos

## Principios de implementación

- No construir por URL legacy; construir por cluster canónico.
- No abrir varias páginas nuevas en paralelo si compiten por el mismo sistema de componentes o por la misma narrativa.
- No rehacer la home en cada sprint; la home debe consumir y anunciar, no absorber todo.
- Mantener `/servicios` como puente mientras se construyen páginas canónicas profundas.
- Cualquier landing de campaña nueva debe colgar de un cluster ya resuelto.

## Secuencia recomendada por fases

## Fase 0 — Cierre previo de ejecución

Objetivo:

- cerrar prerrequisitos antes de abrir nuevas rutas canónicas

Trabajo esperado:

- definir slugs canónicos
- definir si habrá route group específico para clusters clínicos o si vivirán bajo `src/app/(marketing)/`
- definir política de módulos compartidos entre páginas clínicas
- confirmar qué piezas actuales de `/servicios` permanecerán como teaser cuando existan páginas profundas

Prerrequisitos:

- ninguno técnico adicional

Riesgo si se omite:

- crear rutas con naming inconsistente
- duplicar componentes y copy entre páginas nuevas y `/servicios`

Resultado esperado:

- documento o decisión cerrada de slugs y ownership de componentes clínicos

## Fase 1 — Página canónica de Urgencias y Paciente Crítico

Objetivo:

- construir la primera página clínica profunda que mejor extiende el posicionamiento actual

Dependencias:

- narrativa hospitalaria ya disponible en home
- sistema de CTAs de urgencias ya operativo

Prerrequisitos narrativos:

- definir protocolo de emergencia
- definir módulos de hospitalización/UCI que sí entran
- decidir cómo convive con el CTA secundario actual de triage

Prerrequisitos UI:

- hero clínico profundo
- bloque de pasos o protocolo
- bloque de señales de alerta
- bloque de capacidad hospitalaria
- CTA operativas persistentes

Riesgos:

- competir con triage en vez de complementarlo
- duplicar demasiado el contenido ya visible en home

Qué no debe tocarse aún:

- navbar principal para agregar nuevas entradas
- segunda exposición del triage
- páginas de cirugía o diagnóstico en paralelo

## Fase 2 — Página canónica de Cirugía Hospitalaria y Procedimientos Especializados

Objetivo:

- consolidar la segunda capacidad clínica clave del hospital

Dependencias:

- idealmente después de urgencias, porque cirugía hereda credibilidad de la capacidad crítica del hospital

Prerrequisitos narrativos:

- decidir alcance real de submódulos subordinados:
  - ortopedia
  - manejo de heridas
  - esterilizaciones

Prerrequisitos UI:

- hero quirúrgico
- módulos de seguridad anestésica
- indicaciones / procedimientos
- qué esperar antes y después
- CTA de valoración

Riesgos:

- abrir subpáginas quirúrgicas demasiado pronto
- mezclar cirugía general, especializada, ortopedia y esterilizaciones sin jerarquía

Qué no debe tocarse aún:

- página propia de ortopedia
- página propia de manejo de heridas

## Fase 3 — Página canónica de Endoscopía y Mínima Invasión

Objetivo:

- publicar el principal diferenciador premium sin fragmentarlo en exceso

Dependencias:

- cirugía y diagnóstico ya ayudan a sostener su contexto médico

Prerrequisitos narrativos:

- cerrar si “mínima invasión” es parte del nombre visible o subtítulo de la página

Prerrequisitos UI:

- hero de mínima invasión
- síntomas / señales
- ventajas clínicas
- proceso o preparación
- CTA de valoración

Riesgos:

- tratar endoscopía y mínima invasión como dos páginas distintas demasiado pronto
- caer en discurso tecnológico sin suficiente contexto médico

Qué no debe tocarse aún:

- páginas satélite de procedimientos menores

## Fase 4 — Página canónica de Diagnóstico Hospitalario

Objetivo:

- consolidar criterio diagnóstico y capacidad resolutiva sin inflar tecnología como protagonista aislada

Dependencias:

- urgencias, cirugía y endoscopía ya construidas dan contexto al diagnóstico

Prerrequisitos narrativos:

- decidir cómo se explica laboratorio dentro del mismo relato sin crear otra mini página independiente

Prerrequisitos UI:

- hero diagnóstico
- comparativas de estudios
- criterios de indicación
- FAQ
- CTA de agendar estudio

Riesgos:

- convertir la página en catálogo de aparatos
- separar laboratorio demasiado pronto

## Fase 5 — Reajuste estructural de `/servicios`

Objetivo:

- convertir `/servicios` en hub claro de capacidades y navegación clínica, no en pseudo-destino final

Dependencias:

- al menos dos páginas canónicas P1 ya publicadas

Prerrequisitos narrativos:

- decidir qué bloques permanecen como resumen
- decidir qué CTAs apuntarán a páginas canónicas

Prerrequisitos UI:

- cards o bloques de capacidad con links claros
- subordinación explícita de continuidad, wellness, portal y telemedicina

Riesgos:

- tocar `/servicios` demasiado pronto y tener que rehacerla en cada sprint
- mantenerla como catálogo plano aunque ya existan páginas profundas

## Fase 6 — Atención Integral y Preventiva

Objetivo:

- abrir continuidad clínica una vez consolidado el núcleo crítico-quirúrgico

Dependencias:

- `/servicios` ya reorientada como hub
- narrativa hospitalaria principal ya estable

Riesgos:

- adelantar preventiva antes de urgencias/cirugía y diluir posicionamiento hospitalario

## Fase 7 — Exóticos condicionado

Objetivo:

- capturar diferenciación premium si se valida contenido suficiente

Dependencias:

- validación adicional de contenido fuente

Riesgos:

- publicar una página demasiado superficial

## Fase 8 — Segunda ola clínica y comercial subordinada

Incluye:

- medicina interna
- oncología
- manejo del dolor
- grooming / pensión

Dependencias:

- backlog editorial y clínico más maduro

Riesgos:

- abrir demasiadas rutas con débil densidad de contenido

## Dependencias entre narrativa, contenido y componentes

### Dependencias narrativas

- home debe seguir siendo posicionamiento general
- urgencias debe salir antes que hospitalización como tema aislado
- cirugía debe salir antes que ortopedia / heridas / esterilizaciones
- diagnóstico debe salir antes que laboratorio como pieza separada

### Dependencias de contenido

- las landings `lp/*` son la mejor fuente para:
  - hero clínico
  - FAQs
  - señales de alerta
  - comparativas
  - proceso / qué esperar
- varias páginas “normales” legacy sirven más para naming que para profundidad real

### Dependencias de componentes

- conviene crear una base compartida de módulos clínicos antes de abrir la tercera página canónica
- no conviene reutilizar indiscriminadamente componentes de home sin endurecerlos para páginas profundas
- `src/features/marketing/components/services/` puede funcionar como origen transicional, pero probablemente no debe absorber todas las páginas clínicas futuras

## Qué se debe construir primero

1. decisiones de slugs y ownership
2. página canónica de urgencias
3. página canónica de cirugía
4. página canónica de endoscopía / mínima invasión
5. página canónica de diagnóstico
6. reajuste de `/servicios` como hub real

## Qué no debe tocarse todavía

- navegación principal para sumar múltiples nuevas entradas
- triage como feature principal
- clusters P3
- grooming / pensión como foco de crecimiento
- expansión de portal del propietario o telemedicina como narrativa dominante

## Riesgos si se construye fuera de orden

### Riesgos narrativos

- la web puede volver a sonar a catálogo
- `/servicios` puede quedar compitiendo contra páginas más profundas
- la tecnología puede volver a robar protagonismo al criterio médico

### Riesgos arquitectónicos

- proliferación de componentes casi duplicados
- páginas clínicas profundas construidas dentro del mismo módulo de `/servicios`
- slugs y ownership inconsistentes

### Riesgos SEO

- canibalización entre páginas que comparten intención
- publicar rutas débiles con poco contenido real
- duplicar keywords entre home, `/servicios` y una futura página canónica

### Riesgos de ejecución

- reabrir el mismo trabajo en cada sprint
- tener que corregir copy y jerarquía varias veces por no haber cerrado dependencia anterior

## Criterio de listo para construir

Una fase concreta está lista para ejecución cuando:

- tiene página madre definida
- ya está claro qué URLs legacy absorbe
- ya está claro qué piezas quedan como submódulo
- ya existe una fuente legacy rica suficiente, preferentemente `lp/*`
- no compite con otra fase previa no cerrada
