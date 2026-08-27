export type Template = {
  name: string;
  url: string;
  note: string;
  preview: string;
};

export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  glyph: string;
  description: string;
  templates: Template[];
};

export const industries: Industry[] = [
  {
    slug: "hospitals-healthcare",
    name: "Hospitals / Healthcare",
    shortName: "Healthcare",
    glyph: "+",
    description: "Hospitals, clinics, specialists and patient-first health brands.",
    templates: [
      { name: "Galaxy Hospital Moradabad", url: "https://galaxy-hospital-moradabad.team-psmpv.workers.dev/", note: "Hospital website direction", preview: "/previews/galaxy-hospital-moradabad.png" },
      { name: "Navira Medical Centre", url: "https://navira-medical-centre-demo.smritiasthana.workers.dev/", note: "Hospital website direction", preview: "/previews/navira-medical-centre.png" },
      { name: "Aarogya One Hospital", url: "https://aarogya-one-hospital-demo.smritiasthana.workers.dev/", note: "Hospital website direction", preview: "/previews/aarogya-one-hospital.png" },
      { name: "Krishna Orthopedic Centre", url: "https://krishna-orthopedic-centre.team-psmpv.workers.dev/", note: "Hospital website direction", preview: "/previews/krishna-orthopedic-centre.png" },
      { name: "Vivan Child Care & Urology", url: "https://vivan-child-care-urology.team-psmpv.workers.dev/", note: "Hospital website direction", preview: "/previews/vivan-child-care-urology.png" },
      { name: "Mishra Health Center", url: "https://mishrahealthcenter.pages.dev/", note: "Healthcare center direction", preview: "/previews/mishra-health-center.jpg" },
      { name: "Shree Kusbal Ayurvedam", url: "https://shree-kusbal-ayurvedam.team-psmpv.workers.dev/", note: "Ayurveda clinic direction", preview: "https://shree-kusbal-ayurvedam.team-psmpv.workers.dev/images/hero-ayurveda.png" },
    ],
  },
  {
    slug: "hotels",
    name: "Hotels",
    shortName: "Hotels",
    glyph: "H",
    description: "Boutique stays, premium hotels and hospitality experiences.",
    templates: [
      { name: "Form Urban Hotel", url: "https://form-urban-hotel-demo.smritiasthana.workers.dev/", note: "Hospitality website direction", preview: "/previews/form-urban-hotel.png" },
      { name: "Theeram House Kerala", url: "https://theeram-house-kerala-demo.smritiasthana.workers.dev/", note: "Coastal retreat direction", preview: "/previews/theeram-house-kerala.jpg" },
      { name: "Devdaar House Himalayan", url: "https://devdaar-house-himalayan-demo.smritiasthana.workers.dev/", note: "Himalayan retreat direction", preview: "/previews/devdaar.png" },
      { name: "Casa Mare Goa", url: "https://casa-mare-goa-demo.smritiasthana.workers.dev/", note: "Coastal hospitality direction", preview: "/previews/casa-mare.png" },
      { name: "Avenfold House", url: "https://template-3-hotel.team-psmpv.workers.dev/", note: "Hospitality website direction", preview: "/previews/hotel-template-03.jpg" },
      { name: "Kesar Bagh Haveli", url: "https://kesar-bagh-haveli-demo.smritiasthana.workers.dev/", note: "Heritage hospitality direction", preview: "/previews/kesar-bagh.png" },
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    shortName: "Restaurants",
    glyph: "R",
    description: "Dining brands, restaurants and modern food destinations.",
    templates: [
      { name: "Tide & Terrace", url: "https://template-1-restaurant.team-psmpv.workers.dev/", note: "Restaurant website direction", preview: "/previews/tide-and-terrace.jpg" },
      { name: "Mitti & Ember", url: "https://template-2-mitti-and-ember.team-psmpv.workers.dev/", note: "Restaurant website direction", preview: "/previews/mitti-and-ember.png" },
      { name: "Stackhouse Burgers", url: "https://template-4-stackhouse.team-psmpv.workers.dev/", note: "Burger restaurant direction", preview: "https://template-4-stackhouse.team-psmpv.workers.dev/assets/hero-burger.webp" },
      { name: "Tamra", url: "https://tamra-restaurant-demo.smritiasthana.workers.dev/", note: "Contemporary Indian kitchen direction", preview: "https://tamra-restaurant-demo.smritiasthana.workers.dev/images/tamra/hero-1536.webp" },
      { name: "Saanjh", url: "https://saanjh-restaurant-demo.smritiasthana.workers.dev/", note: "Modern Indian restaurant direction", preview: "https://saanjh-restaurant-demo.smritiasthana.workers.dev/images/saanjh/food-grid.webp" },
    ],
  },
  {
    slug: "cafes",
    name: "Cafés",
    shortName: "Cafés",
    glyph: "C",
    description: "Independent cafés, roasters and contemporary coffee brands.",
    templates: [],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media / Marketing Agencies",
    shortName: "Agencies",
    glyph: "A",
    description: "Creative studios, social teams and performance marketing agencies.",
    templates: [
      { name: "Famebros Studio", url: "https://famebros-studio.teampsmpv.workers.dev/", note: "Social media agency direction", preview: "/previews/famebros-studio.jpg" },
    ],
  },
  {
    slug: "manufacturers-exporters",
    name: "Manufacturers / Exporters",
    shortName: "Industry",
    glyph: "M",
    description: "Factories, exporters, product manufacturers and industrial brands.",
    templates: [
      { name: "Quality Mint & Allied Chemicals", url: "https://quality-mint-allied-chemicals.teampsmpv.workers.dev/", note: "Manufacturing & export direction", preview: "/previews/quality-mint.png" },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    shortName: "Real Estate",
    glyph: "E",
    description: "Developers, property consultants and premium project showcases.",
    templates: [],
  },
  {
    slug: "education-coaching",
    name: "Education / Coaching",
    shortName: "Education",
    glyph: "ED",
    description: "Schools, institutes, coaching brands and learning platforms.",
    templates: [],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    shortName: "Services",
    glyph: "P",
    description: "Consultants, legal practices, finance and specialist firms.",
    templates: [],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail / E-commerce",
    shortName: "Retail",
    glyph: "S",
    description: "Product brands, retail stores and digital commerce experiences.",
    templates: [],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
