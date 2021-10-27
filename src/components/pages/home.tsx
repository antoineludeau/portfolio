import { TemplateHome } from "../templates";

import { TopBar } from "../molecules";
import { HomeSection, ServicesSection, SkillsSection, ProjectsSection, TestimonialsSection, ContactsSection } from "../organisms";

export const Home = () => {
  return (
    <TemplateHome
      topBar={<TopBar />}
      homeSection={<HomeSection />}
      servicesSection={<ServicesSection/>}
      skillsSection={<SkillsSection/>}
      projectsSection={<ProjectsSection/>}
      testimonialsSection={<TestimonialsSection/>}
      contactsSection={<ContactsSection/>}
    />
  );
};
