import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "react-spring";

import { BouncingArrow } from "../atoms";
import { SocialLinks, InitLoader } from "../molecules";

import MountainImage from "../../assets/image/mountains.png";
import { SectionLayout } from "../templates";

const springCascadeDelays = [0, 400, 800, 1400];

const defaultHomeSpingProperties = {
  to: { opacity: 1, x: 0 },
  from: { opacity: 0, x: -10 },
  config: { tension: 30 },
};

export const HomeSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const propsSprings = [
    useSpring({
      ...defaultHomeSpingProperties,
      delay: springCascadeDelays[0],
    }),
    useSpring({
      ...defaultHomeSpingProperties,
      delay: springCascadeDelays[1],
    }),
    useSpring({
      ...defaultHomeSpingProperties,
      delay: springCascadeDelays[2],
    }),
    useSpring({
      ...defaultHomeSpingProperties,
      delay: springCascadeDelays[3],
    }),
  ];

  useEffect(() => {
    const image = new Image();
    image.onload = () => setIsImageLoaded(true);
    image.src = MountainImage;

    return () => {
      image.onload = null;
    };
  }, []);

  if (!isImageLoaded) {
    return <InitLoader />;
  }

  return (
    <>
      <SectionLayout
        backgroundProps={{
          backgroundImage: `url(${MountainImage})`,
          backgroundPositionX: "55%",
          backgroundSize: "cover",
        }}
      >
        <>
            <Grid container direction="column" spacing={2} mt={9}>
              <Grid item>
                <animated.div style={propsSprings[0]}>
                  <Typography variant="h1" component="div">
                    Bonjour, je suis
                  </Typography>
                </animated.div>
              </Grid>
              <Grid item>
                <animated.div style={propsSprings[1]}>
                  <Typography variant="h2" component="div">
                    Antoine Ludeau
                  </Typography>
                </animated.div>
              </Grid>
              <Grid item>
                <animated.div style={propsSprings[2]}>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontStyle: "italic",
                      fontWeight: "bold",
                      width: "fit-content",
                      backgroundColor: "rgba(228,160,161,0.8)",
                      borderRadius: "6px",
                      padding: "3px 6px",
                    }}
                    color="secondary"
                  >
                    Développeur Web Full Stack
                  </Typography>
                </animated.div>
              </Grid>
              <Grid item>
                <animated.div style={propsSprings[3]}>
                  <SocialLinks />
                </animated.div>
              </Grid>
            </Grid>
          <BouncingArrow />
        </>
      </SectionLayout>
    </>
  );
};
