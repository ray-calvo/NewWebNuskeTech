# SITE CANONICAL ARCHITECTURE

## Propósito

Definir la arquitectura canónica de páginas y clusters que la nueva web debe construir a partir del inventario legacy ya auditado, sin copiar el árbol anterior URL por URL.

Este documento responde a tres preguntas operativas:

- qué páginas deben existir como destino canónico real
- qué contenido debe absorber cada una
- qué piezas deben quedar como landing de campaña o submódulo subordinado

## Diagnóstico base

La base documental actual ya permite pasar a ejecución, pero no de forma ciega.

Sí está suficientemente definido:

- qué clusters son estratégicamente prioritarios
- qué URLs legacy son duplicadas o solapadas
- qué landings tienen contenido modular reusable
- qué áreas deben mantenerse subordinadas al posicionamiento hospitalario

Huecos que siguen abiertos:

- varias URLs legacy tienen contenido visible escaso y no deben tomarse como blueprint completo
- aún no está cerrada la decisión final de slugs canónicos futuros
- `/servicios` ya fue alineada narrativamente, pero sigue operando como página agregadora transicional y no como sustituto final del cluster canónico profundo

## Principio rector

La jerarquía hospitalaria manda:

1. urgencias y paciente crítico
2. cirugía hospitalaria
3. diagnóstico avanzado
4. endoscopía y mínima invasión
5. continuidad clínica preventiva

Todo lo comercial o periférico debe subordinarse a esa secuencia.

## Mapa de páginas canónicas

### 1. Urgencias y Paciente Crítico

- Tipo: página canónica
- Rol: página clínica de mayor prioridad y principal extensión del posicionamiento hospitalario del sitio
- Debe absorber:
  - `urgencias`
  - `urgencias-24h`
  - `hospitalizacion`
  - `lp/hospitalizacion`
- Intención dominante:
  - respuesta inmediata
  - confianza crítica
  - capacidad hospitalaria real
- Módulos esperados:
  - hero de urgencias
  - protocolo de emergencia
  - señales de alerta
  - estabilización y triage
  - hospitalización / cuidados intensivos
  - CTA de llamada / WhatsApp / cómo llegar
- Estado de decisión:
  - cerrado como canónica

### 2. Cirugía Hospitalaria y Procedimientos Especializados

- Tipo: página canónica
- Rol: segunda página clínica central del sitio
- Debe absorber:
  - `cirugia`
  - `cirugia-especializada`
  - `lp/cirugia`
- Debe subordinar:
  - `lp/esterilizaciones`
  - `manejo-de-heridas`
  - `ortopedia`
- Intención dominante:
  - valoración quirúrgica
  - seguridad anestésica
  - manejo quirúrgico integral
- Módulos esperados:
  - hero de cirugía avanzada
  - indicaciones frecuentes
  - seguridad anestésica
  - qué esperar antes y después
  - CTA de valoración
- Estado de decisión:
  - cerrado como canónica

### 3. Endoscopía y Mínima Invasión

- Tipo: página canónica
- Rol: página diferenciadora premium
- Debe absorber:
  - `endoscopia`
  - `minima-invasion`
  - `lp/endoscopia`
- Intención dominante:
  - diferenciar mínima invasión
  - captar casos digestivos / cuerpos extraños / procedimientos guiados
- Módulos esperados:
  - hero de mínima invasión
  - qué es la endoscopía
  - señales de alerta
  - ventajas clínicas
  - preparación previa
  - CTA de valoración
- Estado de decisión:
  - cerrado como canónica
- Duda abierta:
  - si “mínima invasión” termina siendo nombre de página o bloque transversal. Recomendación actual: mantenerla fusionada con endoscopía hasta tener evidencia de volumen suficiente para separarla.

### 4. Diagnóstico Hospitalario

- Tipo: página canónica
- Rol: capacidad hospitalaria de soporte clínico
- Debe absorber:
  - `imagenologia`
  - `laboratorio`
  - `lp/imagenologia`
- Intención dominante:
  - explicar cuándo y por qué se indica estudio diagnóstico
  - reforzar capacidad resolutiva del hospital
- Módulos esperados:
  - hero de diagnóstico
  - criterios de indicación
  - comparativas de estudios
  - laboratorio in-house como soporte
  - FAQ clínica
- Estado de decisión:
  - cerrado como canónica

### 5. Atención Integral y Preventiva

- Tipo: página canónica
- Rol: continuidad clínica y prevención
- Debe absorber:
  - `medicina-preventiva`
  - `limpieza-dental`
  - `lp/profilaxis-dental`
- Intención dominante:
  - prevención
  - seguimiento
  - salud oral y control periódico
