# CURRENT_ARCHITECTURE_STATE

Fecha de auditoria: 2026-03-23
Alcance: estado real del working tree en `D:\Projects\newwebnusketech`

## 1. Proposito actual del repo

Estado actual real:
- El repositorio implementa un sitio marketing publico para Nuskë Vet Center.
- La aplicacion activa usa App Router dentro de `src/app`.
- Las rutas publicas confirmadas en el working tree son `/`, `/servicios` y `/tecnologia`.

Evidencia:
- `src/app/(marketing)/page.tsx`
- `src/app/(marketing)/servicios/page.tsx`
- `src/app/(marketing)/tecnologia/page.tsx`
- `src/app/layout.tsx`
- `src/app/(marketing)/layout.tsx`

No confirmado:
- No hay evidencia de portal privado, blog, telemedicina, contacto ni secciones autenticadas como rutas activas dentro de `src/app`.

## 2. Stack real detectado

Estado actual real:

| Area | Evidencia real |
| --- | --- |
| Framework | `next@16.2.1` en `package.json` |
| UI runtime | `react@19.2.4`, `react-dom@19.2.4` en `package.json` |
| Lenguaje | TypeScript con `strict: true` en `tsconfig.json` |
| Estilos | `tailwindcss@^4`, `@tailwindcss/postcss@^4`, `tw-animate-css`, `shadcn/tailwind.css` |
| UI base | `shadcn` y `radix-ui` en `package.json`; componentes en `src/components/ui` |
| Carruseles | `embla-carousel-react` en `package.json`; wrapper en `src/components/ui/carousel.tsx` |
| Iconos | `lucide-react` |
| Lint | `eslint`, `eslint-config-next`; `npm run lint` ejecuta correctamente |

Observaciones:
- `README.md` sigue siendo el texto base de `create-next-app` y no describe el proyecto real.
- `components.json` define aliases de shadcn para `@/components`, `@/lib` y `@/hooks`, pero el repo no tiene carpeta `src/hooks`.

## 3. Estructura real de carpetas

Estado actual real:

```text
docs/
components/
  ui/
lib/
public/
  brand/
  marketing/
    hero/
    team/
    testimonials/
  static/
    favicons/
src/
  app/
    (marketing)/
      servicios/
      tecnologia/
  components/
    shared/
    ui/
  features/
    marketing/
      components/
  lib/
```

Observaciones relevantes:
- Existe duplicacion de zonas base fuera de `src`: `components/ui` y `lib`.
- El codigo de aplicacion principal vive dentro de `src`, pero el alias `@/*` tambien apunta al root del repo.
- No existe carpeta `src/hooks`.
- No existe carpeta `src/types`.
- No existe carpeta `pages`.
- No existe `.github/` en la raiz del proyecto.

## 4. Entrypoints reales

Estado actual real:
- Root layout: `src/app/layout.tsx`
- Layout de marketing: `src/app/(marketing)/layout.tsx`
- Home: `src/app/(marketing)/page.tsx`
- Servicios: `src/app/(marketing)/servicios/page.tsx`
- Tecnologia: `src/app/(marketing)/tecnologia/page.tsx`
- Estilos globales: `src/app/globals.css`
- Metadata global: `metadata` exportado en `src/app/layout.tsx`

No confirmado:
- No se confirmaron `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`, `sitemap.ts`, `robots.ts` ni handlers API.

## 5. Layouts, route groups y rutas activas reales

Estado actual real:
- Existe un route group `src/app/(marketing)` que no altera la URL.
- El `RootLayout` agrega `html`, `body`, fuente `Plus_Jakarta_Sans`, `globals.css` y metadata global.
- El layout de marketing monta `UrgencyBanner`, `Navbar`, `Footer` y `WhatsAppFloat`.

Jerarquia efectiva:

```text
src/app/layout.tsx
  -> src/app/(marketing)/layout.tsx
     -> src/app/(marketing)/page.tsx            => /
     -> src/app/(marketing)/servicios/page.tsx  => /servicios
     -> src/app/(marketing)/tecnologia/page.tsx => /tecnologia
```

Rutas activas confirmadas:

| Ruta | Archivo | Estado |
| --- | --- | --- |
| `/` | `src/app/(marketing)/page.tsx` | Activa |
| `/servicios` | `src/app/(marketing)/servicios/page.tsx` | Activa |
| `/tecnologia` | `src/app/(marketing)/tecnologia/page.tsx` | Activa |

Rutas enlazadas pero no implementadas:

| Ruta enlazada | Evidencia | Estado |
| --- | --- | --- |
| `/contacto` | `src/components/shared/navbar.tsx`, `src/features/marketing/components/Hero.tsx` | No existe `page.tsx` correspondiente |

Riesgo detectado:
- Navegacion rota hacia `/contacto`.

Clasificacion:
- Critico

## 6. Zonas `shared`, `ui`, `features`, `lib`, `docs`, `public`

### `src/components/shared`

Estado actual real:
- Contiene shell publica y piezas compartidas de layout.
- Archivos confirmados:
  - `src/components/shared/navbar.tsx`
  - `src/components/shared/footer.tsx`
  - `src/components/shared/urgency-banner.tsx`
  - `src/components/shared/WhatsAppFloat.tsx`
  - `src/components/shared/MobileMenu.tsx`
  - `src/components/shared/Logo.tsx`

Observacion:
- `Logo.tsx` embebe un string SVG grande dentro del componente. No es incorrecto por si mismo, pero concentra asset y logica en una sola pieza.

### `src/components/ui`

Estado actual real:
- Contiene primitives de UI reutilizables.
- Archivos confirmados:
  - `accordion.tsx`
  - `badge.tsx`
  - `button.tsx`
  - `card.tsx`
  - `carousel.tsx`
  - `tabs.tsx`

Observacion:
- `src/components/ui/carousel.tsx` es cliente y concentra la abstraccion de Embla.

### `src/features/marketing/components`

Estado actual real:
- Contiene bloques composables del dominio marketing.
- Componentes confirmados:
  - `Hero.tsx`
  - `TechHighlights.tsx`
  - `ServicesGrid.tsx`
  - `TestimonialCarousel.tsx`
  - `MedicalTeam.tsx`
  - `FaqSection.tsx`
  - `ContactPreview.tsx`
  - `FacilitiesGallery.tsx`
  - `WellnessSelector.tsx`

Observacion:
- La home usa composicion por bloques y no esta monolitica.
- La pagina de servicios reutiliza `WellnessSelector`, pero gran parte del contenido sigue declarada en el mismo `page.tsx`.

### `src/lib` y `lib`

Estado actual real:
- Existen dos archivos `utils.ts`:
  - `src/lib/utils.ts`
  - `lib/utils.ts`
- Ambos contienen la misma utilidad `cn`, con diferencia de formato y sin diferencia funcional confirmada.

Riesgo detectado:
- Fuente de verdad ambigua para utilidades base.

Clasificacion:
- Alto

### `docs`

Estado actual real:
- Archivos encontrados antes de esta auditoria:
  - `docs/architecture.md`
  - `docs/best-practices.md`
  - `docs/nuske-context.md`
  - `docs/CURRENT_ARCHITECTURE_STATE.md`

Riesgo detectado:
- La documentacion existente mezcla estado actual con arquitectura objetivo y contiene afirmaciones no compatibles con el working tree actual.

Clasificacion:
- Alto

### `public`

Estado actual real:
- Assets usados por la UI activa:
  - `public/marketing/hero/hero-placeholder.svg`
  - `public/marketing/team/*.svg`
  - `public/marketing/testimonials/*.svg`
  - `public/static/favicons/favicon.svg`
  - `public/static/favicons/site.webmanifest`

Assets sin referencia encontrada en `src`, `docs`, `components`, `lib` o `README.md`:
- `public/brand/logo-nuske.svg`
- `public/file.svg`
- `public/globe.svg`
- `public/next.svg`
- `public/vercel.svg`
- `public/window.svg`

Riesgo detectado:
- Hay ruido de assets remanentes o no integrados.

Clasificacion:
- Bajo

## 7. Dependencias estructurales importantes

