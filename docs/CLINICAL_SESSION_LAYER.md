# CLINICAL_SESSION_LAYER

## Propósito
Definir la capa mínima de continuidad clínica del hospital digital sin introducir persistencia, store complejo ni provider prematuro.

La session layer existe para transportar, entre rutas, estado clínico ya derivado por el sistema. Su función no es decidir clínica nueva.

## Problema que resuelve
Hasta ahora el runtime resolvía contexto por página, pero no conservaba continuidad cuando el usuario:
- completaba triage
- navegaba hacia otra ruta clínica
- cambiaba de superficie con una intención clínica ya aclarada

Sin una session layer:
- cada página vuelve a partir de cero
- triage no deja continuidad clínica real
- la futura orquestación global de CTA no tiene señal transversal

## Decisión arquitectónica
No se introdujo provider en esta fase.

Motivo:
- todavía no existe una superficie global reactiva que necesite suscripción desde múltiples ramas del árbol
- no hay persistencia
- no hay estado cross-tab
- la necesidad real actual es transporte in-memory entre rutas, no reactividad global compleja

Por eso la solución correcta ahora es:
- session layer cliente
- in-memory
- con API explícita
- con suscripción disponible para evolución futura

## Modelo conceptual
La session layer guarda un `ClinicalSessionSnapshot` con:
- origen
- ruta de origen
- estado clínico actual
- intensidad resuelta
- ruta recomendada
- fallback seguro
- señales urgentes activas
- severidad triage opcional
- timestamps de creación y expiración

## Responsabilidades
La session layer sí debe:
- transportar contexto clínico entre rutas
- conservar continuidad breve durante navegación cliente
- exponer lectura segura
- expirar snapshots obsoletos
- preparar futura orquestación global de CTA

La session layer no debe:
- reemplazar al runtime por página
- decidir CTA final sin pasar por runtime/engine
- persistir en storage
- convertirse en source of truth clínica única
- introducir side effects visuales

## Fuente actual de sesión
En esta fase la fuente real de sesión es:
- triage result -> triage bridge -> session snapshot in-memory

Esto deja la continuidad clínica originada en triage disponible para:
- navegación contextual
- resolución futura de CTA global
- superficies cliente persistentes

## API mínima institucional
La capa debe ofrecer:
- `setClinicalSessionSnapshot`
- `readClinicalSessionSnapshot`
- `clearClinicalSessionSnapshot`
- `subscribeClinicalSession`
- factory explícita desde `triage-bridge`

## Límites e invariantes
- la session layer nunca baja una urgencia real
- una sesión expirada debe dejar de influir
- la sesión complementa la página; no la sustituye
- triage puede sembrar sesión clínica
- cualquier consumo futuro de sesión debe volver a pasar por runtime shared

## Evidencia sobre provider
Hoy no hay evidencia suficiente para provider porque:
- no existe CTA global visible ya montado
- no existe banner clínico reactivo consumiendo la sesión
- no existen múltiples consumidores cliente persistentes leyendo el mismo snapshot en paralelo

Sí aparecería evidencia real de provider cuando:
- exista una superficie global clínica persistente
- header/banner/footer necesiten reaccionar al snapshot en tiempo real
- más de un consumidor cliente necesite lectura sincronizada durante la misma navegación

## Resultado de esta fase
La continuidad clínica ya puede existir como transporte real in-memory sin persistencia y sin imponer complejidad global prematura.
