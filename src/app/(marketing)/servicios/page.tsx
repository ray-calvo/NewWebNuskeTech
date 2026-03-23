import Image from "next/image";
import {
  Check,
  HeartPulse,
  Microscope,
  Monitor,
  ScanSearch,
  ShieldPlus,
  Stethoscope,
  Syringe,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WellnessSelector } from "@/features/marketing/components/WellnessSelector";

const specialtyServices = [
  {
    title: "Cirugía de Tejidos Blandos y Ortopedia",
    category: "Especialidades",
    description:
      "Procedimientos complejos respaldados por monitoreo multiparamétrico, anestesia inhalada y protocolos de alta especialidad para resolver casos quirúrgicos con mayor seguridad.",
    imageSrc:
      "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Quirófano veterinario con instrumentación y monitorización avanzada",
    icon: Syringe,
    benefits: [
      "Procedimientos complejos con monitoreo multiparamétrico",
      "Anestesia inhalada y control avanzado de signos vitales",
      "Recuperación quirúrgica con vigilancia hospitalaria",
    ],
    whatsappMessage:
      "Hola Nuskë, solicito informes sobre una cirugía especializada para mi mascota...",
  },
  {
    title: "Mínima Invasión (Endoscopía y Laparoscopía)",
    category: "Especialidades",
    description:
      "La torre de endoscopía permite diagnosticar e intervenir sin grandes incisiones, con menos trauma quirúrgico, recuperación acelerada y menor dolor para el paciente.",
    imageSrc:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Equipo médico para procedimientos endoscópicos y mínima invasión",
    icon: Stethoscope,
    benefits: [
      "Recuperación acelerada y menor dolor",
      "Sin suturas externas en muchos casos",
      "Resultados diagnósticos y terapéuticos en 24h",
    ],
    whatsappMessage:
      "Hola Nuskë, me interesa conocer más sobre el procedimiento de mínima invasión...",
  },
  {
    title: "Imagenología Avanzada",
    category: "Especialidades",
    description:
      "Rayos X digitales de alta frecuencia y ultrasonido Doppler a color para apoyar decisiones diagnósticas más rápidas y mejor informadas en pacientes complejos.",
    imageSrc:
      "https://images.unsplash.com/photo-1583912267550-d4bcddac42b4?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Equipo de imagenología y ultrasonido clínico",
    icon: ScanSearch,
    benefits: [
      "Rayos X de alta resolución",
      "Ultrasonido Doppler a color",
      "Soporte rápido a cirugía, urgencias y hospitalización",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera recibir información sobre estudios de imagenología para mi mascota...",
  },
  {
    title: "Laboratorio Clínico In-house",
    category: "Especialidades",
    description:
      "Pruebas de sangre, citologías y diagnósticos rápidos en sitio para respaldar urgencias, hospitalización y seguimiento clínico sin depender de tiempos externos.",
    imageSrc:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Laboratorio clínico con instrumentos diagnósticos",
    icon: Microscope,
    benefits: [
      "Biometrías y química sanguínea en minutos",
      "Diagnósticos rápidos sin salir del hospital",
      "Soporte inmediato a decisiones críticas",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera información sobre estudios de laboratorio clínico para mi mascota...",
  },
  {
    title: "Medicina de Animales Exóticos",
    category: "Especialidades",
    description:
      "Nuskë cuenta con especialistas certificados para aves, reptiles y pequeños mamíferos, ofreciendo valoración clínica, ambiente controlado y protocolos adaptados a especies no convencionales.",
    imageSrc:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Consulta clínica para especies exóticas en un entorno veterinario controlado",
    icon: Stethoscope,
    benefits: [
      "Manejo clínico especializado para aves y reptiles",
      "Ambiente controlado para reducir estrés",
      "Protocolos adaptados a especies no convencionales",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera agendar una consulta para mi ejemplar exótico...",
  },
] as const;

const urgentServices = [
  {
    title: "Urgencias y Triage",
    category: "Urgencias",
    description:
      "Disponibilidad total los 365 días del año para estabilizar, priorizar y orientar con rapidez a cada paciente desde su llegada.",
    imageSrc:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Área veterinaria de urgencias con personal médico y equipamiento clínico",
    icon: HeartPulse,
    benefits: [
      "Atención sin cita previa las 24 horas",
      "Triaje y estabilización inmediata",
      "Laboratorio y apoyo diagnóstico en sitio",
    ],
    whatsappMessage:
      "Hola Nuskë, tengo una emergencia con mi mascota y voy en camino...",
  },
  {
    title: "Hospitalización Especializada",
    category: "Urgencias",
    description:
      "Seguimiento continuo para pacientes que requieren vigilancia clínica, recuperación supervisada y menor estrés durante su estancia.",
    imageSrc:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Área hospitalaria veterinaria con camas y equipamiento clínico",
    icon: ShieldPlus,
    benefits: [
      "Áreas separadas por especie",
      "Monitoreo continuo para recuperación segura",
      "Enfoque Fear-Free para reducir el estrés",
    ],
    whatsappMessage:
      "Hola Nuskë, necesito información sobre hospitalización para mi mascota...",
  },
  {
    title: "Cuidados Intensivos",
    category: "Urgencias",
    description:
      "Monitoreo constante y soporte hospitalario avanzado para pacientes críticos que necesitan vigilancia intensiva y respuesta inmediata.",
    imageSrc:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Monitor clínico y área de cuidados intensivos veterinarios",
    icon: Monitor,
    benefits: [
      "Monitoreo constante de signos vitales",
      "Respuesta hospitalaria para casos críticos",
      "Soporte integral durante fases de mayor riesgo",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera orientación sobre cuidados intensivos para mi mascota...",
  },
] as const;

const preventiveServices = [
  {
    title: "Odontología Veterinaria",
    category: "Preventivos",
    description:
      "Limpieza ultrasónica y valoración de salud oral para prevenir dolor, infecciones y complicaciones sistémicas asociadas al deterioro dental.",
    imageSrc:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Atención odontológica veterinaria en una clínica moderna",
    icon: Check,
    benefits: [
      "Limpieza ultrasónica profesional",
      "Prevención de enfermedad periodontal",
      "Salud oral como parte del bienestar general",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera informes sobre odontología veterinaria para mi mascota...",
  },
  {
    title: "Estética Veterinaria y Guardería",
    category: "Preventivos",
    description:
      "Servicios de grooming y daycare para acompañar el bienestar cotidiano de cada mascota en un entorno seguro y controlado.",
    imageSrc:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Espacio seguro de guardería y grooming veterinario",
    icon: Stethoscope,
    benefits: [
      "Baño y corte profesional",
      "Espacio seguro para estancia diaria",
      "Rutinas de cuidado complementarias al seguimiento médico",
    ],
    whatsappMessage:
      "Hola Nuskë, quisiera información sobre grooming o guardería para mi mascota...",
  },
] as const;

const digitalServices = [
  {
    title: "Portal del Propietario",
    description:
      "Acceso a historial médico y resultados de laboratorio en línea para que cada familia pueda revisar información clínica sin esperar llamadas o impresiones físicas.",
    whatsappMessage:
      "Hola Nuskë, quisiera más información sobre el Portal del Propietario...",
  },
  {
    title: "Telemedicina",
    description:
      "Consultas por video para triaje y seguimientos médicos cuando el contexto del paciente permite una orientación remota segura.",
    whatsappMessage:
      "Hola Nuskë, me interesa agendar una consulta de telemedicina...",
  },
] as const;

type ServiceSection = {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  benefits: readonly string[];
  whatsappMessage: string;
};

const categoryBlocks: Array<{
  title: string;
  description: string;
  services: readonly ServiceSection[];
}> = [
  {
    title: "Especialidades",
    description:
      "Tecnología, cirugía, mínima invasión y diagnóstico para casos que exigen precisión clínica y seguimiento experto.",
    services: specialtyServices,
  },
  {
    title: "Urgencias",
    description:
      "Atención hospitalaria continua para estabilizar, monitorear y acompañar a pacientes en estado delicado.",
    services: urgentServices,
  },
  {
    title: "Preventivos",
    description:
      "Servicios pensados para acompañar la salud diaria, reducir riesgos y construir bienestar a largo plazo.",
    services: preventiveServices,
  },
];

export default function ServiciosPage() {
  return (
    <main
      className="bg-background"
      style={{
        backgroundImage:
          "radial-gradient(circle at 12% 14%, rgb(166 181 251 / 0.14), transparent 24%), radial-gradient(circle at 88% 24%, rgb(166 181 251 / 0.12), transparent 22%), radial-gradient(circle at 50% 82%, rgb(166 181 251 / 0.12), transparent 26%)",
      }}
    >
      <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="mx-auto max-w-7xl space-y-4">
          <Badge variant="secondary">Especialidades Nuskë</Badge>
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl lg:leading-[1.02]">
              Especialidades diseñadas para resolver casos complejos con criterio clínico.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Cada servicio combina experiencia médica, tecnología aplicada y una vía de
              contacto inmediata para orientar mejor a cada familia desde el primer mensaje.
            </p>
          </div>
        </div>
      </section>

      <div className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl space-y-14">
          {categoryBlocks.map((block) => (
            <section key={block.title} className="space-y-8">
              <div className="max-w-3xl space-y-3">
                <Badge variant="secondary">{block.title}</Badge>
                <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                  {block.title}
                </h2>
                <p className="text-lg leading-8 text-slate-600">
                  {block.description}
                </p>
              </div>

              <div className="space-y-10">
                {block.services.map((service, index) => {
                  const whatsappHref = `https://wa.me/524433369624?text=${encodeURIComponent(
                    service.whatsappMessage
                  )}`;
                  const isReversed = index % 2 !== 0;
                  const Icon = service.icon;

                  return (
                    <section
                      key={service.title}
                      className="rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-[0_24px_80px_-56px_rgba(29,63,104,0.25)] backdrop-blur sm:p-6 lg:p-8"
                    >
                      <div
                        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                          isReversed ? "lg:[&>*:first-child]:order-2" : ""
                        }`}
                      >
                        <div className="relative aspect-[16/11] overflow-hidden rounded-3xl bg-slate-100 shadow-[0_24px_70px_-52px_rgba(15,23,42,0.45)]">
                          <Image
                            src={service.imageSrc}
                            alt={service.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/16 via-transparent to-transparent" />
                        </div>

                        <div className="space-y-6">
                          <div className="flex items-center gap-3">
                            <Badge className="border-accent/20 bg-accent/10 text-primary">
                              {service.category}
                            </Badge>
                            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20">
                              <Icon className="h-5 w-5" aria-hidden={true} />
                            </span>
                          </div>
                          <div className="space-y-4">
                            <h3 className="text-3xl font-semibold tracking-tight text-primary">
                              {service.title}
                            </h3>
                            <p className="text-base leading-8 text-slate-700">
                              {service.description}
                            </p>
                          </div>

                          <ul className="space-y-3">
                            {service.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start gap-3">
                                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                                  <Check className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <span className="text-sm leading-7 text-slate-700">
                                  {benefit}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <Button
                            asChild
                            size="lg"
                            className="h-11 rounded-2xl bg-primary px-6 text-primary-foreground hover:bg-secondary"
                          >
                            <a href={whatsappHref} target="_blank" rel="noreferrer">
                              Solicitar informes por WhatsApp
                            </a>
                          </Button>
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>
            </section>
          ))}

          <WellnessSelector />

          <section className="rounded-[2rem] border border-primary/10 bg-white/80 p-6 shadow-[0_24px_80px_-56px_rgba(29,63,104,0.16)] sm:p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {digitalServices.map((service) => {
                const whatsappHref = `https://wa.me/524433369624?text=${encodeURIComponent(
                  service.whatsappMessage
                )}`;

                return (
                  <div key={service.title} className="space-y-4">
                    <Badge className="border-accent/20 bg-accent/10 text-primary">
                      Innovación digital
                    </Badge>
                    <h2 className="text-2xl font-semibold tracking-tight text-primary">
                      {service.title}
                    </h2>
                    <p className="text-base leading-8 text-slate-700">
                      {service.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="h-11 rounded-2xl border-accent bg-accent/10 text-primary hover:bg-accent/20"
                    >
                      <a href={whatsappHref} target="_blank" rel="noreferrer">
                        Solicitar acceso o informes
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
