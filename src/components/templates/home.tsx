import { Grid } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { PhilosophySection } from "../organisms";
interface TemplateHomeProps {
  menu: React.ReactNode;
  homeSection: any;
  presentationSection: any;
  philosophySection: any;
  servicesSection: any;
  skillsSection: any;
  jobsSection: any;
  testimonialsSection: any;
  contactsSection: any;
}

export const TemplateHome = ({
  menu,
  homeSection,
  presentationSection,
  philosophySection,
  servicesSection,
  skillsSection,
  jobsSection,
  testimonialsSection,
  contactsSection,
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
        <Grid id="presentation" item xs={12}>
          {presentationSection}
        </Grid>
        <Grid id="philosophy" item xs={12}>
          {philosophySection}
        </Grid>
        <Grid id="services" item xs={12}>
          {servicesSection}
        </Grid>
        <Grid id="skills" item xs={12}>
          {skillsSection}
        </Grid>
        <Grid id="jobs" item xs={12}>
          {jobsSection}
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
