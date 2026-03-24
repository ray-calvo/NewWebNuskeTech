# CLINICAL_RUNTIME_ARCHITECTURE

## Propósito
Definir la arquitectura runtime del hospital digital de Nuskë Vet Center para llevar a código, de forma incremental y segura, el modelo clínico institucional ya formalizado.

Este documento traduce a arquitectura ejecutable:
- `CLINICAL_DIGITAL_MODEL_CHARTER.md`
- `CLINICAL_STATE_UX_SYSTEM.md`
- `CLINICAL_CTA_SYSTEM.md`
- `CLINICAL_CTA_EXECUTION_MATRIX.md`
- `CLINICAL_CTA_VISUAL_SYSTEM.md`

Su función es evitar que:
- los CTAs sigan hardcodeados por página
- urgencias no pueda sobrescribir otras rutas con criterio
- triage quede aislado del resto del sistema
- la implementación degrade el modelo clínico digital al pasar de docs a código

## Diagnóstico de partida
El proyecto ya está listo para pasar a arquitectura runtime.

La madurez actual es suficiente porque ya existen:
- arquitectura clínica publicada
- jerarquía institucional de rutas
- estados UX clínicos oficiales
- sistema documental de CTAs
- matriz operativa por página y estado

El problema real ya no es conceptual. Es de implementación.

Si se implementa sin diseño previo, es altamente probable que ocurra:
- duplicación de lógica CTA entre páginas
- decisiones locales contradictorias
- integración débil con triage
- urgencia tratada como copy y no como sistema

## Principio central de runtime
El runtime clínico del sitio debe responder primero al estado clínico percibido del usuario y al riesgo activo, y solo después al contexto local de la página.

Orden de resolución runtime:
1. detectar señales clínicas activas
2. resolver estado clínico UX dominante
3. aplicar sobrescritura de urgencia si corresponde
4. incorporar resultado de triage si existe
5. resolver CTA dominante, secundarios y fallback
6. adaptar jerarquía visual y persistencia

## Modelo runtime clínico

### Entidades runtime mínimas

#### 1. Clinical UX State
Representa el estado clínico dominante percibido del usuario.

Valores oficiales:
- `perceived_urgency`
- `clinical_uncertainty`
- `recognized_complexity`
- `stability_follow_up`

#### 2. CTA Intensity Level
Representa la intensidad institucional del CTA dominante.

Valores oficiales:
- `emergency`
- `medical_decision`
- `clinical_follow_up`
- `safe_orientation`

#### 3. Clinical Page Context
Representa qué clase de página está viendo el usuario.

Campos recomendados:
- `pageKey`
- `pageType`
- `clinicalLayer`
- `defaultUxState`
- `supportsUrgencyFallback`
- `allowedDestinations`

Valores típicos de `pageType`:
- `home`
- `hub`
- `core_parent`
- `continuity_parent`
- `complementary_parent`
- `triage`

Valores típicos de `clinicalLayer`:
- `core`
- `continuity`
- `complementary`
- `support`

#### 4. Clinical Route Context
Representa la ruta clínica actual y las rutas a las que puede transicionar con criterio.

Campos recomendados:
- `currentRoute`
- `allowedTransitions`
- `forbiddenEscalations`
- `defaultFallbackRoute`

#### 5. Triage Override Context
Representa el resultado del motor de triage cuando exista.

Campos recomendados:
- `triageLevel`
- `triageRecommendedState`
- `triageRecommendedRoute`
- `emergencyOverride`
- `confidence`
- `timestamp`

#### 6. Active Clinical Signals
Representa señales runtime de riesgo o contexto clínico.

Campos recomendados:
- `urgentSignalActive`
- `instabilitySignalActive`
- `followUpSignalActive`
- `complexitySignalActive`
- `triageSignalActive`

#### 7. Clinical CTA Resolution
Es la salida del motor.

Campos recomendados:
- `dominantCtaLevel`
- `primaryAction`
- `secondaryActions`
- `fallbackAction`
- `visualPriority`
- `layoutMode`
- `activeReason`
- `sourceOfTruth`

