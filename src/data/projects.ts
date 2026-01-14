export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  category: string;
  year: string;
  features: string[];
  gallery: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "taskman",
    title: "Taskman",
    shortDescription: "Software de gestión de tareas para equipos e individuos.",
    fullDescription: "Taskman es la solución definitiva para transformar la caos organizacional en productividad explosiva. Esta plataforma revolucionaria permite a equipos y profesionales individuales crear, asignar, priorizar y rastrear tareas con precisión quirúrgica. Con tableros visuales Kanban dinámicos, reportes automatizados en tiempo real y analíticas predictivas, Taskman elimina cuellos de botella, mejora la colaboración y acelera la ejecución de proyectos hasta un 40%. Compatible con todos los dispositivos y accesible offline, garantiza que ningún deadline se pierda nunca más.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL"],
    category: "Productividad",
    year: "2025",
    features: [
      "Tableros Kanban interactivos con drag & drop",
      "Seguimiento en tiempo real de progreso del equipo",
      "Dashboards ejecutivos con métricas accionables",
      "Sincronización instantánea multiplataforma"
    ],
    gallery: []
  },
  {
    id: "marketplace-p2p",
    title: "Marketplace Colaborativo P2P",
    shortDescription: "Plataforma para compraventa directa entre personas.",
    fullDescription: "Revoluciona la economía local con nuestro Marketplace P2P que conecta directamente compradores y vendedores, eliminando intermediarios y maximizando ganancias. Con chat en tiempo real, sistema de reputación basado en blockchain, pagos seguros instantáneos y logística integrada, esta plataforma potencia la economía circular, fomenta la confianza comunitaria y reduce el impacto ambiental mediante la reutilización responsable de bienes. Más de 50K usuarios ya confían en nuestra red segura.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "MongoDB"],
    category: "E-commerce",
    year: "2025",
    features: [
      "Chat en vivo con videollamadas integradas",
      "Sistema de reputación verificada con blockchain",
      "Pagos instantáneos con 100+ métodos",
      "Logística automatizada con seguimiento GPS"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "configurador-productos",
    title: "Configurador Productos Personalizables",
    shortDescription: "Plataforma para tiendas con personalización 2D/3D.",
    fullDescription: "Convierte visitantes en clientes premium con nuestro Configurador Visual 3D que permite personalizar productos en tiempo real con texturas, colores, grabados y diseños 3D. Integrado nativamente con WooCommerce, genera tiendas personalizables en menos de 7 días con precios dinámicos automáticos, vistas 360° y experiencia AR para móviles. Perfecto para moda, joyería, decoración y productos premium que aumentan conversiones hasta 300%.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    category: "E-commerce",
    year: "2025",
    features: [
      "Configurador 3D con renderizado en tiempo real",
      "Precios dinámicos que se actualizan automáticamente",
      "Vista AR para móviles (iOS/Android)",
      "Tiendas listas en menos de 7 días"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "lms-educativa",
    title: "Plataforma LMS Educativa",
    shortDescription: "Sistema de aprendizaje en línea interactivo.",
    fullDescription: "Transforma la educación tradicional con nuestra Plataforma LMS de vanguardia que combina gamificación, inteligencia artificial y colaboración en tiempo real. Gestiona cohortes completas con seguimiento individualizado, certificaciones verificables por blockchain, aulas virtuales inmersivas y analíticas predictivas que identifican estudiantes en riesgo de deserción con 95% de precisión. Usada por +200 instituciones colombianas.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL"],
    category: "Educación",
    year: "2025",
    features: [
      "Gamificación con insignias y leaderboards",
      "IA que predice deserción estudiantil",
      "Certificados verificables blockchain",
      "Clases en vivo con grabación automática"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "gestion-entrenamiento",
    title: "Sistema Gestión Centros Entrenamiento",
    shortDescription: "Plaltaforma modular para operaciones académicas.",
    fullDescription: "Sistema integral diseñado específicamente para centros de formación técnica que automatiza la gestión completa de operaciones académicas. Desde matrículas hasta certificación, pasando por control de asistencia biométrico, gestión de skills por competencias, seguimiento de desempeño en tiempo real y generación automática de reportes ministeriales. Reduce tiempo administrativo en 70% y mejora retención estudiantil en 35%.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Educación",
    year: "2025",
    features: [
      "Control biométrico de asistencia",
      "Skills matrix por competencias",
      "Dashboards ejecutivos en tiempo real",
      "Reportes ministeriales automáticos"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "iza-ai",
    title: "IZA",
    shortDescription: "Agente IA para automatización académica.",
    fullDescription: "IZA es el agente inteligente que revolucionará la educación automatizando el 80% de procesos administrativos y académicos. Con capacidades RAG avanzadas, tutoría personalizada 24/7, detección predictiva de deserción y orquestación multicanal (WhatsApp, web, email), IZA reduce tickets de soporte en 65% y mejora el rendimiento académico promedio en 28%. Disponible en 5 idiomas latinoamericanos.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    technologies: ["IA Generativa", "RAG", "WhatsApp API"],
    category: "IA/Automatización",
    year: "2025",
    features: [
      "Tutoría IA 24/7 en lenguaje natural",
      "Alertas predictivas de deserción (95% precisión)",
      "Multicanal: WhatsApp, web, Telegram",
      "Búsqueda semántica sobre materiales educativos"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "app-domicilios",
    title: "App Domicilios On-Demand",
    shortDescription: "Aplicación móvil para logística de última milla.",
    fullDescription: "Plataforma logística de última generación con +10K descargas que optimiza rutas en tiempo real, gestiona flotas dinámicas y maximiza márgenes operativos. Con geolocalización predictiva, balanceo automático de carga, promociones dinámicas por IA y panel ejecutivo multi-ciudad, nuestra solución multiplica pedidos diarios x3 y reduce tiempos de entrega en 42%. Escalable a cualquier vertical de negocio.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    technologies: ["React Native", "AWS", "PostgreSQL"],
    category: "Logística",
    year: "2025",
    features: [
      "Geolocalización predictiva con IA",
      "Balanceo automático de domiciliarios",
      "Promociones dinámicas por ciudad/hora",
      "Panel multi-ciudad en tiempo real"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
    ]
  }
];


export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getFeaturedProjects = (count: number = 6): Project[] => {
  return projects.slice(0, count);
};
