import { TemplateHome } from "../templates";

import { Menu } from "../molecules";
import {
  HomeSection,
  PresentationSection,
  ServicesSection,
  SkillsSection,
  JobsSection,
  TestimonialsSection,
  ContactsSection,
} from "../organisms";

export const Home = () => {
  return (
    <TemplateHome
      menu={<Menu />}
      homeSection={<HomeSection />}
      presentationSection={<PresentationSection />}
      servicesSection={<ServicesSection />}
      skillsSection={<SkillsSection />}
      jobsSection={<JobsSection />}
      testimonialsSection={<TestimonialsSection />}
      contactsSection={<ContactsSection />}
    />
  );
};
