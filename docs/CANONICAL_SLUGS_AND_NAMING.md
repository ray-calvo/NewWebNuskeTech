# CANONICAL SLUGS AND NAMING

## Propósito

Cerrar la convención final de nombres y slugs para que la ejecución de rutas no tenga ambigüedad clínica, narrativa ni estructural.

## Diagnóstico de cierre

Sí, ya se puede pasar a ejecución de rutas.

Lo único que faltaba era fijar:

- nombre canónico final por página
- slug definitivo
- H1 recomendado
- reglas globales para páginas madre, submódulos y landings

Con este documento, la capa de naming queda cerrada para implementación.

## Reglas globales de nomenclatura

### Regla 1 — El slug debe ser corto y estable

- usar 1 o 2 términos
- evitar frases largas
- evitar duplicar “hospitalario”, “veterinario” o “especializado” dentro del slug
- reservar esos matices para H1 y subtítulos

### Regla 2 — El slug de una página madre debe ser clínico, no publicitario

- correcto:
  - `/urgencias`
  - `/cirugia`
  - `/diagnostico`
  - `/endoscopia`
- evitar:
  - `/cirugia-avanzada-hospitalaria`
  - `/diagnostico-avanzado-veterinario`

### Regla 3 — Preferir singular cuando el concepto es una capacidad madre

Usar singular para las páginas canónicas:

- `/cirugia`
- `/diagnostico`
- `/endoscopia`
- `/oncologia`

Razón:

- el singular funciona mejor como nombre de capacidad clínica
- evita lectura de catálogo

### Regla 4 — Usar plural solo cuando el usuario piensa naturalmente en plural

Casos válidos:

- `/urgencias`
- `/exoticos`
- `/servicios`

### Regla 5 — El H1 puede ser más descriptivo que el slug

El slug resuelve memorabilidad.
El H1 resuelve claridad clínica.

No deben ser idénticos por obligación.

### Regla 6 — El hub usa naming estructural, no profundo

- `/servicios` se mantiene como hub
- no debe renombrarse con un slug más “clínico” si eso compite con las páginas madre

### Regla 7 — Las verticales comerciales subordinadas pueden usar naming más cotidiano

Solo para clusters no nucleares:

- `/pension`
- `/estetica`

No deben imponer la convención del sitio principal.

## Tabla final de slugs y naming

| Página / rol | Nombre canónico | Slug final | H1 recomendado | Nombre corto interno | Tipo de slug | Singular / plural | Observaciones |
|---|---|---|---|---|---|---|---|
| Hub clínico | Servicios Hospitalarios | `/servicios` | Capacidades Hospitalarias y Servicios Especializados | `serviciosHub` | Mixto estructural | Plural | Se conserva por claridad de usuario y continuidad actual. No debe actuar como catálogo profundo. |
| Página madre P1 | Urgencias y Paciente Crítico | `/urgencias` | Urgencias Veterinarias y Paciente Crítico 24/7 | `urgencias` | Clínico | Plural | Absorbe hospitalización y cuidados intensivos como submódulos. |
| Página madre P1 | Cirugía Hospitalaria | `/cirugia` | Cirugía Hospitalaria y Procedimientos Especializados | `cirugia` | Clínico | Singular | Absorbe cirugía especializada. Ortopedia, heridas y esterilizaciones quedan subordinadas. |
| Página madre P1 | Diagnóstico Hospitalario | `/diagnostico` | Diagnóstico Hospitalario para Casos Complejos | `diagnostico` | Clínico | Singular | Absorbe imagenología y laboratorio. |
| Página madre P1 | Endoscopía y Mínima Invasión | `/endoscopia` | Endoscopía y Mínima Invasión Veterinaria | `endoscopia` | Clínico | Singular | “Mínima invasión” queda en H1 y narrativa, no en slug separado. |
| Página madre P2 | Atención Integral y Preventiva | `/prevencion` | Atención Integral y Preventiva | `prevencion` | Clínico | Singular | Se recomienda `/prevencion` por claridad y naturalidad frente a `/preventiva`. |
| Página madre P2 condicionada | Exóticos | `/exoticos` | Atención Veterinaria para Pacientes Exóticos | `exoticos` | Clínico | Plural | Publicar solo cuando se valide alcance y contenido suficiente. |
| Segunda ola | Oncología | `/oncologia` | Oncología Veterinaria y Acompañamiento Clínico | `oncologia` | Clínico | Singular | Página de alta sensibilidad; no antes del núcleo hospitalario. |
| Segunda ola | Medicina Interna | `/medicina-interna` | Medicina Interna para Casos de Alta Complejidad | `medicinaInterna` | Clínico | Singular | No usar como página madre temprana. |
| Segunda ola subordinada | Manejo del Dolor | `/dolor` | Manejo Integral del Dolor | `dolor` | Clínico | Singular | Solo si algún día se promueve a vertical; hoy no debe existir como página. |
| Comercial subordinado | Hotel y Guardería | `/pension` | Pensión y Guardería con Supervisión Veterinaria | `pension` | Comercial | Singular | Se recomienda `/pension` como slug más amplio que absorbe guardería/estancia. |
| Comercial subordinado | Estética y Grooming | `/estetica` | Estética y Grooming con Cuidado Veterinario | `estetica` | Comercial | Singular | Reemplaza el anglicismo `pet-grooming` en la arquitectura final. |
| Página existente de soporte | Contacto | `/contacto` | Contacto y Atención | `contacto` | Mixto funcional | Singular | Página funcional, no página madre clínica. |
| Feature de apoyo | Triage | `/triage` | Triage Veterinario Inicial | `triage` | Mixto funcional | Singular | Herramienta, no página madre. Debe mantenerse fuera de navbar principal. |
| Página de soporte reputacional | Tecnología | `/tecnologia` | Tecnología Hospitalaria para Diagnóstico y Procedimientos | `tecnologia` | Mixto reputacional | Singular | Soporte de confianza; no debe competir con Diagnóstico o Endoscopía. |

