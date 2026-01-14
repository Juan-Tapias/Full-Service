import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getProjectById, projects } from "@/data/projects";
import { useState, useEffect } from "react";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/portafolio" replace />;
  }


  const [activeImage, setActiveImage] = useState<string | null>(null);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <Layout>
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/portafolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al portafolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/20 text-primary">
                  {project.category}
                </span>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {project.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div>
                  <div className="text-sm text-muted-foreground">Año</div>
                  <div className="font-semibold">{project.year}</div>
                </div>
              </div>

              {project.link && (
                <Button
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver proyecto en vivo
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Características principales</h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Tecnologías utilizadas</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.gallery.length > 1 && (
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Galería</h2>
              <div className="flex flex-wrap gap-6 justify-center">
                {activeImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity"
                    onClick={() => setActiveImage(null)}
                  >
                    <img
                      src={activeImage}
                      alt="Imagen ampliada"
                      className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl 
                                animate-in zoom-in duration-300"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className=" w-full sm:w-[48%] lg:w-[30%] rounded-xl overflow-hidden border border-border"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Imagen ${index + 1}`}
                      onClick={() => setActiveImage(image)}
                      className="w-full h-64 object-cover cursor-zoom-in hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-border pt-12">
            <Link
              to={`/proyecto/${prevProject.id}`}
              className="group flex items-center gap-4 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Proyecto anterior</div>
                <div className="font-semibold">{prevProject.title}</div>
              </div>
            </Link>
            <Link
              to={`/proyecto/${nextProject.id}`}
              className="group flex items-center gap-4 hover:text-primary transition-colors"
            >
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Siguiente proyecto</div>
                <div className="font-semibold">{nextProject.title}</div>
              </div>
              <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Project;
