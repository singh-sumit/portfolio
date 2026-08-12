import type { Certification } from "@/app/types";

export const certifications: Certification[] = [
  {
    key: "genai-udacity",
    title: "Generative AI Foundations",
    issuer: "Udacity & Bertelsmann Next Generation Tech Booster",
    summary:
      "PyTorch model development, generative architecture internals, and Hugging Face pre-trained model fine-tuning.",
  },
  {
    key: "aws-serverless",
    title: "AWS Serverless Workshop",
    issuer: "AWS (2-day hands-on)",
    summary:
      "Lambda, EventBridge, SQS, and the Serverless Framework — practical serverless architecture patterns and deployment on AWS.",
  },
  {
    key: "django-genese",
    title: "Web Development with Python using Django",
    issuer: "Genese Cloud Academy",
    year: "2021",
    url: "https://drive.google.com/file/d/1n9fZV6EUdrcnBKCrMpa5bV6D4_9Awoxg/view",
  },
];
