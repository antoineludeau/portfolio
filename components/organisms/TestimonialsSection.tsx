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

// Import your custom styles
import "./styles/custom-swiper.css"; // Ensure this file contains your custom CSS

const data = [
  {
    name: "Sammy Gad",
    photoName: "sammy-gad.png",
    position: "Head of Product - LumApps",
    linkedInLink: "https://www.linkedin.com/in/sammygad/",
    testimonial:
      "J'étais le product manager dans l'équipe d'Antoine où nous avons créé une application à partir de zéro. Toujours force de proposition, c'était un réel plaisir de travailler avec lui. Il a une vrai sensibilité produit qui fait que je me faisais challenger positivement au quotidien, sans oublier son côté humain et optimiste qui nous a permis d'avoir un impact auprès de nos clients en gardant le sourire! On ne travaille plus ensemble aujourd'hui mais j'ai hâte de le retrouver sur un projet en commun.",
  },
  {
    name: "Thibaut Tavernier",
    photoName: "thibaut-tavernier.png",
    position: "Responsable Equipe Chef de Projet - Dassault Systèmes",
    linkedInLink: "https://www.linkedin.com/in/thibaut-tavernier-243044137/",
    testimonial:
      "J'ai eu la chance de recruter Antoine en pleine construction d'une nouvelle équipe et j'ai pu m'appuyer sur son application, son sérieux et sa force de proposition et d'innovation pour mener avec lui les grands changements concernant le développement de nos applications de contribution de contenu. Antoine est appliqué, consciencieux et toujours souriant. Ça été un réel plaisir de travailler avec lui ces 5 dernières années.",
  },
  {
    name: "Pierre Passavy",
    photoName: "pierre-passavy.png",
    position: "Senior International Project Manager - Dassault Systèmes",
    linkedInLink: "https://www.linkedin.com/in/pierrepassavy/",
    testimonial:
      "J'ai eu la chance de travailler avec Antoine sur des problématiques de production et d'administration de données complexes à grande échelle, dans l'univers de configurateurs 3D. Son goût pour la qualité, d'aller au bout des choses, d'approfondir sans cesse avec exigence, sa curiosité pour toujours apprendre et challenger l'existant, sa volonté de produire le meilleur code, le plus propre possible, et surtout son tempérament toujours positif, à chercher et trouver des solutions dans des situations compliquées ont fait de son apport un facteur clé de succès des projets que nous avions à accomplir ensemble. J'espère avoir à nouveau la chance de travailler avec Antoine un jour prochain.",
  },
  {
    name: "Jean-Pascal Torres",
    position: "Responsable R&D Plaform - Dassault Systèmes",
    linkedInLink: "https://www.linkedin.com/in/jean-pascal-torres-ab80a591/",
    testimonial:
      "Toujours positif, motivé, impliqué et pertinent. Antoine a fait preuve d'excellentes capacités d'apprentissage et d'adaptation. Un plaisir de l'avoir eu comme collaborateur.",
  },
  {
    name: "Gauthier Saillard",
    photoName: "gauthier-saillard.png",
    position: "Designer Industriel Innovation - LivingPackets",
    linkedInLink: "https://www.linkedin.com/in/gauthier-saillard-882b5265/",
    testimonial:
      "Un projet entrepreneurial met à rude épreuve toute équipe qui tente l'aventure. Si cette année à travailler avec Antoine a été faite de nombreux rebondissements, notre équipe a toujours su réagir et Antoine a toujours su redoubler d'efforts et remettre en question ce qui nécessitait d'être modifié, comme cela est si essentiel lors de la création d'un projet. Antoine est quelqu'un de très compétent et d'une positivité à toute épreuve. Cela se ressent dans son travail au quotidien.",
  },
  {
    name: "Jules Colin",
    photoName: "jules-colin.png",
    position: "Ingénieur - Associé - Militant @ SCALE",
    linkedInLink: "https://www.linkedin.com/in/jules-colin/",
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
      className="relative min-h-screen flex flex-col items-center bg-gray-50"
    >
      <SectionTitle title="Mes témoignages" />
      <div className="w-full flex items-center gap-2 md:w-2/3 max-w-screen-xl mb-12">
        <SwiperCustomButton
          side="prev"
          onClick={() => sliderRef.current?.slidePrev()}
        />
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
          {data.map((item) => (
            <SwiperSlide key={item.name}>
              <TestimonialSlide
                name={item.name}
                photoName={item.photoName}
                position={item.position}
                linkedInLink={item.linkedInLink}
                testimonial={item.testimonial}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperCustomButton
          side="next"
          onClick={() => sliderRef.current?.slideNext()}
        />
      </div>
      <ScrollToSectionButton sectionId={nextSectionId} />
    </div>
  );
};

export default TestimonialsSection;
