# ARCHITECTURAL FINAL DECISIONS

## Propósito

Cerrar la arquitectura hospitalaria final del sitio como decisión ejecutable.

Este documento no repite inventario ni roadmap. Define:

- jerarquía clínica final
- arquitectura canónica final
- orden definitivo de construcción
- rol exacto de cada página madre
- conceptos que no deben existir como páginas
- bloques transversales del sistema

## Decisión marco

La nueva web no se organiza por “servicios” en sentido comercial.

La nueva web se organiza por **capacidades hospitalarias madre**.

Las páginas deben responder a una lógica clínica real:

1. resolver al paciente crítico
2. comunicar capacidad de intervención
3. demostrar capacidad diagnóstica
4. mostrar diferenciadores de alta complejidad
5. sostener continuidad clínica

## 1. Jerarquía clínica final del sitio

### Nivel 1 — Núcleo hospitalario

Estas son las páginas que definen la reputación clínica central del sitio:

1. Urgencias y Paciente Crítico
2. Cirugía Hospitalaria y Procedimientos Especializados
3. Diagnóstico Hospitalario
4. Endoscopía y Mínima Invasión

### Nivel 2 — Continuidad clínica estratégica

Estas páginas amplían alcance, pero no deben dominar el relato principal:

5. Atención Integral y Preventiva
6. Exóticos

### Nivel 3 — Especialidades o verticales subordinadas

Estas piezas no deben condicionar la arquitectura madre:

7. Oncología
8. Medicina Interna
9. Manejo del Dolor
10. Grooming / Hotel / Guardería

## 2. Arquitectura canónica final

## Páginas madre definitivas

### Home

- Rol final:
  - portada hospitalaria
  - urgencias visibles
  - prueba social y autoridad
  - acceso a capacidades, no profundidad completa
- Tipo:
  - reputación + conversión inicial

### `/servicios`

- Rol final:
  - **hub clínico**
  - índice hospitalario de capacidades
  - capa de navegación hacia páginas madre
- No debe ser:
  - catálogo
  - página final de profundidad
  - duplicado largo de las páginas canónicas
- Tipo:
  - orientación estructural

### Página madre: Urgencias y Paciente Crítico

- Rol final:
  - principal página de conversión crítica
  - principal demostración de operación hospitalaria real
- Debe absorber:
  - urgencias
  - urgencias 24h
  - hospitalización
  - cuidados intensivos
- Tipo:
  - reputación + conversión inmediata

### Página madre: Cirugía Hospitalaria y Procedimientos Especializados

- Rol final:
  - principal página de autoridad intervencionista
  - demostración de capacidad quirúrgica y anestésica
- Debe absorber:
  - cirugía
  - cirugía especializada
- Debe subordinar:
  - ortopedia
  - manejo de heridas
  - esterilizaciones
- Tipo:
  - reputación + conversión especializada

### Página madre: Diagnóstico Hospitalario

- Rol final:
  - demostrar capacidad de decisión médica y soporte clínico
- Debe absorber:
  - imagenología
  - laboratorio
- Tipo:
  - reputación clínica

### Página madre: Endoscopía y Mínima Invasión

- Rol final:
  - diferenciador premium de alta complejidad
  - capacidad tecnológica subordinada a criterio médico
- Debe absorber:
  - endoscopía
  - mínima invasión
- Tipo:
  - reputación premium + conversión especializada

### Página madre: Atención Integral y Preventiva

- Rol final:
  - continuidad clínica
  - control médico longitudinal
  - prevención
- Debe absorber:
  - medicina preventiva
  - limpieza / profilaxis dental
- Tipo:
  - conversión programada + continuidad

### Página madre condicionada: Exóticos

- Rol final:
  - diferenciador de alcance clínico
- Condición:
  - solo si se valida contenido suficiente o si el posicionamiento de marca lo exige
- Tipo:
  - reputación diferenciadora

## 3. Orden definitivo de construcción

### Orden final cerrado

1. Urgencias y Paciente Crítico
2. Cirugía Hospitalaria y Procedimientos Especializados
3. Diagnóstico Hospitalario
4. Endoscopía y Mínima Invasión
5. Reconfiguración final de `/servicios` como hub
6. Atención Integral y Preventiva
7. Exóticos
8. Segunda ola: Oncología, Medicina Interna, Manejo del Dolor
9. Comercial subordinado: Grooming / Hotel / Guardería

## Justificación clínica del orden

### Diagnóstico antes que Endoscopía

Decisión final:

- **Diagnóstico debe construirse antes que Endoscopía.**

Razón:

- Endoscopía no se entiende como diferenciador hospitalario aislado si antes no está clara la capacidad diagnóstica y resolutiva del hospital.
- Diagnóstico articula:
  - urgencias
  - cirugía
  - hospitalización
  - mínima invasión
- Endoscopía es diferenciador premium, pero diagnóstico es sistema clínico base.

### Preventiva después de Endoscopía y Diagnóstico, antes de Oncología

Decisión final:

- **Preventiva entra antes que Oncología.**

Razón:

- Oncología exige más densidad clínica, más precisión editorial y más autoridad médica explícita.
- Preventiva ordena mejor la continuidad del sitio sin abrir todavía un frente clínico de alta sensibilidad.

### Exóticos depende más de posicionamiento que de densidad actual

Decisión final:

- **Exóticos no depende solo del contenido legacy.**
- Depende de:
  - valor diferencial de marca
  - capacidad real del hospital
  - decisión estratégica de posicionamiento premium

Pero:

