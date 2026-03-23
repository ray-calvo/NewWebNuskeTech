# Auditoria De Cierre De Legacy Config

## Resumen ejecutivo

`src/` sigue siendo la unica fuente de verdad activa del repo. En la auditoria actual no se encontraron referencias de producto, build de Next, ESLint, shadcn, PostCSS ni scripts de `package.json` hacia `app_legacy` o `legacy_root`.

La unica referencia de configuracion activa confirmada fuera de `docs/` es `tsconfig.json`, que mantiene ambas rutas en `exclude`.

Estado recomendado:

- `app_legacy` y `legacy_root` deben tratarse como rastro historico versionado en Git, no como arquitectura activa.
- No se recomienda eliminacion agresiva en esta fase.
- La eliminacion formal, si se decide, debe ejecutarse en una fase separada que cierre simultaneamente:
  - los archivos versionados aun visibles en `git ls-files`
  - los borrados pendientes del working tree
  - la limpieza coordinada de `tsconfig.json`

## Alcance auditado

Archivos y fuentes revisadas:

- [tsconfig.json](/d:/Projects/newwebnusketech/tsconfig.json)
- [next.config.ts](/d:/Projects/newwebnusketech/next.config.ts)
- [eslint.config.mjs](/d:/Projects/newwebnusketech/eslint.config.mjs)
- [components.json](/d:/Projects/newwebnusketech/components.json)
- [postcss.config.mjs](/d:/Projects/newwebnusketech/postcss.config.mjs)
- [package.json](/d:/Projects/newwebnusketech/package.json)
- [README.md](/d:/Projects/newwebnusketech/README.md)
- `git ls-files app_legacy legacy_root`
- `git status --short`
- `git show HEAD:legacy_root/layout.tsx`
- `git show HEAD:legacy_root/page.tsx`
- `git show HEAD:legacy_root/Header.tsx`
- `git show HEAD:legacy_root/Footer.tsx`
- `git show HEAD:app_legacy/favicon.ico`
- busqueda global: `rg -n --hidden --glob '!node_modules/**' --glob '!.git/**' --glob '!docs/**' "app_legacy|legacy_root" .`

## Evidencia confirmada

### Presencia actual en working tree

- `Test-Path app_legacy` -> `False`
- `Test-Path legacy_root` -> `False`

Conclusion confirmada:

- `app_legacy/` y `legacy_root/` no existen fisicamente en el working tree actual.

### Presencia historica en Git

`git ls-files app_legacy legacy_root` devuelve:

- `app_legacy/favicon.ico`
- `legacy_root/Footer.tsx`
- `legacy_root/Header.tsx`
- `legacy_root/layout.tsx`
- `legacy_root/page.tsx`

`git status --short` muestra:

- `D app_legacy/favicon.ico`
- `D legacy_root/Footer.tsx`
- `D legacy_root/Header.tsx`
- `D legacy_root/layout.tsx`
- `D legacy_root/page.tsx`

Conclusion confirmada:

- Los rastros legacy no existen ya en el working tree, pero siguen versionados en Git y hoy aparecen como borrados pendientes.

### Referencias de configuracion activas fuera de docs

La busqueda global fuera de `docs/` solo encontro una coincidencia:

