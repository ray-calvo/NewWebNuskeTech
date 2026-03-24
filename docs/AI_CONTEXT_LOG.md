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

## Entrada 2026-03-23 20:15:00 -06:00

### Tipo
- Hardening

### Resumen ejecutivo
- Se agregaron guardrails minimos para evitar dos regresiones ya conocidas del repo.
- El repo ahora puede validar automaticamente:
  - reintroduccion de `@/src/...`
  - enlaces internos rotos en fuentes publicas criticas
- No se tocaron producto, rutas, UX ni configuracion global sensible mas alla de `package.json`.

### Cambios o hallazgos
- Nuevo script: `scripts/check-no-src-imports.mjs`
- Nuevo script: `scripts/check-public-routes.mjs`
- Nuevos comandos en `package.json`:
  - `check:imports`
  - `check:routes`
  - `guardrails`
- La verificacion de rutas usa como fuente de verdad los `page.*` reales bajo `src/app`.
- La verificacion de enlaces criticos cubre:
  - `src/components/shared/navbar.tsx`
  - `src/components/shared/MobileMenu.tsx`
  - `src/components/shared/footer.tsx`
  - `src/features/marketing/components/Hero.tsx`

### Riesgos
- Mitigado: reintroduccion silenciosa de imports `@/src/...`.
- Mitigado: regresion evidente de enlaces internos principales hacia rutas inexistentes.
- Pendiente: la cobertura de rutas sigue siendo minima y deliberadamente no sustituye pruebas de integracion.

### Decisiones tomadas
- Se eligio una solucion sin dependencias nuevas y sin framework de testing pesado.
- La integracion al flujo se hizo por scripts de `package.json`, no alterando UX ni comportamiento de runtime.
- La fuente de verdad para existencia de rutas sigue siendo `src/app/**/page.*`.

