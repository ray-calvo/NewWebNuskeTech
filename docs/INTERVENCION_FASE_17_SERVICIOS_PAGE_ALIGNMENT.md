# INTERVENCION FASE 17 SERVICIOS PAGE ALIGNMENT

## Problema detectado

La home ya comunicaba capacidades hospitalarias integrales, pero `/servicios` seguía organizada como un catálogo separado por categorías comerciales (`Especialidades`, `Urgencias`, `Preventivos`).

Esa diferencia generaba una desalineación narrativa clara:

- la home hablaba de hospital veterinario integral
- `/servicios` seguía sonando a listado tradicional de servicios

## Desalineación entre home y `/servicios`

Estado previo:

- hero de `/servicios` orientado a “especialidades”
- orden narrativo sin priorizar urgencias y paciente crítico
- `WellnessSelector` intercalado sin una subordinación clara
- `Portal del Propietario` y `Telemedicina` presentados como innovación digital, no como soporte de continuidad clínica

## Decisiones tomadas

- Reposicionar el encabezado de la página hacia capacidad hospitalaria integral.
- Reordenar la narrativa en cinco bloques:
  - Urgencias y Paciente Crítico
  - Cirugía Veterinaria Especializada
  - Diagnóstico Médico Avanzado
  - Procedimientos de Mínima Invasión
  - Atención Integral y Preventiva
- Mantener `WellnessSelector`, pero subordinado a continuidad preventiva.
- Mantener `Portal del Propietario` y `Telemedicina`, pero resignificados como soporte complementario de continuidad clínica.

## Bloques reordenados o reformulados

- `Urgencias y Paciente Crítico` quedó primero y como capacidad hospitalaria central.
- `Cirugía Veterinaria Especializada` quedó como segundo bloque.
- `Diagnóstico Médico Avanzado` quedó como tercer bloque.
- `Procedimientos de Mínima Invasión` quedó como capacidad diferenciadora.
- `Atención Integral y Preventiva` quedó como continuidad médica.

Además:

- se reformularon títulos y descripciones internas para sonar más hospitalarios y menos comerciales
- la narrativa tecnológica quedó subordinada al contexto médico

## Tratamiento dado a Wellness / Portal / Telemedicina

### Wellness

Decisión:

- B) se conserva pero subordinado

Implementación:

- se mantuvo visible dentro de `/servicios`
- se añadió un bloque contenedor que lo presenta como continuidad preventiva y no como eje principal de la página

### Portal del Propietario

Decisión:

- B) se conserva pero subordinado

Implementación:

- se mantiene dentro de `DigitalServicesSection`
- se reformuló su encuadre como herramienta de continuidad y acceso del propietario

### Telemedicina

Decisión:

- B) se conserva pero subordinado

Implementación:

- se mantiene dentro de `DigitalServicesSection`
- se presenta como soporte remoto complementario, no como protagonista de la capacidad hospitalaria

## Archivos modificados

- [page.tsx](/d:/Projects/newwebnusketech/src/app/(marketing)/servicios/page.tsx)
- [ServicesPageHero.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/services/ServicesPageHero.tsx)
- [DigitalServicesSection.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/services/DigitalServicesSection.tsx)
- [data.ts](/d:/Projects/newwebnusketech/src/features/marketing/components/services/data.ts)
- [AI_CONTEXT_LOG.md](/d:/Projects/newwebnusketech/docs/AI_CONTEXT_LOG.md)

## Validaciones ejecutadas

- `npm run guardrails`
- `npm run lint`
- `npm run build`

Todas pasaron correctamente.

## Riesgos evitados

- mantener dos narrativas incompatibles entre home y `/servicios`
- convertir `/servicios` en un catálogo plano desconectado del nuevo posicionamiento
- eliminar elementos como `WellnessSelector`, `Portal del Propietario` o `Telemedicina` sin criterio
- abrir un refactor más amplio fuera del alcance de la página

## Pendientes abiertos

- revisar en QA visual si la subordinación de Wellness se percibe clara en móvil
- evaluar más adelante si `WellnessSelector` merece su propia landing o sección independiente si sigue creciendo
- si la página vuelve a expandirse, puede requerir extracción adicional para sostener legibilidad sin reintroducir monolito
