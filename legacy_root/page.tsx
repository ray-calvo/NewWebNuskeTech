import { Metadata } from "next";
import { 
  Stethoscope, 
  Activity, 
  Microscope, 
  HeartPulse, 
  Syringe, 
  ActivitySquare 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Servicios | Nuske Vet Center",
  description: "Conoce nuestras especialidades médicas y servicios veterinarios de alta tecnología.",
};

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Cirugía General y Especializada",
    description: "Quirófanos equipados con tecnología avanzada para procedimientos seguros y mínimamente invasivos.",
    icon: <Stethoscope className="h-6 w-6 text-teal-600" />,
  },
  {
    title: "Diagnóstico por Imagen",
    description: "Radiografía digital, ecografía y endoscopia de alta resolución para diagnósticos precisos.",
    icon: <Activity className="h-6 w-6 text-teal-600" />,
  },
  {
    title: "Laboratorio Clínico",
    description: "Análisis de sangre, orina y citologías con equipos de última generación y resultados rápidos.",
    icon: <Microscope className="h-6 w-6 text-teal-600" />,
  },
  {
    title: "Cardiología Veterinaria",
    description: "Evaluación cardiovascular completa, electrocardiogramas y ecocardiografía.",
    icon: <HeartPulse className="h-6 w-6 text-teal-600" />,
  },
  {
    title: "Medicina Preventiva",
    description: "Planes de vacunación, desparasitación y chequeos regulares para mantener a tu mascota sana.",
    icon: <Syringe className="h-6 w-6 text-teal-600" />,
  },
  {
    title: "Cuidados Intensivos",
    description: "Hospitalización 24/7 con monitoreo continuo, soporte vital y atención cálida constante.",
    icon: <ActivitySquare className="h-6 w-6 text-teal-600" />,
  },
];

export default function ServiciosPage() {
  return (
    <div className="py-16 md:py-24 bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Nuestros Servicios Médicos
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Ofrecemos atención veterinaria integral combinando equipos de vanguardia médica 
            con el amor y la calidez que tu mascota merece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}