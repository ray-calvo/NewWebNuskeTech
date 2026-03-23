# BOUNDARY_RESOLUTION_AUDIT

Fecha de auditoria: 2026-03-23
Alcance: aliases, resolucion real de imports, duplicados raiz vs `src`, consumo real de arboles y rastro legacy

## Resumen ejecutivo

### Hechos confirmados
- La unica configuracion de alias real del repo esta en `tsconfig.json` y define solo `@/*`.
- `next.config.ts` no redefine aliases ni resolucion de modulos.
- `components.json` declara aliases operativos para shadcn, pero dependen del alias real `@/*` definido en `tsconfig.json`.
- En la resolucion efectiva observada con `npx tsc --noEmit --traceResolution`, los imports activos `@/components/...`, `@/features/...` y `@/lib/...` resuelven a archivos dentro de `src/`.
- Los imports `@/src/components/...` no abren un arbol separado. Primero intentan resolver contra `./src/src/...` y, al fallar, caen al segundo patron `./*`, que termina resolviendo igualmente hacia `src/components/...`.
- Los duplicados fisicos en la raiz (`components/ui/button.tsx` y `lib/utils.ts`) existen, pero no aparecio evidencia de que sean la fuente de verdad consumida por el codigo activo.
- `app_legacy` y `legacy_root` no existen en el working tree actual, pero siguen versionados en Git y aparecen como eliminados en `git status`.

### Decision recomendada de fuente de verdad

Recomendacion:
- Considerar `src/` como unica fuente de verdad estructural para futuras intervenciones.
- Considerar `@/components`, `@/features` y `@/lib` como convencion canonica de imports.
- Tratar `@/src/...` como convencion no canonica y de alto riesgo de confusion.

## 1. Configuracion real de aliases

### Hechos confirmados

Archivo: `tsconfig.json`

```json
"paths": {
  "@/*": ["./src/*", "./*"]
}
```

Archivo: `components.json`

```json
"aliases": {
  "components": "@/components",
  "utils": "@/lib/utils",
  "ui": "@/components/ui",
  "lib": "@/lib",
  "hooks": "@/hooks"
}
```

Archivo: `next.config.ts`
- No contiene `webpack`, `experimental.turbo.resolveAlias`, `resolve.alias` ni otra configuracion equivalente.

### Tabla de aliases

| Alias o convención | Definición configurada | Evidencia | Uso real en código activo | Estado |
| --- | --- | --- | --- | --- |
| `@/*` | `./src/*`, `./*` | `tsconfig.json` | Sí | Alias real activo |
| `@/components` | Alias derivado de `@/*` | `components.json` | Sí | Activo |
| `@/features` | Alias derivado de `@/*` | No declarado explícitamente; viable por `@/*` | Sí | Activo |
| `@/lib` | Alias derivado de `@/*` | `components.json` + `tsconfig.json` | Sí | Activo |
| `@/hooks` | Alias derivado de `@/*` | `components.json` | No | No consumido |
| `@/src/...` | No declarado explícitamente; entra por `@/*` | `tsconfig.json` | Sí, en pocos archivos | Activo pero no canónico |

### Ejemplos reales de uso activo

`@/components/...`
- `src/components/shared/navbar.tsx`
- `src/components/shared/MobileMenu.tsx`
- `src/app/(marketing)/servicios/page.tsx`
- `src/app/(marketing)/tecnologia/page.tsx`
- varios archivos en `src/features/marketing/components/*`

`@/features/...`
- `src/app/(marketing)/page.tsx`
- `src/app/(marketing)/servicios/page.tsx`
- `src/app/(marketing)/tecnologia/page.tsx`

`@/lib/...`
- `src/components/ui/accordion.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/carousel.tsx`
- `src/components/ui/tabs.tsx`
- `src/components/shared/Logo.tsx`
- `components/ui/button.tsx`

`@/src/...`
- `src/app/(marketing)/layout.tsx`
- `src/components/shared/navbar.tsx`

### Resolucion efectiva confirmada

