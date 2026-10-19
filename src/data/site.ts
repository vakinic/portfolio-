export const site = {
  name: 'Nicolás Ferreira',
  role: 'Diseño y desarrollo web · E-commerce · Automatizaciones',
  title: 'Nicolás Ferreira — Diseño y desarrollo de tiendas, sitios y automatizaciones',
  description:
    'Diseño y desarrollo tiendas en Tiendanube y Shopify, sitios y landings con CMS, y automatizaciones con IA. Con 5+ años operando e-commerce real.',
  location: 'Buenos Aires, Argentina',
  email: 'fernicnet@gmail.com',
  whatsapp: '5491138158237',
  linkedin: 'https://www.linkedin.com/in/nicolas-ferreira-039254232/',
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: 'Trabajos', href: '/#trabajos' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Trayectoria', href: '/#trayectoria' },
  { label: 'Contacto', href: '/#contacto' },
];
