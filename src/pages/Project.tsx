import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { getProjectById, projects } from "@/data/projects";
import * as React from "react"
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/portafolio" replace />;
  }

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
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
                  {project.category.map((category, index) =>  (
                <span key={index} className="text-sm font-medium px-3 py-1 rounded-full bg-primary/20 text-primary">{category}</span>
                  ))}
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
                  <Button
                    asChild
                    className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 cursor-pointer transition-opacity"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Previsualizar producto
                    </a>
                  </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-[420px] lg:max-h-[520px] 2xl:max-h-[620px] object-cover"
              />

            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-10">
            Características principales
          </h1>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-6 max-w-6xl 2xl:max-w-7xl mx-auto">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project.gallery.length > 1 && (
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Galería
            </h2>

            {activeIndex !== null && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                  onClick={() => setActiveIndex(null)}
                >
                  <Carousel
                    opts={{
                      startIndex: activeIndex,
                      loop: true,
                    }}
                    className="w-full max-w-7xl 2xl:max-w-[1600px] px-6"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <CarouselContent>
                      {project.gallery.map((image, index) => (
                        <CarouselItem key={index}>
                          <img
                            src={image}
                            alt={`${project.title} - Imagen ${index + 1}`}
                            className="max-h-[90vh] w-auto mx-auto rounded-xl shadow-2xl
                                      animate-in zoom-in duration-300"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
              )}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-7xl 2xl:max-w-[1400px] mx-auto"
            >
              <CarouselContent>
                {project.gallery.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 pl-4"
                  >
                    <div className="rounded-xl overflow-hidden border border-border bg-card">
                      <img
                        src={image}
                        alt={`${project.title} - Imagen ${index + 1}`}
                        onClick={() => setActiveIndex(index)}
                        className="w-full h-64 object-cover cursor-zoom-in
                                  hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
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
