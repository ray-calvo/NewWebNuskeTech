# CLINICAL_CTA_SYSTEM

## Propósito
Formalizar el sistema institucional de CTAs clínicos del hospital digital de Nuskë Vet Center.

Este documento define cómo deben estructurarse, jerarquizarse y redactarse las llamadas a la acción dentro del sitio para que respondan al:
- estado clínico percibido del usuario
- riesgo clínico del caso
- momento del recorrido del paciente

Su función es evitar que los CTAs se decidan por página aislada, por intuición visual o por lógica comercial.

## Definición del sistema de CTAs clínicos
El sistema de CTAs clínicos es la capa operativa que traduce:
- el modelo clínico digital institucional
- el sistema de estados clínicos UX

en reglas reutilizables para:
- jerarquía de acción
- intensidad de llamada a la acción
- convivencia entre acciones primarias y secundarias
- transiciones entre rutas

## Principio central
Los CTAs del hospital digital no se definen por estética ni por página aislada.

Se definen por:
- estado clínico percibido del usuario
- riesgo percibido
- momento del recorrido
- necesidad de acción correcta

Regla central:
- primero se decide el estado clínico UX
- después se decide la jerarquía del CTA
- al final se adapta la forma visual o verbal

## Jerarquía institucional de CTAs

### 1. CTA de urgencia inmediata
Función:
- activar respuesta sin demora

Ejemplos:
- `Ir a urgencias`
- `Llamar ahora`
- `WhatsApp`

Uso:
- cuando el riesgo clínico percibido puede justificar acción inmediata

### 2. CTA de valoración clínica
Función:
- iniciar una valoración médica cuando el caso requiere lectura clínica pero no necesariamente entrada urgente

Ejemplos:
- `Solicitar valoración`
- `Solicitar valoración especializada`
- `Agendar valoración`

Uso:
- incertidumbre clínica
- complejidad reconocida
- prevención con criterio médico

### 3. CTA de seguimiento / continuidad
Función:
- sostener control, acompañamiento o reevaluación

Ejemplos:
- `Mantener seguimiento`
- `Dar seguimiento`
- `Agendar control`

Uso:
- estabilidad / seguimiento
- complejidad reconocida con necesidad longitudinal

### 4. CTA de orientación secundaria
Función:
- ayudar cuando el usuario aún no identifica con claridad la ruta correcta

Ejemplos:
- `Aclarar el caso`
- `Hablar con el hospital`
- `Solicitar orientación`

Uso:
- sobre todo en incertidumbre clínica
- también como apoyo en hubs y páginas puente

### 5. CTA de fallback seguro
Función:
- evitar que el usuario quede sin salida si su caso ya cambió de nivel clínico

Ejemplos:
- `Ir a urgencias 24/7`
- `Si el paciente se descompensa, prioriza urgencias`

Uso:
- como CTA secundario o terciario
- nunca como ruido automático en todas las superficies

## Comportamiento por estado clínico UX

### Urgencia percibida
#### CTA dominante
- CTA de urgencia inmediata

#### CTAs que pueden coexistir
- llamada
- WhatsApp
- llegada a urgencias

#### CTAs que no deben competir
- seguimiento
- orientación abierta
- acciones de baja intensidad

#### Regla operativa
- si el usuario percibe riesgo alto, urgencias sobrescribe cualquier otra lógica

### Incertidumbre clínica
#### CTA dominante
- CTA de valoración clínica

#### CTA de apoyo válido
- CTA de orientación secundaria

#### Riesgo a evitar
- ambigüedad entre:
  - diagnóstico
  - cirugía
  - medicina interna

#### Regla operativa
- la página debe ayudar a elegir mejor, no solo empujar una conversión genérica

### Complejidad reconocida
#### CTA dominante
- CTA de valoración clínica

#### CTA secundario válido
- CTA de seguimiento / continuidad

#### Riesgo a evitar
- que la complejidad quede sin dirección clara o con demasiadas salidas equivalentes

#### Regla operativa
- el CTA debe transmitir integración y continuidad, no agresividad comercial

### Estabilidad / seguimiento
#### CTA dominante
- CTA de seguimiento / continuidad

#### CTA secundario válido
- CTA de valoración clínica

#### Riesgo a evitar
- bajar tanto la intensidad que la acción pierda peso

#### Regla operativa
- la estabilidad no debe sonar débil; debe sonar sostenida y clara

## Reglas de conflicto entre CTAs

### Dominancia visual y narrativa
- cuando un caso puede percibirse como urgente, la lógica de urgencias debe dominar
- cuando el usuario está en incertidumbre, la valoración debe dominar sobre CTAs ambiguos o genéricos
- cuando el usuario está en seguimiento, la continuidad debe dominar sin dramatizar

