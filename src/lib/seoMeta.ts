import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/siteConfig";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

export const STATIC_PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: `${SITE_NAME} | Perinthalmanna, Kerala`,
    description: SITE_DESCRIPTION,
    path: "/",
  },
  "/services": {
    title: `Our Services | ${SITE_NAME}`,
    description:
      "Occupational therapy, physiotherapy, speech therapy, special education, clinical psychology, home care, in-patient rehab, pickup & drop, and online therapy in Perinthalmanna.",
    path: "/services",
  },
  "/team": {
    title: `Our Team | ${SITE_NAME}`,
    description:
      "Meet the multidisciplinary rehabilitation and child development specialists at Lifeway in Perinthalmanna, Kerala.",
    path: "/team",
  },
  "/careers": {
    title: `Careers & Jobs | ${SITE_NAME}`,
    description:
      "Join Lifeway's team in Perinthalmanna. Open positions for therapists, psychologists, special educators, and rehabilitation professionals.",
    path: "/careers",
  },
  "/events": {
    title: `Events | ${SITE_NAME}`,
    description: "Upcoming events, workshops, and community programs at Lifeway Rehabilitation Centre.",
    path: "/events",
  },
  "/events-gallery": {
    title: `Events Gallery | ${SITE_NAME}`,
    description: "Photos from Lifeway events, workshops, and community rehabilitation programs.",
    path: "/events-gallery",
  },
  "/home-services": {
    title: `Home Care Services | ${SITE_NAME}`,
    description:
      "Expert home-based rehabilitation, therapy, and developmental support delivered at your doorstep in Perinthalmanna and surrounding areas.",
    path: "/home-services",
  },
  "/contact": {
    title: `Contact Us | ${SITE_NAME}`,
    description:
      "Contact Lifeway in Perinthalmanna for appointments, inquiries, and directions. Phone, WhatsApp, and email available.",
    path: "/contact",
  },
  "/about-us": {
    title: `About Us | ${SITE_NAME}`,
    description:
      "Learn about Lifeway's mission, multidisciplinary approach, and commitment to rehabilitation and child development in Kerala.",
    path: "/about-us",
  },
  "/about-us/directors-message": {
    title: `Directors' Message | ${SITE_NAME}`,
    description: "Messages from the directors of Lifeway Rehabilitation and Child Development Centre.",
    path: "/about-us/directors-message",
  },
  "/gallery": {
    title: `Gallery | ${SITE_NAME}`,
    description: "View photos of Lifeway facilities, therapy sessions, and rehabilitation services.",
    path: "/gallery",
  },
};

export const NOT_FOUND_META: PageMeta = {
  title: `Page Not Found | ${SITE_NAME}`,
  description: "The page you are looking for could not be found.",
  path: "/404",
  noindex: true,
};