### Archivos tocados o auditados
- `scripts/check-no-src-imports.mjs`
- `scripts/check-public-routes.mjs`
- `package.json`
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_6_HARDENING_MINIMO.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_6_HARDENING_MINIMO.md`

### Pendientes
- Evaluar si la lista de archivos criticos de enlaces debe crecer con futuras expansiones del sitio.
- Evaluar en una fase posterior smoke tests ligeros para formularios o rutas mas complejas.

### Supuestos prohibidos
- No asumir que `guardrails` reemplaza pruebas funcionales completas.
- No asumir que cualquier enlace interno nuevo queda cubierto automaticamente si se agrega fuera de los archivos criticos auditados.

## Entrada 2026-03-23 21:05:00 -06:00

### Tipo
- Cierre

### Resumen ejecutivo
- Se cerro formalmente el legado historico `app_legacy` y `legacy_root` que seguia pendiente solo en Git.
- El cierre no afecto producto activo, rutas, UX ni build.
- Tambien se limpio [tsconfig.json](/d:/Projects/newwebnusketech/tsconfig.json) porque la exclusion legacy ya no aportaba valor despues del cierre.

### Cambios o hallazgos
- Se formalizaron en Git los borrados historicos:
  - `app_legacy/favicon.ico`
  - `legacy_root/Footer.tsx`
  - `legacy_root/Header.tsx`
  - `legacy_root/layout.tsx`
  - `legacy_root/page.tsx`
- `git ls-files app_legacy legacy_root` quedo sin resultados.
- La unica referencia residual fuera de `docs/` era `tsconfig.json`, y fue removida.
- `exclude` en `tsconfig.json` quedo reducido a `["node_modules"]`.

### Riesgos
- Mitigado: ambiguedad de estado por borrados legacy pendientes indefinidamente.
- Mitigado: exclusions historicas sobrantes en TypeScript.
- Pendiente: la disciplina arquitectonica futura sigue dependiendo de mantener guardrails y trazabilidad.

### Decisiones tomadas
- Se considero seguro cerrar el legacy porque ya no existia en disco, ya no tenia consumidores ni referencias activas fuera de `tsconfig.json`, y las validaciones completas pasaron.
- Se limpio `tsconfig.json` en un commit separado para mantener trazabilidad atomica.

### Archivos tocados o auditados
- `app_legacy/favicon.ico`
- `legacy_root/Footer.tsx`
- `legacy_root/Header.tsx`
- `legacy_root/layout.tsx`
- `legacy_root/page.tsx`
- `tsconfig.json`
- `docs/AI_CONTEXT_LOG.md`
- `docs/REPO_STATUS_SUMMARY.md`
- `docs/INTERVENCION_FASE_7_CIERRE_LEGACY.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`
- `docs/REPO_STATUS_SUMMARY.md`
- `docs/INTERVENCION_FASE_7_CIERRE_LEGACY.md`

### Pendientes
- Vigilar crecimiento de componentes pesados de marketing.
- Evaluar, en otra fase, si conviene ampliar la cobertura de guardrails o sumar smoke tests ligeros.

### Supuestos prohibidos
- No asumir que el cierre legacy elimina la necesidad de auditoria previa para futuros cambios estructurales.
- No usar la ausencia de legacy como excusa para reabrir cambios amplios en configuracion o arquitectura sin trazabilidad.

## Entrada 2026-03-23 22:05:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- Se inicio la implementacion del modulo de triage veterinario MVP solo en su base estructural segura.
- Se crearon tipos, datos iniciales y logica pura de scoring sin abrir todavia ruta publica ni UI del wizard.
- No se toco producto activo existente.

### Cambios o hallazgos
- Nuevo directorio: `src/features/marketing/components/triage/`
- Nuevos archivos:
  - `src/features/marketing/components/triage/types.ts`
  - `src/features/marketing/components/triage/triage-data.ts`
  - `src/features/marketing/components/triage/score-triage.ts`
- `triage-data.ts` incluye especies, categorias, sintomas base y modificadores agravantes.
- `score-triage.ts` implementa:
  - override de emergencia
  - score acumulado
  - ajuste por multiples sintomas moderados
  - resultado con CTA primario y secundario

### Riesgos
- Mitigado: iniciar el triage con un wizard monolitico y sin fronteras.
- Mitigado: mezclar reglas de negocio con UI desde la primera fase.
- Pendiente: el scoring sigue siendo un baseline MVP y debera calibrarse con criterio veterinario antes de exponerse al publico.

### Decisiones tomadas
- La fase se limito a tipos, datos y scoring puro.
- No se creo aun `src/app/(marketing)/triage/page.tsx`.
- No se creo UI, backend, persistencia ni analytics.
- Se uso lenguaje orientado a propietarios y no diagnostico.

### Archivos tocados o auditados
- `src/features/marketing/components/triage/types.ts`
- `src/features/marketing/components/triage/triage-data.ts`
- `src/features/marketing/components/triage/score-triage.ts`
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_8_TRIAGE_BASE_ESTRUCTURAL.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_8_TRIAGE_BASE_ESTRUCTURAL.md`

### Pendientes
- Construir en otra fase la ruta publica y la UI minima del wizard.
- Validar la calibracion del scoring con criterio veterinario antes de lanzamiento.

### Supuestos prohibidos
- No asumir que el modulo ya esta listo para exposicion publica.
- No asumir que el scoring actual equivale a criterio diagnostico.

## Entrada 2026-03-23 22:40:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- Se implemento la primera version funcional del wizard UI para el modulo de triage veterinario MVP.
- El modulo ya esta expuesto en la ruta publica `/triage`.
- La implementacion reutiliza la base existente de tipos, datos y scoring sin mezclar reglas de negocio con UI.

### Cambios o hallazgos
- Nueva ruta publica:
  - `src/app/(marketing)/triage/page.tsx`
- Nuevos componentes de UI:
  - `src/features/marketing/components/triage/TriageWizard.tsx`
  - `src/features/marketing/components/triage/TriageIntro.tsx`
  - `src/features/marketing/components/triage/SpeciesStep.tsx`
  - `src/features/marketing/components/triage/CategoryStep.tsx`
  - `src/features/marketing/components/triage/SymptomsStep.tsx`
  - `src/features/marketing/components/triage/ModifiersStep.tsx`
  - `src/features/marketing/components/triage/TriageResultCard.tsx`
- El flujo implementado cubre:
  - aviso inicial
  - especie
  - categoria
  - sintomas
  - modificadores
  - resultado
- `score-triage.ts` sigue siendo la fuente de verdad para el resultado.