## Componentes principales del sistema

### 1. `clinical-state-model`
Responsabilidad:
- representar los tipos, enums y contratos runtime del sistema clínico

Debe incluir:
- estados UX clínicos
- niveles CTA
- tipos de página
- capas clínicas
- contexto de triage
- resultado de decisión

Naturaleza:
- dominio puro
- sin dependencia de React
- sin dependencia de UI

### 2. `page-context-resolver`
Responsabilidad:
- convertir la ruta actual del App Router a contexto clínico estructurado

Debe resolver:
- qué página es
- a qué capa clínica pertenece
- qué estado UX asume por defecto
- qué transiciones permite
- qué fallback seguro usa

Naturaleza:
- adaptador de aplicación
- puede vivir cerca del enrutado, pero no dentro de componentes visuales

### 3. `clinical-signal-layer`
Responsabilidad:
- concentrar señales runtime que alteran el comportamiento del sitio

Ejemplos:
- estado de urgencia persistente
- resultado reciente de triage
- ruta sugerida activa
- sesión clínica en seguimiento

Naturaleza:
- capa de aplicación / estado
- puente entre dominio y UI

### 4. `urgency-override`
Responsabilidad:
- decidir si urgencias debe sobrescribir la lógica local de página

Debe responder:
- si el riesgo actual invalida la intención normal de la página
- si debe elevarse el nivel CTA a emergencia
- si la lectura debe simplificarse

Naturaleza:
- dominio puro
- determinista
- de prioridad máxima

### 5. `cta-decision-engine`
Responsabilidad:
- resolver CTA dominante, secundarios, fallback y modo visual a partir del contexto completo

Entradas mínimas:
- clinical UX state
- page context
- route context
- active clinical signals
- triage override

Salidas mínimas:
- CTA dominante
- CTA secundarios válidos
- CTA prohibidos
- fallback seguro
- prioridad visual
- modo de layout

Naturaleza:
- dominio puro
- sin JSX
- alimentado por configuración institucional

### 6. `triage-bridge`
Responsabilidad:
- traducir el resultado del motor de triage al modelo clínico runtime del sitio

Debe hacer:
- mapear `emergency | urgent | consult` a estado UX clínico
- activar sobrescritura cuando exista riesgo alto
- proponer ruta clínica sugerida
- generar contexto reutilizable para el CTA engine

Naturaleza:
- adaptador entre feature existente de triage y el dominio clínico runtime

### 7. `clinical-ui-adapter`
Responsabilidad:
- traducir la salida del CTA engine a props comprensibles para layout y componentes futuros

Ejemplos:
- si mostrar CTA sticky
- si destacar fallback de urgencias
- si reducir densidad de lectura
- si activar señalización de riesgo

Naturaleza:
- presentación
- nunca debe decidir la lógica clínica por sí misma

## Separación por capas

### Dominio clínico
Debe vivir fuera de UI y sin dependencia de páginas.

Contenido recomendado:
- tipos y contratos
- reglas de transición
- reglas de conflicto
- resolución de urgencia
- motor CTA

Ubicación recomendada:
- `src/lib/clinical-runtime/domain/`

### Aplicación
Debe orquestar contexto real del sitio.

Contenido recomendado:
- resolver contexto de página
- conectar resultado de triage
- persistir señales activas si más adelante existe store
- generar salida consumible por layout

Ubicación recomendada:
- `src/lib/clinical-runtime/application/`

### Presentación
Debe consumir decisiones, no inventarlas.

Contenido recomendado:
- hooks de lectura del runtime
- adaptadores de props
- wrappers para CTA persistente, señal de riesgo, fallback seguro

Ubicación recomendada:
- `src/lib/clinical-runtime/presentation/`
- o `src/components/clinical-runtime/` si más adelante se materializa UI compartida

### Integración con features existentes
La lógica actual de triage vive en:
- `src/features/marketing/components/triage/`

Regla:
- triage no debe convertirse en dueño del sistema clínico
- debe conectarse al runtime mediante `triage-bridge`

