import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface PresentationContent {
  title: string;
  description: string;
}

const presentationContent: PresentationContent = {
  title: "Enchanté.",
  description: `Passionné de création, je développe aujourd’hui des applications
  digitales en freelance. Issu d’un cursus d’ingénieur en mécanique
  suivi d'expériences entrepreneuriales, je me suis réorienté vers
  le développement informatique depuis plus de 4 ans. L’originalité
  de mon parcours et ma sensibilité au design, me permettent
  aujourd’hui de comprendre au mieux les besoins de mes clients et
  de communiquer efficacement pour développer des applications, dans
  les délais, et avec un niveau de qualité exigeant.`,
};

export const PresentationSection = () => {
  return (
    <Grid
      container
      minHeight="100vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding={2}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Box display="flex" justifyContent="center">
              <Typography
                variant="h2"
                component="div"
                textAlign="center"
                sx={{
                  background:
                    "linear-gradient(120deg, #e4a0a1 0%, #e4a0a1 100%)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 40%",
                  backgroundPosition: "0 90%",
                }}
                width="fit-content"
              >
                {presentationContent.title}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              component="div"
              maxWidth="600px"
              textAlign="center"
            >
              {presentationContent.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
