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

## 6. Tracking minimo implementado

Estado actual:

- Ya existe helper local de tracking para triage.
- Ya se emiten eventos minimos del funnel.
- El modulo no depende aun de una plataforma externa obligatoria.

Eventos actualmente implementados:

- `triage_started`
- `triage_species_selected`
- `triage_category_selected`
- `triage_result_shown`
- `triage_primary_cta_clicked`
- `triage_secondary_cta_clicked`
- `triage_reset`

Payload minimo actual:

- `species`
- `category`
- `result_level`
- `total_score`
- `selected_symptom_count`
- `selected_modifier_count`

## 7. Que validar durante soft launch

- Si el modulo recibe inicios reales del flujo.
- Si los usuarios llegan hasta el resultado.
- Si existe abandono fuerte en una especie o categoria concreta.
- Si el CTA principal recibe clic cuando el resultado es `emergency` o `urgent`.
- Si el CTA secundario capta mejor conversion en casos ambiguos.
- Si el flujo genera combinaciones inesperadas que ameriten revision clinica.

## 8. Metricas minimas a observar

- numero de `triage_started`
- numero de `triage_result_shown`
- tasa basica de finalizacion
- distribucion por `result_level`
- clics en CTA primario
- clics en CTA secundario
- distribucion por especie
- distribucion por categoria

## 9. Criterio para decidir si el triage puede ganar mas visibilidad

- El flujo muestra finalizacion suficiente para justificar mayor exposicion.
- Los resultados no muestran patrones claramente problematicos.
- El CTA principal y secundario muestran comportamiento coherente.
- Ya existe revision clinica del scoring y del copy final.
- El equipo puede medir al menos de forma minima el comportamiento del soft launch.
- La decision de mayor visibilidad queda documentada antes de tocar navegacion principal.

## 10. Exposicion actual del soft launch

Estado actual:

- `/triage` quedo expuesto de forma secundaria dentro de la tarjeta `Urgencias 24/7` en home.
- No se agrego al navbar principal.
- No se agrego al mobile menu principal.
- No se agrego al hero.

## 11. Que validar despues del despliegue

- Si el entrypoint contextual recibe clics reales.
- Si el volumen de `triage_started` justifica mantenerlo visible.
- Si los usuarios completan el flujo despues de entrar por ese CTA.
- Si el CTA genera confusion con el mensaje principal de urgencias.
- Si hay señales de que el entrypoint retrasa acciones urgentes reales.

## 12. Criterios para mantener, retirar o ampliar la exposicion

Mantener:

- si el CTA recibe uso razonable y no genera confusion visible

Retirar:

- si genera ruido UX
- si casi no recibe clics
- si se detecta tension con el mensaje principal de urgencias

Ampliar:

- solo si el soft launch muestra uso, finalizacion y comportamiento coherente
- solo despues de revision clinica y decision documental explicita
