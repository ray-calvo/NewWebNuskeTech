# CLINICAL_CTA_EXECUTION_MATRIX

## Propósito
Traducir el `CLINICAL_DIGITAL_MODEL_CHARTER.md`, el `CLINICAL_STATE_UX_SYSTEM.md` y el `CLINICAL_CTA_SYSTEM.md` a una matriz operativa reusable para producto, UX, contenido y futuras implementaciones del hospital digital.

Su función es dejar explícito:
- qué CTA debe dominar según estado clínico, riesgo y momento del journey
- qué acciones secundarias sí pueden convivir
- qué acciones no deben aparecer juntas
- cómo deben resolverse los conflictos entre rutas
- cómo debe comportarse el sistema cuando exista integración dinámica con triage

## Principio operativo
Los CTAs del hospital digital se definen por:
- estado clínico percibido del usuario
- riesgo clínico del caso
- momento del recorrido
- necesidad de orientar la acción correcta

Orden de decisión:
1. identificar el estado clínico UX dominante
2. identificar si existe riesgo que eleve urgencia
3. definir el nivel de intensidad CTA
4. adaptar ese CTA a la página y al momento del journey

## Estados clínicos oficiales
- Urgencia percibida
- Incertidumbre clínica
- Complejidad reconocida
- Estabilidad / seguimiento

## Jerarquía operativa de intensidad CTA

### Nivel 4 — Emergencia
Función:
- activar respuesta inmediata cuando la espera puede aumentar riesgo

CTAs típicos:
- `Ir a urgencias`
- `Llamar ahora`
- `WhatsApp`
- `Cómo llegar`

Regla:
- domina visual y narrativamente sobre cualquier otra acción

### Nivel 3 — Decisión médica
Función:
- iniciar valoración clínica cuando el caso requiere lectura médica, pero no necesariamente entrada urgente

CTAs típicos:
- `Solicitar valoración`
- `Solicitar valoración especializada`
- `Agendar valoración`

Regla:
- es el nivel dominante en páginas madre no urgentes y rutas complementarias

### Nivel 2 — Seguimiento clínico
Función:
- sostener control, continuidad o reevaluación sin perder seriedad clínica

CTAs típicos:
- `Mantener seguimiento`
- `Dar seguimiento`
- `Agendar control`

Regla:
- no debe sonar débil ni burocrático

### Nivel 1 — Orientación segura
Función:
- ayudar cuando el usuario aún no reconoce la ruta correcta o necesita una salida secundaria clara

CTAs típicos:
- `Aclarar el caso`
- `Solicitar orientación`
- `Hablar con el hospital`

Regla:
- nunca debe competir con Nivel 4
- acompaña sobre todo incertidumbre clínica y hubs

## Matriz operativa por página

### Home
#### Estado dominante esperado
- urgencia percibida
- incertidumbre clínica

#### CTA dominante por estado
- urgencia percibida:
  - Nivel 4
- incertidumbre clínica:
  - Nivel 3
- complejidad reconocida:
  - Nivel 3
- estabilidad / seguimiento:
  - Nivel 2

#### CTA secundarios permitidos
- `Llamar ahora`
- `WhatsApp`
- `Agendar valoración`

#### CTA prohibidos
- dos CTAs primarios del mismo nivel sin diferencia clínica
- CTA educativo como dominante

#### Conflictos posibles
- que la urgencia visible compita con agendamiento estable
- que el home se comporte como landing comercial

#### Fallback clínico
- si aparece duda sobre gravedad, urgencias debe dominar

### `/servicios`
#### Estado dominante esperado
- incertidumbre clínica

#### CTA dominante por estado
- urgencia percibida:
  - Nivel 4
- incertidumbre clínica:
  - Nivel 1
- complejidad reconocida:
  - Nivel 3
- estabilidad / seguimiento:
  - Nivel 2

#### CTA secundarios permitidos
- enlaces de navegación a rutas madre
- `Solicitar valoración`
- fallback a urgencias

#### CTA prohibidos
- CTA único agresivo que convierta el hub en landing
- urgencia permanente sin contexto clínico

#### Conflictos posibles
- que el hub empuje a una sola ruta cuando su función es orientar
- que rutas complementarias compitan con el núcleo

#### Fallback clínico
- si el usuario no reconoce su ruta y percibe deterioro, desviar a urgencias

### `/urgencias`
#### Estado dominante esperado
- urgencia percibida

#### CTA dominante por estado
- urgencia percibida:
  - Nivel 4
- incertidumbre clínica:
  - Nivel 4 si hay riesgo, si no Nivel 3
- complejidad reconocida:
  - Nivel 4 si hay inestabilidad, si no Nivel 3
- estabilidad / seguimiento:
  - Nivel 1 o salida a otra ruta, nunca urgencia artificial

#### CTA secundarios permitidos
- `Cómo llegar`
- `WhatsApp`
- transición posterior a diagnóstico o cirugía

#### CTA prohibidos
- seguimiento como acción principal
- valoración electiva compitiendo con urgencias

#### Conflictos posibles
- sobrerrepresentar urgencia en casos ya estabilizados
- no dejar clara la salida posterior a diagnóstico o cirugía