## Decisiones específicas por naming

### `/urgencias`

- Se mantiene en plural.
- “Paciente crítico” no debe entrar al slug.
- Debe vivir en H1 y módulos internos.

### `/cirugia`

- Se mantiene como slug corto madre.
- “Hospitalaria y procedimientos especializados” debe ir en H1.
- No conviene `/cirugia-especializada` como slug canónico porque reabre la duplicidad legacy.

### `/diagnostico`

- Se recomienda este slug y no `/imagenologia`.
- Razón:
  - “Diagnóstico” es más hospitalario y más amplio
  - permite absorber laboratorio e imagenología sin fragmentación

### `/endoscopia`

- Se recomienda este slug y no `/minima-invasion`.
- Razón:
  - “Endoscopía” nombra mejor la capacidad concreta
  - “mínima invasión” funciona mejor como propuesta clínica transversal y H1

### `/prevencion`

- Se recomienda `/prevencion` y no `/preventiva`.
- Razón:
  - es un sustantivo natural
  - escala mejor si la página crece a continuidad clínica

### `/exoticos`

- Se mantiene simple y directo.
- No conviene inflarlo con “animales-exoticos” como slug final si se busca consistencia con el resto de páginas madre.

### `/oncologia`

- Se mantiene clínico y sobrio.
- No conviene agregar “veterinaria” en el slug.

### `/medicina-interna`

- Se conserva el término clínico compuesto.
- Es claro, estable y no suena comercial.

### `/pension`

- Se recomienda como slug canónico para la vertical comercial de hotel/guardería.
- Absorbe mejor el alcance que `/guarderia`.

### `/estetica`

- Se recomienda como slug canónico en vez de `/pet-grooming`.
- Mantiene consistencia idiomática con el resto del sitio.

## Reglas para submódulos

### Regla de submódulo 1

Un submódulo no debe tener slug propio mientras no tenga autonomía clínica real.

### Regla de submódulo 2

Los submódulos deben nombrarse como capacidades internas, no como pseudo-páginas.

Ejemplos correctos:

- Hospitalización
- Cuidados intensivos
- Seguridad anestésica
- Ortopedia
- Manejo de heridas
- Profilaxis dental

### Regla de submódulo 3

Si un submódulo aparece en varias páginas, su naming debe ser idéntico.

Ejemplo:

- usar siempre `Seguridad anestésica`
- no alternar con `Monitoreo anestésico avanzado` salvo que sea un subtítulo específico

### Regla de submódulo 4

No usar naming de submódulo como si ya fuera página madre.

Incorrecto:

- tratar `Hospitalización` o `Laboratorio` como destinos arquitectónicos primarios

## Reglas para futuras landings `/lp/...`

### Regla 1

Las landings viven bajo `/lp/` y no contaminan la arquitectura principal.

### Regla 2

La landing debe colgar de una página madre o una campaña clara.

### Regla 3

La landing puede ser más específica que la arquitectura principal.

Ejemplos válidos:

- `/lp/esterilizacion`
- `/lp/profilaxis-dental`
- `/lp/terapia-laser`

### Regla 4

No crear una landing si su slug duplica sin motivo el slug canónico.

Incorrecto:

- `/lp/cirugia` si la página madre ya resuelve exactamente la misma intención sin campaña diferenciada

### Regla 5

Las landings pueden usar naming más transaccional, pero nunca redefinir el nombre de la página madre.

## Reglas para el hub `/servicios`

- conservar `/servicios`
- no renombrarlo a `/especialidades`
- no renombrarlo a `/hospital`
- no inflarlo con subtérminos clínicos en el slug
- usar el H1 para explicar que es mapa de capacidades hospitalarias

## Riesgos de naming confuso o duplicado

- usar `/imagenologia` además de `/diagnostico` reabre fragmentación diagnóstica
- usar `/minima-invasion` además de `/endoscopia` reabre duplicidad conceptual
- usar `/cirugia-especializada` además de `/cirugia` reintroduce herencia legacy innecesaria
- usar `/guarderia` y `/pension` como páginas paralelas confunde la vertical comercial
- mantener `/pet-grooming` rompe consistencia idiomática del sitio
- usar `/preventiva` como slug debilita claridad frente a `/prevencion`

## Dudas abiertas reales

### Exóticos

No hay duda de slug.

La única duda real es estratégica:

- si se publica en la primera expansión clínica o se difiere hasta contar con mejor contenido base

### Manejo del Dolor

El naming puede cerrarse como `/dolor` si algún día se promueve a vertical, pero hoy:

- no debe abrirse como ruta
- no debe bloquear la ejecución actual

## Cierre

La convención final queda así:

- páginas madre con slugs clínicos, cortos y en singular cuando representan capacidad
- `/urgencias` y `/servicios` se mantienen en plural por convención natural de usuario
- submódulos sin ruta propia mientras no tengan autonomía real
- landings bajo `/lp/` sin contaminar la arquitectura principal
