# SERVICES PAGE REALIGNMENT PLAN

## Propósito

Definir cómo debe evolucionar `/servicios` desde su estado actual de agregador narrativo hospitalario hacia un hub clínico alineado con la arquitectura canónica futura.

## Estado actual real

`/servicios` ya no está en el estado previo de catálogo plano. La fase documentada en [INTERVENCION_FASE_17_SERVICIOS_PAGE_ALIGNMENT.md](d:\Projects\newwebnusketech\docs\INTERVENCION_FASE_17_SERVICIOS_PAGE_ALIGNMENT.md) corrigió la narrativa base y la alineó con:

- urgencias y paciente crítico
- cirugía
- diagnóstico avanzado
- mínima invasión
- continuidad preventiva

Sin embargo, aún no es el estado final deseado.

## Problema actual

La página está mejor alineada en tono y orden, pero sigue teniendo tres límites estructurales:

1. sigue concentrando demasiadas capacidades en una sola página
2. sigue funcionando como destino intermedio, no como hub conectado a páginas canónicas profundas
3. mantiene bloques subordinados que hoy están correctamente encuadrados, pero todavía sin una jerarquía definitiva de salida

Conclusión:

- `/servicios` ya no está desalineada en discurso base
- sí sigue incompleta como pieza arquitectónica final

## Función futura de `/servicios`

La página no debe intentar ser la página definitiva de cada servicio.

Su función futura recomendada es:

- hub de capacidades hospitalarias
- capa de navegación clínica entre home y páginas canónicas profundas
- resumen ejecutivo del alcance hospitalario

No debe ser:

- catálogo aislado
- mezcla de todas las subespecialidades en una sola capa
- página que compita por profundidad con urgencias, cirugía o diagnóstico

## Jerarquía futura recomendada

### Arriba

Debe mostrar solo la lectura más estratégica:

- capacidad hospitalaria integral
- urgencias 24/7
- cirugía especializada
- diagnóstico avanzado

La parte alta debe comportarse como una portada clínica, no como grilla larga.

### Medio

Debe listar las capacidades principales como bloques resumidos con salida clara a sus páginas canónicas:

1. Urgencias y Paciente Crítico
2. Cirugía Hospitalaria y Procedimientos Especializados
3. Endoscopía y Mínima Invasión
4. Diagnóstico Hospitalario
5. Atención Integral y Preventiva

Regla:

- cada bloque debe poder degradarse a teaser cuando exista su página profunda

### Abajo

Debe contener solo soporte subordinado:

- Wellness
- Portal del Propietario
- Telemedicina

Y, si se mantienen:

- deben presentarse como continuidad o soporte de la atención, no como capacidades nucleares del hospital

## Qué debe cambiar en una futura intervención

### 1. Convertir bloques actuales en salidas canónicas

Cuando existan páginas profundas, `/servicios` debe:

- reducir profundidad interna
- enlazar claramente a las nuevas páginas madre
- dejar de intentar explicar todo dentro de la misma URL

### 2. Reforzar Endoscopía / Mínima Invasión como bloque independiente

Hoy existe dentro de la narrativa general, pero en el estado final debe quedar como bloque de capacidad claramente diferenciada, con salida a su página canónica propia.

### 3. Reencuadrar Diagnóstico Hospitalario como sistema clínico

La página actual ya lo menciona, pero debe terminar presentándolo como:

- capacidad médica transversal
- no como suma de estudios o aparatos

### 4. Reducir protagonismo residual de continuidad preventiva

Debe seguir existiendo, pero sin romper el orden clínico de la página.

## Qué debe mantenerse

- encabezado hospitalario integral
- urgencias en primer lugar
- cirugía y diagnóstico como segundo nivel
- subordinación explícita de Wellness, Portal y Telemedicina
- tono premium y clínico

## Qué no debe hacerse

- volver a estructura por categorías comerciales
- mezclar otra vez “especialidades”, “urgencias” y “preventivos” sin jerarquía
- inflar `/servicios` hasta convertirla otra vez en pseudo-monolito
- tratar wellness o portal como eje protagonista

## Tratamiento recomendado por bloque

### Urgencias y Paciente Crítico

- Estado futuro: teaser dominante con salida a página canónica
- Prioridad: máxima

### Cirugía Hospitalaria y Procedimientos Especializados

- Estado futuro: teaser fuerte con salida a página canónica
- Prioridad: alta

### Endoscopía y Mínima Invasión

- Estado futuro: teaser diferenciado con salida a página canónica
- Prioridad: alta

### Diagnóstico Hospitalario

- Estado futuro: teaser fuerte con salida a página canónica
- Prioridad: alta

### Atención Integral y Preventiva

- Estado futuro: bloque subordinado al núcleo hospitalario
- Prioridad: media

### WellnessSelector

- Estado actual: subordinado correctamente
- Estado futuro recomendado:
  - mantenerlo abajo
  - evaluar extracción a su propia landing o sección cuando la arquitectura clínica principal esté construida

### Portal del Propietario y Telemedicina

- Estado actual: soporte complementario
- Estado futuro recomendado:
  - mantenerlos abajo
  - no subirlos de nivel antes de consolidar páginas clínicas profundas

## Secuencia recomendada para realinear `/servicios`

1. Construir página de urgencias
2. Construir página de cirugía
3. Construir página de endoscopía / mínima invasión
4. Construir página de diagnóstico
5. Reabrir `/servicios` para convertirla en hub enlazador
6. Ajustar preventiva y continuidad
7. Evaluar si Wellness, Portal y Telemedicina merecen tratamiento adicional

## Riesgos si `/servicios` se toca antes de tiempo

- rehacer la misma página varias veces
- duplicar demasiado contenido que luego deberá moverse a páginas canónicas
- dejar CTAs ambiguos entre resumen y profundidad
- volver a inflar el componente de datos sin resolver arquitectura final

## Criterio de cierre

Se considerará que `/servicios` está correctamente realineada cuando:

- funcione como hub y no como catálogo final
- tenga salida clara a páginas canónicas de prioridad 1
- mantenga abajo los bloques subordinados
- no compita narrativamente con home ni con las páginas profundas
