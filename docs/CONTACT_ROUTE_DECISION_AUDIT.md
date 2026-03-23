# CONTACT_ROUTE_DECISION_AUDIT

Fecha de auditoria: 2026-03-23
Alcance: decision arquitectonica sobre la ruta publica `/contacto`

## Resumen ejecutivo

### Hechos confirmados
- La ruta `/contacto` no existe como ruta activa en `src/app`.
- `/contacto` sigue enlazada desde superficies publicas activas:
  - `src/components/shared/navbar.tsx`
  - `src/features/marketing/components/Hero.tsx`
- La home ya contiene una seccion funcional de contacto mediante `ContactPreview`.
- La documentacion de negocio en `docs/nuske-context.md` trata “Contacto” como area publica real del sitio.
- No existen `sitemap`, `robots`, metadata por ruta ni handlers relacionados con `/contacto` en el repo activo.

### Recomendación final
- Opcion recomendada: **A) `/contacto` debe existir como pagina real**.

### Motivo principal
- La arquitectura publica actual ya expone “Contacto” como destino navegable, no solo como seccion interna.
- El contexto de negocio documentado describe “Contacto” como area publica necesaria y con requerimientos propios.
- Retirar `/contacto` obligaria a redefinir decisiones ya visibles en navegacion y conversion.

## 1. Referencias encontradas a `/contacto`

### Referencias activas confirmadas

| Tipo | Archivo | Evidencia |
| --- | --- | --- |
| Navegacion principal | `src/components/shared/navbar.tsx` | `navigationItems` contiene `{ label: "Contacto", href: "/contacto" }` |
| CTA primario en hero | `src/features/marketing/components/Hero.tsx` | `Link href="/contacto">Agendar Cita</Link>` |

### Referencias indirectas

| Tipo | Archivo | Evidencia |
| --- | --- | --- |
| Navegacion móvil | `src/components/shared/MobileMenu.tsx` | consume `navigationItems` desde `Navbar`; por lo tanto hereda el enlace a `/contacto` |

### Referencias no encontradas

Hechos confirmados:
- `src/components/shared/footer.tsx` no enlaza `/contacto`.
- `src/app/layout.tsx` no referencia `/contacto` en metadata.
- No existe `src/app/**/contacto/page.tsx`.
- No existen `sitemap.ts`, `sitemap.xml`, `robots.ts` o `robots.txt` gestionados desde `src/app`.
- No se detecto `json-ld`, datos estructurados ni metadata especifica para una pagina de contacto.

## 2. Impacto funcional actual

### Hecho confirmado
- El usuario puede hacer clic en “Contacto” desde la navegacion principal.
- El usuario puede hacer clic en “Agendar Cita” desde el hero.
- Ambos caminos apuntan a una ruta inexistente.

### Impacto
- error funcional visible en navegacion publica
- friccion directa en flujo de conversion
- inconsistencia entre contenido de home y estructura de rutas
- riesgo de perdida de confianza

Nivel de riesgo actual:
- Critico

## 3. Evidencia del repo

### Estructura pública actual

Rutas activas confirmadas:
- `/`
- `/servicios`
- `/tecnologia`

Fuente:
- `src/app/(marketing)/page.tsx`
- `src/app/(marketing)/servicios/page.tsx`
- `src/app/(marketing)/tecnologia/page.tsx`

### Presencia actual de contenido de contacto

Hechos confirmados:
- La home renderiza `ContactPreview` al final de la pagina.
- `ContactPreview` ya contiene:
  - direccion
  - telefono fijo
  - WhatsApp
  - email
  - mapa embebido
  - CTA de llamada de urgencias

Fuente:
- `src/app/(marketing)/page.tsx`
- `src/features/marketing/components/ContactPreview.tsx`

### Evidencia documental de negocio

Hechos confirmados en `docs/nuske-context.md`:
- La navegacion real observada del sitio actual incluye `Contacto`.
- La estructura recomendada define un area de `Contacto`.
- Esa area debe tener:
  - botón de urgencias
  - WhatsApp
  - teléfono
  - mapa / ubicación
  - CTA de cita

### Lectura arquitectónica

Hecho confirmado:
- El repo ya tiene el contenido base de contacto.

