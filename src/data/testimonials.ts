export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Juan Fernando Yepes Ch.",
    role: "Fundador & Director",
    company: "Tucarro.com / Full Service",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Full Service Campuslands nos permite entregar soluciones de software a la medida con talento exponencial formado en 1600h programación + 300h inglés. 100% propiedad del código y empleabilidad garantizada para jóvenes vulnerables.",
    rating: 5,
  },
  {
    id: "2",
    name: "Manager TI",
    role: "Director Tecnológico", 
    company: "Empresa Multinacional TI",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Las células de trabajo de Full Service resolvieron nuestra desconexión de sistemas con equipos autónomos Full Stack, DevOps y QA. Tarifas competitivas en USD por seniority y flexibilidad total en horas o proyectos.",
    rating: 5,
  },
  {
    id: "3",
    name: "Directora Académica",
    role: "Administradora Centros Formación",
    company: "Institución Educativa",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "El Sistema de Gestión de Centros Entrenamiento + IZA IA automatizó matrículas, asistencias, exámenes y tutorías 24/7. Redujimos tickets administrativos 65% y mejoramos retención estudiantil 35%.",
    rating: 5,
  },
  {
    id: "4",
    name: "Gerente Logística",
    role: "Operations Manager",
    company: "Startup Domicilios On-Demand",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "La App Domicilios (10K+ descargas) con geolocalización predictiva y balanceo de carga multiplicó x3 nuestros pedidos diarios. Full Service entregó en tiempo récord con arquitectura escalable AWS multi-ciudad.",
    rating: 5,
  },
];
