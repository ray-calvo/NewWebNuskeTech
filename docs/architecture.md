# Arquitectura del Proyecto - Nuske Vet Center

## 1. Stack Tecnológico (2026 Standard)
- **Framework:** Next.js 15+ (App Router).
- **Language:** TypeScript (Strict Mode).
- **Styling:** Tailwind CSS (Utility-first).
- **UI Components:** shadcn/ui (basado en Radix UI).
- **State Management:** Zustand (para estado global ligero).
- **Data Fetching:** Server Components (preferido) o TanStack Query.

## 2. Estructura de Directorios
Usaremos una estructura basada en características (Features) dentro de `src/`.

```text
src/
├── app/                  # Rutas y Páginas (Server Components por defecto)
│   ├── (marketing)/      # Grupo de rutas públicas (Home, Servicios, Contacto)
│   └── (portal)/         # (Futuro) Grupo de rutas privadas (Pacientes)
├── components/           # Componentes Globales y Reutilizables
│   ├── ui/               # Componentes atómicos de shadcn/ui (No editar a mano)
│   └── shared/           # Componentes de negocio compartidos (Header, Footer, Cards)
├── features/             # Lógica por dominio de negocio
│   ├── appointments/     # Ejemplo: Citas médicas
│   │   ├── components/
│   │   ├── hooks/
│   │   └── types/
│   └── services/         # Ejemplo: Catálogo de servicios veterinarios
├── lib/                  # Configuraciones de librerías (utils.ts, supabase.ts)
└── types/                # Definiciones de TypeScript globales