# TRIAGE SOFT LAUNCH CHECKLIST

## 1. Revision clinica

- Validar que los sintomas de `override` sigan alineados con criterio veterinario.
- Revisar que los resultados no prometan diagnosticos.
- Confirmar que los niveles `Emergencia`, `Urgencia` y `Consulta` se comunican como orientacion.
- Revisar si algun sintoma o modificador necesita ajuste de lenguaje para propietarios.
- Confirmar que el resultado de `Consulta` no transmita falsa seguridad.
- Confirmar que el resultado de `Emergencia` no retrase contacto humano.

## 2. Revision legal y comunicacional

- Verificar que el aviso legal sea visible y claro.
- Confirmar que el modulo no se presenta como diagnostico medico.
- Confirmar que el copy no use tono alarmista innecesario.
- Revisar consistencia con el tono de marca de Nuskë: profesional, claro y humano.
- Confirmar que los CTAs dirigen a contacto real y vigente.

## 3. QA funcional

- Probar flujo completo para perro, gato y exotico.
- Probar combinaciones con sintomas criticos de override.
- Probar combinaciones sin sintomas criticos pero con multiples sintomas moderados.
- Probar caso sin sintomas disponibles en una combinacion y verificar que el mensaje oriente bien.
- Probar botones de avanzar, regresar y reiniciar.
- Confirmar que CTA primario y secundario cambian segun nivel.
- Confirmar que `/triage` sigue compilando sin afectar otras rutas.

## 4. Medicion futura

- Definir evento de inicio de triage.
- Definir evento de especie seleccionada.
- Definir evento de categoria seleccionada.
- Definir evento de resultado mostrado.
- Definir evento de CTA clicado.
- Definir metricas minimas:
  - inicio del flujo
  - finalizacion
  - distribucion por nivel
  - CTR a WhatsApp
  - CTR a contacto

## 5. Criterios para decidir cuando exponer `/triage`

- El scoring ya fue revisado con criterio veterinario.
- El copy del resultado ya fue revisado por negocio y comunicacion.
- Existe una estrategia minima de medicion del flujo.
- El equipo ya definio si el triage sera:
  - herramienta secundaria
  - CTA de urgencias
  - punto de entrada visible en navegacion
- El modulo pasa `npm run guardrails`.
- El modulo pasa `npm run lint`.
- El modulo pasa `npm run build`.
- Existe decision explicita documentada en `docs/AI_CONTEXT_LOG.md` antes de tocar navbar, hero, mobile menu o footer.
