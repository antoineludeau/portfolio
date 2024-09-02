import HomeSection from "@/components/organisms/HomeSection";
import PresentationSection from "@/components/organisms/PresentationSection";
import ExperienceSection from "@/components/organisms/ExperiencesSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import ContactSection from "@/components/organisms/ContactSection";

export default function Home() {
  return (
    <main className="selection:bg-purple-300 selection:text-purple-900">
      <HomeSection sectionId="home" nextSectionId="first-section"/>
      <PresentationSection sectionId="first-section" nextSectionId="second-section"/>
      <SkillsSection sectionId="second-section" nextSectionId="third-section"/>
      <ExperienceSection sectionId="third-section" nextSectionId="fourth-section"/>
      <TestimonialsSection sectionId="fourth-section" nextSectionId="fifth-section"/>
      <ContactSection sectionId="fifth-section" nextSectionId="home"/>
    </main>
  );
}
