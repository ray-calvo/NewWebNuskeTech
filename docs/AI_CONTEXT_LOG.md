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

## Entrada 2026-03-24 02:25:00 -06:00

### Tipo
- Refactor

### Resumen ejecutivo
- Se rediseño la sección `MedicalTeam` con un enfoque premium de hospital veterinario.
- La sección dejó de comportarse como una grilla plana de staff y pasó a comunicar jerarquía clínica, dirección médica y capacidad hospitalaria.
- No se tocaron otras secciones, rutas ni navegación.

### Cambios o hallazgos
- `src/features/marketing/components/MedicalTeam.tsx` fue reescrita para operar en tres capas:
  - Dirección Médica
  - Guardia Hospitalaria y Cuidados Críticos
  - Especialidades Quirúrgicas y Diagnóstico Avanzado
- Se incorporaron las imágenes reales locales del equipo a la sección:
  - `public/marketing/team/Alexis.webp`
  - `public/marketing/team/Alondra.webp`
  - `public/marketing/team/Diana.webp`
  - `public/marketing/team/Janine.webp`
- El copy se ajustó para reforzar autoridad clínica, alta especialidad y orientación hospitalaria.

### Riesgos
- Mitigado: mantener una percepción de staff genérico sin liderazgo clínico visible.
- Mitigado: usar una galería uniforme que no diferenciara dirección médica, guardia crítica y especialidades.
- Pendiente: si la sección sigue creciendo con más perfiles, puede requerir extracción estructural en otra fase.

### Decisiones tomadas
- Mantener el trabajo acotado a `MedicalTeam.tsx` y a los assets de imagen directamente necesarios.
- Dar al director médico el mayor peso visual.
- Mantener CTAs alineados a rutas existentes (`/contacto` y `/servicios`) sin tocar navegación global.

### Archivos tocados o auditados
- `src/features/marketing/components/MedicalTeam.tsx`
- `public/marketing/team/Alexis.webp`
- `public/marketing/team/Alondra.webp`
- `public/marketing/team/Diana.webp`
- `public/marketing/team/Janine.webp`
- `docs/INTERVENCION_FASE_14_MEDICAL_TEAM_PREMIUM_REDIGN.md`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/INTERVENCION_FASE_14_MEDICAL_TEAM_PREMIUM_REDIGN.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- Revisar en QA visual final si la lectura de jerarquía se mantiene fuerte en móvil.
- Evaluar más adelante si el equipo médico merece una estructura de datos propia si aumentan perfiles o subespecialidades.

### Supuestos prohibidos
- No asumir que este rediseño autoriza rehacer otras secciones del home.
- No asumir que la narrativa premium sustituye la necesidad de mantener consistencia clínica real en futuros contenidos.

## Entrada 2026-03-24 03:05:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- Se rediseñó el inicio del sitio marketing para reforzar un posicionamiento de hospital veterinario de alta complejidad.
- La franja superior pasó a operar como sistema funcional de urgencias 24/7.
- El hero fue reposicionado para destacar capacidad hospitalaria, cirugía avanzada, atención crítica y respuesta inmediata.

### Cambios o hallazgos
- `src/components/shared/urgency-banner.tsx` ahora incluye:
  - mensaje operativo de urgencias
  - CTA de llamada
  - CTA de WhatsApp
  - CTA de cómo llegar
- `src/features/marketing/components/Hero.tsx` dejó atrás el concepto visual tipo mockup y ahora usa una imagen clínica real remota ya compatible con el repo.
- Se añadió indicador visible:
  - `Guardia hospitalaria activa 24/7`
- Se ajustaron `src/components/shared/navbar.tsx` y `src/components/shared/MobileMenu.tsx` para respetar el nuevo header superior sticky.

### Riesgos
- Mitigado: mantener una lectura de home demasiado genérica o promocional.
- Mitigado: seguir tratando urgencias como contenido accesorio.
- Pendiente: validar percepción visual final del stack sticky en uso real móvil y desktop.

### Decisiones tomadas
- Mantener la intervención acotada a barra superior y hero.
- Reutilizar una imagen clínica remota ya permitida por `next.config.ts` en vez de introducir nuevos assets.
- No tocar rutas, tracking, triage, servicios, tecnología, contacto ni `MedicalTeam`.

### Archivos tocados o auditados
- `src/components/shared/urgency-banner.tsx`
- `src/components/shared/navbar.tsx`
- `src/components/shared/MobileMenu.tsx`
- `src/features/marketing/components/Hero.tsx`
- `docs/INTERVENCION_FASE_15_HOME_HOSPITAL_POSITIONING.md`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/INTERVENCION_FASE_15_HOME_HOSPITAL_POSITIONING.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- Revisar si el hero requiere un asset propio futuro para reforzar aún más el posicionamiento hospitalario.
- Validar en QA visual que la relación entre franja de urgencias y navbar siga siendo cómoda en scroll y navegación móvil.

### Supuestos prohibidos
- No asumir que este cambio autoriza rehacer otras secciones del home.
- No asumir que el reposicionamiento visual reemplaza la necesidad de mantener CTAs de urgencias realmente operativos.

## Entrada 2026-03-24 03:40:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- Se rediseñó la sección `ServicesGrid` para comunicar capacidad hospitalaria integral en vez de un listado veterinario tradicional.
- La nueva jerarquía pone primero urgencias y paciente crítico, luego cirugía y diagnóstico, y finalmente mínima invasión y atención preventiva.
- No se tocaron triage, home fuera de esta sección, `MedicalTeam`, rutas ni tracking.

### Cambios o hallazgos
- `src/features/marketing/components/ServicesGrid.tsx` fue reestructurada en cinco capacidades clínicas:
  - Atención Veterinaria de Emergencias 24/7
  - Cirugía Veterinaria Especializada
  - Diagnóstico Médico Avanzado
  - Procedimientos de Mínima Invasión
  - Atención Integral y Preventiva
- El bloque de urgencias conserva el CTA contextual hacia `/triage?entrypoint=services-grid-urgencias`.
- La tecnología quedó subordinada al contexto clínico y hospitalario.

### Riesgos
- Mitigado: mantener una percepción de catálogo plano o clínica básica.
- Mitigado: perder el punto de entrada secundario del triage al tocar urgencias.
- Pendiente: si el contenido sigue creciendo, puede requerir extracción estructural para mantener claridad del componente.

### Decisiones tomadas
- Mantener el trabajo concentrado en `ServicesGrid.tsx`.
- Hacer de urgencias el bloque principal y más visible.
- Alinear los CTAs a rutas y acciones ya existentes:
  - llamada directa
  - `/contacto`
  - `/servicios`

### Archivos tocados o auditados
- `src/features/marketing/components/ServicesGrid.tsx`
- `docs/INTERVENCION_FASE_16_SERVICIOS_HOSPITAL_POSITIONING.md`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/INTERVENCION_FASE_16_SERVICIOS_HOSPITAL_POSITIONING.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- Verificar en QA visual si el bloque de urgencias mantiene dominancia clara en móvil.
- Evaluar más adelante si conviene separar datos y presentación si la sección vuelve a crecer.

### Supuestos prohibidos
- No asumir que esta intervención autoriza rehacer otras áreas del home.
- No asumir que la presencia de tecnología justifica volver a un enfoque centrado en equipamiento y no en capacidad médica.

## Entrada 2026-03-24 04:05:00 -06:00

### Tipo
- Refactor

### Resumen ejecutivo
- Se alineó la página `/servicios` con el posicionamiento hospitalario integral ya aplicado en la home.
- La página dejó de presentarse como un catálogo separado y pasó a funcionar como extensión natural de la narrativa hospitalaria del sitio.
- No se tocó la home, ni triage, ni `MedicalTeam`, ni rutas.

### Cambios o hallazgos
- `src/features/marketing/components/services/ServicesPageHero.tsx` fue reformulado con un encabezado hospitalario integral.
- `src/features/marketing/components/services/data.ts` dejó de organizar la página en `Especialidades / Urgencias / Preventivos` y pasó a:
  - Urgencias y Paciente Crítico
  - Cirugía Veterinaria Especializada
  - Diagnóstico Médico Avanzado
  - Procedimientos de Mínima Invasión
  - Atención Integral y Preventiva
- `WellnessSelector` se conservó, pero quedó subordinado a continuidad preventiva.
- `DigitalServicesSection` se reformuló para presentar Portal del Propietario y Telemedicina como soporte complementario de continuidad clínica.

### Riesgos
- Mitigado: sostener una desalineación narrativa entre home y `/servicios`.
- Mitigado: borrar de forma agresiva Wellness, Portal o Telemedicina sin tratamiento gradual.
- Pendiente: si el volumen de contenido sigue creciendo, la página puede requerir una siguiente capa de extracción para evitar volver a concentrar demasiada carga narrativa.

### Decisiones tomadas
- No tocar `ServicesGrid.tsx` de la home.
- Alinear `/servicios` por narrativa, orden y copy, no por duplicación literal del home.
- Mantener Wellness, Portal y Telemedicina, pero subordinados a la historia principal de capacidad hospitalaria.

### Archivos tocados o auditados
- `src/app/(marketing)/servicios/page.tsx`
- `src/features/marketing/components/services/ServicesPageHero.tsx`
- `src/features/marketing/components/services/DigitalServicesSection.tsx`
- `src/features/marketing/components/services/data.ts`
- `docs/INTERVENCION_FASE_17_SERVICIOS_PAGE_ALIGNMENT.md`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/INTERVENCION_FASE_17_SERVICIOS_PAGE_ALIGNMENT.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- Revisar visualmente si Wellness queda claramente subordinado en móvil.
- Evaluar más adelante si los bloques de continuidad preventiva merecen una separación estructural mayor.

### Supuestos prohibidos
- No asumir que la alineación de `/servicios` autoriza rehacer la home en esta misma fase.
- No asumir que Wellness, Portal y Telemedicina ya están resueltos de forma definitiva solo por haber sido subordinados.

## Entrada 2026-03-24 10:20:00 -06:00

