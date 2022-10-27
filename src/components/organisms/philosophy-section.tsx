import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography";
import InfoIcon from '@mui/icons-material/Info';
import Link from '@mui/material/Link';

import SignImage from "../../assets/image/sign.png";

export const PhilosophySection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: '#f5d6c9',
        paddingTop: 5,
        display: 'flex',
        alignItems: "center"
      }}
    >
      <Grid
        container
        alignItems="top"
        spacing={5}
        padding={2}
      >
        <Grid item md={4} xs={12}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item >
              <Typography variant="h1" component="div" textAlign="center">
                1
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" component="div" textAlign="center">
                Mon Constat.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                component="div"
                maxWidth="600px"
                textAlign="center"
                padding={2}
              >
                Le numérique est un outil incroyable. Il est utilisé
                partout dans notre vie quotidienne et notre vie
                professionnelle (4 milliards d’utilisateurs).
                Il faut pourtant aujourd’hui apporter une certaine
                nuance. Le secteur du numérique connait une croissance
                fulgurante, entrainant des problématiques et enjeux importants.
                Par exemple, Il représente à l’échelle mondiale entre 4% et 6%
                des émissions de gaz à effet de serre, dépassant désormais
                le bilan carbone de l’aviation (resources : collectif Green IT <Link href="https://www.greenit.fr/2020/10/06/4-des-emissions-de-ges/" target="_blank"><InfoIcon /></Link>)
              </Typography>

            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >

            <Grid item>
              <Typography variant="h1" component="div" textAlign="center">
                2
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" component="div" textAlign="center">
                Ma Méthode.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                component="div"
                maxWidth="600px"
                textAlign="center"
                padding={2}
              >
                Ma méthode est d’appliquer le numérique responsable :
                concilier la transition numérique de nos sociétés avec
                les urgences écologiques et sociales. Aujourd’hui, on
                ne peut plus se permettre de répondre à des envies, on
                doit répondre à de réels besoins.
              </Typography>
            </Grid>
            <Grid item>
              <img src={SignImage} width={'100'} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h1" component="div" textAlign="center">
                3
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" component="div" textAlign="center">
                Mon Objectif.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                component="div"
                maxWidth="600px"
                textAlign="center"
                padding={2}
              >
                Mon but est d’utiliser cet outil génial qu’est
                le numérique, pour réaliser des projets à impact
                environnemental et/ou social, afin de répondre
                aux 17 objectifs de développement durable définis
                par l’ONU.<Link href="https://www.un.org/sustainabledevelopment/fr/objectifs-de-developpement-durable/" target="_blank"><InfoIcon /></Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