### Riesgos
- Mitigado: construir el wizard dentro de un solo archivo.
- Mitigado: duplicar logica de scoring en componentes visuales.
- Pendiente: el scoring y el copy del resultado aun requieren validacion clinica adicional antes de considerarse endurecidos.

### Decisiones tomadas
- `page.tsx` se mantuvo como composicion simple.
- El wizard se implemento como componente cliente.
- No se introdujo backend, persistencia, analytics ni autenticacion.
- La ruta se expuso sin tocar `/`, `/contacto`, `/servicios` ni `/tecnologia`.

### Archivos tocados o auditados
- `src/app/(marketing)/triage/page.tsx`
- `src/features/marketing/components/triage/TriageWizard.tsx`
- `src/features/marketing/components/triage/TriageIntro.tsx`
- `src/features/marketing/components/triage/SpeciesStep.tsx`
- `src/features/marketing/components/triage/CategoryStep.tsx`
- `src/features/marketing/components/triage/SymptomsStep.tsx`
- `src/features/marketing/components/triage/ModifiersStep.tsx`
- `src/features/marketing/components/triage/TriageResultCard.tsx`
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_9_TRIAGE_WIZARD_MVP.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`
- `docs/INTERVENCION_FASE_9_TRIAGE_WIZARD_MVP.md`

### Pendientes
- Revisar calibracion del triage con criterio veterinario.
- Decidir en otra fase si `/triage` debe entrar a la navegacion principal.
- Evaluar tracking ligero en una fase posterior.

### Supuestos prohibidos
- No asumir que el triage ya sustituye orientacion clinica profesional.
- No asumir que la simple exposicion de `/triage` implica que el modulo ya esta listo para promocion amplia.

## Entrada 2026-03-23 23:05:00 -06:00

### Tipo
- Documentacion

### Resumen ejecutivo
- Se cerro la trazabilidad documental pendiente del roadmap y del triage.
- Tambien se audito si `/triage` debe entrar ya a la navegación principal.
- La recomendacion actual es mantener `/triage` activo pero no destacado todavia.

### Cambios o hallazgos
- Se reconocen formalmente como documentacion base committed:
  - `docs/ROADMAP_GROWTH_HOSPITAL_MARKETING.md`
  - `docs/TRIAGE_FUNCTIONAL_SPEC.md`
  - `docs/TRIAGE_IMPLEMENTATION_PLAN.md`
- Nueva auditoria:
  - `docs/TRIAGE_EXPOSURE_DECISION_AUDIT.md`
- La evidencia actual muestra que:
  - `/triage` existe y funciona
  - el scoring sigue en estado MVP
  - no hay analytics ni calibracion clinica endurecida
  - la navegación principal actual sigue centrada en servicios, tecnología y contacto

### Riesgos
- Mitigado: dejar sin commit la base documental del triage.
- Mitigado: tomar una decision de exposición por intuicion.
- Pendiente: si el triage gana visibilidad futura, habrá que endurecer medición y validación clínica.

### Decisiones tomadas
- El roadmap y la documentacion base del triage se consolidan como parte formal del repo.
- `/triage` se recomienda como ruta existente pero no prominente por ahora.
- No se modifica todavía navbar, mobile menu, hero ni footer.

### Archivos tocados o auditados
- `docs/ROADMAP_GROWTH_HOSPITAL_MARKETING.md`
- `docs/TRIAGE_FUNCTIONAL_SPEC.md`
- `docs/TRIAGE_IMPLEMENTATION_PLAN.md`
- `docs/TRIAGE_EXPOSURE_DECISION_AUDIT.md`
- `docs/AI_CONTEXT_LOG.md`
- `src/app/(marketing)/triage/page.tsx`
- `src/features/marketing/components/triage/TriageWizard.tsx`
- `src/features/marketing/components/triage/TriageResultCard.tsx`
- `src/components/shared/navbar.tsx`
- `src/components/shared/footer.tsx`
- `src/features/marketing/components/Hero.tsx`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`
- `docs/TRIAGE_EXPOSURE_DECISION_AUDIT.md`

### Pendientes
- Reevaluar la exposición principal de `/triage` cuando exista validación clínica y estrategia de medición mínima.
- Decidir en otra fase si el entrypoint correcto debe ser navbar, hero, landing dedicada o CTA de urgencias.

### Supuestos prohibidos
- No asumir que una ruta funcional debe entrar automáticamente al navbar.
- No asumir que el estado MVP actual del triage ya justifica exposición principal.

