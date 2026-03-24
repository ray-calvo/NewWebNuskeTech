# INTERVENCION FASE 15 HOME HOSPITAL POSITIONING

## Objetivo

Reposicionar el inicio del sitio marketing hacia una lectura de hospital veterinario de alta complejidad, haciendo altamente visibles las urgencias 24/7 y reforzando cirugía avanzada, atención crítica y capacidad hospitalaria real.

## Enfoque de diseño elegido

Se aplicó un rediseño contenido a dos superficies del inicio:

- franja superior de urgencias
- bloque `Hero`

La decisión fue mover el peso del home desde una promesa genérica de alta especialidad hacia una narrativa más hospitalaria, operativa y clínicamente orientada.

## Archivos modificados

- [urgency-banner.tsx](/d:/Projects/newwebnusketech/src/components/shared/urgency-banner.tsx)
- [navbar.tsx](/d:/Projects/newwebnusketech/src/components/shared/navbar.tsx)
- [MobileMenu.tsx](/d:/Projects/newwebnusketech/src/components/shared/MobileMenu.tsx)
- [Hero.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/Hero.tsx)
- [AI_CONTEXT_LOG.md](/d:/Projects/newwebnusketech/docs/AI_CONTEXT_LOG.md)

## Jerarquia visual implementada

- La barra superior roja dejó de ser decorativa y pasó a operar como franja funcional de urgencias.
- El mensaje `Urgencias veterinarias 24/7 · Atención inmediata` quedó visible en primera línea.
- Se añadieron accesos directos a:
  - llamada
  - WhatsApp
  - cómo llegar
- El hero ahora prioriza capacidad hospitalaria, atención crítica y respuesta inmediata.
- Se añadió señal operativa visible: `Guardia hospitalaria activa 24/7`.

## Cambios de copy aplicados

- Nuevo headline:
  - `Alta especialidad veterinaria para casos críticos`
- Nuevo subheadline:
  - `Hospital veterinario 24/7 con cirugía avanzada, cuidados intensivos y diagnóstico hospitalario.`
- Nuevos CTAs:
  - `Emergencia ahora`
  - `Agendar valoración`
- El copy descriptivo del hero pasó a un tono más médico, preciso y hospitalario.

## Decisiones de implementacion

- Se reutilizó una imagen clínica remota de entorno hospitalario ya compatible con la configuración actual de `next/image`.
- Se eliminó la lectura visual tipo mockup/tablet del hero anterior.
- Se ajustó el offset sticky del navbar y del menú móvil para convivir correctamente con la nueva franja superior fija.
- No se tocaron rutas, tracking, triage, `MedicalTeam`, servicios, tecnología ni contacto.

## Validaciones ejecutadas

- `npm run guardrails`
- `npm run lint`
- `npm run build`

Todas pasaron correctamente.

## Riesgos evitados

- Mantener urgencias 24/7 como elemento secundario del home.
- Sostener una estética demasiado genérica o cercana a un producto SaaS.
- Introducir una reestructuración amplia del sitio fuera del alcance de esta fase.
- Romper el header sticky al convertir la franja superior en un sistema funcional persistente.

## Pendientes abiertos

- Revisar visualmente el comportamiento conjunto de franja sticky + navbar sticky en navegación real móvil y desktop.
- Si más adelante se consigue un asset propio hospitalario superior al remoto actual, podría sustituirse sin rehacer la estructura del hero.
