# LEGACY SITE IMPLEMENTATION BACKLOG

## Resumen operativo

El inventario del sitio legacy confirma que la nueva web no debe migrar una URL por cada página existente. La estrategia recomendada es implementar por clusters canónicos hospitalarios y tratar las landings actuales como fuente de módulos reutilizables, no como destino de migración literal.

## Prioridad 1

### P1-01 — Página canónica de Urgencias y Paciente Crítico

- Cluster: Urgencias y Paciente Crítico
- Qué construir primero:
  - hero clínico de urgencias
  - protocolo de emergencia
  - señales de alerta
  - capacidad hospitalaria crítica
  - hospitalización / UCI / monitoreo
  - CTA operativas de llamada, WhatsApp y cómo llegar
- Qué fusionar:
  - `/urgencias`
  - `/urgencias-24h`
  - `/hospitalizacion`
  - `/lp/hospitalizacion`
- Dependencias:
  - mantener consistencia con la franja de urgencias ya activa en home
  - reutilizar narrativa hospitalaria ya consolidada en home y `/servicios`
- Quick win:
  - rescatar primero protocolo de emergencia, infraestructura crítica y FAQ básica
- Recomendación:
  - máxima prioridad por alineación con el posicionamiento actual del sitio

### P1-02 — Página canónica de Cirugía Hospitalaria y Procedimientos Especializados

- Cluster: Cirugía Hospitalaria y Procedimientos Especializados
- Qué construir primero:
  - hero de cirugía avanzada
  - seguridad anestésica
  - indicaciones y tipos de procedimientos
  - qué esperar antes y después
  - CTA de valoración quirúrgica
- Qué fusionar:
  - `/cirugia`
  - `/cirugia-especializada`
  - `/lp/cirugia`
- Qué subordinar:
  - `/lp/esterilizaciones`
  - `/manejo-de-heridas`
  - `/ortopedia`
- Dependencias:
  - alineación con Dirección Médica y cuerpo médico ya reposicionados
- Quick win:
  - rescatar primero seguridad anestésica, proceso clínico y procedimientos principales

### P1-03 — Página canónica de Endoscopía y Mínima Invasión

- Cluster: Endoscopía y Mínima Invasión
- Qué construir primero:
  - hero de mínima invasión
  - qué es la endoscopía
  - síntomas y señales de alerta
  - ventajas clínicas y recuperación
  - CTA de valoración
- Qué fusionar:
  - `/endoscopia`
  - `/minima-invasion`
  - `/lp/endoscopia`
- Dependencias:
  - conexión narrativa con diagnóstico avanzado y cirugía
- Quick win:
  - usar los módulos más ricos de `lp/endoscopia` como base principal

### P1-04 — Página canónica de Diagnóstico Hospitalario

- Cluster: Diagnóstico Hospitalario
- Qué construir primero:
  - hero de diagnóstico médico avanzado
  - cuándo se indica imagenología
  - comparativa RX vs ultrasonido
  - laboratorio como soporte hospitalario
  - FAQ diagnóstica
- Qué fusionar:
  - `/imagenologia`
  - `/laboratorio`
  - `/lp/imagenologia`
- Dependencias:
  - mantener subordinada la tecnología al criterio médico, no al equipamiento aislado
- Quick win:
  - rescatar primero comparativas, indicaciones y CTA de estudios

## Prioridad 2

### P2-01 — Página canónica de Atención Integral y Preventiva

- Cluster: Preventiva y Salud Oral
- Qué construir:
  - continuidad preventiva
  - consulta médica
  - vacunación y control
  - salud oral / profilaxis dental
  - CTA de agendar consulta
- Qué fusionar:
  - `/medicina-preventiva`
  - `/limpieza-dental`
  - `/lp/profilaxis-dental`
- Qué conservar como subordinado:
  - pricing dental o campaña puntual si sigue teniendo pauta
- Dependencias:
  - coherencia con Wellness y continuidad clínica ya presentes en `/servicios`
- Quick win:
  - rescatar primero FAQ dental, requisitos y bloque de por qué la profilaxis importa

### P2-02 — Página canónica de Exóticos

- Cluster: Exóticos
- Qué construir:
  - alcance de especies
  - criterios de atención
  - señales de consulta
  - CTA directa
- Qué fusionar:
  - `/animales-exoticos`
- Dependencias:
  - requiere validación adicional porque el contenido fuente auditado es limitado
- Quick win:
  - arrancar con página corta pero sólida solo si se confirma contenido clínico adicional

### P2-03 — Subpáginas o módulos subordinados de apoyo quirúrgico

- Cluster: soporte a cirugía hospitalaria
- Qué construir después:
  - ortopedia
  - manejo de heridas
  - esterilizaciones como vertical comercial subordinada