## Entrada 2026-03-23 23:35:00 -06:00

### Tipo
- Refactor

### Resumen ejecutivo
- Se ejecuto una fase ligera de hardening sobre el modulo de triage sin tocar navegacion ni scoring heuristico de fondo.
- El objetivo fue reducir riesgos de copy ambiguo, exceso de precision percibida y friccion UX evidente antes de cualquier soft launch.
- Tambien se dejo un checklist documental para prueba controlada.

### Cambios o hallazgos
- Se ajusto microcopy en:
  - `src/features/marketing/components/triage/TriageIntro.tsx`
  - `src/features/marketing/components/triage/SpeciesStep.tsx`
  - `src/features/marketing/components/triage/CategoryStep.tsx`
  - `src/features/marketing/components/triage/SymptomsStep.tsx`
  - `src/features/marketing/components/triage/ModifiersStep.tsx`
  - `src/features/marketing/components/triage/TriageResultCard.tsx`
  - `src/features/marketing/components/triage/score-triage.ts`
- Se agrego mensaje de fallback cuando no hay sintomas disponibles en una combinacion del MVP.
- Se endurecio el aviso legal y se redujo el tono potencialmente demasiado concluyente de los resultados.
- Se creo `docs/TRIAGE_SOFT_LAUNCH_CHECKLIST.md`.

### Riesgos
- Mitigado: falsa precision percibida en el resultado.
- Mitigado: instrucciones poco claras en el flujo.
- Mitigado: copy que podia sonar mas concluyente de lo deseable para un MVP heuristico.
- Pendiente: validacion clinica del scoring y del copy final.

### Decisiones tomadas
- No se toco navbar, hero, mobile menu ni footer.
- No se expuso `/triage` en la navegacion principal.
- No se modifico la logica heuristica de clasificacion.
- El hardening se limito a copy, microcopy y preparacion documental para soft launch.

### Archivos tocados o auditados
- `src/features/marketing/components/triage/TriageIntro.tsx`
- `src/features/marketing/components/triage/SpeciesStep.tsx`
- `src/features/marketing/components/triage/CategoryStep.tsx`
- `src/features/marketing/components/triage/SymptomsStep.tsx`
- `src/features/marketing/components/triage/ModifiersStep.tsx`
- `src/features/marketing/components/triage/TriageResultCard.tsx`
- `src/features/marketing/components/triage/score-triage.ts`
- `docs/TRIAGE_SOFT_LAUNCH_CHECKLIST.md`
- `docs/INTERVENCION_FASE_10_TRIAGE_HARDENING_LIGERO.md`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/TRIAGE_SOFT_LAUNCH_CHECKLIST.md`
- `docs/INTERVENCION_FASE_10_TRIAGE_HARDENING_LIGERO.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- Revision clinica del scoring y del copy final.
- Definir medicion minima antes de un soft launch mas visible.
- Reevaluar mas adelante si el triage debe exponerse en entradas principales del sitio.

### Supuestos prohibidos
- No asumir que endurecer el copy equivale a validacion clinica completa.
- No asumir que el triage ya esta listo para promocion amplia solo porque el flujo es mas claro.

## Entrada 2026-03-24 00:05:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- Se agrego tracking minimo al modulo de triage para soportar un soft launch controlado.
- La estrategia elegida evita dependencias pesadas y mantiene separacion limpia entre tracking, scoring y UI.
- No se modifico navegacion principal ni se introdujo backend.

### Cambios o hallazgos
- Nuevo helper:
  - `src/features/marketing/components/triage/track-triage.ts`
- Eventos implementados:
  - `triage_started`
  - `triage_species_selected`
  - `triage_category_selected`
  - `triage_result_shown`
  - `triage_primary_cta_clicked`
  - `triage_secondary_cta_clicked`
  - `triage_reset`
- El helper emite:
  - `CustomEvent("triage:track")`
  - push opcional a `window.dataLayer`
  - `console.info` en desarrollo

### Riesgos
- Mitigado: soft launch sin observabilidad minima.
- Mitigado: necesidad de integrar una plataforma analitica pesada antes de validar el feature.
- Pendiente: la capa actual no provee persistencia ni dashboard por si sola.

