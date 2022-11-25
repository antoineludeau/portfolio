import Box from "@mui/material/Box";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Typography } from "@mui/material";

import { SectionTitle, TestimonialCard } from "../molecules";

import JulesColin from "../../assets/image/jules-colin.png";
import GauthierSaillard from "../../assets/image/gauthier-saillard.png";
import ThibautTavernier from "../../assets/image/thibaut-tavernier.png";
import SammyGad from "../../assets/image/sammy-gad.png";

import MountainSunset from "../../assets/image/mountain-top.png";

interface Testimonials {
  avatar?: string;
  title: string;
  subtitle: string;
  subtitle2: string;
  description: string;
}

const testimonials: Testimonials[] = [
  {
    avatar: ThibautTavernier,
    title: `Thibaut Tavernier`,
    subtitle: `Responsable Equipe Chef de Projet - 3DVIA - Dassault Systèmes`,
    subtitle2: `En 2019, Thibaut était mon manager direct chez Dassault Systèmes`,
    description: `J'ai eu la chance de recruter Antoine en pleine 
      construction d'une nouvelle équipe et j'ai pu m'appuyer 
      sur son application, son sérieux et sa force de proposition 
      et d'innovation pour mener avec lui les grands changements 
      concernant le développement de nos applications de contribution 
      de contenu. Antoine est appliqué, consciencieux et toujours 
      souriant. Ça été un réel plaisir de travailler avec lui 
      ces 5 dernières années.`,
  },
  {
    avatar: SammyGad,
    title: `Sammy Gad`,
    subtitle: `Senior Product Manager - OUI SNCF`,
    subtitle2: `En 2020, Sammy était le Product Manager de mon équipe chez Dassault Systèmes`,
    description: `J'étais le product manager dans l'équipe d'Antoine où on a 
      créer une application de zéro. Toujours force de proposition, 
      c'était un réel plaisir de travailler avec lui. Il a une vrai 
      sensibilité produit qui fait que je me faisais challenger 
      positivement au quotidien, sans oublier son côté humain et 
      optimiste qui nous a permis d'avoir un impact auprès de nos 
      clients en gardant le sourire! On ne travaille plus ensemble 
      aujourd'hui mais j'ai hâte de le retrouver sur un projet en commun.`,
  },
  {
    avatar: undefined,
    title: `Jean-Pascal Torres`,
    subtitle: `Responsable R&D Plaform - 3DVIA - Dassault Systèmes`,
    subtitle2: `En 2022, Jean-Pascal était mon manager direct chez Dassault Systèmes`,
    description: `Toujours positif, motivé, impliqué et pertinent. Antoine a fait 
      preuve d'excellentes capacités d'apprentissage et d'adaptation. 
      Un plaisir de l'avoir eu comme collaborateur.`,
  },
  {
    avatar: GauthierSaillard,
    title: `Gauthier Saillard`,
    subtitle: `Designer Industriel - Innovation chez PA.COTTE - LivingPackets`,
    subtitle2: `En 2016, Gauthier était le co-fondateur de notre projet entrepreneurial SOMMET`,
    description: `Un projet entrepreneurial met à rude épreuve toute équipe qui 
      tente l'aventure. Si cette année à travailler avec Antoine a été 
      faite de nombreux rebondissements, notre équipe a toujours su 
      réagir et Antoine a toujours su redoubler d'efforts et remettre 
      en question ce qui nécessitait d'être modifié, comme cela est si 
      essentiel lors de la création d'un projet. Antoine est quelqu'un 
      de très compétent et d'une positivité à toute épreuve. Cela se 
      ressent dans son travail au quotidien.`,
  },
  {
    avatar: JulesColin,
    title: `Jules Colin`,
    subtitle: `Ingénieur - Associé - Militant @ SCALE`,
    subtitle2: `En 2015, Jules était mon manager direct chez Decathlon`,
    description: `Antoine possède toutes les qualités de l'ingénieur d'aujourd’hui: 
      sérieux, curieux, rigoureux et appliqué, son intérêt pour 
      l’innovation est très certainement son meilleur atout. C'était 
      en tout cas un vrai plaisir de l'avoir dans l'équipe d'ingénieurs 
      de Tribord.`,
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const TestimonialsSection = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 5;

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
        textAlign: "center",
        minHeight: "100vh",
        backgroundColor: "#F2F2F2",
        paddingTop: 5,
        backgroundImage: `url(${MountainSunset})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "80%",
        backgroundPositionX: "center",
      }}
    >
      <SectionTitle
        title="MES TEMOIGNAGES"
        subtitle="Voilà ce que disent les gens avec qui j'ai travaillé"
        isWhite={true}
      />
      <Box
        sx={{
          marginTop: 5,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          display: "flex",
        }}
      >
        <Box sx={{ display: "grid", maxWidth: "400px", marginBottom: 10 }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            interval={30000}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                avatar={testimonial.avatar}
                title={testimonial.title}
                subtitle={testimonial.subtitle}
                subtitle2={testimonial.subtitle2}
                description={testimonial.description}
              ></TestimonialCard>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ backgroundColor: "transparent" }}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                <Typography component="div" color="white">
                  Next
                </Typography>
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft sx={{ color: "white" }} />
                ) : (
                  <KeyboardArrowRight sx={{ color: "white" }} />
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
                  <KeyboardArrowRight sx={{ color: "white" }} />
                ) : (
                  <KeyboardArrowLeft sx={{ color: "white" }} />
                )}
                <Typography component="div" color="white">
                  Back
                </Typography>
              </Button>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};
