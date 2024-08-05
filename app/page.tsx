import HomeSection from "@/components/organisms/HomeSection";
import PresentationSection from "@/components/organisms/PresentationSection";
import ExperienceSection from "@/components/organisms/ExperiencesSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import ContactSection from "@/components/organisms/ContactSection";

export default function Home() {
  return (
    <main className="selection:bg-yellow-300 selection:text-yellow-900">
      <HomeSection sectionId="home" nextSectionId="presentation"/>
      <PresentationSection sectionId="presentation" nextSectionId="skills"/>
      <SkillsSection sectionId="skills" nextSectionId="experiences"/>
      <ExperienceSection sectionId="experiences" nextSectionId="testimonials"/>
      <TestimonialsSection sectionId="testimonials" nextSectionId="contact"/>
      <ContactSection sectionId="contact" nextSectionId="home"/>
    </main>
  );
}