### Decisiones tomadas
- El tracking se mantuvo local al modulo de triage.
- No se mezclo tracking con scoring heuristico.
- No se toco navbar, mobile menu, hero ni footer.
- No se agrego analytics real, solo preparacion minima para conectarlo despues.

### Archivos tocados o auditados
- `src/features/marketing/components/triage/track-triage.ts`
- `src/features/marketing/components/triage/TriageWizard.tsx`
- `src/features/marketing/components/triage/TriageResultCard.tsx`
- `docs/TRIAGE_SOFT_LAUNCH_CHECKLIST.md`
- `docs/INTERVENCION_FASE_11_TRIAGE_TRACKING_MINIMO.md`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/TRIAGE_SOFT_LAUNCH_CHECKLIST.md`
- `docs/INTERVENCION_FASE_11_TRIAGE_TRACKING_MINIMO.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- Conectar esta capa minima a una herramienta real si el soft launch demuestra traccion.
- Revisar resultados y conversion antes de decidir mayor visibilidad.

### Supuestos prohibidos
- No asumir que emitir eventos locales equivale a analitica completa.
- No asumir que el tracking minimo ya justifica exponer `/triage` en navegacion principal.

## Entrada 2026-03-24 00:35:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- Se ejecuto un soft launch controlado del triage con un unico entrypoint secundario dentro del home.
- `/triage` sigue fuera de la navegacion principal, pero ya cuenta con una exposicion contextual y reversible.
- El objetivo fue probar descubribilidad sin sobreexponer un MVP heuristico.

### Cambios o hallazgos
- Se agrego un CTA contextual hacia `/triage` dentro de la tarjeta `Urgencias 24/7` en `src/features/marketing/components/ServicesGrid.tsx`.
- No se tocaron `navbar`, `mobile menu`, `hero` ni `footer`.
- Se actualizo el checklist de soft launch para reflejar la nueva exposicion controlada.

### Riesgos
- Mitigado: seguir con `/triage` completamente oculto pese a tener tracking minimo disponible.
- Mitigado: mover el triage demasiado pronto a una posicion principal del sitio.
- Pendiente: observar si el CTA contextual realmente aporta descubribilidad sin desviar indebidamente urgencias directas.

### Decisiones tomadas
- Se eligio un solo punto de entrada secundario.
- Se eligio la tarjeta `Urgencias 24/7` por coherencia de intencion clinica y bajo riesgo UX.
- El triage sigue sin ganar prominencia global.

### Archivos tocados o auditados
- `src/features/marketing/components/ServicesGrid.tsx`
- `docs/TRIAGE_SOFT_LAUNCH_CHECKLIST.md`
- `docs/INTERVENCION_FASE_12_TRIAGE_SOFT_LAUNCH.md`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/TRIAGE_SOFT_LAUNCH_CHECKLIST.md`
- `docs/INTERVENCION_FASE_12_TRIAGE_SOFT_LAUNCH.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- Monitorear uso y finalizacion del triage desde este entrypoint secundario.
- Reevaluar mas adelante si se mantiene, se retira o se amplifica esta exposicion.

### Supuestos prohibidos
- No asumir que un CTA contextual exitoso implica que el triage ya debe ir al navbar.
- No asumir que el entrypoint elegido es definitivo si las metricas del soft launch no lo respaldan.

## Entrada 2026-03-23 21:40:00 -06:00

### Tipo
- Documentacion

### Resumen ejecutivo
- El modulo de triage veterinario MVP queda formalmente reconocido como siguiente feature prioritario de valor dentro del roadmap activo del repo.
- Ya existe base documental suficiente para evitar improvisacion en una futura implementacion.
- En esta fase no se implemento codigo.

### Cambios o hallazgos
- Ya existe `docs/TRIAGE_FUNCTIONAL_SPEC.md`.
- Ya existe `docs/TRIAGE_IMPLEMENTATION_PLAN.md`.
- El objetivo funcional del triage queda fijado en:
  - orientacion inicial
  - clasificacion de urgencia
  - conversion
- El roadmap ya reconoce el triage como prioridad alta de Fase 1 con soporte documental existente.

### Riesgos
- Mitigado: iniciar implementacion futura sin alcance funcional ni plan tecnico documentados.
- Mitigado: confusion entre triage MVP y portal de clientes.
- Pendiente: el feature sigue sin implementacion real y requerira una fase separada para construccion segura.

