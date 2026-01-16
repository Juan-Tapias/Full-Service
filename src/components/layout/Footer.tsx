import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Logo from "/logo-campus.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1400px] px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
                <img
                  src={Logo}
                  alt="Logo FullService"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                FullService
              </span>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Transformamos ideas en soluciones digitales innovadoras.
              Desarrollo de software a la medida para impulsar negocios
              con tecnología escalable y segura.
            </p>

            <div className="flex gap-4">
              {[{
                href: "https://github.com/CampusLands",
                label: "Github",
                icon: Github,
              },{
                href: "https://www.linkedin.com/company/campuslands/posts/?feedView=all",
                label: "LinkedIn",
                icon: Linkedin,
              },{
                href: "https://x.com/Campuslands",
                label: "Twitter",
                icon: Twitter,
              }].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full bg-muted flex items-center justify-center
                             hover:bg-primary hover:text-primary-foreground
                             transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Enlaces rápidos</h3>
            <ul className="space-y-4">
              {[
                { to: "/servicios", label: "Servicios" },
                { to: "/portafolio", label: "Portafolio" },
                { to: "/nosotros", label: "Nosotros" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-muted-foreground hover:text-foreground
                               transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Servicios</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Staffing Tecnológico</li>
              <li>BPO Tecnológico</li>
              <li>Consultoría Digital</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <span>eliza.perez266@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <span>+57 311 765 2435</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Floridablanca, Santander – Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} FullService. Todos los derechos reservados.
          </p>
          <p className="opacity-70">
            Construido con tecnología moderna y enfoque en resultados.
          </p>
        </div>
      </div>
    </footer>
  );
};
