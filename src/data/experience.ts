export interface ClientCard {
  title: string;
  body: string;
  href: string;
  /** Favicon-style logo from site domain */
  logoSrc: string;
  company: string;
}

export const experienceCards: ClientCard[] = [
  {
    company: "GISAU UBC",
    title: "Web Developer · GISAU UBC",
    body: "Maintaining the site for 300+ students and streamlining event registrations.",
    href: "https://gisaubc.com",
    logoSrc: "images/gisau-logo.png",
  },
  {
    company: "PT. Asia Garment",
    title: "Full-Stack & Ads · PT. Asia Garment",
    body: "E-commerce, SEO (+20% organic traffic), Google Ads, 99.9% uptime with secure payments.",
    href: "https://sarongwholesale.com",
    logoSrc: "images/sarong-logo.png",
  },
  {
    company: "Didik Elektronik",
    title: "Full-Stack · Didik Elektronik",
    body: "Custom admin dashboard, Midtrans, Biteship, Firebase auth, and end-to-end order tracking.",
    href: "https://didikelektronik.com",
    logoSrc: "images/didik-logo.png",
  },
  {
    company: "Gettook",
    title: "Web Developer · Gettook",
    body: "Lighthouse-driven performance, SEO, and WhatsApp-linked lead capture.",
    href: "https://gettook.shop",
    logoSrc: "images/gettook-logo.png",
  },
];
