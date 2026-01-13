import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Innovación en cada línea de código</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Transformamos ideas en{" "}
            <span className="gradient-text">software excepcional</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Desarrollamos soluciones digitales innovadoras que impulsan el crecimiento 
            de tu negocio. Desde aplicaciones web hasta software empresarial.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 group"
              asChild
            >
              <Link to="/portafolio">
                Ver proyectos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-border hover:bg-muted"
              asChild
            >
              <Link to="/servicios">
                <Code2 className="mr-2 w-5 h-5" />
                Nuestros servicios
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">6</div>
              <div className="text-sm text-muted-foreground mt-1">Proyectos completados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Años de experiencia</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
