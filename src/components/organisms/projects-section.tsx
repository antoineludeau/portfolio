import { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

import ProjectImage1 from "../../assets/image/project-1.jpg";
import ProjectImage2 from "../../assets/image/project-2.jpg";
import ProjectImage3 from "../../assets/image/project-3.jpg";
import ProjectImage4 from "../../assets/image/project-4.jpg";
import ProjectImage5 from "../../assets/image/project-5.jpg";
import ProjectImage6 from "../../assets/image/project-6.jpg";

import { SectionTitle } from "../molecules";

const cards = [
  { title: "Project 1", image: ProjectImage1 },
  { title: "Project 2", image: ProjectImage2 },
  { title: "Project 3", image: ProjectImage3 },
  { title: "Project 4", image: ProjectImage4 },
  { title: "Project 5", image: ProjectImage5 },
  { title: "Project 6", image: ProjectImage6 },
];

export const ProjectsSection = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const onChange = (visiblity: boolean) => {
    console.log(visiblity);
    visiblity && setVisibility(visiblity);
  };
  return (
    <>
      <Box
        sx={{
          padding: 2,
          textAlign: "center",
          height: "100vh",
        }}
      >
        <SectionTitle
          title="My Recent Work"
          subtitle="Here are a few design projects I've worked on recently."
        />
      </Box>
      {/* <Box
          sx={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ p: 5, width: "90%" }}
          >
            {cards.map((card) => (
              <Grid item xs={12} md={6} lg={4}>
                <VisibilitySensor onChange={onChange}>
                  <FadeInDirection isVisible={visibility}>
                    <Card sx={{ borderRadius: 4 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={card.image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                  </FadeInDirection>
                </VisibilitySensor>
              </Grid>
            ))}
          </Grid> 
        </Box>*/}
    </>
  );
};

interface FadeInDirectionProps {
  isVisible: boolean;
  children: React.ReactElement;
}

const FadeInDirection = ({ isVisible, children }: FadeInDirectionProps) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 30 },
  });
  return (
    <animated.div style={props}>
      <Typography variant="h2" component="div">
        {children}
      </Typography>
    </animated.div>
  );
};
