# Buenas Prácticas de Ingeniería Frontend (2026)

## 1. TypeScript Strict
- Prohibido usar `any`.
- Usar `unknown` si el tipo no se conoce.
- Definir interfaces claras para todas las respuestas de API.

## 2. Rendimiento (Core Web Vitals)
- **Imágenes:** Usar SIEMPRE el componente `<Image />` de `next/image`. Asegurar formato AVIF.
- **Fuentes:** Usar `next/font` para cargar fuentes localmente sin CLS (Cumulative Layout Shift).
- **Hydration:** Minimizar el uso de JavaScript en el cliente. Mover la lógica pesada al servidor (Server Actions o Server Components).

## 3. Accesibilidad (A11y)
- Todo componente interactivo debe ser navegable por teclado.
- Usar HTML semántico (`<main>`, `<section>`, `<nav>`, `<h1>`-`<h6>`).
- Asegurar contraste de color suficiente (WCAG AA). Los componentes de shadcn/ui/Radix ya cubren gran parte de esto.

## 4. Mantenibilidad
- Funciones pequeñas y con una sola responsabilidad.
- Si un componente supera las 150 líneas, evaluar dividirlo.
- Comentar el "por qué" de una lógica compleja, no el "qué".