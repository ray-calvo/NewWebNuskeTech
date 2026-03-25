export type TechnologyGalleryImage = {
  src: string;
  alt: string;
};

export type TechnologyEvidenceSection = {
  id: string;
  badge: string;
  title: string;
  description: string;
  bullets: readonly string[];
  images: readonly TechnologyGalleryImage[];
};

export const technologyHeroImage: TechnologyGalleryImage = {
  src: "/marketing/tech/Hospital.webp",
  alt: "Área hospitalaria veterinaria con entorno clínico real de Nuskë Vet Center",
};

export const technologyEvidenceSections: readonly TechnologyEvidenceSection[] = [
  {
    id: "diagnostico",
    badge: "Diagnóstico hospitalario",
    title: "La infraestructura diagnóstica ayuda a decidir con más precisión y menos demora",
    description:
      "Cuando un cuadro no se aclara solo con exploración física, contar con apoyo hospitalario permite confirmar sospechas, medir riesgos y ordenar mejor el siguiente paso clínico.",
    bullets: [
      "Apoya decisiones en pacientes agudos o complejos",
      "Reduce incertidumbre antes de intervenir",
      "Permite correlacionar mejor evolución, estudios y riesgo",
    ],
    images: [
      {
        src: "/marketing/tech/Laboratorio.webp",
        alt: "Área de laboratorio clínico dentro de las instalaciones hospitalarias",
      },
      {
        src: "/marketing/tech/Laboratorio1.webp",
        alt: "Espacio de trabajo de laboratorio para apoyo diagnóstico hospitalario",
      },
      {
        src: "/marketing/tech/Consultorio.webp",
        alt: "Consultorio clínico para valoración médica y lectura integral del caso",
      },
    ],
  },
  {
    id: "cirugia",
    badge: "Cirugía y mínima invasión",
    title: "El quirófano y las áreas de procedimiento respaldan una resolución clínica más segura",
    description:
      "La diferencia no está en mostrar equipo, sino en contar con un entorno real para operar, monitorizar y sostener decisiones de resolución con más control del caso.",
    bullets: [
      "Mejor preparación para procedimientos complejos",
      "Mayor control del entorno anestésico y quirúrgico",
      "Capacidad real para intervenir dentro del hospital",
    ],
    images: [
      {
        src: "/marketing/tech/Quirofano.webp",
        alt: "Quirófano hospitalario veterinario preparado para procedimientos especializados",
      },
      {
        src: "/marketing/tech/Hospital.webp",
        alt: "Área clínica hospitalaria vinculada a procedimientos y soporte del paciente",
      },
    ],
  },
  {
    id: "hospitalizacion",
    badge: "Hospitalización y monitoreo",
    title: "El seguimiento continuo importa cuando el paciente necesita algo más que una visita breve",
    description:
      "Casos frágiles, postoperatorios o de evolución incierta requieren un entorno donde sea posible observar, reevaluar y sostener cambios clínicos sin perder continuidad.",
    bullets: [
      "Permite vigilancia estrecha cuando el cuadro lo exige",
      "Facilita reevaluación y ajuste del manejo",
      "Refuerza confianza en pacientes que necesitan más control",
    ],
    images: [
      {
        src: "/marketing/tech/Hospital.webp",
        alt: "Zona hospitalaria preparada para observación y seguimiento clínico",
      },
      {
        src: "/marketing/tech/Consultorio.webp",
        alt: "Espacio clínico para valoración y seguimiento de evolución del paciente",
      },
    ],
  },
  {
    id: "infraestructura",
    badge: "Infraestructura hospitalaria",
    title: "Las instalaciones refuerzan que aquí se puede recibir, valorar y acompañar mejor a un paciente complejo",
    description:
      "La percepción de confianza también viene del entorno: un hospital ordenado, reconocible y clínicamente consistente ayuda a sostener la experiencia del caso desde la llegada.",
    bullets: [
      "Da contexto real de atención hospitalaria",
      "Refuerza confianza desde el primer contacto presencial",
      "Diferencia al hospital frente a clínicas de alcance más básico",
    ],
    images: [
      {
        src: "/marketing/tech/Fachada.webp",
        alt: "Fachada exterior de Nuskë Vet Center",
      },
      {
        src: "/marketing/tech/Lobby.webp",
        alt: "Lobby e ingreso del hospital veterinario",
      },
      {
        src: "/marketing/tech/SalaEspera.webp",
        alt: "Sala de espera dentro de las instalaciones hospitalarias",
      },
      {
        src: "/marketing/tech/Fachada1.webp",
        alt: "Vista exterior adicional de las instalaciones del hospital",
      },
    ],
  },
] as const;
