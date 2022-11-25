import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Link from "@mui/material/Link";

import SignImage from "../../assets/image/sign.png";

interface philosophyContentItem {
  title: string;
  description: React.ReactNode;
  illustration?: React.ReactNode;
}

const philosophyContentItems: philosophyContentItem[] = [
  {
    title: "Mon Constat",
    description: (
      <>
        Le numérique est un outil incroyable. Il est utilisé partout dans notre
        vie quotidienne et notre vie professionnelle (4 milliards
        d’utilisateurs). Il faut pourtant aujourd’hui apporter une certaine
        nuance. Le secteur du numérique connait une croissance fulgurante,
        entrainant des problématiques et enjeux importants. Par exemple, Il
        représente à l’échelle mondiale entre 4% et 6% des émissions de gaz à
        effet de serre, dépassant désormais le bilan carbone de l’aviation
        (resources : collectif Green IT{" "}
        <Link
          href="https://www.greenit.fr/2020/10/06/4-des-emissions-de-ges/"
          target="_blank"
        >
          <InfoIcon />
        </Link>
        )
      </>
    ),
    illustration: undefined,
  },
  {
    title: "Ma Méthode",
    description: `Ma méthode est d’appliquer le numérique responsable : concilier
    la transition numérique de nos sociétés avec les urgences
    écologiques et sociales. Aujourd’hui, on ne peut plus se
    permettre de répondre à des envies, on doit répondre à de réels
    besoins.`,
    illustration: <img src={SignImage} width="100" alt="moutain sign" />,
  },
  {
    title: "Mon Objectif",
    description: (
      <>
        Mon but est d’utiliser cet outil génial qu’est le numérique, pour
        réaliser des projets à impact environnemental et/ou social, afin de
        répondre aux 17 objectifs de développement durable définis par l’ONU
        <Link
          href="https://www.un.org/sustainabledevelopment/fr/objectifs-de-developpement-durable/"
          target="_blank"
        >
          <InfoIcon />
        </Link>
        .
      </>
    ),
    illustration: undefined,
  },
];

export const PhilosophySection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5d6c9",
        paddingTop: 5,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container alignItems="top" spacing={5} padding={2}>
        {philosophyContentItems.map((item, index) => (
          <Grid key={index} item md={4} xs={12}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  variant="h1"
                  component="div"
                  textAlign="center"
                  color="#e4a0a1"
                >
                  {index + 1}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h4"
                  component="div"
                  textAlign="center"
                  sx={{
                    background:
                      "linear-gradient(120deg, #e4a0a1 0%, #e4a0a1 100%)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 40%",
                    backgroundPosition: "0 90%",
                  }}
                >
                  {item.title}
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
                  {item.description}
                </Typography>
              </Grid>
              {item.illustration && <Grid item>{item.illustration}</Grid>}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
