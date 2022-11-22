import { Grid } from "@mui/material";

interface TemplateHomeProps {
  menu: React.ReactNode;
  homeSection: React.ReactNode;
  presentationSection: React.ReactNode;
  philosophySection: React.ReactNode;
  servicesSection: React.ReactNode;
  skillsSection: React.ReactNode;
  jobsSection: React.ReactNode;
  testimonialsSection: React.ReactNode;
  contactsSection: React.ReactNode;
  footerSection: React.ReactNode;
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
  footerSection,
}: TemplateHomeProps) => {
  return (
    <>
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
      <Grid id="contacts" item xs={12}>
        {footerSection}
      </Grid>
    </>
  );
};
