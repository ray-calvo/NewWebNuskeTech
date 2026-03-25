# CLINICAL_GLOBAL_CTA_ORCHESTRATION

## Propósito
Preparar la evolución del CTA clínico desde resolución local por página hacia un sistema hospitalario transversal, sin implementarlo visualmente todavía.

## Diagnóstico actual
El patrón actual ya resolvió bastante:
- CTA runtime por página
- shared consumption layer
- coherencia clínica en rutas núcleo y complementarias cableadas

Pero todavía existe una limitación estructural:
- la resolución vive alrededor de cada página
- no existe aún una superficie global dueña del CTA hospitalario
- triage puede sembrar clínica, pero todavía no gobierna un CTA transversal visible

## Oportunidad real
La orquestación global sí es técnicamente viable ahora porque ya existen:
- runtime domain
- decision engine
- triage bridge
- session layer ligera
- puerta de resolución shared

Esto permite pensar en futuras superficies como:
- sticky CTA clínico
- header CTA contextual
- footer clínico adaptativo
- banner de riesgo transversal

## Principio central
El CTA global no debe inventar clínica nueva.

Debe resolver usando:
1. ruta actual
2. session layer activa, si existe
3. shared runtime
4. output de consumption ya normalizado

## Arquitectura futura recomendada
La arquitectura recomendada para CTA global es:
- `session layer` como transporte de continuidad
- `resolveGlobalClinicalCtaForRoute(...)` como puerta de orquestación
- una futura superficie cliente persistente que consuma esa salida

## Qué puede gobernar en el futuro
Un CTA global bien orquestado podrá decidir:
- CTA dominante hospitalario
- degradación de acciones suaves
- prioridad visual transversal
- fallback seguro visible
- persistencia de CTA urgente

## Qué no debe hacer
No debe:
- competir con la narrativa local de cada hero
- reemplazar CTA específicos de páginas cuando no haya razón clínica
- mostrar urgencia artificial en rutas estables
- adelantarse a la clínica solo por convertir mejor

## Riesgos observados
Los riesgos reales hoy son:
- introducir CTA global demasiado pronto y duplicar señales con la página local
- hacer reactivo el header antes de tener contrato estable de consumo
- acoplar una futura superficie global directamente al triage en vez de pasar por runtime shared

## Resultado de esta fase
La viabilidad técnica ya está confirmada.

Lo que queda pendiente no es dominio, sino el momento correcto de introducir:
- una superficie global persistente
- consumo reactivo compartido
- jerarquía visual global sin romper la narrativa local existente
