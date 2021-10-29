import { Grid } from "@mui/material";
import { BrowserRouter as Router, Route } from "react-router-dom";
interface TemplateHomeProps {
  menu: React.ReactNode;
  homeSection: any;
  servicesSection: any;
  skillsSection: any;
  projectsSection: any;
  testimonialsSection: any;
  contactsSection: any;
}

export const TemplateHome = ({
  menu,
  homeSection,
  servicesSection,
  skillsSection,
  projectsSection,
  testimonialsSection,
  contactsSection
}: TemplateHomeProps) => {
  return (
    <>
      <Router>
        {menu}
        <Grid container spacing={0}>
          <Grid id="home" item xs={12}>
            {homeSection}
          </Grid>
        </Grid>
        <Grid id="services" item xs={12}>
          {servicesSection}
        </Grid>
        <Grid id="skills" item xs={12}>
          {skillsSection}
        </Grid>
        <Grid id="projects" item xs={12}>
          {projectsSection}
        </Grid>
        <Grid id="testimonials" item xs={12}>
          {testimonialsSection}
        </Grid>
        <Grid id="contacts" item xs={12}>
          {contactsSection}
        </Grid>
      </Router>
    </>
  );
};