Inferencia:
- El contenido actual de `ContactPreview` parece una base reutilizable para una futura pagina `/contacto`, porque ya concentra los elementos exigidos por la documentación de negocio.

## 4. Alternativas

## Opción A. `/contacto` debe existir como página real

### Evidencia a favor
- `src/components/shared/navbar.tsx` ya la expone como item de navegación pública.
- `src/features/marketing/components/Hero.tsx` la usa como destino de un CTA de alta intención.
- `docs/nuske-context.md` trata “Contacto” como área pública real, no solo como ancla interna.
- `docs/nuske-context.md` especifica requisitos propios para una página o vista de contacto.
- `ContactPreview` ya cubre gran parte del contenido necesario.

### Riesgos de esta opción
- Requiere implementar una nueva ruta pública.
- Si se implementa sin reutilizar la base existente, podría duplicarse contenido de contacto entre home y `/contacto`.

### Nivel de riesgo
- Medio si se implementa en una siguiente fase controlada.

## Opción B. `/contacto` no debe existir y debe retirarse de navegación

### Evidencia a favor
- La home ya contiene `ContactPreview`.
- El footer ya muestra datos de contacto.
- La arquitectura activa actual no tiene todavía más de tres rutas públicas.

### Evidencia en contra
- Contradice la navegación pública ya visible.
- Contradice el CTA del hero que hoy manda a `/contacto`.
- Contradice `docs/nuske-context.md`, donde “Contacto” aparece como área pública del sitio real y como sección requerida del rediseño.

### Riesgos de esta opción
- Convertir “Contacto” en una simple sección de home exige rediseñar la intención del navbar y del hero.
- Puede debilitar el flujo de conversión para usuarios que esperan una página dedicada.
- Requiere decidir si el CTA del hero debe ir a ancla interna, WhatsApp o teléfono, lo cual hoy no está definido como decisión arquitectónica cerrada.

### Nivel de riesgo
- Alto

## 5. Recomendación final

Recomendacion:
- **Crear una página real `/contacto` en una siguiente intervención segura.**

### Base de la recomendación

Hechos confirmados:
- La navegación pública ya promete una ruta `/contacto`.
- El hero usa `/contacto` como CTA principal de cita.
- La documentación de negocio mantiene “Contacto” como parte explícita de la navegación y de la arquitectura pública deseada.
- El repo ya tiene una pieza reusable (`ContactPreview`) que reduce el costo y el riesgo de implementación futura.

### Conclusión

Inferencia:
- La incoherencia no está en que exista la idea de una página de contacto; la incoherencia está en que la intención pública ya existe, pero la ruta aún no fue implementada.

## 6. Riesgo de cada opción

| Opción | Riesgo | Motivo |
| --- | --- | --- |
| A) Crear `/contacto` | Medio | Alinea navegación, CTA y documentación; requiere solo implementación controlada |
| B) Retirar `/contacto` | Alto | Obliga a redefinir navegación y conversion flow ya expuestos |

## 7. Checklist de implementación futura

- Confirmar que `/contacto` será ruta pública dentro de `src/app/(marketing)/contacto/page.tsx`.
- Reutilizar `ContactPreview` o sus partes para evitar duplicidad innecesaria.
- Mantener consistencia con `docs/nuske-context.md`:
  - urgencias
  - WhatsApp
  - teléfono
  - mapa
  - CTA de cita
- Verificar todos los enlaces actuales hacia `/contacto`:
  - navbar
  - menú móvil
  - hero
- Ejecutar `npm run lint` y `npm run build`.
- Verificar que no aparezcan nuevas rutas muertas.
- Actualizar:
  - `docs/AI_CONTEXT_LOG.md`
  - `docs/CURRENT_ARCHITECTURE_STATE.md`
  - `docs/BACKLOG_ARQUITECTONICO_PRIORIZADO.md`

## 8. Archivos donde aparece `/contacto`

- `src/components/shared/navbar.tsx`
- `src/features/marketing/components/Hero.tsx`
- Referencia indirecta vía props en `src/components/shared/MobileMenu.tsx`

## 9. Estado final de la decisión

Decision recomendada:
- `/contacto` **debe existir** como ruta pública real.

Estado actual:
- No implementada todavía.
