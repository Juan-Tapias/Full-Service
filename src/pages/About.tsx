import { Target, Eye, Heart, Users, Award, Clock, Zap } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const values = [
  {
    icon: Target,
    title: "Excelencia",
    description: "Nos esforzamos por superar las expectativas en cada proyecto, entregando soluciones de la más alta calidad.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajamos como un equipo unido, tanto internamente como con nuestros clientes, para lograr objetivos comunes.",
  },
  {
    icon: Zap,
    title: "Innovación",
    description: "Exploramos constantemente nuevas tecnologías y metodologías para ofrecer soluciones de vanguardia.",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Nos comprometemos con el éxito de nuestros clientes, tratando cada proyecto como si fuera propio.",
  },
];

const reasons = [
  {
    icon: Award,
    title: "Experiencia comprobada",
    description: "Más de 8 años desarrollando soluciones exitosas para empresas de todos los tamaños.",
  },
  {
    icon: Users,
    title: "Equipo experto",
    description: "Profesionales certificados y apasionados por la tecnología y la innovación.",
  },
  {
    icon: Clock,
    title: "Entrega puntual",
    description: "Cumplimos con los plazos establecidos sin comprometer la calidad del producto.",
  },
  {
    icon: Zap,
    title: "Soporte continuo",
    description: "Acompañamiento post-lanzamiento para garantizar el éxito a largo plazo.",
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
              Nosotros
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Conoce a <span className="gradient-text">NexaTech</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Somos un equipo apasionado por la tecnología, dedicado a 
              transformar ideas en soluciones digitales que generan impacto.
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
                  NexaTech nació en 2016 con una visión clara: democratizar el 
                  acceso a soluciones tecnológicas de alta calidad para empresas 
                  de todos los tamaños.
                </p>
                <p>
                  Comenzamos como un pequeño equipo de desarrolladores apasionados 
                  y hemos crecido hasta convertirnos en una empresa consolidada con 
                  presencia internacional, manteniendo siempre nuestra esencia: la 
                  cercanía con el cliente y el compromiso con la excelencia.
                </p>
                <p>
                  Hoy, con más de 50 proyectos exitosos en nuestro portafolio, 
                  seguimos innovando y adaptándonos a las nuevas tecnologías para 
                  ofrecer las mejores soluciones a nuestros clientes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Equipo NexaTech"
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
                Impulsar el crecimiento de nuestros clientes a través de soluciones 
                tecnológicas innovadoras, eficientes y escalables que transformen 
                sus ideas en productos digitales exitosos.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-background border border-border">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra visión</h3>
              <p className="text-muted-foreground">
                Ser reconocidos globalmente como líderes en desarrollo de software 
                personalizado, destacando por nuestra innovación, calidad y el 
                impacto positivo que generamos en cada proyecto.
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
              Nuestros valores guían cada decisión que tomamos y cada línea de 
              código que escribimos.
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
              Ventajas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Por qué elegirnos
            </h2>
            <p className="text-muted-foreground">
              Descubre las razones por las que nuestros clientes confían en 
              nosotros para sus proyectos más importantes.
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
              <div className="text-4xl md:text-5xl font-bold gradient-text">8+</div>
              <div className="text-muted-foreground mt-2">Años de experiencia</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text">50+</div>
              <div className="text-muted-foreground mt-2">Proyectos completados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text">30+</div>
              <div className="text-muted-foreground mt-2">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text">15+</div>
              <div className="text-muted-foreground mt-2">Expertos en el equipo</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