- [tsconfig.json:33](/d:/Projects/newwebnusketech/tsconfig.json#L33): `"exclude": ["node_modules", "app_legacy", "legacy_root"]`

No se encontraron referencias en:

- [next.config.ts](/d:/Projects/newwebnusketech/next.config.ts)
- [eslint.config.mjs](/d:/Projects/newwebnusketech/eslint.config.mjs)
- [components.json](/d:/Projects/newwebnusketech/components.json)
- [postcss.config.mjs](/d:/Projects/newwebnusketech/postcss.config.mjs)
- [package.json](/d:/Projects/newwebnusketech/package.json)
- [README.md](/d:/Projects/newwebnusketech/README.md)

### Participacion en build y tooling

#### TypeScript

- [tsconfig.json:25](/d:/Projects/newwebnusketech/tsconfig.json#L25) incluye globs amplios:
  - `**/*.ts`
  - `**/*.tsx`
  - `**/*.mts`
- [tsconfig.json:33](/d:/Projects/newwebnusketech/tsconfig.json#L33) excluye explicitamente `app_legacy` y `legacy_root`

Hecho confirmado:

- Si esas carpetas reaparecieran fisicamente en el working tree, TypeScript intentaria capturarlas por `include` salvo que continuen en `exclude`.

Inferencia:

- Hoy el `exclude` funciona mas como resguardo defensivo historico que como requisito operativo actual, porque las carpetas no existen en disco.

#### Next

- [next.config.ts](/d:/Projects/newwebnusketech/next.config.ts) solo configura `images.remotePatterns` y `formats`.
- No hay referencias a `app_legacy` ni `legacy_root`.

Hecho confirmado:

- No hay evidencia de que Next use esos rastros en la configuracion actual.

#### ESLint

- [eslint.config.mjs](/d:/Projects/newwebnusketech/eslint.config.mjs) solo ignora:
  - `.next/**`
  - `out/**`
  - `build/**`
  - `next-env.d.ts`

Hecho confirmado:

- ESLint no nombra `app_legacy` ni `legacy_root`.

#### shadcn

- [components.json](/d:/Projects/newwebnusketech/components.json) define aliases hacia `@/components`, `@/lib`, `@/components/ui` y `@/hooks`.
- No hay referencias a `app_legacy` ni `legacy_root`.

#### PostCSS y Tailwind

- [postcss.config.mjs](/d:/Projects/newwebnusketech/postcss.config.mjs) solo registra `@tailwindcss/postcss`.
- No existe `tailwind.config.*` en la raiz actual.

Hecho confirmado:

- No hay referencia de Tailwind/PostCSS a esas rutas legacy en los archivos auditados.

#### Scripts

- [package.json](/d:/Projects/newwebnusketech/package.json) solo expone:
  - `dev`
  - `build`
  - `start`
  - `lint`

Hecho confirmado:

- No hay scripts propios que invoquen `app_legacy` o `legacy_root`.

## Clasificacion de referencias

| Referencia | Ubicacion | Clasificacion | Evidencia | Participa activamente en build | Evaluacion |
| --- | --- | --- | --- | --- | --- |
| `app_legacy` | [tsconfig.json:33](/d:/Projects/newwebnusketech/tsconfig.json#L33) | Activa de configuracion, historica en intencion | `exclude` explicito | Si, como exclusion defensiva de TypeScript | No critica hoy; conviene retirarla solo junto con cierre formal del rastro Git |
| `legacy_root` | [tsconfig.json:33](/d:/Projects/newwebnusketech/tsconfig.json#L33) | Activa de configuracion, historica en intencion | `exclude` explicito | Si, como exclusion defensiva de TypeScript | No critica hoy; conviene retirarla solo junto con cierre formal del rastro Git |
| `app_legacy/favicon.ico` | historial Git | Historica | `git ls-files`, `git status --short` | No confirmado como insumo de build actual | Candidato a cierre formal en fase separada |
| `legacy_root/Footer.tsx` | historial Git | Historica | `git ls-files`, `git status --short` | No | Candidato a cierre formal en fase separada |
| `legacy_root/Header.tsx` | historial Git | Historica | `git ls-files`, `git status --short` | No | Candidato a cierre formal en fase separada |
| `legacy_root/layout.tsx` | historial Git | Historica | `git ls-files`, `git status --short`, `git show HEAD:legacy_root/layout.tsx` | No en la arquitectura activa actual | Candidato a cierre formal en fase separada |
| `legacy_root/page.tsx` | historial Git | Historica | `git ls-files`, `git status --short`, `git show HEAD:legacy_root/page.tsx` | No en la arquitectura activa actual | Candidato a cierre formal en fase separada |

## Contenido historico relevante

### `legacy_root/layout.tsx`

`git show HEAD:legacy_root/layout.tsx` confirma que existio un shell anterior con:

- metadata propia
- `Inter` desde `next/font/google`
- imports a `@/components/shared/Header`
- imports a `@/components/shared/Footer`

Hecho confirmado:

- `legacy_root/layout.tsx` representaba una variante previa del layout publico, no una dependencia del arbol `src/app/(marketing)` actual.

### `legacy_root/page.tsx`

`git show HEAD:legacy_root/page.tsx` confirma que existio una pagina previa de servicios con:

- metadata propia
- grid de tarjetas con `lucide-react`
- uso de `@/components/ui/card`

Hecho confirmado:

- `legacy_root/page.tsx` es una implementacion historica distinta de la pagina publica actual, no una dependencia del arbol activo.

## Riesgos de eliminacion

### Riesgo bajo

- Eliminar referencias en documentacion que solo mencionen el legacy como contexto historico.

### Riesgo medio

- Eliminar de Git los rastros `app_legacy/*` y `legacy_root/*` en un repo que ya trae esos borrados pendientes desde antes.
- Quitar el `exclude` de [tsconfig.json](/d:/Projects/newwebnusketech/tsconfig.json) sin cerrar al mismo tiempo la historia abierta de esos paths en control de versiones.

### Riesgo alto

- Interpretar que la ausencia en working tree equivale a cierre formal ya resuelto.
- Mezclar en un mismo cambio:
  - limpieza de `tsconfig.json`
  - borrado legacy
  - otra intervencion funcional

## Recomendacion final

Decision recomendada:

- Considerar `app_legacy` y `legacy_root` como rastro historico congelado, no como parte activa del build actual.
- No hacer borrado agresivo en esta fase.
- Ejecutar una fase separada de cierre legacy con alcance acotado y validaciones propias.

Secuencia recomendada para esa fase:

1. Confirmar que esos paths siguen siendo los unicos rastros legacy en Git.
2. Formalizar su eliminacion del control de versiones en un commit dedicado, sin mezclar cambios funcionales.
3. Solo despues, retirar `app_legacy` y `legacy_root` de [tsconfig.json](/d:/Projects/newwebnusketech/tsconfig.json) en otro commit pequeno o en el mismo cambio si se valida de punta a punta.
4. Ejecutar `npm run lint` y `npm run build`.
5. Actualizar la documentacion arquitectonica para cerrar el estado como resuelto.

## Checklist de intervencion futura

- Confirmar `git status --short` limpio salvo los borrados legacy que se quieran formalizar.
- Reejecutar `git ls-files app_legacy legacy_root`.
- Verificar otra vez que `rg -n --hidden --glob '!node_modules/**' --glob '!.git/**' --glob '!docs/**' "app_legacy|legacy_root" .` solo devuelve [tsconfig.json](/d:/Projects/newwebnusketech/tsconfig.json).
- Revisar que [next.config.ts](/d:/Projects/newwebnusketech/next.config.ts), [eslint.config.mjs](/d:/Projects/newwebnusketech/eslint.config.mjs), [components.json](/d:/Projects/newwebnusketech/components.json), [postcss.config.mjs](/d:/Projects/newwebnusketech/postcss.config.mjs) y [package.json](/d:/Projects/newwebnusketech/package.json) sigan sin referencias.
- Separar el cierre legacy de cualquier cambio en rutas, paginas, layouts o componentes.
- Ejecutar `npm run lint`.
- Ejecutar `npm run build`.
- Confirmar que `/`, `/contacto`, `/servicios` y `/tecnologia` siguen generando sin cambios.
- Actualizar [AI_CONTEXT_LOG.md](/d:/Projects/newwebnusketech/docs/AI_CONTEXT_LOG.md) y el documento de estado arquitectonico si la fase llega a completarse.

## Cambios realizados en esta auditoria

- Creacion de [LEGACY_CONFIG_CLOSURE_AUDIT.md](/d:/Projects/newwebnusketech/docs/LEGACY_CONFIG_CLOSURE_AUDIT.md)
- No se realizaron cambios de producto.
- No se realizaron cambios de configuracion.
- No se elimino ningun archivo.
