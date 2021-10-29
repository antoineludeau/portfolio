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
      <Box
        sx={{
          height: `100vh`,
          backgroundImage: `url(${HomeImage})`,
          backgroundPositionX: "10%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            padding: 2,
          }}
          container
          spacing={2}
        >
          <Grid item xs={12}>
            <animated.div style={props}>
              <Typography variant="h1" component="div">
                Hello I'm
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
                Web Developer Full Stack
              </Typography>
            </animated.div>
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
      </Box>
    </>
  );
};
