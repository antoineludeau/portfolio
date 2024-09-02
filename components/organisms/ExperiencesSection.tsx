"use client";
import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "../atoms/SectionTitle";
import ScrollToSectionButton from "../atoms/ScrollToSectionButton";

const tabsData = [
  {
    label: "Beta.gouv",
    logoName: "beta.gouv.jpg",
    position: "Développeur Full Stack - Freelance",
    labelDetailed:
      "Beta.gouv & IGN (L'Institut National de l'Information Géographique et Forestière) - Base Adresse Nationale",
    date: {
      start: "Déc. 2022",
      end: "Aujourd'hui",
    },
    place: "Paris",
    tags: [
      "NEXTJS",
      "NODEJS",
      "TYPESCRIPT",
      "MONGODB",
      "POSTGRESQL",
      "POSTGIS",
      "DOCKER",
    ],
    content: [
      "Création d’une nouvelle architecture back-end (API REST asynchrone event-driven, base de données relationnelle avec historique) pour implémenter l’identifiant unique de l’adresse française.",
      "Migration technique de tous les services : typescript, ESModule, Dockerisation, tests automatiques, documentation.",
      "Refonte du site internet (Next.js) avec implémentation du DSFR (Design System de l'État français).",
    ],
  },
  {
    label: "Dassault Systèmes",
    logoName: "dassault-systèmes.png",
    position: "Développeur Full Stack - CDI",
    labelDetailed: "3DVIA - Dassault Systèmes",
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
      "Gestion du pipeline de processing et simplification des assets 3D sur Amazon Web Services (SQS, EC2,S3, CloudWatch, ...).",
      "Mise en place du déploiement d'un micro-service (Amazon S3 local) pour l'amélioration de l'environnement local de tous les developpeurs de l'entreprise.",
    ],
  },
  {
    label: "Handsaway",
    logoName: "handsaway.png",
    position: "Développeur Back-end - Bénévole",
    labelDetailed: "Handaway",
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
    logoName: "dassault-systèmes.png",
    position: "Business Analyst pour Applications Web - CDI",
    labelDetailed: "3DVIA - Dassault Systèmes",
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
      <SectionTitle title="MES EXPÉRIENCES" />
      <div className="grid grid-cols-3 w-full p-2 lg:w-3/5 mb-10">
        <div className="flex flex-col">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                className={`py-2 border-r-4 duration-200 mb-4 ${
                  idx === activeTabIndex
                    ? "text-red-400 font-light border-red-400 border-opacity-60"
                    : "border-transparent"
                }`}
                // Change the active tab on click.
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label.toUpperCase()}
              </button>
            );
          })}
        </div>
        {/* Show active tab content. */}
        <div className="border-l-4 px-4 col-span-2">
          <div className="">
            <div className="relative h-16 mb-8 ml-4">
              <Image
                src={`/${tabsData[activeTabIndex].logoName}`}
                alt="Logo of the company"
                className="object-contain object-fit object-left"
                fill
              ></Image>
            </div>
            <p className="text-2xl mb-2">{tabsData[activeTabIndex].position}</p>
            <p className="text mb-2">
              {tabsData[activeTabIndex].labelDetailed}
            </p>
            <p className="mb-4 text-sm text-gray-600 font-extralight">
              {tabsData[activeTabIndex].date?.start} -{" "}
              {tabsData[activeTabIndex].date?.end} -{" "}
              {tabsData[activeTabIndex].place}
            </p>
            <ul className="mb-4">
              {tabsData[activeTabIndex].tags?.map((tag, idx) => (
                <li
                  key={idx}
                  className="text-sm inline-block rounded-full bg-gray-900/10 py-1.5 px-3 uppercase text-gray-900"
                >
                  #{tag}
                </li>
              ))}
            </ul>
            <ul>
              {tabsData[activeTabIndex].content?.map((content, idx) => (
                <li key={idx} className="list-disc ml-4 mb-4">
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ScrollToSectionButton sectionId={nextSectionId} />
    </div>
  );
};

export default ExperienceSection;
