export const site = {
  name: 'Nicolás Ferreira',
  role: 'Especialista en e-commerce · Marketplaces, tiendas online y soluciones digitales',
  title: 'Nicolás Ferreira | Especialista en e-commerce y Mercado Libre',
  description:
    'Gestión y optimización de Mercado Libre, desarrollo de tiendas online en Shopify y Tiendanube, y soluciones digitales. Más de 5 años operando e-commerce en Argentina.',
  location: 'Buenos Aires, Argentina',
  email: 'fernicnet@gmail.com',
  whatsapp: '5491138158237',
  linkedin: 'https://www.linkedin.com/in/nicolas-ferreira-039254232/',
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: 'Experiencia', href: '/#trayectoria' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proyectos', href: '/#trabajos' },
  { label: 'Contacto', href: '/#contacto' },
];
