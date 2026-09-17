import PageHeader from "@/components/ui/PageHeader";
import About from "@/components/sections/About";

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        number="02"
        eyebrow="About"
        title="I design with empathy."
        description="A designer who codes, bridging user experience, visual design, and frontend development to create thoughtful digital products."
      />

      <About />
    </main>
  );
}