Hechos confirmados por `npx tsc --noEmit --traceResolution`:
- `@/lib/utils` se resolvio a `D:/Projects/newwebnusketech/src/lib/utils.ts`
- `@/components/ui/button` se resolvio a `D:/Projects/newwebnusketech/src/components/ui/button.tsx`
- `@/src/components/shared/footer` se resolvio a `D:/Projects/newwebnusketech/src/components/shared/footer.tsx`
- `@/src/components/shared/MobileMenu` se resolvio a `D:/Projects/newwebnusketech/src/components/shared/MobileMenu.tsx`

### Interpretacion de `@/src/*`

#### Hecho confirmado
- Con la configuracion actual, un import como `@/src/components/shared/footer` no apunta primero a `src/components/...`.
- Primero intenta `./src/src/components/shared/footer`.
- Como esa ruta no existe, cae al segundo patron `./*`, que genera `./src/components/shared/footer`.

#### Conclusión
- `@/src/...` y `@/...` no estan modelando dos arboles activos distintos en los casos observados.
- Estan llegando al mismo arbol fisico `src/...`, pero a traves de rutas de resolucion distintas.

### Convencion canónica

Recomendacion:
- La convención canonica debería ser `@/components`, `@/features` y `@/lib`, porque:
  - coincide con `components.json`
  - coincide con la resolucion primaria `./src/*`
  - evita el falso indicio de un arbol `src/src/*`
  - reduce el riesgo de editar archivos equivocados

## 2. Duplicados estructurales

### Tabla de duplicados

| Par | Presencia física | Hash igual | Fuente activa real aparente | Consumidores confirmados | Riesgo |
| --- | --- | --- | --- | --- | --- |
| `src/lib/utils.ts` vs `lib/utils.ts` | Sí | No | `src/lib/utils.ts` | Imports `@/lib/utils` resueltos a `src/lib/utils.ts` | Alto |
| `src/components/ui/button.tsx` vs `components/ui/button.tsx` | Sí | No | `src/components/ui/button.tsx` | Imports `@/components/ui/button` resueltos a `src/components/ui/button.tsx` | Alto |

### Caso 1. `src/lib/utils.ts` vs `lib/utils.ts`

#### Hechos confirmados
- Ambos archivos existen:
  - `src/lib/utils.ts`
  - `lib/utils.ts`
- Ambos implementan la utilidad `cn`.
- No tienen el mismo hash.
- La diferencia visible es de formato; no se detecto diferencia funcional evidente en lectura directa.
- El trace de TypeScript resolvio `@/lib/utils` hacia `src/lib/utils.ts` tanto desde:
  - `components/ui/button.tsx`
  - `src/components/ui/button.tsx`
  - `src/components/shared/Logo.tsx`
  - `src/components/ui/*`

#### Consumidores confirmados de `@/lib/utils`
- `src/components/ui/accordion.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/carousel.tsx`
- `src/components/ui/tabs.tsx`
- `src/components/shared/Logo.tsx`
- `components/ui/button.tsx`

#### Fuente activa real aparente
- `src/lib/utils.ts`

#### Riesgo de tocar el archivo equivocado
- Alto.
- `lib/utils.ts` existe y puede inducir a error, pero la resolucion activa observada no lo usa como destino de `@/lib/utils`.

#### Recomendacion de intervención futura

Recomendacion:
- No tocar `lib/utils.ts` como si fuera la utilidad activa del sistema sin una auditoria previa de consolidacion.
- Si se normaliza el repo, consolidar `@/lib/utils` sobre `src/lib/utils.ts`.

### Caso 2. `src/components/ui/button.tsx` vs `components/ui/button.tsx`

#### Hechos confirmados
- Ambos archivos existen:
  - `src/components/ui/button.tsx`
  - `components/ui/button.tsx`
- No tienen el mismo hash.
- La diferencia visible es de formato; no se detecto diferencia funcional evidente en lectura directa.
- El trace de TypeScript resolvio `@/components/ui/button` hacia `src/components/ui/button.tsx`.

