# CLINICAL_STATE_UX_SYSTEM

## Propósito
Formalizar el sistema institucional de estados clínicos UX del hospital digital de Nuskë Vet Center.

Este documento define cómo debe responder el sitio al estado clínico percibido por el usuario, y no solo al tipo de página que está visitando.

Su función es servir como referencia vinculante para:
- diseño
- contenido
- copy
- navegación
- expansión clínica digital

## Definición del modelo de estados clínicos UX
El hospital digital no debe responder únicamente a la arquitectura de páginas. Debe responder al estado clínico percibido por el dueño del paciente.

La lógica central es:
- identificar en qué estado mental y clínico entra el usuario
- reducir fricción
- orientar la decisión correcta
- ajustar señalización, tono y CTA según ese estado

## Relación con el modelo clínico institucional
Este sistema extiende el `CLINICAL_DIGITAL_MODEL_CHARTER.md`.

Relación entre ambos:
- el charter define cómo se organiza el hospital digital
- este sistema define cómo debe comportarse la experiencia del sitio dentro de ese hospital digital

En otras palabras:
- el charter organiza rutas
- el sistema de estados organiza respuesta UX

## Estados clínicos UX oficiales

### 1. Urgencia percibida
#### Mentalidad del usuario
- cree que algo no puede esperar
- busca certeza y acción
- tolera muy poca exploración

#### Nivel de ansiedad
- alto

#### Información que necesita
- confirmación de que debe actuar
- claridad de entrada
- mínima ambigüedad

#### CTA adecuado
- `Ir a urgencias`
- `Llamar ahora`
- `WhatsApp`

#### Tono narrativo recomendado
- directo
- claro
- breve
- sin dramatización extra

### 2. Incertidumbre clínica
#### Mentalidad del usuario
- detecta que algo no está bien
- no sabe qué ruta le corresponde
- necesita orientación

#### Nivel de ansiedad
- medio, con confusión

#### Información que necesita
- diferencia entre aclarar, resolver o seguir observando
- frontera entre rutas
- señal de cuándo conviene dejar de esperar

#### CTA adecuado
- `Solicitar valoración`
- `Aclarar el caso`

#### Tono narrativo recomendado
- orientador
- clínico
- tranquilamente directivo

### 3. Complejidad reconocida
#### Mentalidad del usuario
- ya sabe o sospecha que el caso es más denso
- puede venir de un hallazgo, diagnóstico previo o evolución difícil
- necesita integración clínica

#### Nivel de ansiedad
- medio-alto, más sostenido que agudo

#### Información que necesita
- cómo se articula el caso
- qué sigue
- quién acompaña la continuidad

#### CTA adecuado
- `Solicitar valoración`
- `Dar seguimiento`
- `Hablar con el hospital`

#### Tono narrativo recomendado
- sobrio
- humano
- coordinador
- no fragmentado

### 4. Estabilidad / seguimiento
#### Mentalidad del usuario
- no percibe una urgencia inmediata
- quiere prevenir, vigilar o sostener continuidad
- suele subestimar el valor médico del seguimiento

#### Nivel de ansiedad
- bajo o moderado

#### Información que necesita
- próximos pasos
- control oportuno
- continuidad sin dramatización

#### CTA adecuado
- `Agendar valoración`
- `Mantener seguimiento`

#### Tono narrativo recomendado
- sereno
- clínico
- preventivo sin trivializar

## Progresión entre estados
El usuario no permanece fijo en una sola capa. El sistema debe asumir progresión clínica.

Transiciones principales:
- urgencia -> diagnóstico o cirugía
  - cuando el paciente ya fue estabilizado
- incertidumbre -> diagnóstico o medicina interna
  - cuando hace falta aclarar antes de decidir
- complejidad -> oncología, medicina interna o exóticos
  - cuando el caso ya exige lectura especializada o integración más profunda
- seguimiento -> prevención, diagnóstico o complejidad
  - cuando el control detecta algo que deja de ser simple

## Implicaciones de diseño

### Densidad de contenido
- urgencia:
  - baja densidad
  - alto foco en decisión
- incertidumbre:
  - densidad media
  - más orientación comparativa
- complejidad:
  - densidad media-alta
  - integración y continuidad
- seguimiento:
  - densidad media
  - claridad longitudinal

### Jerarquía visual
- urgencia:
  - CTA dominante arriba
  - señales de acción inmediata
- incertidumbre:
  - claridad de rutas y diferencias
- complejidad:
  - integración entre áreas
  - menor fragmentación visual
- seguimiento:
  - continuidad y control sin ruido dramático

### Urgencia visual
- no todas las páginas deben parecer urgentes
- la urgencia visual debe reservarse para estados o momentos de urgencia real

### Estructura de páginas
- cada página debe responder:
  - cuándo importa
  - qué cambia
  - qué acción sigue
- pero el peso de cada respuesta debe variar según el estado UX dominante

## Implicaciones de copy

### Tono por estado
- urgencia:
  - breve y directivo
- incertidumbre:
  - aclarador y orientador
- complejidad:
  - integrador y acompañante
- seguimiento:
  - clínico y continuo

### Lenguaje médico vs orientador
- el sistema no prohíbe el lenguaje clínico
- sí prohíbe que el lenguaje médico opaque la decisión del usuario
- el criterio es:
  - claridad primero
  - precisión después

### Dramatización vs contención
- urgencia:
  - confirmar gravedad sin exagerar
- complejidad:
  - acompañar sin volver el tono emocionalmente pesado
- seguimiento:
  - evitar trivializar

## Implicaciones de arquitectura

### Relación con el modelo clínico institucional
- el sistema de estados no reemplaza la arquitectura
- la hace operativa para el usuario real

### Interacción con `/servicios`
- `/servicios` debe funcionar especialmente bien para incertidumbre clínica
- no debe competir con rutas madre
- debe orientar, no profundizar

### Interacción con triage
- triage encaja sobre todo en:
  - urgencia percibida
  - incertidumbre clínica
- no debe comportarse como ruta central del hospital
- debe ayudar a decidir, no a sustituir valoración

### Interacción con rutas complementarias
- las rutas complementarias deben responder sobre todo a complejidad reconocida
- no deben intentar funcionar como primera entrada universal

## Riesgos estratégicos si no se respeta el sistema
- CTAs inconsistentes entre páginas
- señalización contradictoria
- rutas compitiendo en vez de ordenarse
- pérdida de claridad en momentos clínicos sensibles
- diseño guiado por tipo de página y no por estado del usuario

## Reglas institucionales UX derivadas
- Regla 1:
  - toda decisión de CTA debe justificarse por estado clínico UX, no solo por página
- Regla 2:
  - urgencia percibida exige menos lectura y más certeza
- Regla 3:
  - incertidumbre clínica exige orientación entre rutas
- Regla 4:
  - complejidad reconocida exige integración y continuidad visibles
- Regla 5:
  - estabilidad y seguimiento no deben tratarse como capas menores o triviales
- Regla 6:
  - ninguna expansión futura debe ignorar este sistema
- Regla 7:
  - antes de abrir nuevas rutas, conviene traducir este sistema a reglas operativas de CTA, señalización y transiciones

## Regla principal de gobernanza UX
El hospital digital debe responder primero al estado clínico percibido del usuario y después a la taxonomía interna del hospital.