## Estructura técnica recomendada
```text
src/
  lib/
    clinical-runtime/
      domain/
        clinical-types.ts
        clinical-page-context.ts
        clinical-transitions.ts
        urgency-override.ts
        cta-decision-engine.ts
        cta-rules.ts
      application/
        page-context-resolver.ts
        triage-bridge.ts
        clinical-runtime-service.ts
        clinical-runtime-store.ts
      presentation/
        use-clinical-runtime.ts
        use-clinical-cta.ts
        use-clinical-signals.ts
        clinical-ui-adapter.ts
```

Regla:
- empezar pequeño
- no crear todos los archivos al mismo tiempo
- esta estructura es el destino, no una obligación de big bang

## Lógica de decisión

### Flujo principal
1. resolver contexto de página
2. detectar estado UX dominante local
3. evaluar señales activas
4. aplicar `urgency-override`
5. incorporar `triage-bridge` si hay resultado
6. ejecutar `cta-decision-engine`
7. adaptar salida a layout y componentes

### Cómo se resuelve el CTA dominante
Se resuelve por esta prioridad:
1. riesgo y urgencia activa
2. sobrescritura proveniente de triage
3. estado UX dominante
4. capa clínica de la página
5. rutas permitidas de transición

### Cuándo urgencias sobrescribe todo
Urgencias debe dominar cuando:
- existe señal activa de riesgo o inestabilidad
- triage devuelve `emergency`
- el caso parece haber salido del rango de la página actual
- el fallback seguro exige escalar

Resultado esperado:
- elevar CTA a `emergency`
- reducir acciones competidoras
- simplificar lectura
- destacar llamada, WhatsApp o urgencias

### Cuándo triage cambia el estado
El triage puede:
- convertir incertidumbre en urgencia
- convertir incertidumbre en complejidad
- confirmar estabilidad
- sugerir diagnóstico, medicina interna, oncología o urgencias

Regla:
- triage puede sobrescribir la página
- la página nunca debe invalidar una urgencia activada por triage

### Cuándo una página complementaria no puede elevar intensidad
Una página complementaria no puede escalar por sí sola a una intensidad superior a la que le corresponde por arquitectura, salvo si:
- hay señal clínica de riesgo
- el triage lo exige
- el fallback seguro requiere urgencias

Ejemplos:
- oncología no debe verse más agresiva que urgencias
- exóticos no debe usar CTA más dominante que una ruta estructural sin riesgo claro

### Cómo se decide el fallback seguro
Toda resolución debe incluir una salida segura.

Reglas:
- si la página es no urgente, el fallback suele ser urgencias o llamada al hospital
- si la página es hub, el fallback debe ayudar a salir de la ambigüedad
- si la página es continuidad, el fallback debe escalar a diagnóstico o urgencias según riesgo

### Cómo cambian las transiciones según contexto
Las transiciones no son fijas solo por URL. Cambian por estado.

Ejemplos:
- `/diagnostico`
  - en incertidumbre -> puede transicionar a medicina interna
  - en complejidad -> puede transicionar a oncología
- `/prevencion`
  - en seguimiento -> permanece en continuidad
  - con hallazgo -> escala a diagnóstico
- `/exoticos`
  - estable -> valoración especializada
  - inestable -> urgencias

## Estrategia de layout adaptativo

### Qué debe poder cambiar el runtime
- persistencia de CTA
- orden de CTAs
- visibilidad del fallback seguro
- densidad del bloque hero
- presencia de señalización clínica

### Cuándo mostrar CTA persistente
Mostrar CTA persistente cuando:
- el nivel resuelto es `emergency`
- el triage activa urgencia
- el costo de perder la acción es alto

No mostrarlo por defecto cuando:
- el usuario está en seguimiento estable
- la página requiere lectura clínica no urgente

### Cuándo cambiar la jerarquía visual
Cambiar la jerarquía visual cuando:
- sube el nivel de intensidad CTA
- el fallback seguro debe ganar visibilidad
- una ruta no urgente queda clínicamente invalidada por el estado actual

