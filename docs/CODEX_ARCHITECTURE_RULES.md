# CODEX_ARCHITECTURE_RULES

Fecha de emision: 2026-03-23
Base: reglas derivadas del estado real auditado del repo

## 1. Principio rector

Estas reglas existen para evitar degradacion arquitectonica en un repo que hoy tiene:
- App Router activo en `src/app`
- shell publico estable en `src/components/shared`
- primitives en `src/components/ui`
- dominio marketing en `src/features/marketing`
- duplicados e imports ambiguos aun no resueltos
- rastro legacy en Git

Regla dura:
- Ninguna intervencion futura debe asumir que la arquitectura esta estabilizada.
- Toda modificacion debe partir del working tree actual, no de docs viejas ni de convenciones recordadas de otros proyectos.

## 2. Que si se puede tocar sin auditoria previa

Se puede tocar directamente:
- Copy, contenido y estructura interna de componentes ya existentes dentro de `src/features/marketing/components`, si el cambio no altera rutas ni layout.
- Estilos puntuales de componentes ya activos dentro de `src/components/shared` y `src/features/marketing/components`, si no cambian navegacion ni branding base.
- Primitives de `src/components/ui` solo cuando el cambio es local, compatible y claramente acotado.
- `docs/` para mantener trazabilidad.
- Assets ya usados dentro de `public/marketing` y `public/static/favicons`, si el cambio no rompe referencias existentes.

## 3. Que no se puede tocar sin auditoria previa

No tocar sin auditoria previa y registro en `docs/AI_CONTEXT_LOG.md`:
- `src/app/layout.tsx`
- `src/app/(marketing)/layout.tsx`
- cualquier `page.tsx` que afecte URL publica
- `next.config.ts`
- `tsconfig.json`
- `components.json`
- `src/app/globals.css`
- `src/components/shared/navbar.tsx`
- `src/components/shared/footer.tsx`
- cualquier carpeta o archivo legacy rastreado por Git: `app_legacy/*`, `legacy_root/*`
- archivos duplicados en root: `components/ui/*`, `lib/*`

Motivo:
- Son nodos estructurales, de alias, de layout, de branding o de navegacion.

## 4. Regla de fuente de verdad

Reglas duras:
- La aplicacion activa vive en `src/`.
- Ningun cambio nuevo debe usar `components/` o `lib/` de la raiz como destino funcional mientras siga existiendo la duplicacion.
- Si hace falta tocar algo que hoy existe duplicado entre root y `src`, primero se audita y luego se decide una unica fuente de verdad.
- Si un archivo solo existe en historial Git y no en working tree, se trata como legacy, no como superficie editable por defecto.

## 5. Reglas de separacion de responsabilidades

### Paginas
- `src/app/**/page.tsx` solo debe orquestar secciones, metadata local y contenido especifico de ruta.
- No debe convertirse en contenedor de multiples datasets, CTA, variaciones visuales y logica de presentacion cuando esas piezas pueden bajar a componentes de dominio.
- Si un `page.tsx` supera 200 lineas o mezcla 3 o mas bloques de contenido declarados inline, se detiene el crecimiento y se evalua extraccion.

### Componentes shared
- `src/components/shared/*` solo para shell publico, navegacion, footer, branding, botones flotantes o piezas compartidas entre varias rutas.
- No mover contenido exclusivo de una pagina a `shared`.

### Componentes feature-specific
- Todo bloque exclusivo de marketing debe vivir en `src/features/marketing/components`.
- Si un bloque no se reutiliza en otra feature o en otra ruta, no pertenece a `src/components/shared`.

### UI primitives
- `src/components/ui/*` solo para abstraer primitives reutilizables o wrappers de librerias.
- No meter copy de negocio, datos de marketing ni enlaces de conversion aqui.

### Utilidades
- `utils.ts` debe permanecer como utilitario puro.
- No agregar helpers de negocio a `src/lib/utils.ts` ni a `lib/utils.ts`.

## 6. Reglas de paginas

Reglas duras:
- No crear nuevas rutas publicas sin confirmar antes su necesidad en backlog y navegacion.
- No enlazar una ruta hasta que exista su `page.tsx`.
- No agregar secciones nuevas a una pagina si eso empuja el archivo por encima de 200 lineas sin plan de extraccion.
- No declarar arrays de contenido demasiado grandes dentro de `page.tsx` si ese contenido ya constituye un bloque de dominio separable.
- Si la pagina requiere carruseles, tabs o toggles, la interactividad debe bajar a componentes de dominio o `ui`.

Stop/refactor:
- Si un `page.tsx` empieza a contener datos, CTA, layout complejo y logica interactiva en el mismo archivo, detener y dividir antes de seguir.

## 7. Reglas de componentes

Reglas duras:
- Umbral blando: 150 lineas.
- Umbral de alerta: 180 lineas.
- Umbral de stop: 220 lineas salvo primitives complejas claramente justificadas.

