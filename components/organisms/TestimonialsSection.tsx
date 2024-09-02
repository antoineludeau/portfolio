"use client";
import React, { useRef } from "react";
import TestimonialSlide from "../molecules/TestimonialSlide";
import SectionTitle from "../atoms/SectionTitle";
import ScrollToSectionButton from "../atoms/ScrollToSectionButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import SwiperCustomButton from "../molecules/SwiperCustomButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    name: "Thibaut Tavernier",
    photoName: "thibaut-tavernier.png",
    position: "Responsable Equipe Chef de Projet - Dassault Systèmes",
    testimonial:
      "J'ai eu la chance de recruter Antoine en pleine construction d'une nouvelle équipe et j'ai pu m'appuyer sur son application, son sérieux et sa force de proposition et d'innovation pour mener avec lui les grands changements concernant le développement de nos applications de contribution de contenu. Antoine est appliqué, consciencieux et toujours souriant. Ça été un réel plaisir de travailler avec lui ces 5 dernières années.",
  },
  {
    name: "Pierre Passavy",
    photoName: "pierre-passavy.png",
    position: "Senior International Project Manager - Dassault Systèmes",
    testimonial:
      "J'ai eu la chance de travailler avec Antoine sur des problématiques de production et d'administration de données complexes à grande échelle, dans l'univers de configurateurs 3D. Son goût pour la qualité, d'aller au bout des choses, d'approfondir sans cesse avec exigence, sa curiosité pour toujours apprendre et challenger l'existant, sa volonté de produire le meilleur code, le plus propre possible, et surtout son tempérament toujours positif, à chercher et trouver des solutions dans des situations compliquées ont fait de son apport un facteur clé de succès des projets que nous avions à accomplir ensemble. J'espère avoir à nouveau la chance de travailler avec Antoine un jour prochain.",
  },
  {
    name: "Jean-Pascal Torres",
    position: "Responsable R&D Plaform - 3DVIA - Dassault Systèmes",
    testimonial:
      "Toujours positif, motivé, impliqué et pertinent. Antoine a fait preuve d'excellentes capacités d'apprentissage et d'adaptation. Un plaisir de l'avoir eu comme collaborateur.",
  },
  {
    name: "Sammy Gad",
    photoName: "sammy-gad.png",
    position: "Head of Product - LumApps",
    testimonial:
      "J'étais le product manager dans l'équipe d'Antoine où on a créer une application de zéro. Toujours force de proposition, c'était un réel plaisir de travailler avec lui. Il a une vrai sensibilité produit qui fait que je me faisais challenger positivement au quotidien, sans oublier son côté humain et optimiste qui nous a permis d'avoir un impact auprès de nos clients en gardant le sourire! On ne travaille plus ensemble aujourd'hui mais j'ai hâte de le retrouver sur un projet en commun.",
  },
  {
    name: "Gauthier Saillard",
    photoName: "gauthier-saillard.png",
    position: "Designer Industriel Innovation - LivingPackets",
    testimonial:
      "Un projet entrepreneurial met à rude épreuve toute équipe qui tente l'aventure. Si cette année à travailler avec Antoine a été faite de nombreux rebondissements, notre équipe a toujours su réagir et Antoine a toujours su redoubler d'efforts et remettre en question ce qui nécessitait d'être modifié, comme cela est si essentiel lors de la création d'un projet. Antoine est quelqu'un de très compétent et d'une positivité à toute épreuve. Cela se ressent dans son travail au quotidien.",
  },
  {
    name: "Jules Colin",
    photoName: "jules-colin.png",
    position: "Ingénieur - Associé - Militant @ SCALE",
    testimonial:
      "Antoine possède toutes les qualités de l'ingénieur d'aujourd’hui: sérieux, curieux, rigoureux et appliqué, son intérêt pour l’innovation est très certainement son meilleur atout. C'était en tout cas un vrai plaisir de l'avoir dans l'équipe d'ingénieurs de Tribord.",
  },
];

const TestimonialsSection = ({
  sectionId,
  nextSectionId,
}: {
  sectionId: string;
  nextSectionId: string;
}) => {
  const sliderRef = useRef<SwiperType | null>(null);
  return (
    <div
      id={sectionId}
      className="relative min-h-screen flex flex-col items-center bg-red-100"
    >
      <SectionTitle title="MES TÉMOIGNAGES" />
      <div className="w-full md:w-1/2 p-4">
        <Swiper
          onSwiper={(it) => (sliderRef.current = it)}
          spaceBetween={50}
          slidesPerView={1}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.name} className="w-full">
              <TestimonialSlide
                name={item.name}
                photoName={item.photoName}
                position={item.position}
                testimonial={item.testimonial}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-between">
          <SwiperCustomButton
            side="prev"
            onClick={() => sliderRef.current?.slidePrev()}
          />
          <SwiperCustomButton
            side="next"
            onClick={() => sliderRef.current?.slideNext()}
          />
        </div>
      </div>
      <ScrollToSectionButton sectionId={nextSectionId} />
    </div>
  );
};

export default TestimonialsSection;