### Decisiones tomadas
- El triage se reconoce formalmente como siguiente modulo prioritario de crecimiento con foco hospitalario.
- Sigue fuera de alcance en esta fase:
  - portal de clientes
  - backend
  - login
  - IA real
  - historial
  - diagnostico automatico
- No se crea aun ruta, componente ni logica de scoring en codigo.

### Archivos tocados o auditados
- `docs/ROADMAP_GROWTH_HOSPITAL_MARKETING.md`
- `docs/AI_CONTEXT_LOG.md`
- `docs/TRIAGE_FUNCTIONAL_SPEC.md`
- `docs/TRIAGE_IMPLEMENTATION_PLAN.md`

### Documentacion actualizada
- `docs/ROADMAP_GROWTH_HOSPITAL_MARKETING.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- Definir una fase de implementacion segura para `triage` cuando se autorice construccion.
- Validar posteriormente el scoring con criterio veterinario antes de exponer el modulo al publico.

### Supuestos prohibidos
- No asumir que el triage ya existe en `src/app`.
- No asumir que la documentacion actual autoriza backend, autenticacion o integraciones avanzadas.

## Entrada 2026-03-24 01:05:00 -06:00

### Tipo
- Documentacion

### Resumen ejecutivo
- Se audito el estado actual del soft launch controlado de `/triage`.
- La recomendacion operativa actual es mantener el unico entrypoint secundario ya implementado y no ampliar todavia su exposicion.
- Tambien se actualizo el resumen operativo del repo para reflejar que `triage` ya esta implementado, cuenta con tracking minimo y sigue fuera de navegacion principal.

### Cambios o hallazgos
- El entrypoint actual sigue ubicado en la tarjeta `Urgencias 24/7` de `src/features/marketing/components/ServicesGrid.tsx`.
- El CTA secundario es coherente con la intencion del usuario, pero su contexto exige vigilar que no compita con la accion directa de urgencias.
- El tracking minimo actual cubre:
  - inicio de flujo
  - seleccion de especie
  - seleccion de categoria
  - visualizacion de resultado
  - clic en CTA principal
  - clic en CTA secundario
  - reset del flujo
- Aun faltan senales mas finas para evaluacion avanzada, como origen exacto del entrypoint y abandono por paso.

### Riesgos
- Mitigado: tomar la siguiente decision de exposicion del triage sin criterios documentados.
- Mitigado: perder trazabilidad del estado real del soft launch dentro del repo.
- Pendiente: el triage sigue siendo un MVP heuristico y todavia no debe pasar a navegacion principal.

### Decisiones tomadas
- Mantener `/triage` fuera de navbar y mobile menu.
- Mantener el unico CTA secundario actual como mecanismo de soft launch controlado.
- Posponer cualquier segunda exposicion hasta contar con evidencia minima de uso y claridad UX.

### Archivos tocados o auditados
- `src/features/marketing/components/ServicesGrid.tsx`
- `src/features/marketing/components/triage/TriageWizard.tsx`
- `src/features/marketing/components/triage/track-triage.ts`
- `docs/TRIAGE_SOFT_LAUNCH_EVALUATION.md`
- `docs/REPO_STATUS_SUMMARY.md`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/TRIAGE_SOFT_LAUNCH_EVALUATION.md`
- `docs/REPO_STATUS_SUMMARY.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- Observar el comportamiento real del funnel del triage durante el soft launch.
- Definir si el CTA actual debe mantenerse, retirarse o complementarse con una segunda exposicion controlada.
- Evaluar en otra fase si conviene capturar origen de entrypoint y abandono por paso.

### Supuestos prohibidos
- No asumir que el simple hecho de tener tracking minimo ya justifica mas visibilidad.
- No asumir que el CTA actual en urgencias es definitivo sin evidencia de uso real.

## Entrada 2026-03-24 01:35:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- Se agrego una capa ligera adicional de observabilidad al modulo de triage para leer mejor el soft launch actual.
- La mejora no cambia la exposicion del feature, no agrega entrypoints nuevos y no modifica scoring.
- El objetivo fue identificar mejor el origen de entrada y obtener una lectura minima de progresion y abandono por paso.

### Cambios o hallazgos
- El CTA contextual actual en `src/features/marketing/components/ServicesGrid.tsx` ahora deja trazado su origen mediante query param.
- `src/features/marketing/components/triage/track-triage.ts` ahora soporta:
  - `triage_entrypoint_detected`
  - `triage_step_viewed`
  - `triage_step_abandoned`
- El payload de tracking se amplio con:
  - `entrypoint_source`
  - `step_name`
  - `step_index`
- `src/features/marketing/components/triage/TriageWizard.tsx` ahora emite senales de vista de paso y abandono aproximado sin mezclar tracking con scoring.

### Riesgos
- Mitigado: seguir evaluando el soft launch sin saber de donde proviene el acceso actual.
- Mitigado: no tener lectura minima de progresion del wizard.
- Pendiente: `triage_step_abandoned` sigue siendo una aproximacion ligera y no una medicion exacta.

### Decisiones tomadas
- Mantener el tracking local y sin dependencias nuevas.
- Usar el entrypoint actual de `ServicesGrid` como unica fuente etiquetada en esta fase.
- Tratar abandono por paso como senal orientativa basada en reinicio o salida de pagina desde pasos intermedios.

### Archivos tocados o auditados
- `src/features/marketing/components/ServicesGrid.tsx`
- `src/features/marketing/components/triage/TriageWizard.tsx`
- `src/features/marketing/components/triage/track-triage.ts`
- `docs/TRIAGE_SOFT_LAUNCH_CHECKLIST.md`
- `docs/INTERVENCION_FASE_13_TRIAGE_OBSERVABILIDAD_LIGERA.md`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/TRIAGE_SOFT_LAUNCH_CHECKLIST.md`
- `docs/INTERVENCION_FASE_13_TRIAGE_OBSERVABILIDAD_LIGERA.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- Observar si el abandono se concentra en algun paso concreto.
- Decidir mas adelante si hace falta capturar mayor granularidad o conectar el tracking a una herramienta externa.
- Mantener `/triage` fuera de navegacion principal mientras el scoring siga en estado MVP heuristico.

### Supuestos prohibidos
- No asumir que `triage_step_abandoned` representa abandono exacto del usuario en todos los casos.
- No asumir que mayor observabilidad ya justifica ampliar exposicion del feature.

## Entrada 2026-03-24 01:55:00 -06:00

### Tipo
- Documentacion

### Resumen ejecutivo
- Se agrego una guia formal de lectura para observar el soft launch actual del triage durante una ventana corta de uso real.
- En esta fase no hubo cambios de producto, tracking ni exposicion.
- La siguiente decision sobre visibilidad o ajustes del modulo queda condicionada a observacion real del patron de uso.

### Cambios o hallazgos
- Nuevo documento:
  - `docs/TRIAGE_SOFT_LAUNCH_READOUT_GUIDE.md`
- La guia fija:
  - ventana sugerida de observacion
  - lectura base del funnel actual
  - senales minimas a observar
  - criterios para mantener, ajustar, recalibrar, ampliar o retirar exposicion
- Se actualizo el resumen operativo del repo para reflejar que el triage ya cuenta con guia formal de lectura para soft launch.

### Riesgos
- Mitigado: interpretar el soft launch solo por intuicion o por conteo aislado de clics.
- Mitigado: tomar una decision de visibilidad futura sin marco operativo comun.
- Pendiente: la lectura sigue dependiendo de observacion real; no existe aun consolidacion automatizada fuera del tracking actual.

### Decisiones tomadas
- No tocar codigo ni tracking en esta fase.
- No cambiar la exposicion actual del triage.
- Usar una ventana corta de observacion real antes de decidir el siguiente movimiento del modulo.

### Archivos tocados o auditados
- `docs/TRIAGE_SOFT_LAUNCH_READOUT_GUIDE.md`
- `docs/REPO_STATUS_SUMMARY.md`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/TRIAGE_SOFT_LAUNCH_READOUT_GUIDE.md`
- `docs/REPO_STATUS_SUMMARY.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- Ejecutar la observacion real del soft launch en la ventana definida.
- Decidir despues si corresponde mantener, ajustar o ampliar la exposicion.

### Supuestos prohibidos
- No asumir que volumen bajo permite conclusiones firmes.
- No asumir que mas clics por si solos implican mejor ajuste del modulo.
