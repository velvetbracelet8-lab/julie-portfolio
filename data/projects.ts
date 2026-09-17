export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  role: string[];
  image: string;
  url?: string;
}

export const projects: Project[] = [
  {
    slug: "above-dental",
    title: "Above Dental",
    category: "Healthcare",
    description:
      "A conversion-focused digital experience for a modern dental practice.",
    year: "2026",
    role: [
      "Brand Strategy",
      "UX / UI",
      "Marketing",
      "Development",
    ],
    image: "/images/projects/above-dental/hero.webp",
    url: "https://abovedental.com/",
  },
];