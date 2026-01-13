export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  category: string;
  client: string;
  year: string;
  features: string[];
  gallery: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "fintech-dashboard",
    title: "FinTech Dashboard",
    shortDescription: "Plataforma de gestión financiera con análisis en tiempo real.",
    fullDescription: "Una plataforma completa de gestión financiera diseñada para empresas que necesitan monitorear sus finanzas en tiempo real. Incluye visualización de datos, reportes automatizados y predicciones basadas en IA.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "D3.js"],
    category: "Finanzas",
    client: "Capital Group",
    year: "2024",
    features: [
      "Dashboard interactivo con gráficos en tiempo real",
      "Sistema de alertas personalizables",
      "Integración con múltiples bancos",
      "Reportes automatizados en PDF",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "Tienda online con gestión de inventario y pagos integrados.",
    fullDescription: "Plataforma de comercio electrónico escalable con gestión avanzada de inventario, múltiples métodos de pago y un panel de administración completo para gestionar productos y pedidos.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS", "Redis"],
    category: "E-Commerce",
    client: "Fashion Store",
    year: "2024",
    features: [
      "Catálogo de productos con filtros avanzados",
      "Carrito de compras persistente",
      "Múltiples métodos de pago",
      "Sistema de cupones y descuentos",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "health-app",
    title: "HealthTrack App",
    shortDescription: "Aplicación móvil para seguimiento de salud y bienestar.",
    fullDescription: "Aplicación móvil multiplataforma para el seguimiento de la salud personal. Permite a los usuarios registrar actividades, nutrición, sueño y conectar con profesionales de la salud.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    technologies: ["React Native", "Firebase", "HealthKit", "TensorFlow Lite"],
    category: "Salud",
    client: "WellBeing Inc",
    year: "2023",
    features: [
      "Seguimiento de actividad física",
      "Registro de nutrición y calorías",
      "Monitoreo del sueño",
      "Chat con profesionales de salud",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "logistics-system",
    title: "LogiFlow System",
    shortDescription: "Sistema de gestión logística con tracking en tiempo real.",
    fullDescription: "Sistema integral de gestión logística que permite a las empresas optimizar sus operaciones de transporte, almacenamiento y distribución con seguimiento GPS en tiempo real.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Python", "Docker", "PostgreSQL", "Mapbox"],
    category: "Logística",
    client: "TransGlobal",
    year: "2023",
    features: [
      "Tracking GPS en tiempo real",
      "Optimización de rutas con IA",
      "Gestión de inventario",
      "Reportes y analíticas avanzadas",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "education-platform",
    title: "EduLearn Platform",
    shortDescription: "Plataforma educativa con cursos interactivos y certificaciones.",
    fullDescription: "Plataforma de aprendizaje en línea con cursos interactivos, evaluaciones automatizadas, certificaciones digitales y herramientas de colaboración para estudiantes y profesores.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "WebRTC", "MongoDB", "AWS"],
    category: "Educación",
    client: "Academia Digital",
    year: "2023",
    features: [
      "Cursos en video con progreso guardado",
      "Evaluaciones y quizzes interactivos",
      "Certificaciones verificables blockchain",
      "Clases en vivo con WebRTC",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "crm-enterprise",
    title: "Enterprise CRM",
    shortDescription: "CRM empresarial con automatización y análisis predictivo.",
    fullDescription: "Sistema CRM empresarial completo con automatización de ventas, marketing y servicio al cliente. Incluye análisis predictivo para identificar oportunidades de negocio.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    technologies: ["Angular", "Java Spring", "Elasticsearch", "Kubernetes", "TensorFlow"],
    category: "Empresarial",
    client: "Corporate Solutions",
    year: "2022",
    features: [
      "Pipeline de ventas automatizado",
      "Scoring de leads con IA",
      "Integración con email y calendario",
      "Dashboards personalizables",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "real-estate-app",
    title: "PropertyHub",
    shortDescription: "Portal inmobiliario con tours virtuales y gestión de propiedades.",
    fullDescription: "Plataforma inmobiliaria moderna con listados de propiedades, tours virtuales 360°, sistema de citas y herramientas para agentes inmobiliarios.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Three.js", "Prisma", "PostgreSQL", "Stripe"],
    category: "Inmobiliaria",
    client: "RealState Pro",
    year: "2022",
    features: [
      "Listados con fotos y videos",
      "Tours virtuales 360°",
      "Sistema de citas online",
      "Calculadora de hipotecas",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "restaurant-pos",
    title: "RestoPOS",
    shortDescription: "Sistema POS para restaurantes con gestión de mesas y pedidos.",
    fullDescription: "Sistema punto de venta completo para restaurantes con gestión de mesas, pedidos, cocina y caja. Incluye aplicación móvil para meseros y panel de administración.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    technologies: ["React", "Electron", "Node.js", "SQLite", "Socket.io"],
    category: "Restaurantes",
    client: "Gourmet Group",
    year: "2022",
    features: [
      "Gestión de mesas en tiempo real",
      "Comandas digitales a cocina",
      "Control de inventario",
      "Reportes de ventas diarios",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop",
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getFeaturedProjects = (count: number = 6): Project[] => {
  return projects.slice(0, count);
};
