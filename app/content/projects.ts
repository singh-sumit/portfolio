import type { ProjectEntry } from "@/app/types";

export const projects: ProjectEntry[] = [
  {
    key: "multi-vendor-ecommerce",
    title: "Multi-Vendor E-commerce Web App",
    tagline:
      "Full-stack Django + MySQL e-commerce platform supporting multiple vendors, product catalog, cart, checkout, and orders.",
    description: [
      "Full-stack platform built with Django and MySQL — deployed to production on PythonAnywhere.",
      "Product catalog, user authentication, shopping cart, checkout, and order processing.",
      "Expanded from single-admin to multi-vendor: vendor onboarding, per-vendor product management, per-vendor sales tracking.",
      "Robust admin panel for managing products, users, orders, and vendors.",
    ],
    techStack: ["Django", "Python", "MySQL", "HTML/CSS", "JavaScript"],
    links: {
      live: "https://iamsumit.pythonanywhere.com/",
      github: "https://github.com/singh-sumit/django-ecommerce-project",
    },
    category: "personal",
  },
  {
    key: "vehicle-renting",
    title: "E-Vehicle Renting Web App",
    tagline:
      "Full-stack Django + PostgreSQL platform for renting vehicles across owners, customers, and booth managers.",
    description: [
      "Full-stack e-vehicle renting platform with Django and PostgreSQL.",
      "Owners list vehicles; customers make reservation requests; booth managers grant / deny requests.",
      "Integrated income-management system tracking earnings for owners and booth managers.",
      "Robust admin panel for booth managers to oversee reservations and listings.",
    ],
    techStack: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    links: {
      github: "https://github.com/singh-sumit/django-vehicle-renting",
    },
    category: "personal",
  },
];