#### Consumidores confirmados de `@/components/ui/button`
- `src/components/shared/navbar.tsx`
- `src/components/shared/MobileMenu.tsx`
- `src/components/ui/carousel.tsx`
- `src/features/marketing/components/Hero.tsx`
- `src/features/marketing/components/WellnessSelector.tsx`
- `src/app/(marketing)/servicios/page.tsx`

#### Fuente activa real aparente
- `src/components/ui/button.tsx`

#### Riesgo de tocar el archivo equivocado
- Alto.
- `components/ui/button.tsx` parece remanente estructural, pero sigue estando incluido por TypeScript y puede confundir futuras intervenciones.

#### Recomendacion de intervención futura

Recomendacion:
- Tratar `src/components/ui/button.tsx` como fuente activa.
- No editar `components/ui/button.tsx` salvo en una fase dedicada a consolidacion de duplicados.

### Otros duplicados equivalentes encontrados

Hecho confirmado:
- No se detectaron otros pares raiz vs `src` al comparar el arbol de `src` contra la raiz del repo.
- Los unicos pares equivalentes encontrados fueron:
  - `components/ui/button.tsx`
  - `lib/utils.ts`

## 3. Consumo real de arboles

## 3.1 `components/`

### Hechos confirmados
- `components/` solo contiene `components/ui/button.tsx`.
- No se detectaron imports en el codigo activo que resuelvan de forma observada hacia `components/ui/button.tsx`.
- Ese archivo sí tiene un import saliente hacia `@/lib/utils`, que el resolvedor manda a `src/lib/utils.ts`.

### Estado
- Remanente con actividad interna minima.
- No confirmado como arbol activo consumido por la aplicacion.

## 3.2 `lib/`

### Hechos confirmados
- `lib/` solo contiene `lib/utils.ts`.
- No se detectaron imports activos resueltos hacia `lib/utils.ts`.
- `lib/utils.ts` solo tiene imports salientes externos:
  - `clsx`
  - `tailwind-merge`

### Estado
- Remanente.
- No confirmado como arbol activo consumido por la aplicacion.

## 3.3 `src/components/`

### Hechos confirmados
- `src/components/shared/*` es consumido por:
  - `src/app/(marketing)/layout.tsx`
  - `src/components/shared/navbar.tsx`
- `src/components/ui/*` es consumido ampliamente por:
  - `src/components/shared/*`
  - `src/features/marketing/components/*`
  - `src/app/(marketing)/*`
- El trace de TypeScript confirma resolucion de:
  - `@/components/ui/button` -> `src/components/ui/button.tsx`
  - `@/src/components/shared/footer` -> `src/components/shared/footer.tsx`
  - `@/src/components/shared/MobileMenu` -> `src/components/shared/MobileMenu.tsx`

### Estado
- Activo.
- Fuente de verdad real para componentes compartidos y UI.

## 3.4 `src/lib/`

### Hechos confirmados
- `src/lib/utils.ts` es el destino real de los imports `@/lib/utils` observados.
- Es consumido por `src/components/ui/*`, `src/components/shared/Logo.tsx` y tambien por `components/ui/button.tsx`.

### Estado
- Activo.
- Fuente de verdad real para utilidades compartidas observadas.

## 3.5 Mapa de consumo real

### Mapa por prefijo de import

| Prefijo | Ocurrencias confirmadas en código | Lectura |
| --- | ---: | --- |
| `@/components/` | 26 | Activo y dominante |
| `@/src/components/` | 5 | Activo pero no canónico |
| `@/lib/` | 8 | Activo |
| `@/features/` | 9 | Activo |
| `@/hooks/` | 0 | Sin consumo |

### Mapa de arboles

| Árbol | Imports entrantes confirmados | Imports salientes confirmados | Estado |
| --- | --- | --- | --- |
| `components/` | No confirmados como destino de alias activos | `components/ui/button.tsx` -> `@/lib/utils` | Remanente |
| `lib/` | No confirmados como destino de alias activos | `lib/utils.ts` -> dependencias externas | Remanente |
| `src/components/` | Sí | Sí | Activo |
| `src/lib/` | Sí | Sí | Activo |

