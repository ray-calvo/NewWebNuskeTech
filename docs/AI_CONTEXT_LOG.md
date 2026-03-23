# AI_CONTEXT_LOG

## Entrada 2026-03-23 16:55:48 -06:00

### Tipo
- Auditoria arquitectonica inicial

### Resumen ejecutivo
- El repo activo es un sitio marketing publico montado en `src/app` con Next 16 App Router.
- La arquitectura nueva existe y es funcional, pero la gobernanza aun no esta cerrada.
- La home esta modularizada por bloques de feature.
- La navegacion publica tiene al menos un enlace roto hacia `/contacto`.
- Existen duplicados estructurales en root (`components/ui/button.tsx`, `lib/utils.ts`) y rastro legacy versionado en Git (`app_legacy/*`, `legacy_root/*`) que no esta presente en el working tree.

### Hallazgos principales
- Rutas activas reales: `/`, `/servicios`, `/tecnologia`.
- Layouts activos reales: `src/app/layout.tsx` y `src/app/(marketing)/layout.tsx`.
- `src/app/(marketing)/servicios/page.tsx` es la pagina mas grande del repo activo con 387 lineas.
- `src/features/marketing/components/WellnessSelector.tsx` tiene 261 lineas y ya es un bloque de alto peso.
- Se detecta mezcla de imports `@/components/...`, `@/features/...` y `@/src/components/...`.
- `README.md` y parte de `docs/` no reflejan el estado real del codigo.
- No se detectaron tests ni CI en la raiz del proyecto.
- `npm run lint` pasa.

### Riesgos principales
- Critico: ruta `/contacto` enlazada pero no implementada.
- Alto: ambiguedad de aliases e imports.
- Alto: duplicacion de utilidades y primitives fuera y dentro de `src`.
- Alto: frontera legacy no cerrada.
- Alto: documentacion desalineada con el codigo real.

### Decisiones de gobernanza tomadas
- La fuente de verdad operativa actual es `src/`.
- `app_legacy` y `legacy_root` se consideran legacy congelado hasta auditoria especifica.
- No se debe introducir nuevo codigo con imports `@/src/...`.
- Ningun enlace interno nuevo puede publicarse si la ruta aun no existe.
- Todo cambio estructural futuro debe registrar traza en este archivo.

### Areas que no deben tocarse sin revision
- `src/app/layout.tsx`
- `src/app/(marketing)/layout.tsx`
- `src/app/globals.css`
- `src/components/shared/navbar.tsx`
- `src/components/shared/footer.tsx`
- `next.config.ts`
- `tsconfig.json`
- `components.json`
- `app_legacy/*`
- `legacy_root/*`
- `components/ui/*` root
- `lib/*` root

### Backlog inmediato
- Resolver o retirar el enlace roto a `/contacto`.
- Definir una politica unica de imports y aliases.
- Resolver la duplicidad `src/lib/utils.ts` vs `lib/utils.ts`.
- Resolver la duplicidad `src/components/ui/button.tsx` vs `components/ui/button.tsx`.
- Delimitar formalmente la estrategia para `app_legacy` y `legacy_root`.
- Dividir `src/app/(marketing)/servicios/page.tsx` antes de seguir agregando contenido.
- Reescribir o depurar la documentacion base que no representa el estado real.

### Preguntas abiertas
- La ruta `/contacto` debe existir como pagina nueva o debe retirarse de la navegacion.
- `components/` y `lib/` root son remanentes transitorios o deben preservarse por alguna herramienta externa.
- Los archivos eliminados en `app_legacy` y `legacy_root` deben archivarse formalmente o eliminarse del control de versiones.
- `public/brand/logo-nuske.svg` debe ser la fuente de verdad del logo o solo un asset remanente no integrado.

### Supuestos prohibidos
- No asumir que existe `app_legacy/` o `legacy_root/` en el working tree solo porque aparecen en `tsconfig.json` o en docs anteriores.
- No asumir que el repo tiene Zustand, TanStack Query, portal privado o testing automatizado.
- No asumir que `/contacto`, `/blog`, `/portal`, `/telemedicina` o `/planes` existen como rutas.
- No asumir que el root `components/` o `lib/` es la fuente de verdad del codigo activo.
- No asumir que `README.md` o `docs/architecture.md` reflejan el estado real sin verificacion.

### Evidencia base usada
- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `components.json`
- `src/app/**`
- `src/components/**`
- `src/features/marketing/components/**`
- `src/lib/utils.ts`
- `lib/utils.ts`
- `components/ui/button.tsx`
- `README.md`
- `docs/architecture.md`
- `docs/best-practices.md`
- `git status --short`
- `git ls-files app_legacy legacy_root`
- `git show HEAD:legacy_root/*`
- `npm run lint`

