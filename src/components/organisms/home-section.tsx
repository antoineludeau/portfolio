import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "react-spring";

import { BouncingArrow } from "../atoms";
import { SocialLinks } from "../molecules";

import MountainImage from "../../assets/image/mountains.png";

export const HomeSection = () => {
  const propsSpring_1 = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -10 },
    config: { tension: 30 },
    delay: 0,
  });
  const propsSpring_2 = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -10 },
    config: { tension: 30 },
    delay: 400,
  });
  const propsSpring_3 = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -10 },
    config: { tension: 30 },
    delay: 800,
  });
  const propsSpring_4 = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -10 },
    config: { tension: 30 },
    delay: 1400,
  });
  return (
    <>
      <Grid
        container
        minHeight="100vh"
        direction="column"
        justifyContent="top"
        alignItems="left"
        sx={{
          backgroundImage: `url(${MountainImage})`,
          backgroundPositionX: "55%",
          backgroundSize: "cover",
        }}
      >
        <Grid item>
          <Grid container direction="column" padding={2} spacing={2} mt={9}>
            <Grid item>
              <animated.div style={propsSpring_1}>
                <Typography variant="h1" component="div">
                  Bonjour, je suis
                </Typography>
              </animated.div>
            </Grid>
            <Grid item>
              <animated.div style={propsSpring_2}>
                <Typography variant="h2" component="div">
                  Antoine Ludeau
                </Typography>
              </animated.div>
            </Grid>
            <Grid item>
              <animated.div style={propsSpring_3}>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    fontStyle: "italic",
                    fontWeight: "bold",
                    width: "fit-content",
                    backgroundColor: "rgba(255,255,255,0.8)",
                  }}
                >
                  Développeur Web Full Stack
                </Typography>
              </animated.div>
            </Grid>
            <Grid item>
              <animated.div style={propsSpring_4}>
                <SocialLinks />
              </animated.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BouncingArrow />
    </>
  );
};
