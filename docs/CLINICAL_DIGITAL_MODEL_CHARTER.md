# CLINICAL_DIGITAL_MODEL_CHARTER

## Propósito
Formalizar el modelo clínico digital de la nueva web de Nuskë Vet Center como regla institucional de crecimiento.

Este documento fija:
- cómo se organiza el hospital digital
- qué tipo de rutas sí deben existir
- qué tipo de rutas no deben tener página propia
- cómo crecer sin degradar el sistema hacia catálogo

## Definición oficial del modelo clínico digital
Nuskë Vet Center se presenta digitalmente como un hospital veterinario de alta complejidad organizado por decisiones clínicas y recorridos del paciente.

La lógica central del sitio no es listar servicios ni agrupar técnicas. La lógica central es orientar al usuario hacia la ruta clínica correcta según:
- urgencia
- necesidad de resolución
- necesidad de aclaración diagnóstica
- necesidad de seguimiento
- necesidad de integración clínica en casos complejos

## Qué no es este hospital digital
Este hospital digital no es:
- un catálogo de servicios
- un directorio de especialidades
- un mapa organizado por técnicas o procedimientos
- una web comercial tradicional

Tampoco debe evolucionar hacia:
- una suma de páginas finas sin frontera clínica
- una arquitectura basada en legacy URL por URL
- un hub que compense falta de criterio estructural

## Arquitectura clínica institucional

### 1. Núcleo hospitalario
Corresponde a las rutas estructurales del hospital.

Incluye:
- `/urgencias`
- `/cirugia`
- `/diagnostico`
- `/endoscopia`

Función institucional:
- entrada crítica
- resolución clínica
- aclaración diagnóstica
- mínima invasión

Regla:
- debe permanecer corto, estable y claramente dominante

### 2. Continuidad clínica
Corresponde a la capa de seguimiento y medicina anticipada.

Incluye:
- `/prevencion`

Función institucional:
- prevención
- seguimiento
- reducción de deterioro evitable

Regla:
- debe crecer poco y sin fragmentarse en microespecialidades

### 3. Complejidad / rutas clínicas complementarias
Corresponde a rutas clínicas publicadas con frontera propia, pero que no deben desplazar al núcleo hospitalario.

Incluye:
- `/exoticos`
- `/oncologia`
- `/medicina-interna`

Función institucional:
- integrar casos complejos
- sostener especialidad con criterio
- ampliar el alcance clínico del hospital sin convertirlo en catálogo

Regla:
- esta capa debe crecer lentamente
- cada nueva ruta en esta capa exige reauditoría estructural

### 4. Submódulos
Corresponde a capacidades con valor clínico real, pero sin autonomía narrativa suficiente para una página propia.

Ejemplos típicos:
- hospitalización
- cuidados intensivos
- laboratorio
- manejo del dolor temprano
- manejo de heridas temprano

Función institucional:
- vivir dentro de rutas madre
- fortalecerlas sin fragmentar navegación

### 5. Comercial subordinado
Corresponde a líneas no clínicas o no estructurales para la lectura principal del hospital.

Ejemplos:
- grooming
- pensión
- otros servicios comerciales subordinados

Regla:
- no deben ocupar el foco principal del modelo
- no deben competir con las capas clínicas

## Reglas institucionales de expansión

### Cuándo abrir una nueva página clínica
Una nueva ruta solo debe abrirse si cumple simultáneamente:
- tiene frontera clínica propia y entendible para usuario no experto
- no duplica una ruta ya publicada
- puede sostener narrativa completa de decisión y seguimiento
- aporta lectura hospitalaria real, no solo un tema o servicio suelto

### Cuándo algo debe ser submódulo
Debe degradarse a submódulo si:
- depende casi por completo de otra ruta madre
- no tiene recorrido clínico propio
- vive mejor dentro de cirugía, diagnóstico, urgencias o prevención
- necesita más contexto que autonomía

### Cuándo algo no debe tener página propia
No debe abrirse como página si:
- solo nombra un procedimiento, estudio o técnica
- su diferenciación es demasiado fina para navegación principal
- funciona mejor como bloque dentro de otra ruta
- inflaría el mapa sin ayudar a elegir mejor

### Límite del bloque complementario
La capa de complejidad / rutas complementarias no debe crecer indefinidamente.

Regla operativa:
- al pasar de 3 a 4 rutas complementarias publicadas, debe ejecutarse una reauditoría formal antes de seguir expandiendo

### Reauditoría obligatoria
Antes de seguir creciendo fuera de núcleo y continuidad, debe revisarse:
- si la nueva ruta fortalece el modelo
- si la capa complementaria sigue siendo una sola capa válida
- si conviene subdividir, congelar o frenar expansión pública

## Riesgos estratégicos
Si este modelo no se consolida, el sitio puede:
- mutar a catálogo de especialidades
- romper la jerarquía clínica construida
- degradar `/servicios` como hub
- abrir páginas demasiado finas
- diluir el modelo hospitalario centrado en decisiones

## Líneas futuras coherentes
Solo son coherentes nuevas rutas que:
- sostengan frontera clínica real
- respondan a decisiones reconocibles para el usuario
- encajen dentro del modelo hospitalario por recorrido y complejidad

No se deben abrir nuevas páginas para “completar legacy”.

## Implicaciones operativas

### Navegación
- `/servicios` debe seguir siendo mapa clínico, no catálogo
- el núcleo hospitalario debe conservar primacía estructural

### Contenido
- cada página debe explicar cuándo importa, qué cambia y qué acción sigue
- no se deben publicar páginas sin recorrido clínico completo

### Copy
- tono clínico, sobrio y orientado a decisiones
- sin meta-copy
- sin institucionalismo abstracto
- sin marketing superficial

### Expansión futura
- toda nueva página debe justificarse contra este charter
- si no fortalece el modelo, no debe abrirse

### Arquitectura de información
- la arquitectura no se organiza por acumulación de especialidades
- se organiza por rutas estructurales, continuidad y complejidad clínica

## Regla principal de gobernanza
Toda expansión futura debe proteger la identidad del sitio como hospital veterinario premium de alta complejidad organizado por recorridos clínicos y decisiones, no por acumulación de especialidades sueltas.