Estado actual real:
- `src/app/layout.tsx` depende de `next/font/google` y de `src/app/globals.css`.
- `src/app/(marketing)/layout.tsx` depende de componentes shared, pero usando alias mixto `@/src/components/...`.
- `src/features/marketing/*` depende de `@/components/ui/*`.
- `src/components/ui/*` depende de `@/lib/utils`, lo cual por alias puede resolver a `src/lib/utils.ts` o `lib/utils.ts` segun la estrategia de resolucion.
- `next.config.ts` permite imagenes remotas solo desde `images.unsplash.com`.

Observacion:
- El alias `@/*` en `tsconfig.json` apunta a `./src/*` y `./*`. Eso admite imports tanto hacia `src/...` como hacia carpetas del root.

Riesgo detectado:
- El contrato de imports no esta cerrado y permite ambiguedad estructural.

Clasificacion:
- Alto

## 8. Estado de modularidad

Estado actual real:

| Archivo | Lineas | Lectura arquitectonica |
| --- | ---: | --- |
| `src/app/(marketing)/servicios/page.tsx` | 387 | Pagina grande con catalogo, copy, CTA y estructura visual en un solo archivo |
| `src/features/marketing/components/WellnessSelector.tsx` | 261 | Componente grande con responsabilidad de UI y contenido de planes |
| `src/components/ui/carousel.tsx` | 215 | Tamaño alto pero razonable por ser primitive compartida |
| `src/features/marketing/components/ServicesGrid.tsx` | 180 | Componente grande pero aun acotado al dominio |
| `src/app/(marketing)/tecnologia/page.tsx` | 171 | Pagina intermedia; aun controlable, pero cercana al umbral interno declarado en docs |

Conclusion:
- La home esta bien compuesta por bloques.
- `servicios/page.tsx` es el principal punto de sobrecarga visible.
- `tecnologia/page.tsx` no es critica hoy, pero ya concentra demasiado contenido para seguir creciendo sin reglas.

## 9. Cliente/servidor y uso de interactividad

Estado actual real:
- Archivos con `"use client"` confirmados:
  - `src/components/shared/MobileMenu.tsx`
  - `src/components/ui/accordion.tsx`
  - `src/components/ui/carousel.tsx`
  - `src/components/ui/tabs.tsx`
  - `src/features/marketing/components/FacilitiesGallery.tsx`
  - `src/features/marketing/components/TestimonialCarousel.tsx`
  - `src/features/marketing/components/WellnessSelector.tsx`
- El resto de pages y varios bloques de marketing operan como Server Components por defecto.

Lectura arquitectonica:
- La separacion server/client es razonable para el alcance actual.
- No se detectaron Server Actions ni data fetching.

No confirmado:
- No hay evidencia de hooks custom de dominio.

## 10. Zonas legacy y su impacto

Estado actual real:
- El working tree no contiene carpetas fisicas `app_legacy/` ni `legacy_root/`.
- `tsconfig.json` excluye `app_legacy` y `legacy_root`.
- `git status --short` muestra eliminaciones rastreadas:
  - `D app_legacy/favicon.ico`
  - `D legacy_root/Footer.tsx`
  - `D legacy_root/Header.tsx`
  - `D legacy_root/layout.tsx`
  - `D legacy_root/page.tsx`
- `git ls-files app_legacy legacy_root` confirma que esas rutas siguen versionadas en Git.
- `git show HEAD:legacy_root/*` confirma que hubo una implementacion previa distinta del shell y de la pagina principal.

Impacto:
- La frontera legacy no esta resuelta a nivel de gobernanza.
- El arbol actual ya no usa esas carpetas, pero siguen siendo parte del historial y del estado de Git.

Riesgo detectado:
- Riesgo de confusion sobre la fuente de verdad si alguien restaura o reutiliza piezas legacy sin auditoria.

Clasificacion:
- Alto

## 11. Inconsistencias detectadas

### Inconsistencias entre codigo y documentacion

