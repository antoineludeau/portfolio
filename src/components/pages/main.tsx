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
  FooterSection,
} from "../organisms";
import { TemplateMain } from "../templates";

export const Main = () => {
  return (
    <TemplateMain
      menu={<Menu />}
      homeSection={<HomeSection />}
      presentationSection={<PresentationSection />}
      philosophySection={<PhilosophySection />}
      servicesSection={<ServicesSection />}
      skillsSection={<SkillsSection />}
      jobsSection={<JobsSection />}
      testimonialsSection={<TestimonialsSection />}
      contactsSection={<ContactsSection />}
      footerSection={<FooterSection />}
    />
  );
};
