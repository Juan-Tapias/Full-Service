import { Globe, Smartphone, Server, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Creamos aplicaciones web modernas, rápidas y escalables utilizando las últimas tecnologías del mercado.",
    features: [
      "Aplicaciones web responsive",
      "Progressive Web Apps (PWA)",
      "E-commerce y tiendas online",
      "Dashboards y paneles de control",
      "Portales corporativos",
      "Integración con APIs",
    ],
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Desarrollamos aplicaciones nativas y multiplataforma para iOS y Android que destacan por su rendimiento y diseño.",
    features: [
      "Apps iOS nativas (Swift)",
      "Apps Android nativas (Kotlin)",
      "Apps multiplataforma (React Native)",
      "Integración con hardware del dispositivo",
      "Notificaciones push",
      "Sincronización offline",
    ],
  },
  {
    icon: Server,
    title: "Software a Medida",
    description: "Soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
    features: [
      "Sistemas de gestión empresarial (ERP)",
      "CRM personalizados",
      "Automatización de procesos",
      "Integración de sistemas legacy",
      "APIs y microservicios",
      "Bases de datos optimizadas",
    ],
  },
  {
    icon: Lightbulb,
    title: "Consultoría IT",
    description: "Asesoramiento experto para optimizar tus procesos y definir la mejor estrategia tecnológica.",
    features: [
      "Auditoría tecnológica",
      "Arquitectura de software",
      "Optimización de rendimiento",
      "Seguridad y cumplimiento",
      "Migración a la nube",
      "Transformación digital",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Descubrimiento",
    description: "Analizamos tus necesidades, objetivos y desafíos para entender completamente tu visión.",
  },
  {
    number: "02",
    title: "Planificación",
    description: "Diseñamos la arquitectura y creamos un roadmap detallado con hitos claros y medibles.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos tu solución con metodologías ágiles, entregas incrementales y comunicación constante.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description: "Desplegamos, capacitamos a tu equipo y brindamos soporte continuo post-lanzamiento.",
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

      {/* Services */}
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
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10" />
                )}
                
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
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