## Formato reutilizable para futuras entradas

```md
## Entrada YYYY-MM-DD HH:mm:ss Z

### Tipo
- Auditoria | Implementacion | Refactor | Correccion | Reversion

### Resumen ejecutivo
- 

### Cambios o hallazgos
- 

### Riesgos
- 

### Decisiones tomadas
- 

### Archivos tocados o auditados
- 

### Documentacion actualizada
- 

### Pendientes
- 

### Supuestos prohibidos
- 
```

## Entrada 2026-03-23 18:10:00 -06:00

### Tipo
- Refactor

### Resumen ejecutivo
- Se ejecutó la Fase 2 de sanitización arquitectónica con alcance limitado a aliases, remanentes estructurales y trazabilidad.
- Se eliminaron los imports no canónicos `@/src/...` que seguían activos.
- Se consolidó el alias `@/*` para resolver únicamente contra `src/*`.
- Se eliminaron dos remanentes raíz sin consumidores activos confirmados:
  - `components/ui/button.tsx`
  - `lib/utils.ts`
- No se tocó `app_legacy` ni `legacy_root` porque siguen referenciados en configuración (`tsconfig.json`) y además ya estaban en estado eliminado en el working tree antes de esta intervención.

### Cambios o hallazgos
- `src/app/(marketing)/layout.tsx` pasó de `@/src/components/...` a `@/components/...`.
- `src/components/shared/navbar.tsx` pasó de `@/src/components/shared/MobileMenu` a `@/components/shared/MobileMenu`.
- `tsconfig.json` cambió `@/*` de `["./src/*", "./*"]` a `["./src/*"]`.
- Después del cambio no quedó ningún `@/src/...` en código activo.

### Riesgos
- Mitigado: edición accidental de remanentes raíz como si fueran fuente activa.
- Mitigado: dependencia a fallback implícito de resolución por `./*`.
- Pendiente: `app_legacy` y `legacy_root` siguen siendo rastro histórico no resuelto formalmente.

### Decisiones tomadas
- `src/` queda como única fuente de verdad estructural activa.
- `@/components`, `@/lib` y `@/features` quedan como convención canónica.
- `components/` y `lib/` raíz dejan de participar en la estructura activa.
- `app_legacy` y `legacy_root` no se tocan en esta fase.

### Archivos tocados o auditados
- `src/app/(marketing)/layout.tsx`
- `src/components/shared/navbar.tsx`
- `tsconfig.json`
- `components/ui/button.tsx`
- `lib/utils.ts`
- `docs/INTERVENCION_FASE_2_SANITIZACION.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_2_SANITIZACION.md`

### Pendientes
- Resolver formalmente el destino de `app_legacy` y `legacy_root`.
- Actualizar auditorías base si se decide mantener una fotografía post-sanitización separada de la auditoría inicial.

### Supuestos prohibidos
- No asumir que `app_legacy` y `legacy_root` ya pueden borrarse solo porque no están en el working tree.
- No reintroducir `@/src/...`.
- No recrear duplicados raíz fuera de `src`.

## Entrada 2026-03-23 18:35:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- Se implementó la ruta pública `/contacto` dentro de `src/app/(marketing)`.
- La página reutiliza `ContactPreview` y agrega solo un encabezado y CTAs mínimos para llamada y WhatsApp.
- No se modificó la UI global, no se refactorizaron otras páginas y no se alteró la arquitectura fuera de esta ruta.

### Cambios o hallazgos
- Nuevo archivo: `src/app/(marketing)/contacto/page.tsx`
- Metadata por página añadida de forma consistente con el patrón existente de `Metadata`.
- Navbar, hero y menú móvil ya resuelven hacia una ruta implementada.

### Riesgos
- Mitigado: enlace roto visible a `/contacto`.
- Mitigado: CTA principal del hero apuntando a una ruta inexistente.
- Pendiente: la home sigue teniendo `ContactPreview`, por lo que existe repetición funcional intencional entre home y `/contacto`.

### Decisiones tomadas
- `/contacto` se implementó como ruta pública real.
- Se reutilizó `ContactPreview` sin extraer nuevos componentes.
- No se introdujeron formularios nuevos.

