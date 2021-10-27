import { Grid } from "@mui/material";
import { BrowserRouter as Router, Route } from "react-router-dom";
interface TemplateHomeProps {
  topBar: React.ReactNode;
  firstSection: any;
  secondSection: any;
  thirdSection: any;
  fourthSection: any;
}

export const TemplateHome = ({
  topBar,
  firstSection,
  secondSection,
  thirdSection,
  fourthSection,
}: TemplateHomeProps) => {
  return (
    <>
      <Router>
        {topBar}
        <Grid container spacing={0}>
          <Grid id="home" item xs={12}>
            {firstSection}
          </Grid>
        </Grid>
        <Grid id="projects" item xs={12}>
          {secondSection}
        </Grid>
        <Grid id="testimonials" item xs={12}>
          {thirdSection}
        </Grid>
        <Grid id="contacts" item xs={12}>
          {fourthSection}
        </Grid>
      </Router>
    </>
  );
};