#### Fallback clínico
- urgencias siempre domina si hay riesgo percibido o deterioro

### `/cirugia`
#### Estado dominante esperado
- incertidumbre clínica
- decisión médica

#### CTA dominante por estado
- urgencia percibida:
  - Nivel 4 si el paciente está inestable
- incertidumbre clínica:
  - Nivel 3
- complejidad reconocida:
  - Nivel 3
- estabilidad / seguimiento:
  - Nivel 2

#### CTA secundarios permitidos
- `Llamar al hospital`
- `Ir a urgencias 24/7`

#### CTA prohibidos
- CTA de seguimiento como dominante cuando la decisión quirúrgica aún no está clara
- orientación ambigua sin salida de valoración

#### Conflictos posibles
- competir con urgencias si el paciente requiere entrada inmediata
- sonar a catálogo de procedimientos

#### Fallback clínico
- si el caso parece descompensado, urgencias sobrescribe

### `/diagnostico`
#### Estado dominante esperado
- incertidumbre clínica

#### CTA dominante por estado
- urgencia percibida:
  - Nivel 4 si el cuadro se agrava
- incertidumbre clínica:
  - Nivel 3
- complejidad reconocida:
  - Nivel 3
- estabilidad / seguimiento:
  - Nivel 2 o Nivel 3 según persistencia del cuadro

#### CTA secundarios permitidos
- `Aclarar el caso`
- `Llamar al hospital`
- derivación a medicina interna u oncología cuando aplique

#### CTA prohibidos
- urgencia decorativa sin riesgo
- CTA de cirugía como dominante

#### Conflictos posibles
- duplicar medicina interna
- sonar a laboratorio comercial

#### Fallback clínico
- si el usuario reporta deterioro o inestabilidad, desviar a urgencias

### `/endoscopia`
#### Estado dominante esperado
- decisión médica
- complejidad reconocida

#### CTA dominante por estado
- urgencia percibida:
  - Nivel 4 solo si el cuadro lo justifica
- incertidumbre clínica:
  - Nivel 3
- complejidad reconocida:
  - Nivel 3
- estabilidad / seguimiento:
  - Nivel 2

#### CTA secundarios permitidos
- `Solicitar valoración`
- `Llamar al hospital`
- fallback a urgencias

#### CTA prohibidos
- CTA tecnológico o demostrativo
- CTA más agresivo que cirugía o diagnóstico sin riesgo

#### Conflictos posibles
- comportarse como extensión de diagnóstico
- prometer resolución cuando el caso aún requiere valoración

#### Fallback clínico
- si la sospecha de gravedad aumenta, urgencias domina

### `/prevencion`
#### Estado dominante esperado
- estabilidad / seguimiento

#### CTA dominante por estado
- urgencia percibida:
  - Nivel 4 solo como fallback
- incertidumbre clínica:
  - Nivel 3 si el cuadro deja de ser preventivo
- complejidad reconocida:
  - Nivel 3 hacia la ruta adecuada
- estabilidad / seguimiento:
  - Nivel 2

#### CTA secundarios permitidos
- `Agendar valoración`
- `Mantener seguimiento`
- derivación a diagnóstico cuando aparezcan hallazgos

#### CTA prohibidos
- urgencia como CTA principal fijo
- orientación ambigua sin continuidad clara

#### Conflictos posibles
- trivializar seguimiento
- quedarse corta si el caso ya dejó de ser preventivo

#### Fallback clínico
- escalar a diagnóstico o urgencias si hay cambio clínico

### `/exoticos`
#### Estado dominante esperado
- complejidad reconocida

#### CTA dominante por estado
- urgencia percibida:
  - Nivel 4 si el paciente se deteriora
- incertidumbre clínica:
  - Nivel 3
- complejidad reconocida:
  - Nivel 3
- estabilidad / seguimiento:
  - Nivel 2

#### CTA secundarios permitidos
- `Solicitar valoración`
- `Llamar al hospital`
- fallback a urgencias

#### CTA prohibidos
- CTA lifestyle o comercial
- orientación genérica sin valoración adaptada

#### Conflictos posibles
- competir con el núcleo
- sonar a curiosidad clínica

#### Fallback clínico
- si el paciente no convencional está inestable, urgencias domina

### `/oncologia`
#### Estado dominante esperado
- complejidad reconocida

#### CTA dominante por estado
- urgencia percibida:
  - Nivel 4 solo si existe deterioro agudo
- incertidumbre clínica:
  - Nivel 3
- complejidad reconocida:
  - Nivel 3 con apoyo de Nivel 2
- estabilidad / seguimiento:
  - Nivel 2

#### CTA secundarios permitidos
- `Dar seguimiento`
- `Llamar al hospital`
- desvío a diagnóstico cuando el hallazgo aún no es claro

#### CTA prohibidos
- CTA alarmista
- promesa de tratamiento como acción dominante

#### Conflictos posibles
- sonar más agresiva que una ruta estructural
- competir con medicina interna en cuadros aún no aclarados

#### Fallback clínico
- si hay descompensación, urgencias sobrescribe

