import { 
  Briefcase, 
  Building2, 
  Lightbulb,
} from "lucide-react";import { Link } from "react-router-dom";

const services = [
  {
    icon: Briefcase,
    title: "Staffing Tecnológico",
    description: "Desarrolladores que se incorporan a tu equipo para cubrir vacantes urgentes o proyectos con mucha demanda.",
  },
  {
    icon: Building2,
    title: "BPO Tecnológico",
    description: "Equipos completos que crean, mantienen y hacen crecer tus aplicaciones desde nuestras oficinas, sin que tú gestiones nada.",
  },
  {
    icon: Lightbulb,
    title: "Consultoría Digital",
    description: "Revisamos tus procesos actuales y te damos un plan claro para mejorarlos con tecnología moderna, paso a paso.",
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Lo que hacemos mejor
          </h2>
          <p className="text-muted-foreground">
            Ofrecemos soluciones tecnológicas completas para llevar tu negocio al siguiente nivel.
          </p>
        </div>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
              </div>
            ))}
          </div>


        <div className="text-center mt-12">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Ver todos los servicios
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
