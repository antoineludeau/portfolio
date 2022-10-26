import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "react-spring";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import HomeImage from "../../assets/image/mountains-1.png";

import { SocialLinks } from "../molecules"

export const HomeSection = () => {
  const props = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -10 },
    config: { tension: 30 },
    delay: 0,
  });
  const props2 = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -10 },
    config: { tension: 30 },
    delay: 400,
  });
  const props3 = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -10 },
    config: { tension: 30 },
    delay: 800,
  });
  const props4 = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -10 },
    config: { tension: 30 },
    delay: 1400,
  });
  const props5 = useSpring({
    to: { opacity: 0.7, y: 0 },
    from: { opacity: 0, y: -20 },
    config: { tension: 200, mass: 10 },
    delay: 1800,
    loop: true,
  });
  return (
    <>
      <Grid
        container
        minHeight="100vh"
        maxHeight="2000px"
        direction="column"
        justifyContent="top"
        alignItems="left"
        sx={{
          backgroundImage: `url(${HomeImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="left"
            padding={2}
            spacing={2}
            mt={9}
          >
            <Grid item xs={12}>
              <animated.div style={props}>
                <Typography variant="h1" component="div" >
                  Bonjour, je suis
                </Typography>
              </animated.div>
            </Grid>
            <Grid item xs={12}>
              <animated.div style={props2}>
                <Typography variant="h2" component="div" >
                  Antoine Ludeau
                </Typography>
              </animated.div>
            </Grid>
            <Grid item xs={12}>
              <animated.div style={props3}>
                <Typography variant="h4" component="div" >
                  Développeur Web Full Stack
                </Typography>
              </animated.div>
            </Grid>
            <Grid item xs={12}>
              <animated.div style={props4}>
                <SocialLinks/>
              </animated.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "absolute",
          bottom: "0%",
          left: "calc(50vw - 17.5px)",
        }}
      >
        <animated.div style={props5}>
          <ArrowDownwardIcon fontSize="large" sx={{color:"white"}}/>
        </animated.div>
      </Box>
    </>
  );
};