- no debe construirse antes del núcleo hospitalario
- no debe forzarse como página profunda si la evidencia clínica editable sigue siendo débil

## 4. Rol narrativo de cada página madre

### Home

- Presenta el hospital
- Prioriza urgencias
- Activa confianza inmediata

### `/servicios`

- Ordena la oferta clínica
- Explica el mapa hospitalario
- Lleva a profundidad, no la sustituye

### Urgencias y Paciente Crítico

- Comunica respuesta inmediata
- Demuestra guardia real, estabilización, hospitalización y criterio crítico

### Cirugía Hospitalaria

- Comunica capacidad de intervención y control anestésico
- Eleva autoridad médica y percepción de complejidad real

### Diagnóstico Hospitalario

- Comunica precisión diagnóstica y soporte a decisiones
- Eleva reputación clínica más que conversión directa

### Endoscopía y Mínima Invasión

- Comunica diferenciación premium y sofisticación terapéutica
- Eleva reputación y también capta casos específicos

### Atención Integral y Preventiva

- Comunica continuidad, control y prevención
- Sostiene la relación longitudinal con el propietario

### Exóticos

- Comunica amplitud clínica y diferenciación
- Eleva reputación si el hospital realmente lo sostiene

## 5. Qué páginas NO deben existir

Estas piezas no deben existir como páginas independientes en la primera arquitectura final:

- Hospitalización
- Cuidados intensivos
- Laboratorio
- Mínima invasión como página separada de Endoscopía
- Manejo de heridas
- Manejo del dolor
- Esterilizaciones como página madre
- Ortopedia como página madre inicial

Razón común:

- fragmentan el sistema hospitalario
- debilitan la jerarquía clínica
- producen canibalización narrativa
- convierten el sitio otra vez en catálogo

## 6. Qué conceptos deben ser bloques transversales

Estos conceptos sí deben existir, pero como bloques transversales dentro de varias páginas madre:

- Hospitalización
- Paciente crítico
- Seguridad anestésica
- Mínima invasión
- Diagnóstico oportuno
- Qué esperar
- Señales de alerta
- FAQ clínica
- CTA de urgencias
- CTA de llamada / WhatsApp / cómo llegar

## Decisiones específicas

### Hospitalización

- Estado final:
  - **submódulo transversal**, no página madre
- Debe vivir principalmente dentro de:
  - Urgencias y Paciente Crítico

### Mínima invasión

- Estado final:
  - **capacidad clínica transversal con página fusionada en Endoscopía**
- No debe quedar como:
  - página de tecnología
  - página separada sin contexto procedimental

### Laboratorio

- Estado final:
  - submódulo de Diagnóstico Hospitalario

### Medicina interna

- Estado final:
  - no página madre de primera ola
- Tratamiento recomendado:
  - reservarla para segunda ola o como soporte de casos complejos

### Manejo del dolor

- Estado final:
  - no página madre
- Tratamiento recomendado:
  - bloque transversal o futura vertical subordinada si existe evidencia de demanda real

### Manejo de heridas

- Estado final:
  - submódulo quirúrgico

## 7. Qué páginas elevan reputación vs conversión

### Páginas que elevan reputación clínica

- Home
- Cirugía Hospitalaria
- Diagnóstico Hospitalario
- Endoscopía y Mínima Invasión
- Exóticos

### Páginas que elevan conversión directa

- Urgencias y Paciente Crítico
- Atención Integral y Preventiva
- Contacto
- Triage

### Páginas híbridas

- `/servicios`
  - reputación estructural + navegación
- Cirugía Hospitalaria
  - reputación + captación especializada
- Endoscopía y Mínima Invasión
  - reputación premium + captación específica

## 8. Rol final de `/servicios`

Decisión final:

- **`/servicios` es hub, no catálogo.**

Debe hacer:

- ordenar capacidades
- mostrar jerarquía clínica
- enlazar a páginas madre
- mantener abajo continuidad y soporte

No debe hacer:

- reemplazar urgencias
- reemplazar cirugía
- reemplazar diagnóstico
- crecer indefinidamente con detalle interno

## 9. Riesgos si se rompe el orden

### Si Endoscopía sale antes que Diagnóstico

- el sitio puede sonar sofisticado pero no clínicamente completo
- la diferenciación tecnológica flotará sin base hospitalaria suficiente

### Si Preventiva sale antes que el núcleo hospitalario

- la marca pierde dureza hospitalaria
- el sitio se acerca otra vez a lectura de clínica general

### Si Hospitalización se convierte en página madre

- se duplica la página de urgencias
- se fragmenta la lógica del paciente crítico

### Si `/servicios` sigue profundizando en vez de enlazar

- competirá contra las páginas canónicas
- reintroducirá monolito de contenido

### Si Grooming o Pensión ganan visibilidad temprana

- erosionan el posicionamiento premium hospitalario
- rebajan la lectura de complejidad médica

### Si Dolor, Heridas u Ortopedia salen antes que Cirugía madre

- el sistema se vuelve temáticamente disperso
- la autoridad quirúrgica se diluye

## 10. Cierre ejecutivo

La arquitectura final del sitio debe leerse así:

- Home presenta el hospital
- `/servicios` ordena el mapa clínico
- Urgencias convierte
- Cirugía demuestra capacidad de intervención
- Diagnóstico demuestra capacidad de decisión
- Endoscopía demuestra diferenciación premium
- Preventiva sostiene continuidad
- Exóticos diferencia marca si se valida
- Lo demás se subordina o se posterga

Esa es la arquitectura hospitalaria final recomendada para ejecución.
