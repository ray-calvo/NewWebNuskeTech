# BACKLOG_ARQUITECTONICO_PRIORIZADO

Fecha base: 2026-03-23
Alcance: backlog derivado solo de evidencia confirmada

## Tabla priorizada

| ID | Hallazgo | Evidencia | Impacto | Riesgo | Prioridad | Esfuerzo estimado | Dependencia | Recomendacion | Requiere auditoria previa |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARQ-001 | Ruta interna enlazada pero no implementada: `/contacto` | `src/components/shared/navbar.tsx`, `src/features/marketing/components/Hero.tsx`, ausencia de `src/app/**/contacto/page.tsx` | UX, conversion, confianza, navegacion | Critico | P0 | Bajo a medio | Decision de negocio sobre si crear o retirar la ruta | Resolver de inmediato: crear ruta real o retirar todos los enlaces | Si |
| ARQ-002 | Imports inconsistentes con `@/src/...` en codigo activo | `src/app/(marketing)/layout.tsx`, `src/components/shared/navbar.tsx` | Aumenta ambiguedad estructural y deuda | Alto | P1 | Bajo | Definir contrato oficial de imports | Normalizar a aliases sobre `src` sin usar `@/src/...` | Si |
| ARQ-003 | Alias `@/*` demasiado permisivo | `tsconfig.json` mapea `@/*` a `./src/*` y `./*` | Permite resolver codigo activo y duplicados del root con el mismo prefijo | Alto | P1 | Medio | Resolver ownership de root vs `src` | Reducir a una sola fuente de verdad despues de auditoria de impacto | Si |
| ARQ-004 | Duplicidad de `utils.ts` | `src/lib/utils.ts` y `lib/utils.ts` contienen la misma utilidad | Fuente de verdad ambigua | Alto | P1 | Bajo | ARQ-003 | Consolidar una unica ubicacion y ajustar imports | Si |
| ARQ-005 | Duplicidad de `button.tsx` | `src/components/ui/button.tsx` y `components/ui/button.tsx` difieren solo en formato | Riesgo de editar el archivo equivocado | Alto | P1 | Bajo a medio | ARQ-003 | Definir ownership y eliminar duplicidad cuando sea seguro | Si |
| ARQ-006 | Pagina de servicios sobredimensionada | `src/app/(marketing)/servicios/page.tsx` con 387 lineas | Mantenibilidad, escalabilidad, riesgo de regresion | Alto | P1 | Medio | Ninguna | Dividir por bloques de dominio antes de seguir agregando contenido | No |
| ARQ-007 | `WellnessSelector` con sobrepeso funcional | `src/features/marketing/components/WellnessSelector.tsx` con 261 lineas | Crecimiento dificil de sostener | Alto | P1 | Medio | ARQ-006 | Separar datos, navegacion y card rendering si vuelve a crecer | No |
| ARQ-008 | Pagina de tecnologia cerca del umbral de sobrecrecimiento | `src/app/(marketing)/tecnologia/page.tsx` con 171 lineas | Riesgo de convertirse en siguiente monolito | Medio | P2 | Bajo a medio | Ninguna | Congelar crecimiento y extraer nuevos bloques a feature components | No |
| ARQ-009 | Documentacion arquitectonica desalineada | `docs/architecture.md`, `README.md`, version previa de `docs/CURRENT_ARCHITECTURE_STATE.md` | Decisiones mal informadas por humanos o IA | Alto | P1 | Bajo | Ninguna | Mantener vigente la base documental nueva y revisar docs heredadas | No |
| ARQ-010 | Legacy no delimitado formalmente | `git status --short`, `git ls-files app_legacy legacy_root`, `git show HEAD:legacy_root/*` | Confusion sobre fuente de verdad y riesgo de reintroduccion | Alto | P1 | Medio | Decision de archivo o eliminacion formal | Definir estrategia: archivar, eliminar del repo o documentar congelamiento | Si |
| ARQ-011 | Sin pruebas automatizadas visibles | `package.json` sin scripts de test; ausencia de configs y archivos de prueba en raiz | Riesgo de regresion silenciosa | Medio | P2 | Medio | Ninguna | Introducir validaciones minimas empezando por smoke tests de rutas y links | Si |
| ARQ-012 | Sin CI visible en raiz | No existe `.github/` ni pipeline equivalente en la raiz | Cambios estructurales sin guardrails automatizados | Medio | P2 | Medio | ARQ-011 | Añadir pipeline minimo despues de definir checks base | Si |
| ARQ-013 | Assets no usados o remanentes | `public/brand/logo-nuske.svg`, `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg` sin referencias encontradas | Ruido y posible confusion | Bajo | P3 | Bajo | Ninguna | Clasificar si son remanentes o futuros assets oficiales | No |
| ARQ-014 | `README.md` de plantilla | `README.md` conserva texto de `create-next-app` | Onboarding incorrecto | Medio | P3 | Bajo | Ninguna | Reescribir README con stack, rutas y comandos reales | No |
| ARQ-015 | `Logo.tsx` embebe SVG grande inline | `src/components/shared/Logo.tsx` con 24 KB aprox y string SVG inline | Baja legibilidad al intervenir branding | Bajo | P3 | Bajo a medio | Decision sobre asset oficial del logo | No tocar sin revision; evaluar migracion a asset si se modifica branding | Si |

## Lectura operativa por prioridad

### P0
- ARQ-001 debe resolverse antes de cualquier cambio de conversion o navegacion.

### P1
- Primero cerrar contrato de imports y ownership.
- Despues atacar `servicios/page.tsx` y la delimitacion legacy.
- Mantener la documentacion como fuente de verdad paralela al refactor.

### P2
- Agregar validaciones y pipeline minimo una vez estabilizada la estructura.

### P3
- Limpiar ruido residual cuando la base critica ya no este en movimiento.

## Hallazgos que requieren validacion adicional

- Si `/contacto` debe existir como ruta de producto o retirarse.
- Si los duplicados del root son usados por una herramienta externa o son remanentes.
- Si `public/brand/logo-nuske.svg` debe reemplazar al SVG inline del componente `Logo`.