## 4. Rastro legacy

### Hechos confirmados
- `tsconfig.json` excluye `app_legacy` y `legacy_root`.
- `git ls-files` confirma versionado de:
  - `app_legacy/favicon.ico`
  - `legacy_root/Footer.tsx`
  - `legacy_root/Header.tsx`
  - `legacy_root/layout.tsx`
  - `legacy_root/page.tsx`
- `git status --short` los muestra como eliminados en el working tree.
- `Get-ChildItem` no encontro carpetas fisicas `app_legacy` ni `legacy_root` en la raiz actual.
- `git show HEAD:legacy_root/layout.tsx` confirma que `legacy_root` contenia un layout alterno que importaba:
  - `@/components/shared/Header`
  - `@/components/shared/Footer`

### Distinguir estado

| Zona | Versionado histórico | Presencia actual en working tree | Referencias activas | Riesgo real actual |
| --- | --- | --- | --- | --- |
| `app_legacy` | Sí | No | No confirmadas | Medio |
| `legacy_root` | Sí | No | No confirmadas desde `src` activo | Alto por confusión histórica |

### Riesgo real actual

Hechos confirmados:
- No hay referencias activas desde `src/` hacia `app_legacy` o `legacy_root`.
- El riesgo no es de ejecución actual, sino de intervención incorrecta:
  - restaurar legacy como si siguiera vigente
  - interpretar imports o docs viejas como señal de arbol paralelo activo

## 5. Hallazgos confirmados

- El alias real del repo es solo `@/*`.
- `@/components/*`, `@/features/*` y `@/lib/*` funcionan por expansion de `@/*`.
- `@/src/*` no representa una segunda fuente de verdad; resuelve al mismo arbol `src/*` por fallback.
- `src/components/*` y `src/lib/*` son los arboles activos reales.
- `components/*` y `lib/*` son remanentes fisicos con riesgo de confusion.
- Los unicos duplicados raiz vs `src` detectados en esta auditoria son:
  - `components/ui/button.tsx`
  - `lib/utils.ts`
- `app_legacy` y `legacy_root` son rastro historico versionado, no arboles presentes en el working tree actual.

## 6. Ambigüedades no resueltas

- No confirmado si `components/` y `lib/` raiz son requeridos por alguna herramienta externa fuera del codigo auditado.
- No confirmado si `next build` o una herramienta no auditada introduce una resolucion distinta a la observada con TypeScript.
- No confirmado el destino final de `app_legacy` y `legacy_root`: archivo, eliminacion formal o conservacion historica.

## 7. Riesgos priorizados

### Criticos
- Ninguno confirmado en esta fase exclusivamente de fronteras.

### Altos
- Tocar `components/ui/button.tsx` pensando que es el botón activo.
- Tocar `lib/utils.ts` pensando que es la utilidad activa.
- Mantener `@/src/...` como convención normal, porque oculta que el repo ya depende de un fallback poco evidente.
- Reintroducir `legacy_root` o `app_legacy` sin auditoria específica.

### Medios
- Dejar la resolucion dual `./src/*`, `./*` sin cerrar en una fase futura.
- Mantener `components.json` con alias `@/hooks` cuando no existe `src/hooks`.

## 8. Checklist previo antes de cualquier refactor

- Confirmar si el archivo a tocar vive en `src/` o en raiz.
- Si existe duplicado raíz vs `src`, verificar con evidencia cuál es el destino real del alias.
- Buscar si el import usa `@/src/...`; si sí, revisar su resolucion antes de editar.
- Revisar `tsconfig.json` antes de asumir que un alias apunta al arbol esperado.
- Revisar `git status --short` para detectar remanentes legacy o archivos eliminados versionados.
- No tocar `components/` ni `lib/` raiz como si fueran fuente de verdad sin una fase previa de consolidacion.
- No restaurar `app_legacy` ni `legacy_root` durante un refactor funcional.
