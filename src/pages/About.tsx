import { Target, Eye, Heart, Users, Award, Clock, Zap, Code, GraduationCap } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const values = [
  {
    icon: Target,
    title: "Salto Social",
    description: "Transformamos vidas de población vulnerable mediante formación tecnológica intensiva y empleabilidad 100% garantizada.",
  },
  {
    icon: Users,
    title: "Talento Exponencial",
    description: "Formamos jóvenes de estratos bajos con 1600h programación, 300h inglés y 200h liderazgo en 10 meses.",
  },
  {
    icon: Zap,
    title: "Flexibilidad Total",
    description: "Células de trabajo autónomas, horas flexibles y soluciones escalables adaptadas a cualquier necesidad.",
  },
  {
    icon: Code,
    title: "Propiedad del Código",
    description: "Software 100% tuyo sin licencias ni dependencias de terceros, con control total y escalabilidad infinita.",
  },
];

const reasons = [
  {
    icon: Award,
    title: "Talento Especializado",
    description: "Desarrolladores formados en Campuslands con experiencia real y tarifas competitivas en USD por seniority.",
  },
  {
    icon: Users,
    title: "Acompañamiento Continuo",
    description: "Desde análisis de procesos hasta soporte post-lanzamiento, estamos contigo en cada etapa del proyecto.",
  },
  {
    icon: Clock,
    title: "Agilidad Comprobada",
    description: "Metodología ágil iterativa que entrega valor continuo con pruebas QA exhaustivas desde el día 1.",
  },
  {
    icon: GraduationCap,
    title: "Impacto Social Positivo",
    description: "Cada línea de código genera movilidad social para jóvenes sin recursos, madres cabeza y migrantes.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Full Service Campuslands
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Soluciones <span className="gradient-text">Full Service</span> con Impacto Social
            </h1>
            <p className="text-lg text-muted-foreground">
              Transformamos ideas en software que genera 
              movilidad social y resultados empresariales exponenciales desde Floridablanca, Santander.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra historia</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Campuslands nace en la Zona Franca Santander con misión de movilidad social para población 
                  vulnerable: jóvenes sin recursos, madres cabeza, discapacitados, estratos 0-3 y migrantes.
                </p>
                <p>
                  Full Service surge para canalizar nuestro talento exponencial hacia empresas que necesitan 
                  soluciones integrales de desarrollo software con impacto social garantizado y calidad TI.
                </p>
                <p>
                  Hoy exportamos talento y soluciones a múltiples países con portafolio probado de 7+ productos 
                  y células de trabajo autónomas listas para escalar cualquier desafío tecnológico.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Campuslands Floridablanca"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-xl opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-background border border-border">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra misión</h3>
              <p className="text-muted-foreground">
                Generar SALTO SOCIAL a través de formación tecnológica intensiva (1600h programación + 300h inglés) 
                con 100% empleabilidad garantizada para población vulnerable.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-background border border-border">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra visión</h3>
              <p className="text-muted-foreground">
                Ser el puente tecnológico que conecta talento vulnerable con empresas globales, resolviendo 
                desconexión de sistemas, procesos manuales y pérdida de competitividad con software a la medida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Lo que nos define
            </h2>
            <p className="text-muted-foreground">
              Nuestros pilares fundamentales guían cada solución que entregamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-secondary transition-colors">
                  <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Ventajas Competitivas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Por qué Full Service
            </h2>
            <p className="text-muted-foreground">
              Descubre por qué empresas confían en nosotros para sus proyectos críticos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="flex gap-4 p-6 rounded-xl bg-background border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text">6+</div>
              <div className="text-muted-foreground mt-2">Años formando talento</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text">7+</div>
              <div className="text-muted-foreground mt-2">Productos en portafolio</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text">500+</div>
              <div className="text-muted-foreground mt-2">Jóvenes impactados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text">100%</div>
              <div className="text-muted-foreground mt-2">Empleabilidad garantizada</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
