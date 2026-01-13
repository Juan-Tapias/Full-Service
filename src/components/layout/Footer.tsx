import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">N</span>
              </div>
              <span className="text-xl font-bold">NexaTech</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Transformamos ideas en soluciones digitales innovadoras. 
              Desarrollo de software a medida para impulsar tu negocio.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/servicios" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/portafolio" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground text-sm">Desarrollo Web</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Apps Móviles</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Software a Medida</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Consultoría IT</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contacto@nexatech.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Ciudad, País</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NexaTech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
