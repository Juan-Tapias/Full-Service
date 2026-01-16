import { 
  Briefcase, 
  Building2, 
  Lightbulb,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Briefcase,
    title: "Staffing Tecnológico",
    description: "Incorporamos desarrolladores y perfiles técnicos especializados directamente a tu equipo para resolver necesidades inmediatas, acelerar entregas y cubrir vacantes críticas sin procesos de contratación largos ni cargas administrativas. Nuestro talento se adapta rápidamente a tus herramientas, metodologías y objetivos, aportando resultados desde el primer día.",
    features: [
      "Selección precisa de perfiles según experiencia, stack y objetivos del proyecto",
      "Contratos flexibles por horas o períodos definidos, sin compromisos a largo plazo",
      "Integración directa con tus equipos, procesos y herramientas actuales",
      "Gestión administrativa, pagos y cumplimiento a cargo de nuestro equipo",
      "Seguimiento continuo con reportes claros de avances y resultados",
      "Escalamiento ágil desde un recurso puntual hasta equipos completos"
    ],
  },
  {
    icon: Building2,
    title: "BPO Tecnológico",
    description: "Nos hacemos cargo de la ejecución técnica completa de tus proyectos digitales a través de equipos autónomos y especializados. Diseñamos, desarrollamos, mantenemos y evolucionamos tus aplicaciones mientras tú te enfocas en el crecimiento del negocio, con costos predecibles y control total sobre los resultados.",
    features: [
      "Equipos completos con liderazgo técnico, desarrollo y control de calidad",
      "Desarrollo integral de aplicaciones web, móviles y sistemas a medida",
      "Infraestructura, despliegue y mantenimiento incluidos en el servicio",
      "Monitoreo continuo y operación estable para garantizar disponibilidad",
      "Reportes periódicos claros sobre avances, métricas y estado del proyecto",
      "Transferencia total de conocimiento y activos al finalizar el servicio"
    ],
  },
  {
    icon: Lightbulb,
    title: "Consultoría Digital",
    description: "Analizamos en profundidad tus procesos, operaciones y modelo de negocio para identificar oportunidades reales de mejora mediante tecnología. Te entregamos una hoja de ruta clara y accionable para optimizar costos, aumentar eficiencia e incorporar automatización e inteligencia artificial con impacto medible.",
    features: [
      "Diagnóstico estructurado de procesos y flujos operativos actuales",
      "Identificación de cuellos de botella y oportunidades de optimización",
      "Definición de soluciones tecnológicas alineadas a objetivos de negocio",
      "Validaciones rápidas para demostrar resultados antes de escalar",
      "Aplicación estratégica de automatización e inteligencia artificial",
      "Entrega de documentación clara y roadmap de implementación"
    ],
  }
];

const processSteps = [
  {
    number: "01",
    title: "Idea",
    description: "Capturamos tu visión inicial y definimos los objetivos del proyecto desde la concepción del software.",
  },
  {
    number: "02",
    title: "Requerimientos",
    description: "Documentamos especificaciones funcionales y técnicas con estructura completa del proyecto.",
  },
  {
    number: "03",
    title: "Estructura Proyecto",
    description: "Definimos arquitectura, equipo y roadmap con hitos claros para ejecución eficiente.",
  },
  {
    number: "04",
    title: "Hacer Cotización",
    description: "Analizamos requerimientos detallados y estructuramos propuesta técnica y comercial precisa.",
  },
  {
    number: "05",
    title: "Escribir el Código",
    description: "Desarrollamos con metodología ágil, entregas incrementales y pruebas continuas de calidad.",
  },
  {
    number: "06",
    title: "Pruebas QA",
    description: "Validamos exhaustivamente funcionalidad, rendimiento y seguridad antes del lanzamiento.",
  },
  {
    number: "07",
    title: "Mejoras",
    description: "Iteramos continuamente con feedback del cliente para optimización y nuevas funcionalidades.",
  },
];


const techStack = [
  "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
  "AWS", "Docker", "Kubernetes", "React Native", "Next.js", "GraphQL",
];

const Services = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Servicios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Soluciones que impulsan tu <span className="gradient-text">crecimiento</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ofrecemos servicios de desarrollo de software completos, desde la 
              conceptualización hasta el soporte post-lanzamiento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-8">{service.description}</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="aspect-square max-w-md mx-auto rounded-2xl bg-card border border-border p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-primary/30" />
                    </div>
                    <div className="absolute top-4 right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary/20 rounded-full blur-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Proceso
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Cómo trabajamos
            </h2>
            <p className="text-muted-foreground">
              Nuestro proceso está diseñado para garantizar resultados 
              excepcionales en cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.slice(0, 4).map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}

            <div className="lg:col-span-4 flex justify-center gap-8">
              {processSteps.slice(4).map((step) => (
                <div key={step.number} className="relative w-[250px]">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Tecnologías
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Nuestro stack tecnológico
            </h2>
            <p className="text-muted-foreground">
              Utilizamos las tecnologías más modernas y confiables del mercado.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Cuéntanos tu idea y trabajemos juntos para convertirla en realidad.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 group"
          >
            <a
              href="https://w.app/qgct1j"
              target="_blank"
              rel="noopener noreferrer"
            >
            Contáctanos
            </a>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
