import Box from "@mui/material/Box";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import JulesColin from "../../assets/image/jules-colin.png";
import GauthierSaillard from "../../assets/image/gauthier-saillard.png";

import { SectionTitle, TestimonialCard } from "../molecules";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const TestimonialsSection = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 2;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        padding: 2,
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <SectionTitle
        title="MES TEMOIGNAGES"
        subtitle="Voilà ce que disent les gens avec qui j'ai travaillé !"
      />
      <Box
        sx={{
          padding: 8,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "400px",  marginBottom: 10 }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            interval={30000}
          >
            <TestimonialCard
              logo={GauthierSaillard}
              title="Gauthier Saillard"
              subtitle="Designer Industriel - Innovation chez PA.COTTE - LivingPackets"
              subtitle2="En 2016, Gauthier était le co-fondateur de notre projet entrepreneurial SOMMET"
              description="Un projet entrepreneurial met à rude épreuve toute équipe qui
            tente l'aventure. Si cette année à travailler avec Antoine a été
            faite de nombreux rebondissements, notre équipe a toujours su
            réagir et Antoine a toujours su redoubler d'efforts et remettre
            en question ce qui nécessitait d'être modifié, comme cela est si
            essentiel lors de la création d'un projet. Antoine est quelqu'un
            de très compétent et d'une positivité à toute épreuve. Cela se
            ressent dans son travail au quotidien."
            ></TestimonialCard>
            <TestimonialCard
              logo={JulesColin}
              title="Jules Colin"
              subtitle="Ingénieur - Associé - Militant @ SCALE"
              subtitle2="En 2015, Jules était mon manager direct chez Decathlon"
              description="Antoine possède toutes les qualités de l'ingénieur
            d'aujourd’hui: sérieux, curieux, rigoureux et appliqué, son
            intérêt pour l’innovation est très certainement son meilleur
            atout. C'était en tout cas un vrai plaisir de l'avoir dans
            l'équipe d'ingénieurs de Tribord."
            ></TestimonialCard>
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};
