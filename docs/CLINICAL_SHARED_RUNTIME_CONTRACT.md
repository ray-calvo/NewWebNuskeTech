# CLINICAL_SHARED_RUNTIME_CONTRACT

## Propósito
Formalizar el contrato estable de la capa shared del runtime clínico antes de seguir expandiendo wiring o introducir continuidad clínica transversal.

Esta capa existe para evitar que cada página:
- reconstruya su propio pipeline de resolución
- decida CTAs con reglas locales
- duplique preferencias de consumo
- mezcle clínica, aplicación y UI en el mismo sitio

## Alcance del contrato
La capa shared cubre la resolución contextual por página y devuelve una salida consumible por UI.

No cubre por sí sola:
- memoria clínica cross-page
- orquestación global persistente
- persistencia de sesión
- estado reactivo transversal

## Entrada permitida
La entrada oficial de la capa shared es:
- `pathname`
- `currentState` opcional
- `activeUrgencySignals` opcional
- `triageInput` opcional
- `clinicalSession` opcional
- `options` opcional para preferencias de consumo

Orden institucional de prioridad:
1. triage activo
2. señales de urgencia activas
3. estado clínico explícito
4. session layer ligera
5. estado predominante del contexto de página

## Salida garantizada
La capa shared garantiza:
- `pageContext`
- `ctaDecision`
- `triageBridge` o `null`
- `uiOutput`
- `uiModel`
- `consumption`

La salida nunca debe dejar:
- CTA dominante vacío
- fallback vacío
- ruta sin contexto clínico resuelto

## Invariantes clínicas
La capa shared debe respetar siempre:
- urgencias puede sobrescribir cualquier lógica local si existe riesgo real
- una página complementaria no puede elevar intensidad por sí sola por encima de su arquitectura
- toda resolución conserva fallback seguro
- la UI consume decisiones; no redefine la clínica
- la narrativa local de una página puede modular presentación, pero no negar la resolución clínica

## Responsabilidades por capa

### Domain
Responsable de:
- tipos clínicos
- contexto de página
- transiciones
- sobrescritura de urgencia

### Engine
Responsable de:
- CTA dominante
- secundarios
- fallback
- prohibiciones
- intensidad

### Triage bridge
Responsable de traducir:
- scoring actual
- severidad
- ruta sugerida
- señales urgentes

### UI adapter
Responsable de:
- convertir decisión runtime a modelo presentacional
- sugerir prioridad visual
- exponer señales y transiciones

### Shared runtime
Responsable de:
- componer las piezas anteriores
- resolver consumo reusable por página
- centralizar preferencias contextuales por ruta

## Acoplamientos aceptables
Se consideran aceptables:
- mapa de preferencias de consumo por ruta
- labels semánticos derivados del adapter
- adaptación de href final dentro de `ui-consumption`

## Acoplamientos no permitidos
No debe crecer hacia:
- lógica clínica nueva dentro de heroes
- reglas de CTA duplicadas en páginas
- excepciones ad hoc por superficie
- side effects
- dependencia de layout o componentes visuales concretos

## Señales de fragilidad a vigilar
Estas sí serían señales reales de degradación:
- rutas que requieran un resolver distinto
- preferencias por ruta incompatibles con el mismo modelo presentacional
- necesidad de pasar múltiples flags locales a heroes para corregir clínica
- pages que ya no puedan consumir la salida shared sin lógica especial

## Decisión institucional actual
La capa shared está suficientemente madura y sigue siendo válida.

Todavía no justifica:
- provider global obligatorio
- store complejo
- refactor de domain o engine

La siguiente evolución legítima de esta capa no es complejizarla, sino conectarla con continuidad clínica ligera y futura orquestación transversal.
