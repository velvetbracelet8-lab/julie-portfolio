import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import SelectedWork from "@/components/sections/SelectedWork";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <Intro />
      <SelectedWork />
    </main>
  );
}