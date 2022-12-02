import Box from "@mui/material/Box";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";

import { SectionLayout } from "../templates";
import { AutoScrollToSectionButton } from "../atoms";
import { TestimonialCard, TestimonialStepper } from "../molecules";

import JulesColin from "../../assets/image/jules-colin.png";
import GauthierSaillard from "../../assets/image/gauthier-saillard.png";
import ThibautTavernier from "../../assets/image/thibaut-tavernier.png";
import SammyGad from "../../assets/image/sammy-gad.png";
import PierrePassavy from "../../assets/image/pierre-passavy.png"

import MountainSunset from "../../assets/image/mountain-top.png";

const backgroundProps = {
  backgroundImage: `url(${MountainSunset})`,
  backgroundRepeat: "no-repeat",
  backgroundPositionY: "80%",
  backgroundPositionX: "center",
};

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
    subtitle: `Responsable Equipe Chef de Projet - Dassault Systèmes`,
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
    avatar: PierrePassavy,
    title: "Pierre Passavy",
    subtitle: "Senior International Project Manager - Dassault Systèmes",
    subtitle2:
      "En 2018, Pierre travaillait dans la même équipe que moi chez Dassault Systèmes",
    description: `J'ai eu la chance de travailler avec Antoine sur des 
    problématiques de production et d'administration de données complexes 
    à grande échelle, dans l'univers de configurateurs 3D. Son goût pour 
    la qualité, d'aller au bout des choses, d'approfondir sans cesse avec 
    exigence, sa curiosité pour toujours apprendre et challenger l'existant, 
    sa volonté de produire le meilleur code, le plus propre possible, et 
    surtout son tempérament toujours positif, à chercher et trouver des 
    solutions dans des situations compliquées ont fait de son apport un facteur 
    clé de succès des projets que nous avions à accomplir ensemble. J'espère 
    avoir à nouveau la chance de travailler avec Antoine un jour prochain.`,
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

export const TestimonialsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = testimonials.length;

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
    <SectionLayout
      title="MES TEMOIGNAGES"
      subtitle="Ce que disent les gens avec qui j'ai travaillé"
      titleColor="white"
      backgroundProps={backgroundProps}
    >
      <>
        <Box display="flex" marginTop={5} justifyContent="center" width="100%">
          <Box display="grid" maxWidth="500px" mb={10}>
            <SwipeableViews
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
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
            </SwipeableViews>
            <TestimonialStepper
              maxSteps={maxSteps}
              activeStep={activeStep}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <AutoScrollToSectionButton to="contacts" />
        </Box>
      </>
    </SectionLayout>
  );
};
