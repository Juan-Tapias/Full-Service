import { 
  Code, 
  Users, 
  BarChart3, 
  Package, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Desarrollo Software a la Medida",
    description: "Soluciones completamente personalizadas que se adaptan a tus procesos específicos, con propiedad total del código fuente y escalabilidad garantizada.",
    features: [
      "Software 100% propietario",
      "Adaptación perfecta a procesos",
      "Escalabilidad ilimitada",
      "Integración total de sistemas",
      "Ciclo completo de desarrollo",
      "Soporte y mantenimiento continuo"
    ],
  },
  {
    icon: Users,
    title: "Células de Trabajo",
    description: "Equipos multidisciplinarios autónomos disponibles por horas o proyectos, con talento especializado y tarifas competitivas en USD.",
    features: [
      "Full Stack Development",
      "DevOps y QA Testing",
      "Data Science y Machine Learning",
      "UX/UI Design profesional",
      "Arquitectura de software",
      "Tarifas por rol y seniority"
    ],
  },
  {
    icon: BarChart3,
    title: "Consultorías Transformación Digital",
    description: "Análisis profundo de procesos empresariales con planes estratégicos de automatización e implementación de IA generativa.",
    features: [
      "Diagnóstico de procesos",
      "Visitas in situ a operaciones",
      "Plan de transformación digital",
      "Automatización con IA",
      "Estrategia tecnológica",
      "Roadmap de implementación"
    ],
  },
  {
    icon: Package,
    title: "Comercialización Productos Existentes",
    description: "Implementación inmediata de productos probados y listos para usar, con personalización y soporte técnico especializado.",
    features: [
      "Taskman gestión de tareas",
      "Marketplace P2P colaborativo",
      "Plataformas LMS educativas",
      "Configuradores 3D productos",
      "Sistemas gestión entrenamiento",
      "Agente IA IZA 24/7"
    ],
  },
];


const processSteps = [
  {
    number: "01",
    title: "Idea",
    description: "Capturamos tu visión inicial y definimos los objetivos del proyecto desde la concepción del software.",
  },
  {
    number: "02",
    title: "Hacer Cotización",
    description: "Analizamos requerimientos detallados y estructuramos propuesta técnica y comercial precisa.",
  },
  {
    number: "03",
    title: "Requerimientos",
    description: "Documentamos especificaciones funcionales y técnicas con estructura completa del proyecto.",
  },
  {
    number: "04",
    title: "Estructura Proyecto",
    description: "Definimos arquitectura, equipo y roadmap con hitos claros para ejecución eficiente.",
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
      {/* Hero */}
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
                {/* Content */}
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

                {/* Visual */}
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

      {/* Process */}
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

      {/* Tech Stack */}
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

      {/* CTA */}
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
            Contáctanos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
