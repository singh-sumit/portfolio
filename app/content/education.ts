import type { EducationEntry } from "@/app/types";

export const education: EducationEntry[] = [
  {
    key: "bachelor",
    level: "Bachelor of Engineering",
    faculty: "Computer Engineering",
    institution: "Purwanchal University",
    location: "Biratnagar, Nepal",
    url: "https://pusat.edu.np/",
    score: "3.45",
    scoreSuffix: "/ 4.0 GPA",
    period: { start: "2016", end: "2020" },
    highlights: [
      "Major electives: Geographical Information Systems (GIS) & Artificial Intelligence",
      "Merit scholarship recipient across all semesters",
    ],
  },
  {
    key: "plus-two",
    level: "+2",
    faculty: "Science",
    institution: "Orchid Public Higher Secondary School",
    location: "Biratnagar, Nepal",
    url: "https://orchidcollege.edu.np/",
    score: "71.40",
    scoreSuffix: "%",
    period: { start: "2013", end: "2015" },
  },
];
