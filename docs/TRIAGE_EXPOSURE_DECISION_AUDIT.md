# TRIAGE EXPOSURE DECISION AUDIT

## Resumen ejecutivo

`/triage` ya existe como ruta pública funcional dentro del sitio marketing, pero la recomendación actual es **no agregarlo todavía a la navegación principal**.

Decisión recomendada:

- **Opción B:** mantener `/triage` como ruta existente pero no destacada temporalmente.

Motivo principal:

- el feature ya es usable como MVP, pero todavía conserva señales claras de madurez temprana:
  - scoring heurístico sin calibración clínica endurecida
  - ausencia de analytics
  - ausencia de validación de conversión real
  - ausencia de decisión de producto sobre su rol exacto en el funnel principal

## Estado actual de `/triage`

Estado confirmado en el repo:

- Existe como ruta activa en [page.tsx](/d:/Projects/newwebnusketech/src/app/(marketing)/triage/page.tsx)
- Usa un wizard cliente en [TriageWizard.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/TriageWizard.tsx)
- El resultado depende de [score-triage.ts](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/score-triage.ts)
- `npm run build` ya lo genera como ruta estática activa
- No aparece actualmente en:
  - [navbar.tsx](/d:/Projects/newwebnusketech/src/components/shared/navbar.tsx)
  - [MobileMenu.tsx](/d:/Projects/newwebnusketech/src/components/shared/MobileMenu.tsx)
  - [Hero.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/Hero.tsx)
  - [footer.tsx](/d:/Projects/newwebnusketech/src/components/shared/footer.tsx)

Estado funcional observable:

- Tiene aviso legal
- Tiene flujo completo del MVP
- Tiene CTA por nivel
- No tiene backend
- No tiene analytics
- No tiene calibración clínica final confirmada en docs

## Argumentos a favor de exponerlo ya

### 1. Refuerza diferenciación hospitalaria

Evidencia:

- [ROADMAP_GROWTH_HOSPITAL_MARKETING.md](/d:/Projects/newwebnusketech/docs/ROADMAP_GROWTH_HOSPITAL_MARKETING.md) lo marca como prioridad alta de Fase 1.
- [TRIAGE_FUNCTIONAL_SPEC.md](/d:/Projects/newwebnusketech/docs/TRIAGE_FUNCTIONAL_SPEC.md) define al triage como herramienta de orientación inicial con foco en clasificación y conversión.

Interpretación:

- Podría funcionar como pieza distintiva de autoridad clínica y UX hospitalaria moderna.

### 2. Ya existe una ruta funcional real

Evidencia:

- [page.tsx](/d:/Projects/newwebnusketech/src/app/(marketing)/triage/page.tsx)
- [TriageWizard.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/triage/TriageWizard.tsx)
- build reciente con `/triage` activo

Interpretación:

- No sería una promesa vacía ni un enlace roto.

### 3. Encaja con el funnel de urgencias y orientación

Evidencia:

- [TRIAGE_IMPLEMENTATION_PLAN.md](/d:/Projects/newwebnusketech/docs/TRIAGE_IMPLEMENTATION_PLAN.md) documenta conexión con urgencias, WhatsApp, agendar consulta y servicios.
- El sitio actual prioriza urgencias 24/7, contacto y conversión clínica en hero, servicios y contacto.

Interpretación:

- `/triage` puede convertirse en un entrypoint de intención alta.

## Argumentos a favor de no exponerlo todavía

### 1. El scoring sigue siendo MVP

Evidencia:

- [INTERVENCION_FASE_8_TRIAGE_BASE_ESTRUCTURAL.md](/d:/Projects/newwebnusketech/docs/INTERVENCION_FASE_8_TRIAGE_BASE_ESTRUCTURAL.md) indica que el scoring es baseline MVP.
- [INTERVENCION_FASE_9_TRIAGE_WIZARD_MVP.md](/d:/Projects/newwebnusketech/docs/INTERVENCION_FASE_9_TRIAGE_WIZARD_MVP.md) deja pendiente revisión con criterio veterinario.
- [AI_CONTEXT_LOG.md](/d:/Projects/newwebnusketech/docs/AI_CONTEXT_LOG.md) registra que el scoring y el copy final todavía requieren validación clínica adicional.

Interpretación:

- Exponerlo en navbar le daría un grado de prominencia mayor al nivel de validación actual.

### 2. No hay analytics para medir impacto o problemas

Evidencia:

- La documentación del triage deja tracking futuro como pendiente.
- No hay evidencia de analytics implementado en el módulo ni en el repo para este flujo.

Interpretación:

- Si se expone en navegación principal, no habrá medición clara del uso, abandono o calidad de conversión inicial.

### 3. La navegación principal actual ya está bastante definida

Evidencia:

- [navbar.tsx](/d:/Projects/newwebnusketech/src/components/shared/navbar.tsx) solo expone `Inicio`, `Servicios`, `Tecnología` y `Contacto`.
- [Hero.tsx](/d:/Projects/newwebnusketech/src/features/marketing/components/Hero.tsx) concentra el flujo principal en `Agendar Cita` y `Ver Servicios`.
- [footer.tsx](/d:/Projects/newwebnusketech/src/components/shared/footer.tsx) no promueve herramientas adicionales.

Interpretación:

- Insertar ahora `/triage` en navbar cambiaría el mapa de decisiones principales del sitio.

### 4. El tono de marca actual privilegia confianza clínica y claridad

Evidencia:

- [nuske-context.md](/d:/Projects/newwebnusketech/docs/nuske-context.md) pide tono profesional, claro, rápido para orientar y humano.
- El sitio actual presenta especialidad, urgencias y contacto como pilares visibles.

Interpretación:

- Un triage visible en navbar necesita estar especialmente bien calibrado para no parecer promesa clínica sobrevendida.

## Riesgos de cada opción

| Opción | Riesgo principal | Nivel |
| --- | --- | --- |
| Exponerlo ya en navegación principal | Dar demasiada prominencia a un MVP aún no calibrado ni medido | Alto |
| Mantenerlo fuera temporalmente | Menor descubribilidad inicial del feature | Medio |

Riesgos específicos si se expone ya:

- sobreprometer madurez clínica
- aumentar uso antes de validar scoring y copy
- alterar el funnel principal sin datos de impacto

Riesgos específicos si no se expone todavía:

- menor tráfico orgánico interno hacia `/triage`
- menor velocidad de aprendizaje si no se activa una estrategia de difusión controlada

## Recomendación final

Recomendación:

- **No agregar todavía `/triage` al navbar ni a la navegación principal.**

Forma recomendada de tratamiento actual:

- mantener `/triage` activo como ruta existente
- usarlo primero como ruta secundaria o controlada
- reevaluar exposición principal después de:
  - revisión clínica del scoring
  - revisión de copy de resultados
  - definición de métricas mínimas de uso o conversión

## Checklist previo si más adelante se decide exponerlo

1. Revisar scoring con criterio veterinario.
2. Revisar copy final de resultados y CTAs.
3. Definir si el triage será CTA principal de urgencias o herramienta secundaria de orientación.
4. Decidir dónde viviría:
   - navbar
   - hero
   - footer
   - landing específica
5. Implementar tracking mínimo del flujo.
6. Confirmar que el módulo siga pasando `guardrails`, `lint` y `build`.
7. Actualizar [AI_CONTEXT_LOG.md](/d:/Projects/newwebnusketech/docs/AI_CONTEXT_LOG.md) y el roadmap con la decisión de exposición.
