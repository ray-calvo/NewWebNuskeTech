# INTERVENCION_FASE_2_SANITIZACION

Fecha de intervención: 2026-03-23
Alcance: saneamiento arquitectónico conservador, sin cambios funcionales

## 1. Objetivo

Eliminar ambigüedad estructural del repo sin modificar comportamiento funcional, UX, rutas ni diseño.

Objetivos ejecutados:
- normalización final de imports
- cierre del alias canónico hacia `src`
- eliminación de remanentes estructurales no activos confirmados
- documentación y trazabilidad de la intervención

## 2. Análisis previo

### Hechos confirmados antes de intervenir
- `src/` era la única arquitectura activa confirmada.
- Persistían imports no canónicos `@/src/...` en:
  - `src/app/(marketing)/layout.tsx`
  - `src/components/shared/navbar.tsx`
- Existían duplicados físicos raíz vs `src`:
  - `components/ui/button.tsx`
  - `lib/utils.ts`
- La auditoría de fronteras previa confirmó que los aliases activos resolvían hacia `src/*`.
- `app_legacy` y `legacy_root` seguían apareciendo en:
  - `git ls-files`
  - `git status --short`
  - `tsconfig.json` en `exclude`

### Verificaciones de seguridad ejecutadas antes de borrar
- búsqueda de imports entrantes activos a `components/` y `lib/` raíz
- revisión de `tsconfig.json`
- revisión de `package.json`
- revisión de `next.config.ts`
- revisión de `components.json`
- revisión de referencias fuera de `node_modules` y `.next`
- validación previa de resolución con TypeScript

## 3. Duplicados encontrados

| Caso | Estado antes de intervenir | Fuente activa confirmada | Acción |
| --- | --- | --- | --- |
| `src/components/ui/button.tsx` vs `components/ui/button.tsx` | Duplicado físico | `src/components/ui/button.tsx` | eliminado remanente raíz |
| `src/lib/utils.ts` vs `lib/utils.ts` | Duplicado físico | `src/lib/utils.ts` | eliminado remanente raíz |

## 4. Archivos eliminados

Eliminados de forma controlada:
- `components/ui/button.tsx`
- `lib/utils.ts`

Justificación:
- sin imports entrantes activos confirmados
- sin resolución activa observada en TypeScript
- sin referencia confirmada en `next.config.ts`
- sin referencia confirmada en `package.json` scripts
- sin referencia confirmada en tooling de ejecución

## 5. Archivos conservados y por qué

Conservados:
- `app_legacy/favicon.ico`
- `legacy_root/Footer.tsx`
- `legacy_root/Header.tsx`
- `legacy_root/layout.tsx`
- `legacy_root/page.tsx`

Motivo de conservación:
- siguen versionados en Git
- aparecen referenciados nominalmente en `tsconfig.json` (`exclude`)
- ya estaban en estado eliminado en el working tree antes de esta fase
- no se consideró seguro tomar una decisión destructiva adicional sobre esas rutas en esta intervención

## 6. Archivos modificados

Modificados:
- `src/app/(marketing)/layout.tsx`
- `src/components/shared/navbar.tsx`
- `tsconfig.json`
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_2_SANITIZACION.md`

## 7. Normalización de imports

Cambios realizados:
- `@/src/components/shared/footer` -> `@/components/shared/footer`
- `@/src/components/shared/navbar` -> `@/components/shared/navbar`
- `@/src/components/shared/urgency-banner` -> `@/components/shared/urgency-banner`
- `@/src/components/shared/WhatsAppFloat` -> `@/components/shared/WhatsAppFloat`
- `@/src/components/shared/MobileMenu` -> `@/components/shared/MobileMenu`

Resultado confirmado:
- no quedó ningún `@/src/...` en código activo

## 8. Limpieza de arquitectura

### Cambio estructural realizado

Archivo:
- `tsconfig.json`

Cambio:
- `@/*` pasó de:

```json
["@/*": ["./src/*", "./*"]]
```

a:

```json
["@/*": ["./src/*"]]
```

Efecto:
- se elimina el fallback al root
- la resolución del alias canónico queda restringida a `src`

## 9. Validaciones realizadas

### Búsquedas de seguridad
- búsqueda de `@/src/...` en código activo
- búsqueda de referencias a `components/ui/button.tsx`
- búsqueda de referencias a `lib/utils.ts`
- búsqueda de referencias a `components/`, `lib/`, `app_legacy`, `legacy_root`

### Validaciones técnicas
- `npm run lint` -> OK
- `npm run build` -> OK

Salida relevante de build:
- rutas generadas:
  - `/`
  - `/_not-found`
  - `/servicios`
  - `/tecnologia`

### Riesgos nuevos
- No se detectaron rutas muertas nuevas introducidas por esta fase.
- No se detectaron imports rotos tras `build`.

## 10. Riesgos mitigados

- edición accidental de archivos remanentes raíz
- uso continuado de `@/src/...`
- dependencia a una resolución dual poco evidente en `tsconfig.json`
- coexistencia de dos fuentes aparentes para `button.tsx` y `utils.ts`

## 11. Riesgos pendientes

- `app_legacy` y `legacy_root` siguen sin resolución formal
- la documentación de auditoría inicial conserva referencias históricas previas a esta intervención
- la ruta `/contacto` sigue siendo un hallazgo pendiente de otra fase y no fue tocada aquí

## 12. Estado final del repo

Estado final confirmado:
- `src/` queda como única fuente de verdad estructural activa
- `@/*` resuelve únicamente a `src/*`
- no quedan imports `@/src/...` en código activo
- no quedan duplicados activos confirmados entre raíz y `src` para `button.tsx` y `utils.ts`
- `app_legacy` y `legacy_root` permanecen fuera del alcance de borrado seguro en esta fase
