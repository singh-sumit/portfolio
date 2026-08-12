import {
  Mail,
  Code2,
  Boxes,
  Radio,
  Database,
  Cloud,
  Activity,
  Sparkles,
  Terminal,
  Layout,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  StackOverflowIcon,
  SubstackIcon,
  WhatsAppIcon,
} from "@/app/components/icons/brands";
import type { SocialKey } from "@/app/types";

export type BrandOrLucideIcon = ComponentType<{ className?: string }>;

export const socialIconMap: Record<SocialKey, BrandOrLucideIcon> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  medium: MediumIcon,
  substack: SubstackIcon,
  stackoverflow: StackOverflowIcon,
  whatsapp: WhatsAppIcon,
  mail: Mail,
};

export const skillIconMap: Record<string, LucideIcon> = {
  Code2,
  Boxes,
  Radio,
  Database,
  Cloud,
  Activity,
  Sparkles,
  Terminal,
  Layout,
};
