import { TemplateHome } from "../templates";

import { Menu } from "../molecules";
import {
  HomeSection,
  PresentationSection,
  ServicesSection,
  SkillsSection,
  ProjectsSection,
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
      projectsSection={<ProjectsSection />}
      testimonialsSection={<TestimonialsSection />}
      contactsSection={<ContactsSection />}
    />
  );
};
