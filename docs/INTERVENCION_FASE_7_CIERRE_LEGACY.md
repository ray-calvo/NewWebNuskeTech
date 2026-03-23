# Intervencion Fase 7 Cierre Legacy

## Objetivo

Cerrar formalmente en Git los rastros legacy historicos ya auditados, verificar que el repo sigue estable despues del cierre y limpiar la exclusion residual en `tsconfig.json` solo si resultaba segura.

## Estado previo

Antes de esta fase, `git status --short` mostraba exactamente estos borrados historicos pendientes:

- `app_legacy/favicon.ico`
- `legacy_root/Footer.tsx`
- `legacy_root/Header.tsx`
- `legacy_root/layout.tsx`
- `legacy_root/page.tsx`

Estado confirmado antes de intervenir:

- `src/` era la unica fuente de verdad activa.
- `app_legacy` y `legacy_root` no existian fisicamente en el working tree.
- `git ls-files app_legacy legacy_root` seguia devolviendo los cinco archivos historicos.
- [tsconfig.json](/d:/Projects/newwebnusketech/tsconfig.json) todavia incluia `app_legacy` y `legacy_root` en `exclude`.

## Archivos legacy cerrados

Archivos eliminados formalmente de Git en esta fase:

- `app_legacy/favicon.ico`
- `legacy_root/Footer.tsx`
- `legacy_root/Header.tsx`
- `legacy_root/layout.tsx`
- `legacy_root/page.tsx`

## Validaciones ejecutadas

Despues del commit de cierre legacy:

- `npm run guardrails` -> OK
- `npm run lint` -> OK
- `npm run build` -> OK

Validacion funcional confirmada por build:

- `/`
- `/contacto`
- `/servicios`
- `/tecnologia`

Despues de limpiar [tsconfig.json](/d:/Projects/newwebnusketech/tsconfig.json):

- `npm run guardrails` -> OK
- `npm run lint` -> OK
- `npm run build` -> OK

## Limpieza de tsconfig

Decision:

- Si se limpio `tsconfig.json`.

Motivo:

- Tras formalizar el cierre, `git ls-files app_legacy legacy_root` ya no devolvia archivos.
- `Test-Path app_legacy` y `Test-Path legacy_root` seguian devolviendo `False`.
- La busqueda fuera de `docs/`:
  - `rg -n --hidden --glob '!node_modules/**' --glob '!.git/**' --glob '!docs/**' "app_legacy|legacy_root" .`
  solo devolvia la referencia residual dentro de [tsconfig.json](/d:/Projects/newwebnusketech/tsconfig.json).

Cambio aplicado:

- `exclude` paso de `["node_modules", "app_legacy", "legacy_root"]` a `["node_modules"]`.

## Archivos creados o modificados

### Eliminados

- `app_legacy/favicon.ico`
- `legacy_root/Footer.tsx`
- `legacy_root/Header.tsx`
- `legacy_root/layout.tsx`
- `legacy_root/page.tsx`

### Modificados

- [tsconfig.json](/d:/Projects/newwebnusketech/tsconfig.json)
- [AI_CONTEXT_LOG.md](/d:/Projects/newwebnusketech/docs/AI_CONTEXT_LOG.md)
- [REPO_STATUS_SUMMARY.md](/d:/Projects/newwebnusketech/docs/REPO_STATUS_SUMMARY.md)
- [INTERVENCION_FASE_7_CIERRE_LEGACY.md](/d:/Projects/newwebnusketech/docs/INTERVENCION_FASE_7_CIERRE_LEGACY.md)

## Riesgos evitados

- Dejar el repo en un estado ambiguo con borrados legacy eternamente pendientes.
- Mantener exclusions historicas en TypeScript sin necesidad real.
- Reabrir confusion sobre si `app_legacy` y `legacy_root` seguian siendo parte del arbol operativo.

## Riesgos pendientes

- La deuda arquitectonica ya no esta en legacy historico, sino en mantenimiento continuo de componentes pesados y en cobertura limitada de guardrails.
- `guardrails` sigue siendo una capa minima y no reemplaza pruebas funcionales mas profundas.

## Estado final del repo tras el cierre

- `app_legacy` y `legacy_root` quedan cerrados formalmente como legado historico removido del control de versiones activo.
- [tsconfig.json](/d:/Projects/newwebnusketech/tsconfig.json) ya no conserva exclusiones legacy resueltas.
- La arquitectura activa sigue concentrada en `src/`.
- Las rutas publicas activas siguen siendo:
  - `/`
  - `/contacto`
  - `/servicios`
  - `/tecnologia`
- El repo queda sin pendientes legacy abiertos en Git tras esta fase.
