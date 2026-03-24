# TRIAGE FUNCTIONAL SPEC

## 1. Proposito del modulo

El modulo de triage veterinario MVP sera una herramienta de orientacion inicial para propietarios que necesitan una guia rapida sobre el nivel de atencion que podria requerir su mascota.

Su funcion principal no es diagnosticar, sino:

- clasificar nivel de urgencia
- reducir friccion de decision
- dirigir al usuario hacia la accion correcta
- apoyar conversion hacia urgencias, WhatsApp o consulta

Limites obligatorios del modulo:

- No diagnostica enfermedades.
- No sustituye valoracion veterinaria presencial o profesional.
- No debe presentarse como herramienta medica definitiva.
- Debe operar como orientacion inicial con foco en clasificacion y accion.

## 2. Alcance de fase 1

Esta fase corresponde solo a un MVP funcional y controlado.

Incluye:

- flujo guiado de clasificacion inicial
- seleccion estructurada de especie, categoria y sintomas
- resultado con nivel de prioridad
- CTA segun el nivel detectado

No incluye:

- backend
- login
- guardar casos
- historial clinico
- IA real
- portal de clientes
- diagnosticos
- demasiadas especies
- seguimiento medico longitudinal

## 3. Flujo UX propuesto

El flujo propuesto para el MVP es lineal, breve y orientado a accion.

### 3.1 Aviso inicial

Pantalla inicial con advertencia clara:

- el triage es orientativo
- no sustituye valoracion veterinaria
- si hay signos graves visibles, el usuario debe acudir a urgencias de inmediato

Objetivo UX:

- alinear expectativas
- reducir riesgo medico-legal
- preparar al usuario para responder de forma rapida

### 3.2 Seleccion de especie

El usuario elige una especie soportada:

- perro
- gato
- exotico

### 3.3 Seleccion de categoria clinica

El usuario elige el grupo principal del problema observado.

### 3.4 Seleccion de sintomas

El usuario selecciona sintomas visibles o reportables dentro de la categoria elegida.

El sistema debe permitir seleccionar multiples sintomas.

### 3.5 Factores agravantes

El flujo debe preguntar por factores que aumentan prioridad clinica, por ejemplo:

- inicio repentino
- empeoramiento rapido
- dolor intenso
- imposibilidad para comer, respirar, caminar u orinar
- edad extrema o condicion delicada reportada

### 3.6 Resultado

El sistema entrega una clasificacion simple y accionable:

- Emergencia
- Urgencia
- Consulta

El resultado debe explicarse con lenguaje claro y no diagnostico.

### 3.7 CTA segun nivel

La pantalla final debe conducir a una accion inmediata segun el nivel detectado.

## 4. Niveles de clasificacion

El MVP solo debe trabajar con estos tres niveles:

### Emergencia

Situaciones con alta probabilidad de requerir atencion inmediata.

### Urgencia

Situaciones que probablemente requieren valoracion el mismo dia o en corto plazo.

### Consulta

Situaciones que no sugieren emergencia inmediata segun el flujo del MVP, pero que si ameritan seguimiento veterinario.

## 5. Especies soportadas

Especies iniciales del MVP:

- perro
- gato
- exotico

Regla operativa:

- no ampliar especies en esta fase sin una especificacion separada
- exotico debe mantenerse como categoria controlada y simplificada, no como cobertura exhaustiva

## 6. Categorias clinicas iniciales

Categorias iniciales permitidas:

- general
- digestivo
- respiratorio
- neurologico
- urinario
- trauma / dolor
- ojos / piel
- reproductivo

Regla operativa:

- la categoria ordena el flujo
- no debe insinuar especialidad diagnostica
- su funcion es agrupar sintomas y facilitar clasificacion

## 7. Modelo de decision

El modelo de decision del MVP debe ser heuristico.

Base del modelo:

- sintomas con puntaje
- modificadores agravantes
- `emergency override` para sintomas criticos
- umbrales por score

Comportamiento esperado:

1. El usuario selecciona especie, categoria y sintomas.
2. Cada sintoma suma un puntaje base.
3. Factores agravantes modifican ese puntaje.
4. Si aparece un sintoma critico, el sistema activa override y clasifica como `Emergencia`.
5. Si no hay override, el resultado se determina por umbrales definidos.

Regla de seguridad:

- el modelo debe priorizar claridad y conservadurismo clinico basico
- no debe intentar inferir diagnósticos
- no debe prometer precision clinica avanzada

## 8. Sintomas criticos de override

Ejemplos de sintomas que deben disparar `emergency override` y elevar el resultado a `Emergencia`:

- dificultad para respirar
- convulsiones
- inconsciente
- sangrado abundante
- no puede orinar
- atropellamiento
- abdomen muy distendido con dolor
- respiracion con boca abierta
- encias moradas
- ojo protruido

Regla operativa:

- esta lista es inicial y debe poder revisarse mas adelante con criterio veterinario
- en el MVP, la presencia de uno de estos signos debe prevalecer sobre el score normal

## 9. CTA por nivel

### Emergencia

CTAs esperados:

- ir a urgencias
- llamar
- WhatsApp

Objetivo:

- reducir tiempo de decision
- priorizar contacto inmediato

### Urgencia

CTAs esperados:

- atencion hoy
- WhatsApp

Objetivo:

- empujar valoracion rapida sin comunicar falsa estabilidad

### Consulta

CTAs esperados:

- agendar consulta
- ver servicios

Objetivo:

- convertir a canal ordinario sin generar alarma innecesaria

## 10. Aviso legal

Aviso legal breve recomendado:

> Este triage es una herramienta de orientacion inicial y no sustituye la valoracion medica veterinaria. Si tu mascota presenta signos graves o empeora rapidamente, acude de inmediato a urgencias veterinarias.

## 11. Riesgos y criterios de seguridad

El modulo debe cumplir estos criterios:

- no alarmar innecesariamente
- no prometer diagnosticos
- usar lenguaje entendible para propietarios
- mantener foco en orientacion y accion

Riesgos a evitar:

- tono excesivamente alarmista para sintomas menores
- mensajes demasiado tecnicos o ambiguos
- falsa sensacion de seguridad
- claims que impliquen precision diagnostica
- experiencia demasiado larga para un contexto de ansiedad

Principios de seguridad del MVP:

- orientar rapido
- simplificar decisiones
- priorizar signos criticos
- derivar a contacto humano cuando exista duda
- mantener consistencia con la propuesta clinica y de conversion del sitio

## 12. Criterios funcionales de salida

Para considerarse correctamente especificado en esta fase, el MVP debe poder implementarse despues con estas condiciones:

- flujo corto y entendible
- resultado en solo tres niveles
- decision basada en reglas heuristicas simples
- CTA alineado al nivel detectado
- mensajes no diagnosticos
- alcance limitado y controlado

## 13. Fuera de alcance explicito

Queda fuera de esta especificacion funcional inicial:

- motor clinico avanzado
- recomendaciones terapeuticas
- interpretacion de laboratorios
- generacion de expediente
- integracion con CRM o agenda
- analitica medica avanzada
- soporte multilenguaje
- manejo granular por raza, peso o edad detallada
- modelos predictivos o IA conversacional
