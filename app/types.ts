export type SocialKey =
  | "github"
  | "linkedin"
  | "medium"
  | "substack"
  | "stackoverflow"
  | "whatsapp"
  | "mail";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
  handle?: string;
}

export interface Basics {
  name: string;
  title: string;
  headline: string;
  location: string;
  summary: string;
  yearsOfExperience: number;
  email: string;
  phone: string;
  profileImage: string;
  socials: SocialLink[];
}

export interface ExperienceEntry {
  key: string;
  role: string;
  company: string;
  companyUrl: string;
  companyLogoKey:
    | "elsight"
    | "numeric_minds"
    | "nimble-cr"
    | "simjung"
    | "kimbutech";
  outsourcedVia?: string;
  outsourcerUrl?: string;
  location: string;
  period: {
    start: string;
    end: string | null;
  };
  summary: string;
  featureLead?: string;
  highlights: string[];
  techStack: string[];
}

export interface ProjectEntry {
  key: string;
  title: string;
  tagline: string;
  description: string[];
  techStack: string[];
  image?: string;
  imageAlt?: string;
  links: {
    live?: string;
    github?: string;
  };
  category: "personal" | "professional";
}

export interface OpenSourceMetric {
  label: string;
  value: string;
  hint?: string;
}

export interface OpenSourceProject {
  key: string;
  name: string;
  tagline: string;
  description: string[];
  metrics: OpenSourceMetric[];
  techStack: string[];
  links: {
    pypi?: string;
    github?: string;
    docs?: string;
  };
}

export interface SkillGroup {
  key: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface EducationEntry {
  key: string;
  level: string;
  faculty: string;
  institution: string;
  location: string;
  url: string;
  score: string;
  scoreSuffix: string;
  period: { start: string; end: string | null };
  highlights?: string[];
}

export interface Certification {
  key: string;
  title: string;
  issuer: string;
  year?: string;
  url?: string;
  summary?: string;
}

export interface BlogPost {
  title: string;
  url: string;
  publishedAt: string;
  source: "medium" | "substack";
  excerpt?: string;
}
