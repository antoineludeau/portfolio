import { Menu } from "../molecules";
import {
  HomeSection,
  PresentationSection,
  PhilosophySection,
  ProcessSection,
  SkillsSection,
  JobsSection,
  TestimonialsSection,
  ContactsSection,
  FooterSection,
} from "../organisms";
import { TemplateMain } from "../templates";

const Main = () => {
  return (
    <TemplateMain
      menu={<Menu />}
      homeSection={<HomeSection />}
      presentationSection={<PresentationSection />}
      philosophySection={<PhilosophySection />}
      processSection={<ProcessSection />}
      skillsSection={<SkillsSection />}
      jobsSection={<JobsSection />}
      testimonialsSection={<TestimonialsSection />}
      contactsSection={<ContactsSection />}
      footerSection={<FooterSection />}
    />
  );
};

export default Main;