### Cuándo simplificar lectura
Simplificar lectura cuando:
- hay urgencia
- el triage detecta riesgo
- el estado UX dominante requiere acción más que exploración

### Cuándo mostrar señales de riesgo
Mostrar señales de riesgo cuando:
- urgencia está activa
- el triage eleva intensidad
- el usuario navega una ruta no urgente con contexto ya inestable

### Cómo adaptar páginas sin rehacerlas
La adaptación no debe rehacer cada página.

Debe apoyarse en:
- contexto de página tipado
- motor CTA común
- adaptadores de presentación
- reglas de persistencia y fallback

La página conserva su narrativa. El runtime ajusta:
- jerarquía de acción
- persistencia
- señalización contextual

## Estrategia de estado recomendada

### Recomendación principal
Empezar con un store pequeño y explícito del runtime clínico, no con estado disperso por componente.

Opciones viables:
- React context + reducer para primera fase
- store liviano desacoplado si el sistema crece

Recomendación institucional:
- fase inicial con contratos puros + servicio de resolución
- elevar a store compartido solo cuando:
  - urgencia persistente
  - triage bridge
  - CTA persistente cross-page
  requieran memoria de sesión

### Estado mínimo recomendado
- `uxState`
- `ctaLevel`
- `pageContext`
- `activeSignals`
- `triageContext`
- `resolvedCta`

Regla:
- no guardar en estado lo que puede derivarse de forma determinista

## Roadmap incremental de implementación

### Fase 1 — Modelo clínico runtime
Objetivo:
- crear contratos y tipos del dominio clínico runtime

Incluye:
- clinical types
- page context map
- transition rules
- urgency override rules

Resultado:
- lenguaje común tipado

### Fase 2 — CTA decision engine
Objetivo:
- centralizar decisión de CTA dominante, secundarios y fallback

Incluye:
- reglas por página
- reglas por estado
- conflictos
- niveles de intensidad

Resultado:
- dejar de hardcodear decisiones CTA por página

### Fase 3 — Triage bridge
Objetivo:
- conectar el resultado del motor de triage con el runtime clínico general

Incluye:
- mapping de niveles actuales de triage
- sobrescritura de estado UX
- activación de urgencia y ruta sugerida

Resultado:
- triage deja de ser una isla

### Fase 4 — Adaptación visual y señales
Objetivo:
- usar la salida del engine para ajustar persistencia, señalización y jerarquía visual

Incluye:
- CTA sticky condicionado
- fallback seguro visible
- reducción de densidad en urgencia

Resultado:
- experiencia dinámica sin rehacer todas las páginas

### Fase 5 — Auditoría y consolidación
Objetivo:
- comparar comportamiento real del sitio contra la matriz institucional

Incluye:
- home
- barra de urgencias
- `/servicios`
- rutas núcleo
- rutas complementarias
- triage

Resultado:
- sistema coherente y medible

## Riesgos técnicos y de producto

### Riesgos técnicos
- mezclar dominio clínico con JSX y volverlo difícil de testear
- acoplar triage directamente a componentes visuales
- duplicar reglas CTA por página y por feature
- sobrediseñar el store antes de necesitarlo

### Riesgos de producto
- implementar urgencia como decoración y no como sobrescritura real
- dejar que páginas complementarias escalen sin control
- introducir comportamiento dinámico que contradiga la narrativa local de la página
- perder confianza si triage y página entregan señales diferentes

### Riesgo institucional principal
- construir interacción clínica avanzada sin una única fuente de verdad runtime

## Reglas institucionales derivadas
- toda decisión CTA futura debe poder explicarse desde el runtime clínico, no desde copy local
- urgencia no se implementa como estilo; se implementa como sobrescritura de sistema
- triage es una fuente de señal clínica, no el dueño del modelo
- la UI adapta decisiones; no decide la clínica
- el runtime debe crecer de dominio a presentación, nunca al revés

## Regla principal de gobernanza runtime
La implementación futura del hospital digital debe tener una sola fuente de verdad para estado clínico, riesgo activo, intensidad CTA y fallback seguro, separada de las páginas y conectada al triage por una capa explícita de integración.
