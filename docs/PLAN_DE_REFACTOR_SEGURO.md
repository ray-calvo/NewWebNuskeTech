# PLAN_DE_REFACTOR_SEGURO

Fecha base: 2026-03-23
Objetivo: ordenar la intervencion futura sin ejecutar cambios aun

## 1. Definicion de refactor seguro para este repo

Refactor seguro, en este contexto, significa:
- cambiar estructura o distribucion del codigo sin alterar UX publica de forma accidental
- no romper rutas, metadata, navegacion ni CTA primarios
- no reintroducir codigo legacy como fuente de verdad
- dejar trazabilidad documental despues de cada fase
- poder validar cada cambio con checks minimos repetibles

## 2. Principios de intervencion segura

- Trabajar sobre la fuente de verdad activa: `src/`.
- No tocar varias capas estructurales a la vez si no es imprescindible.
- Resolver primero enlaces rotos y ambiguedades de ownership antes de refactors cosmeticos.
- Reducir deuda por fases pequenas y verificables.
- Documentar antes y despues de cada cambio estructural.
- Mantener el shell publico estable mientras se reorganiza contenido interno.

## 3. Orden recomendado de ataque

### Fase 0. Congelamiento y preparacion
- Confirmar que la base documental siga alineada con el working tree.
- Decidir el destino de `/contacto`: crear ruta o retirar enlaces.
- Confirmar si `components/` y `lib/` root tienen algun consumidor real.

### Fase 1. Correcciones estructurales minimas y seguras
- Resolver enlace roto a `/contacto`.
- Normalizar imports `@/src/...` en archivos tocados.
- Declarar formalmente que `src/` es la fuente de verdad operativa.

### Fase 2. Cierre de ambiguedad estructural
- Consolidar duplicados `utils.ts` y `button.tsx`.
- Reducir el alias `@/*` a una sola raiz cuando ya no existan dependencias ambiguas.

### Fase 3. Reduccion de monolitos
- Dividir `src/app/(marketing)/servicios/page.tsx`.
- Congelar crecimiento de `src/app/(marketing)/tecnologia/page.tsx` y extraer nuevos bloques.
- Evaluar `WellnessSelector.tsx` como segundo objetivo de extraccion.

### Fase 4. Delimitacion legacy
- Decidir y ejecutar estrategia formal para `app_legacy` y `legacy_root`.
- Registrar si se archivan, se eliminan del control de versiones o se dejan congelados con nota formal.

### Fase 5. Guardrails minimos
- Introducir smoke tests de rutas principales.
- Introducir validacion automatizada minima de links internos.
- Agregar CI solo cuando los checks esten definidos.

## 4. Quick wins seguros

- Resolver `/contacto` porque tiene impacto alto y alcance acotado.
- Reemplazar imports `@/src/...` por aliases consistentes en archivos puntuales.
- Actualizar `README.md` una vez estabilizada la documentacion arquitectonica.
- Registrar explicitamente la politica de `src` vs root antes de tocar mas archivos.

## 5. Cambios que NO deben hacerse primero

- No empezar por rediseñar `globals.css`.
- No empezar por reescribir `Navbar`, `Footer` o `Logo`.
- No empezar por mover carpetas enteras sin cerrar antes la politica de aliases.
- No empezar por eliminar legacy del repositorio sin revisar historial y dependencias.
- No empezar por introducir testing complejo antes de decidir la estructura estable.

## 6. Riesgos de tocar navegacion o layouts

Riesgos:
- romper acceso a rutas principales
- duplicar shell publico
- alterar metadata o estructura HTML base
- introducir regresiones visuales globales

Regla operativa:
- cualquier cambio en `src/app/layout.tsx`, `src/app/(marketing)/layout.tsx`, `src/components/shared/navbar.tsx` o `src/components/shared/footer.tsx` debe hacerse aislado, con busqueda previa de todos los enlaces y con actualizacion documental obligatoria

## 7. Riesgos de tocar paginas monoliticas

### `src/app/(marketing)/servicios/page.tsx`
- Riesgo de romper jerarquia visual, CTA o contenido al extraer bloques.
- Riesgo de mezclar de nuevo datos y presentacion si la extraccion no define ownership claro.

### `src/app/(marketing)/tecnologia/page.tsx`
- Riesgo medio hoy.
- Si se sigue ampliando sin separar bloques, el costo de refactor futuro sube.

## 8. Estrategia para dividir archivos grandes sin romper UX

### Para `servicios/page.tsx`
- Extraer primero bloques visuales completos, no helpers sueltos.
- Mantener en `page.tsx` solo composicion, headings principales y orden de secciones.
- Crear subcomponentes dentro de `src/features/marketing/components` para:
  - secciones de categoria
  - tarjetas o layout repetitivo de servicios
  - modulo digital si sigue creciendo
- No mover todo a `shared`.

### Para `WellnessSelector.tsx`
- Separar datos estaticos de la UI si el componente crece.
- Mantener la interactividad y el contenido juntos solo mientras siga siendo autocontenido.

## 9. Estrategia para delimitar legacy

Paso recomendado:
1. Inventariar todo lo versionado en `app_legacy` y `legacy_root`.
2. Confirmar si el working tree actual debe seguir ignorandolo.
3. Documentar si se trata de codigo historico sin uso.
4. Solo despues decidir eliminacion formal o archivo.

No hacer:
- restaurar archivos legacy para "comparar mejor" dentro del flujo normal
- copiar componentes legacy al arbol activo sin auditoria

## 10. Estrategia para normalizar imports

Objetivo:
- converger a imports desde `@/components`, `@/features`, `@/lib`, `@/app`

Orden seguro:
1. detectar imports `@/src/...`
2. confirmar origen real de cada archivo duplicado
3. corregir archivos activos primero
4. despues cerrar duplicados del root
5. finalmente ajustar `tsconfig.json`

No hacer:
- cambiar `tsconfig.json` antes de saber si algo aun depende de la resolucion dual

## 11. Estrategia para introducir validaciones minimas

Primero:
- `npm run lint`
- smoke test de carga para `/`, `/servicios`, `/tecnologia`
- chequeo automatizado de links internos visibles en navbar y hero

Despues:
- validacion de rutas activas contra enlaces internos
- chequeo simple de build si se define como guardrail estable

No confirmado:
- requiere validacion adicional definir la herramienta exacta de tests

## 12. Checklist previo a cualquier cambio futuro

- Confirmar la ruta o componente exacto que se va a tocar.
- Revisar si afecta shell publico, layout o branding.
- Buscar imports y referencias cruzadas.
- Revisar si el archivo esta duplicado en root y `src`.
- Revisar si existe rastro legacy relacionado en Git.
- Definir criterio de exito verificable.
- Registrar contexto y decision en `docs/AI_CONTEXT_LOG.md`.
- Ejecutar al menos `npm run lint` tras el cambio.

## 13. Arquitectura objetivo futura

Arquitectura objetivo futura:
- Requiere validacion adicional.
- Este plan no impone una vision nueva; solo ordena la estabilizacion segura del estado actual.