Criterios de sobrecrecimiento:
- mas de una responsabilidad funcional
- mezcla de datos largos y renderizado
- presencia de CTA, cards, tabs y enlaces en el mismo archivo sin separacion
- multiples variantes visuales embebidas por condicion

Protocolos:
- Si el componente es de dominio y supera el umbral, dividir por seccion o subbloque.
- Si el componente es `ui`, justificar la excepcion en `docs/AI_CONTEXT_LOG.md`.

## 8. Reglas para hooks y utilidades

Estado actual real:
- No hay carpeta `src/hooks`.
- No se confirmaron hooks custom del dominio.

Reglas duras:
- No crear hooks por abstraccion prematura.
- Si aparece un hook nuevo, debe ser porque encapsula logica reutilizable real y no solo para esconder complejidad accidental.
- Si se crea `src/hooks`, documentar la razon y actualizar `docs/CURRENT_ARCHITECTURE_STATE.md`.

## 9. Reglas de imports y aliases

Reglas duras:
- No introducir nuevos imports con `@/src/...`.
- Para codigo activo, el objetivo debe ser converger a `@/components`, `@/features`, `@/lib`, `@/app`.
- No importar desde `components/` root ni `lib/` root en codigo nuevo.
- Si un archivo existente usa un alias inconsistente y se toca por otro motivo, corregirlo solo si el cambio es seguro y queda registrado.

Importante:
- El alias `@/*` hoy permite resolver tanto `src/*` como `./*`. Hasta normalizarlo, cualquier cambio de imports requiere revisar origen real del archivo importado.

## 10. Reglas para `shared` vs `feature-specific`

Mover a `shared` solo si:
- el componente se usa en 2 o mas rutas distintas
- no contiene copy o data exclusivos de una sola pagina
- no depende del contexto especifico de marketing

Mantener en feature si:
- el componente solo existe para una pagina o una feature
- contiene arrays de contenido, CTA o narrativa especifica del sitio marketing
- su nombre o su API no seria reutilizable fuera de esa ruta

## 11. Reglas para manejo de legacy

Reglas duras:
- `app_legacy` y `legacy_root` se consideran zonas congeladas hasta auditoria dedicada.
- No restaurar, reusar ni copiar codigo desde `legacy_root/*` o `app_legacy/*` sin documentar comparacion con el codigo activo.
- No borrar referencias legacy del historial de Git como parte de un cambio funcional pequeno.
- Toda intervencion sobre legacy debe partir de una pregunta explicita: archivar, eliminar formalmente o migrar.

## 12. Protocolo antes de tocar rutas, layouts o navegacion

Checklist obligatorio:
1. Confirmar las rutas activas reales en `src/app`.
2. Buscar todos los `href` y `Link` internos afectados.
3. Verificar impacto en `Navbar`, `MobileMenu`, `Footer`, CTA del hero y metadata.
4. Registrar en `docs/AI_CONTEXT_LOG.md` el motivo del cambio.
5. Si la ruta nueva aun no existe, no publicar enlaces hacia ella.

Regla dura:
- Ningun agente debe introducir o mantener enlaces rotos como `/contacto`.

## 13. Protocolo antes de tocar diseno base, tema, branding o estructura publica

Requiere revision previa:
- cambios en `src/app/globals.css`
- cambios en `src/components/shared/Logo.tsx`
- cambios en colores base, tipografia base o CTA primarios
- cambios en la estructura del shell publico

Motivo:
- Son piezas de alcance global y alto riesgo de regresion visual.

## 14. Criterios de stop/refactor

Detenerse y escalar si aparece cualquiera de estos casos:
- una ruta nueva sin `page.tsx` pero ya enlazada
- imports cruzados entre `src` y root que aumentan la ambiguedad
- necesidad de tocar simultaneamente layout, navbar y pagina para resolver un cambio pequeno
- intento de reutilizar codigo legacy sin comparacion documental
- archivo de pagina o componente creciendo por encima del umbral definido

## 15. Documentacion obligatoria despues de cada cambio

Siempre actualizar:
- `docs/AI_CONTEXT_LOG.md` con fecha, cambio, riesgo y decisiones

Actualizar cuando aplique:
- `docs/CURRENT_ARCHITECTURE_STATE.md` si cambia estructura real, rutas, layouts, ownership o dependencias estructurales
- `docs/BACKLOG_ARQUITECTONICO_PRIORIZADO.md` si se resuelve o aparece un hallazgo nuevo
- `docs/PLAN_DE_REFACTOR_SEGURO.md` si cambia el orden recomendado de intervencion

Regla dura:
- Ningun cambio estructural se considera terminado si no deja traza documental.

## 16. Arquitectura objetivo futura

Arquitectura objetivo futura:
- No fijada aqui.
- Estas reglas gobiernan el repo actual mientras se reduce deuda y se delimita legacy.
