import { Menu } from "../molecules";
import {
  HomeSection,
  PresentationSection,
  PhilosophySection,
  ServicesSection,
  SkillsSection,
  JobsSection,
  TestimonialsSection,
  ContactsSection,
} from "../organisms";
import { TemplateHome } from "../templates";

export const Home = () => {
  return (
    <TemplateHome
      menu={<Menu />}
      homeSection={<HomeSection />}
      presentationSection={<PresentationSection />}
      philosophySection={<PhilosophySection />}
      servicesSection={<ServicesSection />}
      skillsSection={<SkillsSection />}
      jobsSection={<JobsSection />}
      testimonialsSection={<TestimonialsSection />}
      contactsSection={<ContactsSection />}
    />
  );
};
