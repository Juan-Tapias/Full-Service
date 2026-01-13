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
    name: "María González",
    role: "CEO",
    company: "TechStart",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "NexaTech transformó completamente nuestra operación digital. Su equipo entendió perfectamente nuestras necesidades y entregó una solución que superó nuestras expectativas. La comunicación fue excelente durante todo el proyecto.",
    rating: 5,
  },
  {
    id: "2",
    name: "Carlos Rodríguez",
    role: "Director de Tecnología",
    company: "InnovateCorp",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Trabajar con NexaTech fue una experiencia increíble. Su enfoque metodológico y atención al detalle nos dio la confianza de que estábamos en buenas manos. El resultado final fue impecable.",
    rating: 5,
  },
  {
    id: "3",
    name: "Ana Martínez",
    role: "Fundadora",
    company: "EcoSolutions",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "La aplicación móvil que desarrollaron para nosotros ha sido fundamental para el crecimiento de nuestro negocio. Su soporte post-lanzamiento es excepcional y siempre están disponibles.",
    rating: 5,
  },
  {
    id: "4",
    name: "Roberto Sánchez",
    role: "Gerente de Operaciones",
    company: "LogiTrans",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "El sistema de gestión logística que implementaron nos ayudó a reducir costos en un 30%. Son profesionales, puntuales y muy creativos en sus soluciones. Totalmente recomendados.",
    rating: 5,
  },
];