### Tipo
- Documentacion

### Resumen ejecutivo
- Se auditó el sitio legacy público de Nuskë Vet Center para construir un inventario operativo exacto de páginas, clusters y módulos de contenido faltantes para la nueva web.
- La conclusión principal es que la nueva web no debe migrar el árbol legacy URL por URL.
- El enfoque recomendado es implementar por clusters canónicos hospitalarios y rescatar módulos valiosos desde las landings `lp/*`.

### Cambios o hallazgos
- Se clasificaron las URLs legacy en:
  - páginas canónicas hospitalarias
  - páginas diferenciadoras premium
  - páginas preventivas / continuidad clínica
  - páginas comerciales subordinadas
  - landings de campaña
- Se confirmaron duplicidades fuertes:
  - `urgencias` + `urgencias-24h`
  - `cirugia` + `cirugia-especializada` + `lp/cirugia`
  - `endoscopia` + `minima-invasion` + `lp/endoscopia`
  - `imagenologia` + `lp/imagenologia`
  - `hospitalizacion` + `lp/hospitalizacion`
  - `limpieza-dental` + `lp/profilaxis-dental`
  - `guarderia` + `lp/pension`
  - `pet-grooming` + `lp/pet-grooming`
- Las landings `lp/*` aportan la mayor densidad de módulos reutilizables:
  - hero clínico
  - protocolo de emergencia
  - FAQ
  - señales de alerta
  - comparativas
  - qué esperar
  - CTA operativas

### Riesgos
- Mitigado: planear futuras páginas desde intuición o desde títulos aislados sin revisar contenido legacy real.
- Mitigado: crear páginas nuevas duplicando intención ya existente en varias URLs legacy.
- Pendiente: varias URLs legacy aportan poco contenido visible y quedan marcadas como `requiere validacion adicional`.

### Decisiones tomadas
- Prioridad 1 de implementación futura:
  - urgencias y paciente crítico
  - cirugía hospitalaria y procedimientos especializados
  - endoscopia y mínima invasión
  - diagnóstico hospitalario
- Prioridad 2:
  - atención integral y preventiva
  - exóticos
- Prioridad 3:
  - medicina interna / oncología / dolor
  - grooming / pensión como cluster comercial subordinado
- La documentación del roadmap se ajustó para reflejar esta priorización concreta.

### Archivos tocados o auditados
- `docs/LEGACY_SITE_CONTENT_INVENTORY.md`
- `docs/LEGACY_SITE_IMPLEMENTATION_BACKLOG.md`
- `docs/ROADMAP_GROWTH_HOSPITAL_MARKETING.md`
- `docs/AI_CONTEXT_LOG.md`
- URLs legacy públicas de `nuskevetcenter.com` auditadas para esta fase

