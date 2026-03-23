# Repo Status Summary

## Estado actual

Este repo opera sobre una unica fuente de verdad activa: `src/`.

Arquitectura publica activa:

- App Router de Next bajo `src/app`
- sitio marketing bajo `src/app/(marketing)`
- componentes compartidos activos bajo `src/components`
- utilidades activas bajo `src/lib`
- componentes de dominio marketing bajo `src/features/marketing/components`

Estado operativo confirmado:

- `npm run guardrails` disponible
- `npm run lint` validado en fases recientes
- `npm run build` validado en fases recientes

## Rutas publicas activas

Rutas confirmadas por build y por presencia de `page.*`:

- `/`
- `/contacto`
- `/servicios`
- `/tecnologia`

## Guardrails existentes

### Alias prohibido

Script:

- [check-no-src-imports.mjs](/d:/Projects/newwebnusketech/scripts/check-no-src-imports.mjs)

Cubre:

- deteccion automatica de referencias `@/src/...`

Comando:

- `npm run check:imports`

### Rutas publicas criticas

Script:

- [check-public-routes.mjs](/d:/Projects/newwebnusketech/scripts/check-public-routes.mjs)

Cubre:

- verificacion minima de enlaces internos criticos contra rutas activas reales

Fuentes auditadas por el script:

- [navbar.tsx](/d:/Projects/newwebnusketech/src/components/shared/navbar.tsx)
- [MobileMenu.tsx](/d:/Projects/newwebnusketech/src/components/shared/MobileMenu.tsx)
- [footer.tsx](/d:/Projects/newwebnusketech/src/components/shared/footer.tsx)
- [Hero.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/Hero.tsx)

Comandos:

- `npm run check:routes`
- `npm run guardrails`

## Legacy historico

Estado confirmado:

- `app_legacy` y `legacy_root` fueron cerrados formalmente en Git.
- No existen fisicamente en el working tree actual.
- Ya no participan en la arquitectura activa ni en el build.
- [tsconfig.json](/d:/Projects/newwebnusketech/tsconfig.json) ya no conserva exclusiones legacy para esas rutas.

Documento de referencia:

- [LEGACY_CONFIG_CLOSURE_AUDIT.md](/d:/Projects/newwebnusketech/docs/LEGACY_CONFIG_CLOSURE_AUDIT.md)
- [INTERVENCION_FASE_7_CIERRE_LEGACY.md](/d:/Projects/newwebnusketech/docs/INTERVENCION_FASE_7_CIERRE_LEGACY.md)

## Riesgos criticos restantes

- No hay un riesgo funcional critico equivalente al antiguo `/contacto` roto.
- El principal riesgo abierto ya no es el legacy historico, sino la necesidad de sostener disciplina arquitectonica en futuras intervenciones.
- La cobertura de guardrails es minima y no sustituye pruebas funcionales mas amplias.
- Componentes pesados como [WellnessSelector.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/WellnessSelector.tsx) siguen siendo deuda controlada, no resuelta.

## Backlog recomendado

1. Evaluar hardening adicional si crece la navegacion publica.
2. Evaluar smoke tests ligeros antes de introducir formularios o rutas mas complejas.
3. Vigilar crecimiento de datasets y componentes pesados en marketing.
4. Revisar periodicamente si los guardrails minimos siguen cubriendo los puntos de falla mas probables.

## Reglas operativas minimas

- `src/` es la unica fuente de verdad activa.
- No reintroducir imports `@/src/...`.
- No crear enlaces internos publicos sin ruta implementada.
- Ejecutar `npm run guardrails` antes de cerrar cambios estructurales o de navegacion.
- Actualizar `docs/AI_CONTEXT_LOG.md` y el documento de intervencion correspondiente tras cada fase relevante.
