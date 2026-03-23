# Intervencion Fase 6 Hardening Minimo

## Objetivo

Agregar barreras minimas, de bajo riesgo y alta utilidad, para evitar regresiones ya conocidas en la arquitectura publica activa del repo.

## Riesgo que se queria evitar

- Reintroduccion de imports prohibidos con `@/src/...`.
- Reaparicion de enlaces internos publicos hacia rutas inexistentes.
- Falsa seguridad despues del saneamiento previo de aliases y de la ruta `/contacto`.

## Validaciones agregadas

### 1. Bloqueo de imports prohibidos

Archivo:

- [check-no-src-imports.mjs](/d:/Projects/newwebnusketech/scripts/check-no-src-imports.mjs)

Funcion:

- Recorre el repo y falla si detecta el patron `@/src/` en archivos de codigo o configuracion con extensiones:
  - `.js`
  - `.jsx`
  - `.ts`
  - `.tsx`
  - `.mjs`
  - `.cjs`

Exclusiones:

- `node_modules`
- `.git`
- `.next`
- `docs`
- `out`
- `build`

### 2. Verificacion de rutas publicas criticas

Archivo:

- [check-public-routes.mjs](/d:/Projects/newwebnusketech/scripts/check-public-routes.mjs)

Funcion:

- Descubre rutas activas reales desde `src/app/**/page.*`.
- Ignora route groups como `(marketing)` y carpetas privadas con `_`.
- Lee referencias internas `href="/..."` y `href: "/..."` en archivos publicos criticos:
  - [navbar.tsx](/d:/Projects/newwebnusketech/src/components/shared/navbar.tsx)
  - [MobileMenu.tsx](/d:/Projects/newwebnusketech/src/components/shared/MobileMenu.tsx)
  - [footer.tsx](/d:/Projects/newwebnusketech/src/components/shared/footer.tsx)
  - [Hero.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/Hero.tsx)
- Falla si alguno de esos destinos no existe como ruta publica activa.

## Archivos creados o modificados

### Creados

- [check-no-src-imports.mjs](/d:/Projects/newwebnusketech/scripts/check-no-src-imports.mjs)
- [check-public-routes.mjs](/d:/Projects/newwebnusketech/scripts/check-public-routes.mjs)
- [INTERVENCION_FASE_6_HARDENING_MINIMO.md](/d:/Projects/newwebnusketech/docs/INTERVENCION_FASE_6_HARDENING_MINIMO.md)

### Modificados

- [package.json](/d:/Projects/newwebnusketech/package.json)
- [AI_CONTEXT_LOG.md](/d:/Projects/newwebnusketech/docs/AI_CONTEXT_LOG.md)

## Como ejecutar las validaciones

Comandos nuevos:

- `npm run check:imports`
- `npm run check:routes`
- `npm run guardrails`

Flujo recomendado de uso rapido:

```bash
npm run guardrails
npm run lint
npm run build
```

## Que cubren

- Bloquean la reintroduccion del alias prohibido `@/src/...`.
- Verifican que los enlaces internos criticos de navegacion publica y CTA principal apunten a rutas reales implementadas.
- Refuerzan el estado saneado de las rutas publicas actuales:
  - `/`
  - `/contacto`
  - `/servicios`
  - `/tecnologia`

## Que no cubren

- No hacen crawling del sitio completo.
- No verifican enlaces externos, `tel:`, `mailto:` o `https://`.
- No validan contenido, SEO, metadata ni copy.
- No garantizan que todos los componentes del repo usen solo rutas activas; solo cubren las fuentes publicas criticas definidas en esta fase.
- No sustituyen pruebas end-to-end ni smoke tests de UI.

## Validaciones ejecutadas

- `npm run check:imports` -> OK
- `npm run check:routes` -> OK
- `npm run guardrails` -> OK
- `npm run lint` -> OK
- `npm run build` -> OK

Build confirmado para:

- `/`
- `/contacto`
- `/servicios`
- `/tecnologia`

## Riesgos mitigados

- Reintroduccion accidental de `@/src/...` en codigo activo.
- Publicacion de un enlace interno roto en navbar, footer o hero sin deteccion automatica minima.
- Pérdida de trazabilidad del saneamiento arquitectonico ya ejecutado.

## Pendientes futuros

- Evaluar si conviene ampliar la validacion de rutas a mas componentes publicos si la navegacion crece.
- Evaluar una fase posterior de smoke tests ligeros si el sitio incorpora formularios o rutas dinamicas.
- Mantener actualizada la lista de archivos criticos auditados si cambia la navegacion principal.