### `/medicina-interna`
#### Estado dominante esperado
- incertidumbre clínica
- complejidad reconocida

#### CTA dominante por estado
- urgencia percibida:
  - Nivel 4 si hay inestabilidad
- incertidumbre clínica:
  - Nivel 3
- complejidad reconocida:
  - Nivel 3 con continuidad visible
- estabilidad / seguimiento:
  - Nivel 2

#### CTA secundarios permitidos
- `Solicitar orientación`
- `Dar seguimiento`
- derivación a diagnóstico u oncología según evolución

#### CTA prohibidos
- CTA genérico de consulta básica
- urgencia como dominante sin riesgo clínico

#### Conflictos posibles
- duplicar diagnóstico
- volverse contenedor ambiguo de “todo lo demás”

#### Fallback clínico
- si el cuadro empeora, urgencias domina

### `Triage`
#### Estado dominante esperado
- urgencia percibida
- incertidumbre clínica

#### CTA dominante por estado
- urgencia percibida:
  - Nivel 4
- incertidumbre clínica:
  - Nivel 1 o Nivel 3 según resultado
- complejidad reconocida:
  - Nivel 3 hacia la ruta adecuada
- estabilidad / seguimiento:
  - Nivel 2 o derivación a prevención

#### CTA secundarios permitidos
- llamado al hospital
- ruta sugerida posterior

#### CTA prohibidos
- comportarse como destino final del sistema
- dejar dos salidas equivalentes sin recomendación clínica

#### Conflictos posibles
- triage compitiendo con páginas madre
- triage bajando demasiado la urgencia

#### Fallback clínico
- ante duda de gravedad, mantener o elevar urgencia; nunca bajar riesgo por defecto

## Reglas de conflicto
- urgencias sobrescribe cualquier otra lógica cuando hay riesgo claro o percibido
- seguimiento nunca puede competir visual ni narrativamente con emergencia
- rutas complementarias no pueden tener CTA más agresivo que una ruta estructural salvo riesgo clínico claro
- no deben convivir dos CTAs primarios del mismo nivel si empujan decisiones distintas
- cuando el usuario no reconoce su ruta, la orientación segura puede acompañar, pero no desplazar la acción dominante

## Reglas de transición clínica
- urgencias -> cirugía
  - cuando el paciente ya fue estabilizado y la siguiente decisión es resolutiva
- urgencias -> diagnóstico
  - cuando la prioridad pasa de estabilizar a aclarar el cuadro
- diagnóstico -> medicina interna
  - cuando el caso requiere integración clínica más amplia
- diagnóstico -> oncología
  - cuando hallazgos o evolución exigen ruta de complejidad oncológica
- medicina interna -> oncología
  - cuando la integración clínica confirma o refuerza sospecha oncológica
- prevención -> diagnóstico
  - cuando el control detecta signos, cambios o hallazgos que ya no caben en seguimiento simple
- exóticos -> urgencias
  - cuando un paciente no convencional entra en deterioro o riesgo inmediato

## Clinical CTA Dynamic Behavior with Triage

### Qué puede cambiar el triage
- estado clínico UX dominante
- nivel de intensidad CTA
- ruta sugerida
- jerarquía visual de las acciones

### Escenarios de activación
- si el triage detecta emergencia:
  - activar CTA Nivel 4 de forma dominante
  - reducir exploración
  - priorizar llamada, urgencias y llegada
- si el triage detecta complejidad:
  - priorizar valoración en medicina interna, oncología o exóticos según el caso
- si el triage detecta estabilidad:
  - bajar intensidad a seguimiento o valoración programada
- si el triage detecta incertidumbre sin urgencia:
  - priorizar diagnóstico o medicina interna

### Reglas de sobrescritura
- el triage puede sobrescribir la lógica de página cuando detecta un estado clínico distinto al que la página asume
- el triage nunca debe bajar urgencia si existe riesgo clínico o sospecha razonable de deterioro
- si el resultado del triage contradice una lectura optimista de la página, domina el triage
- la sobrescritura debe afectar:
  - CTA dominante
  - orden de acciones secundarias
  - señalización clínica contextual

### Riesgos clínicos UX si triage no controla CTAs
- el usuario puede recibir acciones incoherentes con su riesgo
- una página no urgente puede retener a un paciente que ya requiere urgencias
- el sistema puede fragmentar la experiencia entre página y recomendación
- la confianza clínica del hospital digital puede degradarse si el sitio dice una cosa y el triage otra

## Riesgos estratégicos si no se implementa
- fragmentación real de CTAs entre páginas, campañas y rutas futuras
- urgencias compitiendo mal con acciones electivas
- páginas complementarias sonando más agresivas que rutas estructurales
- hubs perdiendo función orientadora
- triage incapaz de reorganizar la experiencia cuando cambia el estado clínico del usuario
- crecimiento futuro del sitio sin regla común de intensidad, fallback y transición

## Regla principal de ejecución
El CTA correcto del hospital digital no es el que más convierte en abstracto, sino el que mejor responde al estado clínico percibido del usuario, al riesgo del caso y al siguiente paso clínicamente seguro.
