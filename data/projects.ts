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
    image:
      "https://fazywssyelpsatnzisnn.supabase.co/storage/v1/object/public/artworks/6c07f609-7210-4766-94cd-6f0b75888f06/511e1360-b22a-46ee-af42-d971ff69f8cf.png",
  },
];