# INTERVENCION_FASE_5_TECNOLOGIA_PARTICION_SEGURA

Fecha de intervención: 2026-03-23
Alcance: partición segura de `src/app/(marketing)/tecnologia/page.tsx`

## 1. Objetivo

Reducir la deuda arquitectónica de la página `/tecnologia` mediante extracción de bloques presentacionales claros, sin alterar comportamiento funcional, UX, copy, SEO, metadata ni estructura pública.

## 2. Frontera de extracción elegida

Se eligieron estas fronteras seguras:
- hero superior de la página
- sección de equipamiento médico
- dataset de equipamiento
- encabezado introductorio de la sección de instalaciones

## 3. Archivos creados

- `src/features/marketing/components/technology/types.ts`
- `src/features/marketing/components/technology/data.ts`
- `src/features/marketing/components/technology/TechnologyPageHero.tsx`
- `src/features/marketing/components/technology/EquipmentSection.tsx`
- `src/features/marketing/components/technology/FacilitiesIntro.tsx`
- `docs/INTERVENCION_FASE_5_TECNOLOGIA_PARTICION_SEGURA.md`

## 4. Archivos modificados

- `src/app/(marketing)/tecnologia/page.tsx`
- `docs/AI_CONTEXT_LOG.md`

## 5. Bloques extraídos

### Extraídos
- encabezado de página
- sección de equipamiento médico
- cards de equipamiento
- dataset `equipment`
- intro textual previa a `FacilitiesGallery`

### Resultado
- `tecnologia/page.tsx` quedó como archivo de composición.

## 6. Bloques no tocados y por qué

### `FacilitiesGallery`
- No se tocó porque ya era un componente separado y funcional.
- Refactorizarlo no aportaba reducción clara de riesgo en esta fase.

### Metadata
- No se tocó porque la página original no definía metadata local y la intervención no requería cambios SEO.

## 7. Tamaño antes y después

| Archivo | Antes | Después |
| --- | ---: | ---: |
| `src/app/(marketing)/tecnologia/page.tsx` | 171 líneas | 17 líneas |

## 8. Validaciones ejecutadas

- `npm run lint` -> OK
- `npm run build` -> OK
- build confirmó continuidad de rutas:
  - `/`
  - `/contacto`
  - `/servicios`
  - `/tecnologia`

## 9. Riesgos evitados

- mezcla de dataset y presentación en un solo archivo
- crecimiento futuro del monolito de `/tecnologia`
- cambios innecesarios sobre otras rutas o componentes ya estables

## 10. Pendientes abiertos

- `data.ts` puede crecer si se añaden más equipos
- si más adelante se homogeniza la estrategia de datasets de marketing, habrá que revisar `services/data.ts` y `technology/data.ts` juntas

## 11. Estado final

Estado final confirmado:
- `/tecnologia` conserva su estructura pública visible
- `tecnologia/page.tsx` ya no concentra presentación extensa
- la extracción se mantuvo dentro del dominio `src/features/marketing/components/technology/`