### Validez de CTA secundario
Un CTA secundario es válido si:
- no compite con el CTA dominante
- refuerza una salida segura
- ayuda a transitar a otra ruta del sistema sin romper claridad

### Cuándo urgencias sobrescribe otras acciones
- cuando hay riesgo clínico claro o percibido
- cuando el caso puede empeorar con la espera
- cuando la página no debe invitar a navegación extensa

### Cuándo no deben coexistir dos acciones del mismo nivel
- cuando ambas compiten por dominar el siguiente paso
- cuando obligan al usuario a elegir entre dos lógicas incompatibles
- cuando reducen claridad en momentos sensibles

Regla:
- no deben convivir dos CTAs primarios del mismo nivel sin una razón clínica explícita

## Reglas por tipo de página

### Home
- debe priorizar urgencia como entrada visible
- puede ofrecer valoración y agendamiento, pero sin competir con urgencias

### `/servicios`
- debe orientar, no forzar una conversión única
- el CTA principal del hub depende de la lectura del caso:
  - urgencias si hay inestabilidad
  - orientación si aún no hay claridad

### Páginas madre del núcleo
- urgencias:
  - CTA de urgencia inmediata dominante
- cirugía:
  - CTA de valoración clínica con fallback a urgencias
- diagnóstico:
  - CTA de valoración clínica con foco en aclarar el caso
- endoscopía:
  - CTA de valoración clínica con foco en mínima invasión cuando aplica

### Páginas complementarias
- exóticos:
  - CTA de valoración clínica adaptada
- oncología:
  - CTA de valoración clínica y continuidad
- medicina interna:
  - CTA de valoración clínica integral y seguimiento

### Prevención
- CTA dominante de continuidad / valoración preventiva
- no debe competir con urgencias salvo como fallback seguro

### Triage
- puede usar CTA de urgencia o valoración según el resultado
- no debe comportarse como centro del sistema
- debe derivar, no apropiarse del recorrido

### Páginas futuras
- toda nueva página debe declararse primero por estado UX dominante
- luego por jerarquía de CTA
- nunca al revés

## Reglas narrativas

### Por estado
- urgencia:
  - directo
  - corto
  - inequívoco
- incertidumbre:
  - orientador
  - aclarador
  - no ambiguo
- complejidad:
  - sobrio
  - integrador
  - acompañante
- seguimiento:
  - estable
  - continuo
  - clínico

### Por nivel de urgencia
- más urgencia = menos adorno
- más urgencia = más certeza verbal

### Por continuidad
- seguimiento no debe sonar débil ni burocrático
- debe sonar a control médico serio

### Por complejidad
- no debe sonar alarmista
- no debe sonar fragmentado
- no debe sonar a promesa

### Prohibiciones narrativas
- no usar copy genérico de marketing
- no dramatizar innecesariamente
- no usar institucionalismo abstracto
- no usar CTAs que podrían servir igual para cualquier página del sitio

## Reglas de transición

### Urgencias -> diagnóstico / cirugía
- una vez estabilizado el paciente, el CTA debe ayudar a pasar de acción inmediata a aclaración o resolución

### Incertidumbre -> diagnóstico / medicina interna
- el CTA debe resolver ambigüedad y no abrir ramas de igual peso sin orientación

### Complejidad -> oncología / medicina interna / exóticos
- el CTA debe ayudar a entrar a la ruta especializada correcta sin parecer catálogo

### Seguimiento -> prevención / diagnóstico / complejidad
- el CTA debe permitir escalar si el caso cambia, sin dramatizar el recorrido

## Riesgos estratégicos si no se respeta el sistema
- fragmentación de CTAs entre páginas
- urgencias compitiendo mal con rutas no urgentes
- páginas que pierden claridad de acción
- rutas complementarias comportándose como catálogo
- experiencia inconsistente según el estado mental del usuario

## Reglas institucionales derivadas
- un CTA nunca se define aislado del estado clínico percibido
- urgencias puede sobrescribir cualquier otra lógica si el riesgo lo exige
- páginas complementarias no deben tener CTA más agresivo que una ruta estructural salvo riesgo clínico claro
- seguimiento debe sonar estable, no débil
- `/servicios` orienta, no impone una conversión única
- no deben coexistir dos CTAs primarios equivalentes sin razón clínica explícita
- antes de abrir nuevas rutas, conviene traducir este sistema a reglas operativas de implementación

## Regla principal de gobernanza CTA
Todo CTA del hospital digital debe responder primero al estado clínico percibido del usuario, después al riesgo del caso y solo al final a la página en la que se encuentra.
