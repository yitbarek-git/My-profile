import { AboutMe } from "@/components/sections/about-me";
import ExperienceSection from "@/components/sections/experience-section";
import MarqueeSection from "@/components/sections/marquee-section";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact-section";
import Contributions from "@/components/sections/contributions";

export default function Home() {
  return (
    <main className="pb-16">
      <AboutMe id="about" />
      <ProjectsSection id="projects" />
      <ExperienceSection id="experience" />
      <MarqueeSection />
      <ContactSection id="contact" />
      <Contributions />
    </main>
  );
}
