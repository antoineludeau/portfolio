import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const PresentationSection = () => {
  return (
    <Grid
      container
      minHeight="100vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding={3}
    >
      <Grid item>
        <Grid
          container
          spacing={0}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid id="presentation-title" item>
            <Typography variant="h2" component="div" textAlign="center">
              Nice to meet you.
            </Typography>
          </Grid>
          <Grid id="presentation-title" item>
            <Typography
              variant="h5"
              component="div"
              maxWidth="600px"
              textAlign="center"
            >
              Passionné de création, je développe aujourd’hui des applications
              digitales en freelance. Issu d’un cursus d’ingénieur en mécanique
              et ayant tenté l’entrepreneuriat à plusieurs reprises, je me suis
              réorienté vers le développement informatique depuis plus de 3 ans.
              L’originalité de mon parcours et ma sensibilité au design, me
              permettent aujourd’hui de comprendre au mieux les besoins de mes
              clients et de communiquer efficacement pour développer des
              applications, dans les délais, et avec un niveau de qualité
              exigeant.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
