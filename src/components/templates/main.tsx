import { Grid } from "@mui/material";

interface TemplateMainProps {
  menu: React.ReactNode;
  homeSection: React.ReactNode;
  presentationSection: React.ReactNode;
  philosophySection: React.ReactNode;
  processSection: React.ReactNode;
  skillsSection: React.ReactNode;
  jobsSection: React.ReactNode;
  testimonialsSection: React.ReactNode;
  contactsSection: React.ReactNode;
  footerSection: React.ReactNode;
}

export const TemplateMain = ({
  menu,
  homeSection,
  presentationSection,
  philosophySection,
  processSection,
  skillsSection,
  jobsSection,
  testimonialsSection,
  contactsSection,
  footerSection,
}: TemplateMainProps) => {
  return (
    <>
      {menu}
      <Grid container direction="column">
        <Grid id="home" item>
          {homeSection}
        </Grid>
        <Grid id="presentation" item>
          {presentationSection}
        </Grid>
        <Grid id="philosophy" item>
          {philosophySection}
        </Grid>
        <Grid id="process" item>
          {processSection}
        </Grid>
        <Grid id="skills" item>
          {skillsSection}
        </Grid>
        <Grid id="jobs" item>
          {jobsSection}
        </Grid>
        <Grid id="testimonials" item>
          {testimonialsSection}
        </Grid>
        <Grid id="contacts" item>
          {contactsSection}
        </Grid>
        <Grid id="footer" item>
          {footerSection}
        </Grid>
      </Grid>
    </>
  );
};