- Módulos esperados:
  - hero preventivo
  - continuidad clínica
  - salud oral / profilaxis
  - FAQ de profilaxis
  - CTA de agendar consulta
- Estado de decisión:
  - suficientemente claro para ejecución
- Duda abierta:
  - si profilaxis dental vive solo como submódulo o también conserva landing táctica. Recomendación actual: canónica preventiva + landing dental solo si hay campaña activa.

### 6. Exóticos

- Tipo: página canónica condicionada
- Rol: diferenciador premium de especies no convencionales
- Debe absorber:
  - `animales-exoticos`
- Intención dominante:
  - reforzar alcance clínico diferencial
- Estado de decisión:
  - no completamente cerrado
- Requiere validación adicional:
  - el contenido legacy auditado es limitado

## Piezas que deben quedar como landing o submódulo

### Landings de campaña

Deben mantenerse como landings solo si existe pauta o intención de campaña activa:

- `lp/esterilizaciones`
- `lp/profilaxis-dental`
- `lp/terapia-laser`
- `lp/pension`
- `lp/pet-grooming`

Regla:

- no deben convertirse en eje arquitectónico principal
- deben colgar de un cluster o intención ya canónica

### Submódulos subordinados

Deben vivir inicialmente como submódulo dentro de una página madre, no como página independiente en la primera ola:

- hospitalización dentro de Urgencias y Paciente Crítico
- cuidados intensivos dentro de Urgencias y Paciente Crítico
- ortopedia dentro de Cirugía Hospitalaria
- manejo de heridas dentro de Cirugía Hospitalaria
- esterilizaciones dentro de Cirugía Hospitalaria o como landing comercial subordinada
- laboratorio dentro de Diagnóstico Hospitalario
- profilaxis dental dentro de Atención Integral y Preventiva

## Piezas que deben postergarse

### Medicina Interna, Oncología y Manejo del Dolor

- Estado: cluster de segunda ola
- Razón:
  - insuficiente homogeneidad de fuentes legacy
  - riesgo alto de construir una página ambigua o mezclada
- Recomendación:
  - no convertir todavía en una página madre única sin definición clínica/editorial más precisa

### Grooming y Hotel / Guardería

- Estado: comercial subordinado
- Razón:
  - compite con la jerarquía hospitalaria si se promueve demasiado pronto
- Recomendación:
  - mantener fuera de la primera ola de construcción clínica

## Relación con las páginas actuales del repo

### Home

- Función actual:
  - posicionamiento hospitalario general
  - urgencias visibles
  - teaser de capacidades
- No debe intentar reemplazar las futuras páginas canónicas profundas.

### `/servicios`

- Función actual:
  - agregador narrativo hospitalario ya alineado en tono y jerarquía básica
- Limitación actual:
  - sigue siendo puente de capacidades, no arquitectura final por cluster
- Decisión:
  - no usarla como excusa para no construir páginas canónicas profundas

### `/tecnologia`

- Función actual:
  - soporte de confianza e infraestructura
- Regla:
  - no debe robar protagonismo a diagnóstico o cirugía; la tecnología debe servir al criterio médico

### `/triage`

- Función actual:
  - herramienta de orientación y conversión
- Regla:
  - no es página madre del posicionamiento clínico

## Riesgos si se construye fuera de esta arquitectura

- duplicar intención entre `/servicios` y nuevas páginas sin una jerarquía clara
- lanzar páginas satélite de ortopedia, dolor o heridas antes de tener sus páginas madre
- convertir landings de campaña en arquitectura principal
- construir una página de exóticos demasiado profunda con fuente débil
- reintroducir una lectura de catálogo veterinario en vez de hospital integral

## Decisiones abiertas que deben mantenerse explícitas

### Mínima invasión

- Estado: abierto
- Recomendación:
  - mantenerla fusionada con endoscopía por ahora

### Medicina interna

- Estado: abierto
- Recomendación:
  - tratarla como posible cluster futuro de casos complejos, no como prioridad inmediata

### Manejo del dolor y manejo de heridas

- Estado: abierto
- Recomendación:
  - no darles página propia en primera ola
  - tratarlos primero como submódulos de cirugía o continuidad clínica según corresponda

## Criterio de cierre para pasar a implementación

Se considera que la arquitectura ya está lista para ejecución si se respetan estas reglas:

- construir primero páginas canónicas P1
- usar `lp/*` como fuente modular
- no abrir subpáginas satélite antes de tener página madre
- tratar `/servicios` como agregador transicional y no como final state
- documentar cualquier decisión nueva de slug o absorción antes de implementarla
