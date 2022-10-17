import { useState } from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "react-spring";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

import HomeImage from "../../assets/image/home.jpg";
import Linkedin from '../../assets/image/linkedin.png'
import Phone from '../../assets/image/phone.png'
import Mail from '../../assets/image/mail.png'

interface openContactDialogProps {
  open: boolean,
  title: string,
  icon: string,
  content: string
}

const defaultContactDialogState = {
  open: false,
  title: '',
  icon: '',
  content: ''
}

export const HomeSection = () => {
  const [contactDialogState, setContactDialogState] = useState<openContactDialogProps>(defaultContactDialogState)
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
                <Typography variant="h1" component="div">
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
            <Grid item xs={12}>
              <Box
              >
                <Link href="https://www.linkedin.com/in/antoineludeau/" target="_blank" color="inherit">
                  <IconButton color="primary" aria-label="upload picture" component="label">
                    <img width='30px' src={Linkedin} />
                  </IconButton>
                </Link>
                <IconButton color="primary" aria-label="upload picture" component="label" onClick={() => setContactDialogState({ open: true, title: 'Téléphone', icon: Phone, content: '+33 6 37 69 25 19' })}>
                  <img width='30px' src={Phone} />
                </IconButton>
                <IconButton color="primary" aria-label="upload picture" component="label" onClick={() => setContactDialogState({ open: true, title: 'Mail', icon: Mail, content: 'antoine.ludeau@gmail.com' })}>
                  <img width='30px' src={Mail} />
                </IconButton>
              </Box>
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
      <Dialog onClose={() => setContactDialogState(prev => ({ ...prev, open: false }))} open={contactDialogState.open}>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'inherit', alignItems: 'inherit', marginRight: 1 }}>
              <img width='30px' height='30px' src={contactDialogState.icon} />
            </Box>
            <Typography variant="h4" component="div">
              {contactDialogState.title}
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="left"
            padding={2}
            spacing={4}
          >
            <Grid item>
              <Typography variant="h5" component="div" >
                {contactDialogState.content}
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={() => navigator.clipboard.writeText(contactDialogState.content)}>Copier dans le clipboard</Button></Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};
