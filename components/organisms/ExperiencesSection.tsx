"use client";
import Image from "next/image";
import React, { useState } from "react";
import SectionTitle from "../atoms/SectionTitle";
import Experience from "../molecules/Experience";
import ScrollToSectionButton from "../atoms/ScrollToSectionButton";

const tabsData = [
  {
    label: "Beta.gouv",
    logoName: "beta.gouv.jpg",
    position: "Lead Développeur Full Stack - Freelance",
    labelDetailed:
      "Beta.gouv & IGN (L'Institut National de l'Information Géographique et Forestière) - Base Adresse Nationale",
    websiteLink: "https://adresse.data.gouv.fr/",
    githubLink: "https://github.com/BaseAdresseNationale",
    date: {
      start: "Déc. 2022",
      end: "Aujourd'hui",
    },
    place: "Paris",
    tags: [
      "NEXTJS",
      "MAPGL",
      "NODEJS",
      "TYPESCRIPT",
      "MONGODB",
      "POSTGRESQL",
      "POSTGIS",
      "DOCKER",
    ],
    content: [
      "Création d’une nouvelle architecture back-end (API REST asynchrone event-driven, base de données relationnelle avec historique et calculs géographiques) pour implémenter l’identifiant unique de l’adresse française.",
      "Migration technique de tous les services : typescript, ESModule, Dockerisation, tests automatiques, documentation.",
      "Refonte du site internet (Next.js) avec implémentation du DSFR (Design System de l'État français).",
    ],
  },
  {
    label: "Dassault Systèmes",
    logoName: "dassault-systemes.png",
    position: "Développeur Full Stack - CDI",
    labelDetailed: "3DVIA - Dassault Systèmes",
    websiteLink: "https://home.by.me/fr/",
    date: {
      start: "Jan. 2020",
      end: "Oct. 2022",
    },
    place: "Paris",
    tags: [
      "REACT",
      "TYPESCRIPT",
      "MATERIAL-UI",
      "NODEJS",
      "POSTGRESQL",
      "CYPRESS",
      "DOCKER",
      "AWS",
      "AGILE",
    ],
    content: [
      "Développement «from scratch» d’applications web (REACT, Typescript).",
      "Améliorations et nouvelles features de l’API back-end (NodeJS).",
      "Gestion du pipeline de processing et simplification des assets 3D sur Amazon Web Services (SQS, EC2, S3, CloudWatch, ...).",
      "Mise en place du déploiement d'un micro-service (Amazon S3 local) pour l'amélioration de l'environnement local de tous les developpeurs de l'entreprise.",
    ],
  },
  {
    label: "Handsaway",
    logoName: "handsaway.png",
    position: "Développeur Back-end - Bénévole",
    labelDetailed: "Handaway",
    websiteLink: "https://www.handsaway.fr/",
    date: {
      start: "Sept. 2020",
      end: "Avril. 2021",
    },
    place: "Paris",
    tags: ["NESTJS", "AWS"],
    content: [
      "Responsable technique de l'API pour l'application mobile (NestJS).",
      "Création de nouvelles routes et amélioration des routes existantes selon les besoins du front-end.",
      "Gestion de la base de données sur AWS.",
    ],
  },
  {
    label: "Dassault Systèmes",
    logoName: "dassault-systemes.png",
    position: "Business Analyst pour Applications Web - CDI",
    labelDetailed: "3DVIA - Dassault Systèmes",
    websiteLink: "https://home.by.me/fr/",
    date: {
      start: "Jan. 2017",
      end: "Déc. 2019",
    },
    place: "Paris",
    tags: ["INTEGRATION-API", "JIRA", "INVISION"],
    content: [
      "Specification de «story» pour les sprint d’une équipe de developpeurs.",
      "Organisation des différentes étapes de vie des sprint (planning, démo, ...).",
      "Expertise technique auprès des clients sur le process liés aux données et à l'intégration de l'API.",
    ],
  },
  {
    label: "Sommet",
    logoName: "sommet.png",
    position: "Co-fondateur d’une Start-Up",
    labelDetailed: "SOMMET, « une nouvelle façon de boire le fruit »",
    websiteLink: "https://www.behance.net/gallery/41561729/S-O-M-M-E-T",
    date: {
      start: "Déc. 2015",
      end: "Déc. 2016",
    },
    place: "Paris",
    tags: ["ENTREPRENEURIAT"],
    content: [
      "Création d’un produit et d’un concept nouveau de jus de fruit en dosette.",
      "Participation à des concours qui ont mené à l’incubation par «Petit Poucet Incubateur» et le «Centre d’Innovation de l’UTC Compiègne».",
    ],
  },
  {
    label: "Décathlon",
    logoName: "olaian.png",
    position: "Ingénieur Produit - Stage fin d’étude et CDD",
    labelDetailed: "OLAIAN - Décathlon",
    websiteLink: "https://www.olaian.fr/",
    date: {
      start: "Févr. 2015",
      end: "Déc. 2015",
    },
    place: "Hendaye",
    tags: ["CONCEPTION", "DESIGN"],
    content: [
      "Conception et développement de produits, du design à la production, en passant par la conception 3D, le prototypage, les tests techniques, le pricing et la collaboration avec de nombreux fournisseurs.",
      "Proposition et création complète d’un produit de la gamme qui est vendu en magasin depuis mai 2016.",
    ],
  },
];

const ExperienceSection = ({
  sectionId,
  nextSectionId,
}: {
  sectionId: string;
  nextSectionId: string;
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div
      id={sectionId}
      className="relative min-h-screen flex flex-col items-center"
    >
      <SectionTitle title="Mes expériences" />
      <div className="grid grid-cols-3 w-full lg:w-3/5 p-2 mb-10 max-w-screen-xl">
        <div className="flex flex-col">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                className={`py-2 border-r-4 duration-100 mb-4 uppercase font-light hover:bg-red-50 ${
                  idx === activeTabIndex
                    ? "text-red-400 font-medium border-red-400 border-opacity-60"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
          <div className="flex justify-center">
            <Image
              src="/walking-backpack-man.svg"
              width={80}
              height={80}
              alt="Un homme qui marche avec un sac à dos"
            />
          </div>
        </div>
        <div className="border-l-4 px-2 sm:px-4 col-span-2">
          <Experience experience={tabsData[activeTabIndex]} />
        </div>
      </div>
      <div className="absolute bottom-0 sm:left-20 left-5"></div>
      <ScrollToSectionButton sectionId={nextSectionId} />
    </div>
  );
};

export default ExperienceSection;
