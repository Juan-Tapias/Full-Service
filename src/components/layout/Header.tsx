import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "../../public/logo-campus.png";
const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios" },
  { name: "Portafolio", path: "/portafolio" },
  { name: "Nosotros", path: "/nosotros" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <img 
              src={Logo} 
              alt="Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-xl font-bold">FULLSERVICE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-foreground"
                  : "text-muted-foreground"
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                location.pathname === link.path ? "after:scale-x-100" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Button
          className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
        >
          Contáctanos
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect mt-2 mx-4 rounded-lg p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity mt-2">
              Contáctanos
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
