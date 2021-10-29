import { TemplateHome } from "../templates";

import { Menu } from "../molecules";
import { HomeSection, ServicesSection, SkillsSection, ProjectsSection, TestimonialsSection, ContactsSection } from "../organisms";

export const Home = () => {
  return (
    <TemplateHome
      menu={<Menu />}
      homeSection={<HomeSection />}
      servicesSection={<ServicesSection/>}
      skillsSection={<SkillsSection/>}
      projectsSection={<ProjectsSection/>}
      testimonialsSection={<TestimonialsSection/>}
      contactsSection={<ContactsSection/>}
    />
  );
};