- Qué fusionar:
  - no conviene fusionarlas todas en la primera ola si diluyen la página canónica
- Dependencias:
  - depende de tener resuelta primero la página madre de cirugía
- Quick win:
  - convertir primero `esterilizaciones` en módulo o bloque comercial subordinado antes que en página nueva

## Prioridad 3

### P3-01 — Cluster de Medicina Interna, Oncología y Manejo del Dolor

- Cluster: Medicina Interna, Oncología y Dolor
- Qué construir después:
  - una o varias páginas premium de subespecialidad
  - primera visita
  - objetivos terapéuticos
  - manejo integral de dolor
  - terapia láser como módulo o landing subordinada
- Qué fusionar o evaluar:
  - `/medicina-interna`
  - `/oncologia`
  - `/manejo-dolor`
  - `/lp/terapia-laser`
- Dependencias:
  - requiere mejor definición editorial y validación clínica
- Quick win:
  - no es quick win real; conviene postergar hasta tener capacidad editorial

### P3-02 — Grooming y Hotel / Guardería

- Cluster: comercial subordinado
- Qué construir después:
  - landing o subárea específica no hospitalaria
- Qué fusionar:
  - `/guarderia`
  - `/lp/pension`
  - `/pet-grooming`
  - `/lp/pet-grooming`
- Dependencias:
  - no debe competir con la primera ola del posicionamiento hospitalario
- Quick win:
  - si se reactiva, fusionar cada par duplicado en una sola landing comercial

## Dependencias entre páginas y clusters

| Dependencia | Justificación |
|---|---|
| Urgencias y Paciente Crítico antes que Hospitalización como tema aislado | Hospitalización ya debe quedar absorbida por el relato crítico hospitalario |
| Cirugía Hospitalaria antes que Ortopedia / Esterilizaciones / Manejo de heridas | Evita crear páginas satélite sin página madre fuerte |
| Endoscopía y Mínima Invasión antes que diferenciar procedimientos menores | Es el diferenciador premium más claro de ese bloque |
| Diagnóstico Hospitalario antes que piezas separadas de laboratorio | Imagenología y laboratorio operan mejor como capacidad clínica integrada |
| Preventiva y Salud Oral después del núcleo crítico-quirúrgico | Mantiene el posicionamiento principal del hospital antes de expandir continuidad |
| Medicina Interna / Oncología / Dolor después de las páginas hospitalarias base | Requiere más criterio clínico y densidad editorial |

## Qué fusionar explícitamente

- `urgencias` + `urgencias-24h` + `hospitalizacion` + `lp/hospitalizacion`
- `cirugia` + `cirugia-especializada` + `lp/cirugia`
- `endoscopia` + `minima-invasion` + `lp/endoscopia`
- `imagenologia` + `laboratorio` + `lp/imagenologia`
- `medicina-preventiva` + `limpieza-dental` + `lp/profilaxis-dental`
- `guarderia` + `lp/pension`
- `pet-grooming` + `lp/pet-grooming`

## Qué postergar

- `medicina-interna`
- `oncologia`
- `manejo-dolor`
- `lp/terapia-laser`
- `animales-exoticos` si no se valida contenido adicional
- cluster comercial completo de grooming / pensión si el foco sigue siendo hospitalario

## Quick wins reales

- Construir primero la página de urgencias con módulos rescatados del legacy y CTA operativas.
- Construir la página de cirugía usando `lp/cirugia` como fuente principal de contenido aprovechable.
- Construir la página de endoscopía / mínima invasión usando `lp/endoscopia` como base casi completa.
- Construir la página de diagnóstico hospitalario reutilizando comparativas e indicaciones ya existentes en `lp/imagenologia`.
- Tratar profilaxis dental como módulo subordinado de preventiva antes de pensar en una página aislada de alto esfuerzo.

## Secuencia sugerida de implementación

1. Urgencias y Paciente Crítico
2. Cirugía Hospitalaria y Procedimientos Especializados
3. Endoscopía y Mínima Invasión
4. Diagnóstico Hospitalario
5. Atención Integral y Preventiva
6. Exóticos
7. Subespecialidades de segunda ola
8. Grooming y Hotel / Guardería

## Riesgos operativos a evitar

- Migrar una URL legacy por cada página actual sin agrupar intención y duplicidades.
- Promover páginas comerciales subordinadas antes de consolidar el núcleo hospitalario.
- Tratar las landings como arquitectura final en vez de usarlas como fuente modular de contenido.
- Construir subpáginas satélite de cirugía o diagnóstico antes de tener una página madre canónica fuerte.
- Tomar como “contenido listo” páginas legacy que en realidad solo aportan naming y CTA.