### Archivos tocados o auditados
- `src/app/(marketing)/contacto/page.tsx`
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_3_CONTACTO.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_3_CONTACTO.md`
- `docs/CONTACT_ROUTE_DECISION_AUDIT.md`

### Pendientes
- Evaluar más adelante si conviene diferenciar más la home y `/contacto` para evitar solapamiento de contenido.
- La ruta `/contacto` no introduce un formulario; si se necesita, deberá definirse en otra fase.

### Supuestos prohibidos
- No asumir que la existencia de `/contacto` autoriza refactors mayores de `ContactPreview`.
- No tocar `/servicios` o `/tecnologia` como parte de esta fase.

## Entrada 2026-03-23 19:05:00 -06:00

### Tipo
- Refactor

### Resumen ejecutivo
- Se ejecutó una partición segura de `src/app/(marketing)/servicios/page.tsx`.
- La página pasó de 387 líneas a 30 líneas manteniendo composición, orden visual, copy y CTA.
- Se extrajeron bloques presentacionales a `src/features/marketing/components/services/`.

### Cambios o hallazgos
- Se extrajo el hero de la página.
- Se extrajo la sección repetitiva por categoría y servicio.
- Se extrajo la sección final de innovación digital.
- `WellnessSelector` se mantuvo intacto porque ya era un componente autónomo existente y tocarlo agregaba riesgo innecesario.

### Riesgos
- Mitigado: sobrecarga arquitectónica del principal monolito activo.
- Mitigado: dificultad de lectura y mantenimiento de `servicios/page.tsx`.
- Pendiente: `WellnessSelector.tsx` sigue siendo un componente de alto peso.

### Decisiones tomadas
- Mantener en `page.tsx` solo composición y data wiring mínimo.
- Crear subcarpeta `src/features/marketing/components/services/` para reflejar ownership específico.
- No tocar otras rutas ni bloques fuera de `/servicios`.

### Archivos tocados o auditados
- `src/app/(marketing)/servicios/page.tsx`
- `src/features/marketing/components/services/types.ts`
- `src/features/marketing/components/services/data.ts`
- `src/features/marketing/components/services/ServicesPageHero.tsx`
- `src/features/marketing/components/services/ServiceCategorySection.tsx`
- `src/features/marketing/components/services/DigitalServicesSection.tsx`
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_4_SERVICIOS_PARTICION_SEGURA.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_4_SERVICIOS_PARTICION_SEGURA.md`

### Pendientes
- Evaluar más adelante si `WellnessSelector.tsx` requiere su propia partición segura.
- Mantener vigilancia sobre crecimiento futuro de `data.ts`.

### Supuestos prohibidos
- No asumir que esta partición autoriza refactors amplios de la feature marketing.
- No mover `WellnessSelector` ni su lógica en esta misma fase.

## Entrada 2026-03-23 19:35:00 -06:00

### Tipo
- Refactor

### Resumen ejecutivo
- Se ejecutó una partición segura de `src/app/(marketing)/tecnologia/page.tsx`.
- La página pasó de 171 líneas a 17 líneas manteniendo copy, orden visible, metadata implícita y composición general.
- Se extrajeron bloques presentacionales a `src/features/marketing/components/technology/`.

### Cambios o hallazgos
- Se extrajo el hero de tecnología.
- Se extrajo la sección de equipamiento médico y su dataset.
- Se extrajo el encabezado introductorio de instalaciones.
- `FacilitiesGallery` se mantuvo intacto porque ya era un componente autónomo de bajo acoplamiento.

### Riesgos
- Mitigado: crecimiento monolítico de `tecnologia/page.tsx`.
- Mitigado: mezcla de datos y presentación en un solo archivo.
- Pendiente: el dataset `equipment` ahora vive en un archivo dedicado y debe vigilarse si sigue creciendo.

### Decisiones tomadas
- Mantener en `page.tsx` solo composición.
- Crear subcarpeta `src/features/marketing/components/technology/` para reflejar ownership del dominio.
- No tocar `FacilitiesGallery`.

### Archivos tocados o auditados
- `src/app/(marketing)/tecnologia/page.tsx`
- `src/features/marketing/components/technology/types.ts`
- `src/features/marketing/components/technology/data.ts`
- `src/features/marketing/components/technology/TechnologyPageHero.tsx`
- `src/features/marketing/components/technology/EquipmentSection.tsx`
- `src/features/marketing/components/technology/FacilitiesIntro.tsx`
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_5_TECNOLOGIA_PARTICION_SEGURA.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_5_TECNOLOGIA_PARTICION_SEGURA.md`

### Pendientes
- Vigilar crecimiento futuro de `data.ts`.
- Evaluar más adelante si conviene una estrategia común para datasets grandes de marketing.

### Supuestos prohibidos
- No asumir que esta extracción habilita rediseño o refactor de `FacilitiesGallery`.
- No tocar `/`, `/contacto` ni `/servicios` como parte de esta fase.
