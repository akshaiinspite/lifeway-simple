/** Update VITE_SITE_URL in production to your live domain */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lifewayrehab.in";

export const PUBLISHER_NAME = "LIFEWAY";
export const SITE_NAME = "Lifeway Rehabilitation and Child Development Centre";
export const SITE_SHORT_NAME = "Lifeway Rehabilitation";
export const SITE_TAGLINE = "Advanced multi speciality rehabilitation for all stages of life";
export const SITE_DESCRIPTION =
  "Lifeway is a Rehabilitation Centre in Perinthalmanna offering physiotherapy, occupational therapy, speech therapy, special education and child development.";

/** Home page SEO */
export const HOME_TITLE =
  "Rehabilitation Centre in Perinthalmanna | Child Development | Lifeway";
export const HOME_DESCRIPTION = SITE_DESCRIPTION;
/** SEO slug that also serves the home page (canonical points to "/") */
export const HOME_SLUG = "/rehabilitation-centre-in-perinthalmanna";

export const SITE_KEYWORDS = [
  "Rehabilitation and Child Development Centre",
  "Rehabilitation centre in Perintalmanna",
  "Child Development Centre in malappuram",
  "Rehabilitation & Physiotherapy in Perintalmanna",
  "autism centre",
  "pain clinic",
  "stroke rehabilitation",
].join(", ");

export const DEFAULT_OG_IMAGE = `${SITE_URL}/lovable-uploads/57fb37d3-75f4-440e-8dfc-f4ca09a7275e.webp`;

export const CONTACT = {
  phone: ["+919645500081", "+919645500082"],
  whatsapp: "+919645500081",
  email: "lifewaypmna@gmail.com",
  address: {
    street: "Alangaden Arcade, Calicut Road",
    locality: "Perinthalmanna",
    region: "Kerala",
    postalCode: "679322",
    country: "IN",
  },
};

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE_NAME,
  publisher: {
    "@type": "Organization",
    name: PUBLISHER_NAME,
  },
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address.street,
    addressLocality: CONTACT.address.locality,
    addressRegion: CONTACT.address.region,
    postalCode: CONTACT.address.postalCode,
    addressCountry: CONTACT.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/share/12JeDRhBoTi/",
    "https://www.instagram.com/lifewayrehab",
    "https://x.com/Lifewayrehab",
  ],
};
