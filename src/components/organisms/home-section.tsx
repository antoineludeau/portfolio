import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "react-spring";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import HomeImage from "../../assets/image/home.jpg";

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
    to: { opacity: 0.4, y: 0 },
    from: { opacity: 0, y: -20 },
    config: { tension: 200, mass: 10 },
    delay: 1000,
    loop: true,
  });
  return (
    <>
      <Grid
        container
        minHeight="100vh"
        direction="column"
        justifyContent="center"
        alignItems="left"
        sx={{
          backgroundImage: `url(${HomeImage})`,
          backgroundPositionX: "10%",
          backgroundRepeat: "no-repeat",
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
          >
            <Grid item xs={12}>
              <animated.div style={props}>
                <Typography variant="h1" component="div" sx={{ width: '100%' }}>
                  Bonjour, je suis
                </Typography>
              </animated.div>
            </Grid>
            <Grid item xs={12}>
              <animated.div style={props2}>
                <Typography variant="h2" component="div">
                  Antoine Ludeau
                </Typography>
              </animated.div>
            </Grid>
            <Grid item xs={12}>
              <animated.div style={props3}>
                <Typography variant="h4" component="div">
                  Développeur Web Full Stack
                </Typography>
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
        <animated.div style={props4}>
          <ArrowDownwardIcon fontSize="large" />
        </animated.div>
      </Box>

    </>
  );
};