### Documentacion actualizada
- `docs/LEGACY_SITE_CONTENT_INVENTORY.md`
- `docs/LEGACY_SITE_IMPLEMENTATION_BACKLOG.md`
- `docs/ROADMAP_GROWTH_HOSPITAL_MARKETING.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- Traducir el backlog documental en fases de implementación concretas cuando se autorice construcción de nuevas páginas.
- Validar adicionalmente las URLs legacy con contenido fuente escaso antes de convertirlas en páginas de alta inversión editorial.

### Supuestos prohibidos
- No asumir que cada URL legacy merece una página nueva independiente.
- No asumir que una landing `lp/*` debe migrarse literal como arquitectura final.
- No asumir que `animales-exoticos`, `medicina-interna` o `manejo-dolor` tienen densidad de contenido suficiente sin revisión adicional.

## Entrada 2026-03-24 11:05:00 -06:00

### Tipo
- Documentacion

### Resumen ejecutivo
- Se convirtió la auditoría legacy y el backlog existente en un plan técnico ejecutable por fases, aterrizado al repo actual.
- La conclusión es que sí existe base suficiente para pasar a construcción, pero solo si se respeta un orden estricto por páginas madre canónicas.
- También quedó aclarado que `/servicios` ya está mejor alineada narrativamente, pero sigue siendo una página agregadora transicional y no el estado final de la arquitectura clínica.

### Cambios o hallazgos
- Se definió un mapa canónico de arquitectura para la nueva web:
  - Urgencias y Paciente Crítico
  - Cirugía Hospitalaria y Procedimientos Especializados
  - Endoscopía y Mínima Invasión
  - Diagnóstico Hospitalario
  - Atención Integral y Preventiva
  - Exóticos condicionado
- Se documentó qué debe quedar como landing y qué debe quedar como submódulo subordinado.
- Se bajó el backlog a fases reales de implementación, con dependencias narrativas, de contenido y de componentes.
- Se aclaró el tratamiento futuro de `/servicios`:
  - hub clínico
  - no página final de profundidad
  - no sustituto de las páginas canónicas

### Riesgos
- Mitigado: iniciar construcción de páginas nuevas sin jerarquía de páginas madre.
- Mitigado: seguir usando `/servicios` como excusa para no construir páginas canónicas profundas.
- Pendiente: siguen abiertas decisiones de slugs y algunas validaciones de contenido fuente para P2 y P3.

### Decisiones tomadas
- Orden recomendado de construcción:
  - Urgencias y Paciente Crítico
  - Cirugía Hospitalaria y Procedimientos Especializados
  - Endoscopía y Mínima Invasión
  - Diagnóstico Hospitalario
  - reajuste estructural posterior de `/servicios` como hub
- `lp/*` se mantiene como fuente modular, no como arquitectura final.
- `medicina interna`, `manejo dolor`, `manejo heridas` y parte de `exóticos` quedan explícitamente marcados como decisiones aún no cerradas o dependientes de validación adicional.

### Archivos tocados o auditados
- `docs/SITE_CANONICAL_ARCHITECTURE.md`
- `docs/IMPLEMENTATION_PHASE_PLAN.md`
- `docs/SERVICES_PAGE_REALIGNMENT_PLAN.md`
- `docs/LEGACY_SITE_CONTENT_INVENTORY.md`
- `docs/LEGACY_SITE_IMPLEMENTATION_BACKLOG.md`
- `docs/INTERVENCION_FASE_17_SERVICIOS_PAGE_ALIGNMENT.md`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/SITE_CANONICAL_ARCHITECTURE.md`
- `docs/IMPLEMENTATION_PHASE_PLAN.md`
- `docs/SERVICES_PAGE_REALIGNMENT_PLAN.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- Cerrar slugs canónicos antes de abrir nuevas rutas.
- Definir ownership de componentes para futuras páginas clínicas profundas.
- Validar contenido fuente adicional para `exóticos` y clusters de segunda ola.

### Supuestos prohibidos
- No asumir que `/servicios` ya equivale al estado final solo porque su narrativa fue corregida.
- No abrir páginas satélite de ortopedia, heridas o dolor antes de sus páginas madre.
- No usar landings de campaña como arquitectura principal.

## Entrada 2026-03-24 11:40:00 -06:00

### Tipo
- Documentacion

### Resumen ejecutivo
- Se cerró la convención final de slugs, naming y nomenclatura del sitio como última capa previa a ejecución de rutas.
- La arquitectura ya puede pasar a construcción de páginas canónicas sin ambigüedad de nombres.
- Se fijó además qué slugs deben permanecer clínicos, cuáles pueden ser comerciales y qué conceptos no deben recibir ruta propia.

### Cambios o hallazgos
- Se definieron slugs canónicos finales para las páginas madre:
  - `/urgencias`
  - `/cirugia`
  - `/diagnostico`
  - `/endoscopia`
  - `/prevencion`
  - `/exoticos`
- Se cerró que `/servicios` se mantiene como hub y no debe renombrarse.
- Se definió que la vertical comercial subordinada absorbe:
  - guardería / hotel bajo `/pension`
  - pet grooming bajo `/estetica`
- Se cerró que:
  - `hospitalizacion`
  - `laboratorio`
  - `minima-invasion`
  - `manejo-de-heridas`
  - `manejo-del-dolor`
  no deben abrirse como rutas madre en esta arquitectura.

### Riesgos
- Mitigado: abrir ejecución de rutas con naming inconsistente entre páginas madre y submódulos.
- Mitigado: reintroducir duplicidades legacy como `cirugia-especializada` o `imagenologia` como rutas principales paralelas.
- Pendiente: `exoticos` sigue dependiendo de decisión estratégica de publicación, no de naming.

### Decisiones tomadas
- Páginas madre con slugs cortos y clínicos.
- Singular para capacidades madre salvo excepciones naturales:
  - `/urgencias`
  - `/servicios`
  - `/exoticos`
- Las landings futuras deben permanecer bajo `/lp/`.
- `prevencion` se fija como slug preferido frente a `preventiva`.
- `diagnostico` se fija como slug preferido frente a `imagenologia`.

### Archivos tocados o auditados
- `docs/CANONICAL_SLUGS_AND_NAMING.md`
- `docs/ARCHITECTURAL_FINAL_DECISIONS.md`
- `docs/SITE_CANONICAL_ARCHITECTURE.md`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/CANONICAL_SLUGS_AND_NAMING.md`
- `docs/AI_CONTEXT_LOG.md`

### Pendientes
- La única duda real que queda no es de naming sino de publicación:
  - cuándo entra `exoticos`
- Si en segunda ola se eleva `manejo del dolor` a vertical, su slug recomendado quedaría como `/dolor`, pero hoy no debe implementarse.

### Supuestos prohibidos
- No reabrir slugs legacy largos si ya existe un slug canónico corto aprobado.
- No crear rutas para submódulos solo porque tienen nombre estable.
- No sacar una landing fuera de `/lp/` para hacerla competir con una página madre.

## Entrada 2026-03-24 12:20:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- Se materializaron las rutas madre de prioridad 1 dentro del route group de marketing existente.
- Ya existen como rutas reales:
  - `/urgencias`
  - `/cirugia`
  - `/diagnostico`
  - `/endoscopia`
- Cada ruta quedó con `page.tsx` mínimo funcional, metadata básica y estructura placeholder coherente con el posicionamiento hospitalario.

### Cambios o hallazgos
- Nuevas rutas creadas:
  - `src/app/(marketing)/urgencias/page.tsx`
  - `src/app/(marketing)/cirugia/page.tsx`
  - `src/app/(marketing)/diagnostico/page.tsx`
  - `src/app/(marketing)/endoscopia/page.tsx`
- Todas heredan correctamente el layout actual de marketing con:
  - `UrgencyBanner`
  - `Navbar`
  - `Footer`
  - `WhatsAppFloat`
- No fue necesario tocar:
  - home
  - `/servicios`
  - triage
  - layouts globales

### Riesgos
- Mitigado: seguir en fase documental sin materializar la estructura real de rutas P1.
- Mitigado: abrir las siguientes fases sin base de App Router para páginas madre.
- Pendiente: las cuatro rutas siguen en estado de estructura mínima y no deben crecer desordenadamente sin extracción de componentes cuando empiece la profundidad real de contenido.

### Decisiones tomadas
- Se reutilizó el route group `src/app/(marketing)` existente.
- Se evitó crear componentes nuevos en esta fase.
- Se dejó `/servicios` intacta para no mezclar la fase de rutas con la fase futura de hub clínico.

### Archivos tocados o auditados
- `src/app/(marketing)/urgencias/page.tsx`
- `src/app/(marketing)/cirugia/page.tsx`
- `src/app/(marketing)/diagnostico/page.tsx`
- `src/app/(marketing)/endoscopia/page.tsx`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK
- Rutas activas confirmadas por build:
  - `/`
  - `/urgencias`
  - `/cirugia`
  - `/diagnostico`
  - `/endoscopia`
  - `/contacto`
  - `/servicios`
  - `/tecnologia`
  - `/triage`

### Estado documental operativo
- Documentos canónicos vigentes para la siguiente fase:
  - `docs/ARCHITECTURAL_FINAL_DECISIONS.md`
  - `docs/CANONICAL_SLUGS_AND_NAMING.md`
  - `docs/SITE_CANONICAL_ARCHITECTURE.md`
  - `docs/IMPLEMENTATION_PHASE_PLAN.md`
  - `docs/LEGACY_SITE_CONTENT_INVENTORY.md`
  - `docs/LEGACY_SITE_IMPLEMENTATION_BACKLOG.md`
- Documentos transicionales que deben conservarse por trazabilidad, no como fuente principal:
  - `docs/SERVICES_PAGE_REALIGNMENT_PLAN.md`
  - `docs/INTERVENCION_FASE_17_SERVICIOS_PAGE_ALIGNMENT.md`
  - documentos `INTERVENCION_FASE_*` anteriores
- Se decidió no reorganizar físicamente `docs/` en esta fase porque el valor inmediato era bajo frente al costo de romper referencias internas ya existentes.

### Pendientes
- Siguiente paso recomendado:
  - iniciar implementación profunda de la página `urgencias`
- No tocar todavía:
  - `prevencion`
  - `exoticos`
  - segunda ola clínica
  - hub final de `/servicios`

### Supuestos prohibidos
- No asumir que las rutas P1 ya están resueltas más allá de su estructura mínima.
- No usar los placeholders actuales como contenido final.
- No abrir UI profunda en varias rutas P1 en paralelo sin decidir antes la estrategia de componentes compartidos.

## Entrada 2026-03-24 13:10:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- `/urgencias` pasó de una estructura mínima con placeholders a una primera página madre hospitalaria real.
- La página ya comunica urgencias 24/7, paciente crítico, hospitalización como submódulo, apoyo diagnóstico, apoyo quirúrgico y CTA hospitalarias coherentes.
- La intervención se mantuvo acotada a la ruta `urgencias` y a componentes mínimos directamente relacionados.

### Cambios o hallazgos
- `src/app/(marketing)/urgencias/page.tsx` dejó de ser una página placeholder.
- Se extrajeron componentes ligeros para evitar que la ruta creciera como monolito:
  - `src/features/marketing/components/urgencias/UrgenciasHero.tsx`
  - `src/features/marketing/components/urgencias/UrgenciasSectionBlock.tsx`
  - `src/features/marketing/components/urgencias/data.ts`
- La estructura narrativa final quedó en este orden:
  - hero clínico principal
  - cuándo acudir de inmediato
  - atención a paciente crítico
  - hospitalización y monitoreo continuo
  - apoyo diagnóstico y apoyo quirúrgico
  - diferenciadores hospitalarios
  - CTA final de acción inmediata
- Se mantuvieron CTAs a:
  - llamada
  - WhatsApp
  - cómo llegar
  - triage orientativo como apoyo secundario

### Riesgos
- Mitigado: dejar `/urgencias` como ruta madre sin utilidad clínica real.
- Mitigado: profundizar la página dentro de un único archivo demasiado grande.
- Pendiente: si las siguientes páginas madre se construyen sin una estrategia mínima de componentes compartidos, puede aparecer duplicación entre `urgencias`, `cirugia`, `diagnostico` y `endoscopia`.

### Decisiones tomadas
- Hospitalización se trató como submódulo narrativo dentro de la página, no como ruta independiente.
- El triage se mantuvo como apoyo secundario y no como CTA principal.
- No se tocaron:
  - `/cirugia`
  - `/diagnostico`
  - `/endoscopia`
  - `/servicios`
  - home
  - layouts globales

### Archivos tocados o auditados
- `src/app/(marketing)/urgencias/page.tsx`
- `src/features/marketing/components/urgencias/UrgenciasHero.tsx`
- `src/features/marketing/components/urgencias/UrgenciasSectionBlock.tsx`
- `src/features/marketing/components/urgencias/data.ts`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Pendientes
- Siguiente paso recomendado:
  - profundizar `cirugia` con el mismo nivel de solidez, pero solo después de decidir si conviene reutilizar una capa mínima de secciones clínicas compartidas

### Supuestos prohibidos
- No asumir que la estructura extraída de `urgencias` ya define por sí sola el sistema completo de páginas madre.
- No copiar esta página literalmente en las demás rutas P1.
- No convertir la urgencia en landing comercial ni en página de servicios fragmentados.

## Entrada 2026-03-24 13:40:00 -06:00

### Tipo
- Refactor

### Resumen ejecutivo
- Se auditó si ya convenía extraer una capa mínima de patrones compartidos para páginas madre clínicas.
- La decisión fue afirmativa, pero solo en un nivel muy acotado:
  - scaffold placeholder de página madre
  - bloque narrativo reutilizable de sección
- No se creó un sistema genérico grande ni se tocó el copy profundo de páginas todavía no desarrolladas.

### Cambios o hallazgos
- Las rutas placeholder `cirugia`, `diagnostico` y `endoscopia` repetían exactamente la misma estructura:
  - badge
  - H1
  - descripción
  - tres cards placeholder
  - CTA principal y secundaria
- En `urgencias` ya existía un patrón reusable real:
  - encabezado narrativo de sección
  - grilla de bullets reutilizable
- Se extrajeron dos piezas compartidas:
  - `src/features/marketing/components/clinical/ClinicalParentPageScaffold.tsx`
  - `src/features/marketing/components/clinical/ClinicalSection.tsx`
- `UrgenciasSectionBlock.tsx` dejó de existir y fue absorbido por el patrón clínico compartido.

### Riesgos
- Mitigado: duplicación temprana entre `cirugia`, `diagnostico` y `endoscopia`.
- Mitigado: dejar que `urgencias` generara un patrón reusable sin consolidarlo a tiempo.
- Pendiente: el hero clínico todavía no se estandariza y eso es intencional; si se fuerza antes de profundizar otra página madre, puede aparecer una abstracción demasiado rígida.

### Decisiones tomadas
- Sí se estandarizó:
  - scaffold mínimo de página madre placeholder
  - bloque de sección narrativa
  - bullet grid clínico
- Deliberadamente NO se estandarizó:
  - hero clínico principal
  - CTA hospitalaria profunda
  - datos de dominio
  - layouts específicos de cada capacidad
- `/urgencias` se mantuvo como referencia más profunda, no como template literal de las demás.

### Archivos tocados o auditados
- `src/features/marketing/components/clinical/ClinicalParentPageScaffold.tsx`
- `src/features/marketing/components/clinical/ClinicalSection.tsx`
- `src/app/(marketing)/urgencias/page.tsx`
- `src/app/(marketing)/cirugia/page.tsx`
- `src/app/(marketing)/diagnostico/page.tsx`
- `src/app/(marketing)/endoscopia/page.tsx`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Pendientes
- Siguiente paso recomendado:
  - profundizar `/cirugia` usando el scaffold solo como base de salida, no como límite de diseño
- Antes de profundizar una tercera página madre, reevaluar si hace falta una capa compartida adicional para hero clínico o CTA finales.

### Supuestos prohibidos
- No convertir el scaffold placeholder en layout universal obligatorio.
- No asumir que todo patrón visual de `urgencias` ya debe compartirse.
- No expandir esta capa compartida a más abstracciones hasta ver una segunda página madre profunda real.

## Entrada 2026-03-24 14:15:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- `/cirugia` pasó de scaffold mínimo a página madre clínica real con narrativa quirúrgica propia.
- La página ya comunica valoración quirúrgica, cirugía hospitalaria, seguridad anestésica, apoyo diagnóstico, recuperación postoperatoria y diferenciadores hospitalarios.
- La intervención se mantuvo acotada a la ruta `cirugia` y a componentes mínimos de dominio quirúrgico.

### Cambios o hallazgos
- `src/app/(marketing)/cirugia/page.tsx` dejó de usar solo el scaffold placeholder.
- Se incorporaron dos archivos de dominio:
  - `src/features/marketing/components/cirugia/CirugiaHero.tsx`
  - `src/features/marketing/components/cirugia/data.ts`
- La estructura narrativa final quedó en este orden:
  - hero quirúrgico principal
  - cuándo puede requerirse valoración quirúrgica
  - cirugía hospitalaria como capacidad de resolución clínica
  - seguridad anestésica y monitoreo
  - apoyo diagnóstico, planificación y seguimiento postoperatorio
  - diferenciadores hospitalarios
  - CTA final con ruta quirúrgica y desvío a urgencias si aplica
- La página evita:
  - catálogo exhaustivo de procedimientos
  - tono comercial
  - repetición de la lógica narrativa de `urgencias`

### Riesgos
- Mitigado: dejar `/cirugia` como placeholder sin densidad clínica real.
- Mitigado: copiar la estructura narrativa de urgencias en vez de construir una identidad quirúrgica propia.
- Pendiente: si `diagnostico` se profundiza después sin coordinar el límite entre “apoyo diagnóstico perioperatorio” y “página madre diagnóstica”, puede aparecer solape de narrativa que habrá que vigilar.

### Decisiones tomadas
- La cirugía se presenta como capacidad hospitalaria de resolución, no como listado de servicios.
- Se mantuvo enlace a `/urgencias` como ruta correcta para pacientes inestables.
- No se tocaron:
  - `/urgencias`
  - `/diagnostico`
  - `/endoscopia`
  - `/servicios`
  - home

### Archivos tocados o auditados
- `src/app/(marketing)/cirugia/page.tsx`
- `src/features/marketing/components/cirugia/CirugiaHero.tsx`
- `src/features/marketing/components/cirugia/data.ts`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Pendientes
- Siguiente paso recomendado:
  - profundizar `/diagnostico`
- Al hacerlo, vigilar frontera entre:
  - diagnóstico como página madre
  - diagnóstico como soporte de cirugía

### Supuestos prohibidos
- No convertir la página de cirugía en catálogo exhaustivo de procedimientos.
- No copiar el hero o las secciones de urgencias solo cambiando el copy.
- No diluir la autoridad quirúrgica con contenido comercial o estético.

## Entrada 2026-03-24 14:50:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- `/diagnostico` pasó de scaffold mínimo a página madre clínica real con narrativa diagnóstica propia.
- La página ya comunica diagnóstico como capacidad hospitalaria transversal, soporte para decisiones clínicas y articulador entre urgencias, cirugía, hospitalización y endoscopía.
- La intervención se mantuvo acotada a la ruta `diagnostico` y a componentes mínimos de dominio diagnóstico.

### Cambios o hallazgos
- `src/app/(marketing)/diagnostico/page.tsx` dejó de depender solo del scaffold placeholder.
- Se incorporaron dos archivos de dominio:
  - `src/features/marketing/components/diagnostico/DiagnosticoHero.tsx`
  - `src/features/marketing/components/diagnostico/data.ts`
- La estructura narrativa final quedó en este orden:
  - hero diagnóstico principal
  - por qué el diagnóstico cambia decisiones clínicas
  - imagenología, laboratorio y evaluación complementaria como sistema integrado
  - diagnóstico como soporte transversal del hospital
  - diferenciadores hospitalarios
  - CTA final con orientación diagnóstica y desvío a urgencias si aplica
- La página evita:
  - lista exhaustiva de estudios
  - tono de landing de imagenología
  - absorción narrativa de cirugía o endoscopía

### Riesgos
- Mitigado: dejar `/diagnostico` como placeholder sin valor clínico real.
- Mitigado: tratar diagnóstico como apéndice de cirugía.
- Mitigado: convertir la página en catálogo técnico o lista de estudios.
- Pendiente: cuando se profundice `/endoscopia`, habrá que vigilar bien la frontera entre diagnóstico como soporte y endoscopía como capacidad procedimental diferenciada.

### Decisiones tomadas
- Diagnóstico se presenta como sistema de soporte clínico transversal.
- La página deja clara su relación con:
  - urgencias
  - cirugía
  - hospitalización
  - endoscopía
  sin absorberlas narrativamente.
- No se tocaron:
  - `/urgencias`
  - `/cirugia`
  - `/endoscopia`
  - `/servicios`
  - home

### Archivos tocados o auditados
- `src/app/(marketing)/diagnostico/page.tsx`
- `src/features/marketing/components/diagnostico/DiagnosticoHero.tsx`
- `src/features/marketing/components/diagnostico/data.ts`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Pendientes
- Siguiente paso recomendado:
  - profundizar `/endoscopia`
- Al hacerlo, mantener explícita esta frontera:
  - diagnóstico orienta y acompaña
  - endoscopía resuelve como capacidad procedimental específica

### Supuestos prohibidos
- No convertir `/diagnostico` en página de catálogo de estudios.
- No hacer que imagenología o laboratorio vuelvan a aparecer como páginas madre paralelas.
- No diluir la frontera entre soporte diagnóstico y resolución procedimental.

## Entrada 2026-03-24 16:10:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- `/endoscopia` pasó de scaffold mínimo a página madre clínica real con narrativa procedimental propia.
- La página ya comunica endoscopía como capacidad clínica especializada, puente entre diagnóstico y tratamiento y expresión real del valor de mínima invasión dentro del hospital.
- La intervención se mantuvo acotada a la ruta `endoscopia` y a componentes mínimos de dominio endoscópico.

### Cambios o hallazgos
- `src/app/(marketing)/endoscopia/page.tsx` dejó de depender solo del scaffold placeholder.
- Se incorporaron dos archivos de dominio:
  - `src/features/marketing/components/endoscopia/EndoscopiaHero.tsx`
  - `src/features/marketing/components/endoscopia/data.ts`
- La estructura narrativa final quedó en este orden:
  - hero principal de endoscopía
  - qué es y por qué importa clínicamente
  - capacidad mínimamente invasiva de evaluación y resolución
  - relación con diagnóstico, cirugía y hospitalización sin absorberlos
  - diferenciadores hospitalarios
  - CTA final con valoración especializada y desvío a urgencias si aplica
- La página evita:
  - sonar a landing tecnológica
  - convertirse en catálogo exhaustivo de procedimientos
  - duplicar la narrativa de diagnóstico o cirugía

### Riesgos
- Mitigado: dejar `/endoscopia` como placeholder sin valor clínico propio.
- Mitigado: presentar mínima invasión como promesa tecnológica aislada.
- Mitigado: absorber narrativamente diagnóstico o cirugía.
- Pendiente: cuando se abra la siguiente ola clínica, habrá que mantener clara la frontera entre endoscopía como capacidad procedimental y los futuros submódulos o páginas de soporte preventivo.

### Decisiones tomadas
- Endoscopía se presenta como capacidad clínica especializada y mínimamente invasiva.
- El valor de `mínima invasión` queda absorbido aquí y no vuelve como página separada.
- La página deja clara su relación con:
  - diagnóstico
  - cirugía
  - hospitalización
  sin convertirse en apéndice de ninguna.
- No se tocaron:
  - `/urgencias`
  - `/cirugia`
  - `/diagnostico`
  - `/servicios`
  - home

### Archivos tocados o auditados
- `src/app/(marketing)/endoscopia/page.tsx`
- `src/features/marketing/components/endoscopia/EndoscopiaHero.tsx`
- `src/features/marketing/components/endoscopia/data.ts`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Pendientes
- Siguiente paso recomendado:
  - estabilizar el núcleo de páginas madre ya abiertas antes de reabrir `/servicios` o construir una segunda ola clínica
- Al hacerlo, mantener explícita esta frontera:
  - diagnóstico soporta
  - endoscopía evalúa y puede resolver con mínima invasión
  - cirugía asume la resolución cuando se requiere un abordaje mayor

### Supuestos prohibidos
- No tratar endoscopía como página de equipo o tecnología aislada.
- No reabrir `mínima invasión` como página paralela.
- No convertir `/endoscopia` en catálogo exhaustivo de procedimientos.

## Entrada 2026-03-24 17:05:00 -06:00

### Tipo
- Auditoria

### Resumen ejecutivo
- Se ejecutó una auditoría transversal de coherencia clínica y arquitectónica sobre las páginas madre P1:
  - `/urgencias`
  - `/cirugia`
  - `/diagnostico`
  - `/endoscopia`
- El núcleo P1 ya se percibe consistente como sistema hospitalario, con identidad clínica propia por página y sin conflicto técnico inmediato.
- No se detectó necesidad de refactor amplio antes de abrir la siguiente fase, pero sí aparecieron ajustes puntuales recomendables para evitar drift narrativo y de UX.

### Hallazgos principales
- La jerarquía hospitalaria general ya es coherente:
  - urgencias como puerta de entrada crítica
  - cirugía como capacidad resolutiva
  - diagnóstico como soporte transversal
  - endoscopía como capacidad procedimental especializada
- La densidad estructural entre páginas es suficientemente pareja.
- Ninguna página suena hoy a catálogo comercial ni a landing promocional agresiva.
- La capa compartida actual sigue siendo suficiente:
  - `ClinicalSection`
  - `ClinicalBulletGrid`
  - `ClinicalParentPageScaffold`

### Riesgos detectados
- Riesgo narrativo bajo:
  - `/endoscopia` y `/diagnostico` están bien separados, pero comparten frontera delicada; si futuras iteraciones agregan demasiado detalle clínico, podrían empezar a solaparse.
- Riesgo UX medio-bajo:
  - los CTAs son coherentes, pero no están completamente normalizados en lenguaje:
    - `Solicitar valoración`
    - `Solicitar orientación`
    - `Llamar al hospital`
    - `Ir a urgencias 24/7`
  - no es inconsistencia crítica, pero ya marca un punto de estandarización futura.
- Riesgo arquitectónico bajo:
  - aún no se necesita una nueva abstracción compartida.
  - si se profundizan más páginas clínicas con bloques oscuros + caja final de acción + cards de soporte, puede aparecer una segunda capa compartida ligera para CTA/final block, pero todavía no conviene forzarla.

### Recomendaciones puntuales
- Mantener la capa compartida actual sin ampliarla todavía.
- Antes de abrir P2, considerar una micro-fase de normalización editorial de CTAs entre páginas madre clínicas.
- Mantener explícitas estas fronteras:
  - urgencias recibe, estabiliza y prioriza
  - cirugía resuelve con soporte perioperatorio
  - diagnóstico soporta decisiones transversales
  - endoscopía evalúa y puede resolver con mínima invasión en casos seleccionados

### Decision de readiness
- Sí puede abrirse la siguiente fase del proyecto sin refactor previo obligatorio.
- No conviene abrir P2 amplio todavía.
- Conviene primero consolidar el núcleo P1:
  - revisar consistencia editorial fina
  - decidir si `/servicios` necesitará ajuste posterior como hub
  - luego abrir la siguiente ola clínica

### Archivos auditados
- `src/app/(marketing)/urgencias/page.tsx`
- `src/app/(marketing)/cirugia/page.tsx`
- `src/app/(marketing)/diagnostico/page.tsx`
- `src/app/(marketing)/endoscopia/page.tsx`
- `src/features/marketing/components/clinical/ClinicalSection.tsx`
- `src/features/marketing/components/clinical/ClinicalParentPageScaffold.tsx`
- `docs/AI_CONTEXT_LOG.md`

### Cambios realizados
- Solo documentación.
- No se modificó código de producto.

### Validaciones
- Se confirmó revisión comparativa directa del código y estado actual del repositorio.
- No se ejecutaron `guardrails`, `lint` ni `build` porque esta fase no introdujo cambios de producto.

### Supuestos prohibidos
- No usar `/urgencias` como plantilla implícita rígida para todas las páginas madre.
- No abrir P2 sin vigilar primero la coherencia editorial fina del núcleo P1.
- No ampliar la capa compartida por anticipación en lugar de necesidad real.

## Entrada 2026-03-24 18:00:00 -06:00

### Tipo
- Ajuste editorial

### Resumen ejecutivo
- Se ejecutó una micro-fase editorial sobre el núcleo P1:
  - `/urgencias`
  - `/cirugia`
  - `/diagnostico`
  - `/endoscopia`
- No se tocaron arquitectura, componentes técnicos ni estructura visual.
- El objetivo fue alinear tono clínico, semántica hospitalaria y wording de CTA sin reescribir páginas completas.

### Cambios o hallazgos
- La principal micro-inconsistencia estaba en el sistema de CTA no urgente:
  - `/cirugia` y `/endoscopia` ya usaban `Solicitar valoración`
  - `/diagnostico` usaba `Solicitar orientación`
- Se normalizó el CTA principal no urgente hacia `Solicitar valoración`.
- También se ajustó el wording de cierre para reforzar el modelo mental clínico:
  - cirugía -> valoración quirúrgica hospitalaria
  - diagnóstico -> valoración diagnóstica hospitalaria
  - endoscopía -> valoración endoscópica especializada
- `/urgencias` se mantuvo como excepción deliberada:
  - su jerarquía de acción sigue siendo inmediata
  - conserva `Llamar ahora`, `WhatsApp inmediato`, `Cómo llegar` y acceso secundario a triage

### Sistema editorial resultante
- CTA hospitalario inmediato:
  - urgencias -> acción inmediata
- CTA hospitalario no urgente:
  - páginas madre clínicas -> `Solicitar valoración`
- CTA secundario común:
  - `Llamar al hospital`
- CTA terciario de seguridad:
  - `Ir a urgencias 24/7`
- Modelo mental protegido:
  - urgencias recibe y prioriza
  - cirugía resuelve
  - diagnóstico orienta y soporta
  - endoscopía evalúa y puede resolver con mínima invasión

### Archivos tocados o auditados
- `src/app/(marketing)/urgencias/page.tsx` (auditado)
- `src/app/(marketing)/cirugia/page.tsx`
- `src/app/(marketing)/diagnostico/page.tsx`
- `src/app/(marketing)/endoscopia/page.tsx`
- `docs/AI_CONTEXT_LOG.md`

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Riesgos pendientes
- No queda bloqueo inmediato antes de P2.
- El principal riesgo futuro sigue siendo editorial:
  - que nuevas páginas clínicas reintroduzcan variantes innecesarias de CTA o tono
- La siguiente fase ya puede abrir contenido nuevo, siempre que mantenga este sistema editorial base.

### Supuestos prohibidos
- No volver a fragmentar los CTA principales no urgentes sin una razón clínica real.
- No transformar `/diagnostico` en una página más consultiva que clínica.
- No hacer que `/endoscopia` pierda su condición de capacidad especializada por exceso de lenguaje genérico.

## Entrada 2026-03-24 18:35:00 -06:00

### Tipo
- Ajuste editorial

### Resumen ejecutivo
- Se aplicó el sistema editorial de diferenciadores hospitalarios definido en `docs/EDITORIAL_GOVERNANCE.md`.
- El cambio se limitó al contenido textual de los bloques de diferenciadores del núcleo P1:
  - `/urgencias`
  - `/cirugia`
  - `/diagnostico`
  - `/endoscopia`
- No se modificaron layout, estructura visual, jerarquía de bloques ni arquitectura técnica.

### Cambios o hallazgos
- Los diferenciadores anteriores todavía explicaban capacidades abstractas o conceptos hospitalarios generales.
- Se reescribieron para que cada card:
  - cambie una decisión clínica
  - sea situacional
  - se entienda rápido
  - evite meta-discurso institucional o tecnológico
- La nueva lógica quedó así:
  - urgencias -> diferenciadores operativos
  - cirugía -> diferenciadores de resolución
  - diagnóstico -> diferenciadores de precisión
  - endoscopía -> diferenciadores de mínima invasión

### Archivos tocados o auditados
- `src/features/marketing/components/urgencias/data.ts`
- `src/features/marketing/components/cirugia/data.ts`
- `src/features/marketing/components/diagnostico/data.ts`
- `src/features/marketing/components/endoscopia/data.ts`
- `docs/AI_CONTEXT_LOG.md`
- `docs/EDITORIAL_GOVERNANCE.md` (auditado como fuente editorial, no versionado en este lote)

### Decisiones tomadas
- Los diferenciadores hospitalarios ya no explican “lo que el hospital es”.
- Ahora explican:
  - qué decisión cambia
  - qué evita
  - cuándo importa
- Se mantuvo intacta la jerarquía de páginas y secciones.

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Riesgos pendientes
- El principal riesgo ya no es técnico sino editorial:
  - mantener este mismo criterio cuando se abran P2 o nuevos bloques hospitalarios
- `docs/EDITORIAL_GOVERNANCE.md` sigue fuera de commit en el working tree actual; no se incluyó automáticamente para no arrastrar un archivo no cerrado por esta fase.

### Supuestos prohibidos
- No volver a usar diferenciadores como slogans institucionales.
- No usar “capacidad avanzada”, “soporte premium” o equivalentes abstractos como títulos.
- No convertir los diferenciadores en mini-fichas técnicas o tecnológicas.

## Entrada 2026-03-24 18:55:00 -06:00

### Tipo
- Ajuste editorial

### Resumen ejecutivo
- Se reescribieron de forma específica los diferenciadores hospitalarios de `/urgencias`.
- El ajuste reforzó el foco clínico-operativo de la página:
  - tiempo clínico
  - priorización
  - capacidad de respuesta
  - reducción de deterioro
- No se modificaron layout, estructura visual ni jerarquía de bloques.

### Cambios o hallazgos
- Los diferenciadores previos de urgencias ya estaban mejor que la versión original, pero todavía podían sonar demasiado explicativos o de proceso.
- Se ajustaron para responder mejor a la pregunta:
  - qué cambia si este hospital recibe al paciente
- La nueva lógica editorial quedó así:
  - actuar antes del colapso
  - estabilizar antes de decidir
  - priorizar lo que no puede esperar
  - reducir tiempo perdido en la urgencia

### Archivos tocados o auditados
- `src/features/marketing/components/urgencias/data.ts`
- `docs/AI_CONTEXT_LOG.md`
- `docs/EDITORIAL_GOVERNANCE.md` (auditado como referencia editorial)

### Decisiones tomadas
- En urgencias, los diferenciadores deben explicar impacto operativo inmediato y no capacidad hospitalaria abstracta.
- Se evitó hablar de:
  - tecnología
  - procesos institucionales
  - complejidad hospitalaria general
- Se mantuvo la frontera editorial:
  - urgencias recibe, prioriza, estabiliza y evita deterioro

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Supuestos prohibidos
- No volver a convertir los diferenciadores de urgencias en explicación institucional.
- No desplazar el foco desde tiempo clínico y priorización hacia capacidad abstracta.

## Entrada 2026-03-24 19:10:00 -06:00

### Tipo
- Ajuste editorial

### Resumen ejecutivo
- Se reescribieron de forma específica los diferenciadores hospitalarios de `/cirugia`.
- El ajuste reforzó el foco clínico de la página en:
  - resolución hospitalaria
  - procedimientos especializados
  - seguridad anestésica
  - continuidad postoperatoria
- No se modificaron layout, estructura visual ni jerarquía de bloques.

### Cambios o hallazgos
- Los diferenciadores previos ya tenían buena dirección editorial, pero todavía podían leerse como explicación de capacidad quirúrgica general.
- Se ajustaron para responder mejor a estas preguntas:
  - cuándo la cirugía cambia pronóstico
  - cómo se reduce riesgo
  - cómo se decide intervenir
  - qué evita una cirugía hospitalaria bien planificada
- La nueva lógica editorial quedó así:
  - operar en el momento correcto cambia el pronóstico
  - reducir riesgo cuando el paciente está comprometido
  - evitar intervenir sin haber definido bien el caso
  - entender que la recuperación también cambia la decisión

### Archivos tocados o auditados
- `src/features/marketing/components/cirugia/data.ts`
- `docs/AI_CONTEXT_LOG.md`
- `docs/EDITORIAL_GOVERNANCE.md` (auditado como referencia editorial)

### Decisiones tomadas
- En cirugía, los diferenciadores deben explicar decisiones de resolución y no promocionar procedimientos.
- Se evitó hablar de:
  - catálogo de procedimientos
  - landing quirúrgica
  - promoción tecnológica
- Se mantuvo la frontera editorial:
  - cirugía resuelve
  - se apoya en anestesia, planeación y seguimiento
  - no se presenta como procedimiento aislado

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Supuestos prohibidos
- No volver a convertir los diferenciadores de cirugía en catálogo implícito.
- No desplazar el foco desde decisión clínica y reducción de riesgo hacia prestigio quirúrgico abstracto.

## Entrada 2026-03-24 19:30:00 -06:00

### Tipo
- Ajuste editorial

### Resumen ejecutivo
- Se reescribieron de forma específica los diferenciadores hospitalarios de `/diagnostico`.
- El ajuste reforzó el foco clínico de la página en:
  - soporte transversal
  - decisiones clínicas
  - precisión
  - correlación diagnóstica
- No se modificaron layout, estructura visual ni jerarquía de bloques.

### Cambios o hallazgos
- Los diferenciadores previos de diagnóstico ya estaban bien orientados, pero todavía podían sonar a explicación general del valor diagnóstico.
- Se ajustaron para responder mejor a estas preguntas:
  - cómo cambia decisiones
  - cuándo evita intervenciones innecesarias
  - cuándo acelera el tratamiento correcto
  - cómo reduce incertidumbre clínica
- La nueva lógica editorial quedó así:
  - aclarar qué tratar primero
  - evitar intervenir sin estar seguro
  - acelerar el tratamiento correcto
  - reducir incertidumbre en casos complejos

### Archivos tocados o auditados
- `src/features/marketing/components/diagnostico/data.ts`
- `docs/AI_CONTEXT_LOG.md`
- `docs/EDITORIAL_GOVERNANCE.md` (auditado como referencia editorial)

### Decisiones tomadas
- En diagnóstico, los diferenciadores deben hablar de precisión aplicada a la decisión clínica y no de disponibilidad de estudios.
- Se evitó hablar de:
  - lista de estudios
  - laboratorio comercial
  - página tecnológica
- Se mantuvo la frontera editorial:
  - diagnóstico orienta, confirma, prioriza y reduce incertidumbre
  - no sustituye cirugía ni endoscopía

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Supuestos prohibidos
- No volver a convertir los diferenciadores de diagnóstico en explicación de estudios disponibles.
- No desplazar el foco desde decisión clínica y correlación diagnóstica hacia tecnología abstracta.

## Entrada 2026-03-24 19:50:00 -06:00

### Tipo
- Ajuste editorial

### Resumen ejecutivo
- Se reescribieron de forma específica los diferenciadores hospitalarios de `/endoscopia`.
- El ajuste reforzó el foco clínico de la página en:
  - mínima invasión
  - evaluación y resolución
  - casos seleccionados
  - puente diagnóstico-terapéutico
- No se modificaron layout, estructura visual ni jerarquía de bloques.

### Cambios o hallazgos
- Los diferenciadores previos ya tenían buena dirección, pero todavía podían leerse como explicación general de mínima invasión.
- Se ajustaron para responder mejor a estas preguntas:
  - cuándo evita cirugía abierta
  - cuándo permite actuar antes
  - cuándo reduce recuperación
  - cuándo mejora precisión terapéutica
- La nueva lógica editorial quedó así:
  - evitar abrir cuando no hace falta
  - actuar antes de que el caso escale
  - reducir recuperación cuando el caso es candidato
  - hacer más precisa la decisión terapéutica

### Archivos tocados o auditados
- `src/features/marketing/components/endoscopia/data.ts`
- `docs/AI_CONTEXT_LOG.md`
- `docs/EDITORIAL_GOVERNANCE.md` (auditado como referencia editorial)

### Decisiones tomadas
- En endoscopía, los diferenciadores deben explicar valor procedimental y mínima invasión con impacto clínico real.
- Se evitó hablar de:
  - tecnología avanzada
  - marketing premium
  - extensión de diagnóstico
- Se mantuvo la frontera editorial:
  - endoscopía evalúa y puede resolver
  - funciona como puente entre diagnóstico y tratamiento
  - no sustituye cirugía cuando hace falta escalar

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Supuestos prohibidos
- No volver a convertir los diferenciadores de endoscopía en promesa tecnológica.
- No desplazar el foco desde decisión terapéutica y mínima invasión hacia sofisticación abstracta.

## Entrada 2026-03-24 20:15:00 -06:00

### Tipo
- Auditoria editorial

### Resumen ejecutivo
- Se auditó transversalmente el bloque de diferenciadores hospitalarios del núcleo P1:
  - `/urgencias`
  - `/cirugia`
  - `/diagnostico`
  - `/endoscopia`
- El sistema ya es coherente a nivel clínico y editorial.
- Solo se aplicaron micro-ajustes de wording para mejorar claridad cognitiva y diferenciación entre páginas.

### Hallazgos principales
- La coherencia editorial general ya es buena:
  - urgencias = tiempo clínico y priorización
  - cirugía = resolución y reducción de riesgo
  - diagnóstico = precisión y reducción de incertidumbre
  - endoscopía = mínima invasión y decisión terapéutica
- No se detectó deriva hacia:
  - lista de estudios
  - catálogo de procedimientos
  - landing tecnológica
  - claims institucionales abstractos
- Sí había tres puntos finos de ajuste:
  - un título de cirugía demasiado largo
  - un título de diagnóstico con ligera superposición semántica con urgencias
  - un título de endoscopía con lectura menos natural que el resto

### Micro-ajustes realizados
- `src/features/marketing/components/cirugia/data.ts`
  - `Operar en el momento correcto cambia el pronóstico` -> `Operar a tiempo cambia el pronóstico`
- `src/features/marketing/components/diagnostico/data.ts`
  - `Aclara qué tratar primero` -> `Aclara el siguiente paso`
- `src/features/marketing/components/endoscopia/data.ts`
  - `Reduce recuperación cuando el caso es candidato` -> `Puede acortar la recuperación`

### Evaluacion de coherencia
- Coherencia editorial: alta
- Coherencia clínica: alta
- Consistencia de tono: alta
- Claridad cognitiva: alta tras micro-ajustes
- Diferenciación real entre páginas: suficiente y estable

### Estado del sistema
- No hace falta reescribir el núcleo P1.
- No hace falta nueva abstracción.
- El sistema de diferenciadores ya puede considerarse baseline editorial para futuras páginas clínicas.

### Archivos tocados o auditados
- `src/features/marketing/components/urgencias/data.ts` (auditado)
- `src/features/marketing/components/cirugia/data.ts`
- `src/features/marketing/components/diagnostico/data.ts`
- `src/features/marketing/components/endoscopia/data.ts`
- `docs/AI_CONTEXT_LOG.md`
- `docs/EDITORIAL_GOVERNANCE.md`

### Validaciones
- `npm run guardrails` OK
- `npm run lint` OK
- `npm run build` OK

### Supuestos prohibidos
- No volver a homogeneizar tanto los diferenciadores que las páginas pierdan frontera clínica.
- No reabrir cambios amplios sobre el núcleo P1 sin una razón narrativa real.

## Entrada 2026-03-24 20:45:00 -06:00

### Tipo
- Ajuste narrativo

### Resumen ejecutivo
- Se rehízo por completo el dataset narrativo de `src/features/marketing/components/endoscopia/data.ts`.
- El objetivo fue sacar el contenido del plano de guideline interna y llevarlo a una narrativa orientada al caso del paciente.
- Se mantuvieron tipos, exports y estructura técnica; solo cambió el contenido textual.

### Diagnóstico
- El dataset anterior todavía arrastraba varios patrones de meta-copy:
  - explicaciones sobre la capacidad como concepto interno
  - lenguaje de frontera entre áreas clínicas
  - formulaciones demasiado abstractas como `capacidad procedimental` o `correlación clínica`
  - frases más cercanas a arquitectura narrativa que a experiencia del cliente final
- Eso no rompía técnicamente la página, pero sí la acercaba a una voz interna del hospital en vez de a una orientación clara para el usuario.

### Cambio de enfoque aplicado
- Se cambió el modelo narrativo de:
  - capacidad -> explicación -> contexto hospital
- Hacia:
  - situación clínica -> decisión -> impacto para el paciente
- El nuevo dataset ahora prioriza:
  - cuándo puede ayudar la endoscopía
  - qué puede evitar
  - cuándo se integra con diagnóstico, cirugía u hospitalización
  - qué cambia para el paciente cuando la vía mínimamente invasiva está bien indicada

### Archivos tocados o auditados
- `src/features/marketing/components/endoscopia/data.ts`
- `docs/AI_CONTEXT_LOG.md`

### Decisiones tomadas
- No se cambiaron nombres de exports ni tipos.
- No se tocó layout ni UI.
- Se mantuvo la frontera correcta:
  - endoscopía como capacidad clínica especializada
  - herramienta de evaluación y resolución mínimamente invasiva
  - puente entre diagnóstico y tratamiento
- Se evitó que el texto sonara a:
  - guía interna
  - brochure conceptual
  - página tecnológica

### Documentacion actualizada
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Riesgos pendientes
- No queda bloqueo técnico ni narrativo inmediato en `endoscopia/data.ts`.
- El único riesgo operativo del cierre es externo a esta fase:
  - el working tree ya traía cambios editoriales pendientes en `urgencias`, `cirugia` y `diagnostico`, así que el commit de esta fase debe cuidarse para no mezclar lotes sin intención.

### Supuestos prohibidos
- No reintroducir meta-copy visible en datasets de producción.
- No volver a explicar el modelo clínico del hospital como teoría interna dentro del contenido público.
- No tratar mínima invasión como tecnología por sí sola.

## Entrada 2026-03-24 21:10:00 -06:00

### Tipo
- Ajuste narrativo

### Resumen ejecutivo
- Se auditó el uso de `ClinicalSection` en el núcleo P1 para detectar meta-copy visible en producción.
- Se reescribieron únicamente títulos y descripciones con lenguaje de estrategia narrativa, guideline editorial o posicionamiento abstracto.
- No se modificaron layout, props, componentes ni estructuras visuales.

### Diagnóstico
- Había varias instancias con copy de arquitectura de contenido visible al usuario final, por ejemplo:
  - `Lo que esta página debe comunicar...`
  - `La página madre debe explicar...`
  - descripciones centradas en el modelo hospitalario como concepto
- Eso generaba una ruptura de voz: la página hablaba por momentos como guideline interna, no como orientación clínica para un dueño informado.

### Cambios realizados
- `src/app/(marketing)/urgencias/page.tsx`
  - se reemplazó meta-copy por lenguaje centrado en estabilización, priorización y riesgo inmediato
- `src/app/(marketing)/cirugia/page.tsx`
  - se reemplazó meta-copy por lenguaje centrado en decisión de intervenir, seguridad y recuperación
- `src/app/(marketing)/diagnostico/page.tsx`
  - se reemplazó meta-copy por lenguaje centrado en claridad del caso, prioridades y reducción de incertidumbre
- `src/app/(marketing)/endoscopia/page.tsx`
  - se reemplazó meta-copy por lenguaje centrado en mínima invasión, decisión terapéutica y evitar cirugía abierta cuando no hace falta

### Patron narrativo aplicado
- Se eliminó copy que:
  - explicaba lo que la página debía comunicar
  - describía posicionamiento o modelo hospitalario como teoría
  - hablaba de la capacidad como concepto abstracto
- Se reemplazó por copy que:
  - explica cuándo importa
  - explica qué cambia
  - explica qué puede evitar
  - orienta la decisión clínica

### Archivos tocados o auditados
- `src/app/(marketing)/urgencias/page.tsx`
- `src/app/(marketing)/cirugia/page.tsx`
- `src/app/(marketing)/diagnostico/page.tsx`
- `src/app/(marketing)/endoscopia/page.tsx`
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Riesgos pendientes
- No queda bloqueo técnico.
- Sí quedan en working tree otros ajustes editoriales previos sobre datasets de:
  - urgencias
  - cirugía
  - diagnóstico
- Esos cambios no pertenecen necesariamente a este lote narrativo de `ClinicalSection` y deben decidirse aparte al commitear.

### Supuestos prohibidos
- No volver a introducir guideline editorial visible en JSX de producción.
- No usar `ClinicalSection` para explicar estrategia de posicionamiento en vez de impacto clínico.

## Entrada 2026-03-24 21:35:00 -06:00

### Tipo
- Ajuste narrativo

### Resumen ejecutivo
- Se cerró la limpieza narrativa pendiente de tres datasets clínicos:
  - `src/features/marketing/components/urgencias/data.ts`
  - `src/features/marketing/components/cirugia/data.ts`
  - `src/features/marketing/components/diagnostico/data.ts`
- El objetivo fue eliminar lenguaje interno de arquitectura clínica y llevar el contenido a una narrativa de:
  - situación clínica
  - decisión
  - impacto para el paciente

### Diagnóstico
- Todavía quedaban frases y patrones como:
  - `capacidad hospitalaria`
  - `lógica hospitalaria`
  - `se conecta con`
  - `capacidad quirúrgica/anestésica del hospital`
  - explicaciones centradas en cómo se organiza el hospital, no en el caso del paciente
- Eso no rompía la UI, pero sí dejaba fragmentos de voz interna de producto visibles en contenido de producción.

### Cambios realizados
- `src/features/marketing/components/urgencias/data.ts`
  - hero highlights y support cards reescritos para hablar de:
    - actuar sin perder tiempo
    - vigilar al paciente
    - definir rápido la siguiente ruta
- `src/features/marketing/components/cirugia/data.ts`
  - hero highlights, capabilities y support cards reescritos para hablar de:
    - decidir mejor cuándo operar
    - reducir decisiones apresuradas
    - sostener recuperación y vigilancia
- `src/features/marketing/components/diagnostico/data.ts`
  - hero highlights, capabilities y support cards reescritos para hablar de:
    - aclarar el cuadro clínico
    - priorizar mejor
    - evitar errores y retrasos
    - decidir si hace falta otra intervención

### Resultado narrativo
- Urgencias:
  - tiempo clínico
  - priorización
  - respuesta rápida
- Cirugía:
  - resolución
  - momento correcto
  - seguridad y recuperación
- Diagnóstico:
  - claridad del caso
  - reducción de incertidumbre
  - mejor decisión clínica

### Archivos tocados o auditados
- `src/features/marketing/components/urgencias/data.ts`
- `src/features/marketing/components/cirugia/data.ts`
- `src/features/marketing/components/diagnostico/data.ts`
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Riesgos pendientes
- No queda bloqueo técnico.
- El núcleo P1 queda editorialmente más consistente después de este cierre.
- No se detecta necesidad inmediata de nuevos refactors narrativos amplios en estos tres datasets.

### Supuestos prohibidos
- No reintroducir lenguaje de arquitectura clínica interna en datasets visibles.
- No volver a explicar el hospital como sistema conceptual en vez de orientar el caso del paciente.

## Entrada 2026-03-24 22:05:00 -06:00

### Tipo
- Auditoria editorial

### Resumen ejecutivo
- Se auditó comparativamente el sistema de heroes clínicos del núcleo P1:
  - `/urgencias`
  - `/cirugia`
  - `/diagnostico`
  - `/endoscopia`
- El sistema ya era estable a nivel estructural, pero había desigualdad editorial:
  - `urgencias` estaba más claro y operativo
  - `cirugia` estaba razonablemente sólido
  - `diagnostico` y `endoscopia` cargaban más abstracción conceptual
- Se hicieron solo ajustes mínimos de copy para consolidar un patrón editorial común.

### Diagnóstico
- Incoherencias detectadas:
  - `diagnostico` tenía el hero más abstracto e institucional del grupo
  - `endoscopia` todavía usaba formulaciones demasiado conceptuales en badge y card oscura
  - `cirugia` tenía una card lateral algo cercana a “sistema clínico” más que a orientación de decisión
  - `urgencias` estaba más fuerte en claridad de acción y por eso funcionaba como referencia implícita del núcleo
- No se detectó necesidad de rehacer layouts ni de crear nueva abstracción técnica.

### Cambios realizados
- `src/features/marketing/components/urgencias/UrgenciasHero.tsx`
  - copy principal más directo hacia tiempo crítico y decisión rápida
- `src/features/marketing/components/cirugia/CirugiaHero.tsx`
  - hero body y card lateral reescritos para enfatizar decisión quirúrgica, estabilización previa y monitoreo
- `src/features/marketing/components/diagnostico/DiagnosticoHero.tsx`
  - badge, cuerpo, CTA y card lateral reescritos para quitar abstracción institucional
- `src/features/marketing/components/diagnostico/data.ts`
  - micro-ajuste en hero highlights para mejorar claridad y frontera clínica
- `src/features/marketing/components/endoscopia/EndoscopiaHero.tsx`
  - badge, cuerpo y card lateral reescritos para reforzar mínima invasión orientada a decisión, no a tecnología

### Sistema editorial resultante
- Patrón consolidado del hero clínico P1:
  - qué capacidad es
  - cuándo importa
  - qué decisión o acción sigue
- Fronteras clínicas consolidadas:
  - urgencias = actuar ya y estabilizar
  - cirugía = valorar resolución quirúrgica
  - diagnóstico = aclarar el cuadro y decidir mejor
  - endoscopía = evaluar o resolver con mínima invasión cuando aplica
- Patrón de CTA consolidado:
  - urgencias = acción inmediata
  - resto P1 = solicitar valoración + llamar al hospital

### Archivos tocados o auditados
- `src/features/marketing/components/urgencias/UrgenciasHero.tsx`
- `src/features/marketing/components/cirugia/CirugiaHero.tsx`
- `src/features/marketing/components/diagnostico/DiagnosticoHero.tsx`
- `src/features/marketing/components/diagnostico/data.ts`
- `src/features/marketing/components/endoscopia/EndoscopiaHero.tsx`
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Riesgos restantes
- No hay bloqueo real antes de P2.
- El riesgo principal sigue siendo editorial:
  - mantener este mismo nivel de claridad si se abren nuevas páginas clínicas sin dejar que vuelvan a aparecer badges o cards demasiado conceptuales.

### Supuestos prohibidos
- No volver a convertir heroes clínicos en manifiestos institucionales.
- No usar badges o cards laterales para explicar teoría interna del hospital.

## Entrada 2026-03-24 23:00:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- Se abrió `/prevencion` como nueva página clínica del sitio.
- La página quedó construida como capacidad de cuidado anticipado y seguimiento oportuno, sin caer en wellness genérico ni en catálogo preventivo.
- La implementación se mantuvo coherente con el tono del núcleo clínico y con la arquitectura actual del repo.

### Diagnóstico
- Se partió desde cero: no existía ruta ni componentes de dominio para `prevencion`.
- El principal riesgo narrativo era bajar el nivel clínico del sitio y sonar a página comercial ligera.
- La solución fue construir una página accesible pero sobria, orientada a decisiones preventivas y a continuidad clínica.

### Cambios realizados
- Se creó:
  - `src/app/(marketing)/prevencion/page.tsx`
  - `src/features/marketing/components/prevencion/PrevencionHero.tsx`
  - `src/features/marketing/components/prevencion/data.ts`
- La estructura narrativa final quedó en este orden:
  - hero principal de prevención
  - por qué prevenir cambia el curso del caso
  - prevención como detección oportuna, seguimiento y control responsable
  - vacunas, desparasitación, revisiones y monitoreo dentro de una misma lógica clínica
  - diferenciadores hospitalarios
  - CTA final con valoración preventiva y desvío a urgencias si aplica

### Decisiones tomadas
- Prevención se presenta como medicina anticipada y seguimiento inteligente.
- La página no compite con urgencias ni con el hospital:
  - ayuda a actuar antes
  - reduce deterioro evitable
  - da continuidad a pacientes sanos o con riesgo
- Se evitó convertirla en:
  - wellness superficial
  - catálogo de vacunas
  - contenido de blog
  - página infantilizada

### Archivos tocados o auditados
- `src/app/(marketing)/prevencion/page.tsx`
- `src/features/marketing/components/prevencion/PrevencionHero.tsx`
- `src/features/marketing/components/prevencion/data.ts`
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Riesgos pendientes
- No hay bloqueo técnico real.
- El siguiente riesgo narrativo será sostener este mismo nivel de sobriedad si se abre una segunda ola preventiva más granular.
- `/servicios` no se tocó en esta fase; si más adelante se reajusta como hub, habrá que decidir cómo enlazar `prevencion` sin duplicar relato.

### Supuestos prohibidos
- No convertir `prevencion` en wellness comercial.
- No hacerla competir con urgencias.
- No fragmentarla pronto en subpáginas sin una necesidad clínica real.

## Entrada 2026-03-24 23:35:00 -06:00

### Tipo
- Refactor

### Resumen ejecutivo
- Se realineó `/servicios` para que funcione como hub clínico de navegación y no como catálogo o pseudo-página madre.
- La página ahora ordena el mapa hospitalario en tres niveles:
  - núcleo hospitalario publicado
  - continuidad clínica
  - líneas todavía no publicadas o subordinadas
- No se tocaron las páginas madre ya abiertas ni se crearon nuevas rutas.

### Diagnóstico
- `/servicios` arrastraba dos problemas narrativos:
  - profundizaba demasiado contenido que ya pertenece a `/urgencias`, `/cirugia`, `/diagnostico`, `/endoscopia` y `/prevencion`
  - todavía usaba copy de sistema o de instrucción sobre cómo leer el hub
- El riesgo era que compitiera con las páginas madre y volviera a sonar a catálogo hospitalario amplio.

### Cambios realizados
- `src/features/marketing/components/services/types.ts`
  - el modelo de datos quedó alineado a navegación clínica y estados de publicación
- `src/features/marketing/components/services/data.ts`
  - la data se reescribió para funcionar como mapa de rutas y no como inventario profundo de servicios
- `src/features/marketing/components/services/ServicesPageHero.tsx`
  - el hero se ajustó para orientar al usuario hacia la ruta clínica correcta
- `src/features/marketing/components/services/ServiceCategorySection.tsx`
  - las cards se ajustaron para reforzar estado y jerarquía sin parecer fichas de catálogo
- `src/features/marketing/components/services/DigitalServicesSection.tsx`
  - quedó como bloque auxiliar genérico y fuera de la composición principal del hub
- `src/app/(marketing)/servicios/page.tsx`
  - se eliminó el cierre meta-narrativo y se reemplazó por un bloque simple de orientación clínica con CTA a urgencias y contacto

### Estructura final
- Núcleo hospitalario:
  - urgencias
  - cirugía
  - diagnóstico
  - endoscopía
- Continuidad clínica:
  - prevención
- Publicación posterior / subordinado:
  - exóticos
  - oncología
  - medicina interna
  - comercial subordinado

### Decisiones tomadas
- `/servicios` queda consolidada como hub clínico.
- La página enlaza y orienta, pero no sustituye ni resume en exceso a las páginas madre.
- Lo no publicado se menciona solo con el peso justo para no competir con el núcleo ya abierto.
- Se retiró de esta ruta cualquier protagonismo innecesario de bloques más comerciales o demasiado profundos.

### Archivos tocados o auditados
- `src/app/(marketing)/servicios/page.tsx`
- `src/features/marketing/components/services/types.ts`
- `src/features/marketing/components/services/data.ts`
- `src/features/marketing/components/services/ServicesPageHero.tsx`
- `src/features/marketing/components/services/ServiceCategorySection.tsx`
- `src/features/marketing/components/services/DigitalServicesSection.tsx`
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Riesgos restantes
- `/servicios` ya no compite de forma grave con las páginas madre, pero habrá que mantener esta disciplina cuando se publiquen nuevas rutas P2.
- Si en el futuro vuelve a cargarse con demasiado detalle, puede reincidir en comportamiento de catálogo.

### Supuestos prohibidos
- No volver a convertir `/servicios` en resumen profundo de las páginas madre.
- No dar protagonismo desde el hub a líneas todavía no publicadas o subordinadas.

## Entrada 2026-03-25 00:10:00 -06:00

### Tipo
- Implementacion

### Resumen ejecutivo
- Se abrió `/exoticos` como nueva página clínica del sitio.
- La página quedó planteada como capacidad hospitalaria para pacientes no convencionales, no como rareza comercial ni como catálogo por especie.
- La implementación mantiene el tono del sitio:
  - clínico
  - sobrio
  - comprensible
  - orientado a decisiones

### Diagnóstico
- Se partió desde cero: no existía la ruta ni un dominio propio para exóticos.
- El principal riesgo narrativo era que la página sonara a nicho curioso, servicio accesorio o listado superficial de especies.
- La solución fue construirla como una ruta clínica de diferenciación reputacional:
  - valoración adaptada por especie
  - señales de alerta
  - diagnóstico, soporte u hospitalización según el caso
  - relación clara con urgencias sin competir con el núcleo P1

### Cambios realizados
- Se creó:
  - `src/app/(marketing)/exoticos/page.tsx`
  - `src/features/marketing/components/exoticos/ExoticosHero.tsx`
  - `src/features/marketing/components/exoticos/data.ts`
- La estructura narrativa final quedó en este orden:
  - hero principal de exóticos
  - por qué estos pacientes requieren valoración adaptada
  - señales o escenarios donde conviene valoración médica
  - valoración, diagnóstico y manejo según el caso
  - diagnóstico, hospitalización y procedimientos dentro de un entorno controlado
  - diferenciadores hospitalarios
  - CTA final con valoración y desvío a urgencias si aplica

### Decisiones tomadas
- `exoticos` se presenta como capacidad clínica seria para aves, reptiles y pequeños mamíferos.
- Se evitó:
  - infantilizar al paciente
  - usar tono lifestyle o anecdótico
  - construir la página como catálogo exhaustivo por especie
- La relación con el hospital quedó clara:
  - si el paciente está inestable, la entrada correcta sigue siendo urgencias
  - si aún hay margen, la valoración clínica guía diagnóstico, seguimiento o soporte

### Archivos tocados o auditados
- `src/app/(marketing)/exoticos/page.tsx`
- `src/features/marketing/components/exoticos/ExoticosHero.tsx`
- `src/features/marketing/components/exoticos/data.ts`
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Riesgos restantes
- `/servicios` todavía no refleja la existencia de `/exoticos` porque en esta fase se respetó la restricción de no tocar el hub.
- Si se quiere dar más visibilidad a exóticos, esa actualización debe hacerse en una fase aparte para no mezclar aperturas de rutas con navegación global.

### Supuestos prohibidos
- No convertir `exoticos` en curiosidad comercial o listado anecdótico de especies.
- No presentar la ruta como isla separada del hospital.
- No abrir subpáginas por especie sin una necesidad clínica real.

## Entrada 2026-03-25 00:35:00 -06:00

### Tipo
- Refactor

### Resumen ejecutivo
- Se actualizó `/servicios` para reflejar la publicación de `/exoticos`.
- El hub mantiene su función de mapa clínico y no vuelve a comportarse como catálogo.
- `exoticos` quedó visible como ruta ya publicada de diferenciación clínica, sin desplazar el núcleo hospitalario.

### Diagnóstico
- `/servicios` estaba desactualizado en dos puntos:
  - `exoticos` seguía apareciendo como línea no publicada
  - el hero todavía no reconocía la ampliación real del mapa clínico
- También persistía un wording menor demasiado conceptual en algunas frases del bloque de publicación posterior.

### Cambios realizados
- `src/features/marketing/components/services/data.ts`
  - `exoticos` salió del bloque de publicación posterior
  - se creó un bloque intermedio de diferenciación clínica para rutas ya publicadas que no deben competir con el núcleo
  - se hizo micro-limpieza editorial de wording para mantener tono más orientador
- `src/features/marketing/components/services/ServicesPageHero.tsx`
  - se agregó la mención de `exoticos` como ruta ya publicada
  - se simplificó un claim del hero para evitar tono demasiado explicativo
- `docs/AI_CONTEXT_LOG.md`
  - se registró esta micro-fase de actualización del hub

### Estado final del hub
- Núcleo hospitalario:
  - urgencias
  - cirugía
  - diagnóstico
  - endoscopía
- Continuidad clínica:
  - prevención
- Diferenciación clínica publicada:
  - exóticos
- Publicación posterior / subordinado:
  - oncología
  - medicina interna
  - comercial subordinado

### Decisiones tomadas
- `exoticos` ya forma parte visible del hub porque la ruta existe y está publicada.
- No se subió al mismo plano que el núcleo hospitalario para no romper la jerarquía clínica del sitio.
- El hub sigue orientando navegación y no entra en profundidad clínica de cada página madre.

### Archivos tocados o auditados
- `src/features/marketing/components/services/data.ts`
- `src/features/marketing/components/services/ServicesPageHero.tsx`
- `src/app/(marketing)/servicios/page.tsx` (auditado)
- `src/features/marketing/components/services/ServiceCategorySection.tsx` (auditado)
- `docs/AI_CONTEXT_LOG.md`

### Validaciones ejecutadas
- `npm run guardrails`
- `npm run lint`
- `npm run build`

### Resultado de validaciones
- `guardrails` OK
- `lint` OK
- `build` OK

### Riesgos restantes
- No hay bloqueo real antes de abrir la siguiente página.
- El siguiente riesgo volvería a aparecer solo si futuras rutas publicadas se agregan al hub sin respetar esta jerarquía:
  - núcleo hospitalario
  - continuidad clínica
  - diferenciación publicada
  - publicación posterior

### Supuestos prohibidos
- No subir `exoticos` al mismo nivel narrativo que urgencias, cirugía, diagnóstico o endoscopía.
- No volver a usar el hub para resumir demasiado las páginas ya publicadas.