| Evidencia | Estado actual real | Riesgo |
| --- | --- | --- |
| `docs/architecture.md` habla de `Next.js 15+` | `package.json` usa `next 16.2.1` | Medio |
| `docs/architecture.md` menciona Zustand y TanStack Query | No aparecen en `package.json` ni en `src` | Alto |
| `docs/architecture.md` propone `src/types` y `appointments/`, `services/` | No existen en el repo actual | Medio |
| `README.md` sigue siendo plantilla base de Next | No describe el proyecto real | Medio |
| `docs/CURRENT_ARCHITECTURE_STATE.md` previo afirma monolitos de ~1800 y ~900 lineas | `servicios/page.tsx` tiene 387 lineas y `tecnologia/page.tsx` 171 | Alto |
| `docs/CURRENT_ARCHITECTURE_STATE.md` previo afirma existencia de `app_legacy` y `legacy_root` como carpetas presentes | En el working tree no existen; solo hay rastro en Git | Alto |

### Inconsistencias dentro del codigo

| Evidencia | Estado actual real | Riesgo |
| --- | --- | --- |
| `src/app/(marketing)/layout.tsx` importa desde `@/src/components/...` | Mezcla alias con imports `@/components/...` en el resto del repo | Alto |
| `src/components/shared/navbar.tsx` importa `MobileMenu` desde `@/src/components/shared/MobileMenu` | Inconsistencia interna de alias | Alto |
| `src/components/shared/navbar.tsx` y `src/features/marketing/components/Hero.tsx` enlazan `/contacto` | La ruta no existe | Critico |
| `src/lib/utils.ts` y `lib/utils.ts` duplican la misma utilidad | Ambiguedad de ownership | Alto |

## 12. Deuda tecnica visible

Estado actual real:
- Duplicacion de utilidades y primitives fuera y dentro de `src`.
- Alias demasiado permisivo en `tsconfig.json`.
- Ruta inexistente enlazada desde componentes primarios de conversion.
- Documentacion base desactualizada o aspiracional.
- Working tree con rastros legacy eliminados pero no normalizados.
- Falta de CI y de pruebas automatizadas visibles en la raiz del repo.
- Assets de plantilla o no usados en `public/`.

No confirmado:
- No se confirmo si existe validacion manual externa de enlaces, smoke tests de despliegue o revisiones visuales fuera del repo.

## 13. Testing, validaciones y automatizacion

Estado actual real:
- Script disponible: `npm run lint`
- Resultado confirmado en auditoria: `eslint` pasa sin errores.
- No se detectaron scripts de test en `package.json`.
- No se detectaron archivos de prueba ni configuraciones de Jest, Vitest, Playwright o Cypress en la raiz del proyecto.
- No se detecto `.github/` ni pipeline equivalente en la raiz.

Riesgo detectado:
- Baja cobertura de validacion automatizada para rutas, enlaces y regresiones visuales.

Clasificacion:
- Medio

## 14. Evaluacion general del estado arquitectonico

Estado actual real:
- La base activa es moderna y utilizable: Next App Router, composicion feature-first en la home, primitives reutilizables y separacion razonable entre shell publica y bloques de marketing.
- El principal problema no es la tecnologia elegida, sino la falta de contrato arquitectonico operativo.
- El repo esta en una fase intermedia: la arquitectura nueva ya existe, pero sigue rodeada de duplicados, imports ambiguos, documentacion desalineada y rastros legacy sin cierre formal.

## 15. Clasificacion consolidada de riesgos

### Criticos
- Navegacion a `/contacto` sin ruta implementada.

### Altos
- Alias e imports inconsistentes entre `@/components`, `@/src/components` y resolucion dual de `@/*`.
- Duplicacion de `button.tsx` y `utils.ts` fuera y dentro de `src`.
- Documentacion existente con afirmaciones no compatibles con el codigo actual.
- Frontera legacy no cerrada; rastros activos en Git.
- `src/app/(marketing)/servicios/page.tsx` como principal pagina sobredimensionada.

### Medios
- `src/app/(marketing)/tecnologia/page.tsx` cerca del umbral de sobrecrecimiento.
- Sin pruebas automatizadas ni CI visibles en la raiz.
- `README.md` no representa el proyecto real.

### Bajos
- Assets no usados en `public/`.
- `Logo.tsx` concentra asset inline grande; requiere criterio si se modifica.

## 16. Arquitectura objetivo futura

Arquitectura objetivo futura:
- No definida en este documento.
- Cualquier propuesta futura debe partir de esta foto actual y no sustituirla.
