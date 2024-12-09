import Image from "next/image";

import ScrollToSectionButton from "../atoms/ScrollToSectionButton";

const PresentationSection = ({
  sectionId,
  nextSectionId,
}: {
  sectionId: string;
  nextSectionId: string;
}) => {
  return (
    <div
      id={sectionId}
      className="relative min-h-screen flex flex-col justify-center items-center"
    >
      <div className="w-full sm:w-2/3 md:w-1/2 lg:max-w-screen-xl p-5">
        <div className="flex justify-center">
          <h2 className="text-6xl font-light mb-4 bg-gradient-to-r from-red-400 to-red-400/70 bg-no-repeat bg-100%_20px bg-bottom">
            Enchanté.
          </h2>
        </div>

        <p className="text-center text-xl sm:text-2xl font-light mb-4">
          Passionné de création, je développe aujourd’hui des{" "}
          <span className="font-medium">
            applications à impact social et/ou environnemental
          </span>
          . Issu d’un cursus d’ingénieur en mécanique suivi d&apos;expériences
          entrepreneuriales, je me suis réorienté vers le développement
          informatique <span className="font-medium">depuis plus de 6 ans</span>
          . Mon but : répondre à de{" "}
          <span className="font-medium">réels besoins</span> en conciliant la{" "}
          <span className="font-medium">transition numérique</span> de nos
          sociétés avec les urgences{" "}
          <span className="font-medium">écologiques</span> et{" "}
          <span className="font-medium">sociales</span>.
        </p>
      </div>
      <div className="mb-16">
        <Image
          src="/biking-man.svg"
          alt="Un homme à vélo qui fait un signe de la main"
          width={400}
          height={400}
        />
      </div>
      <ScrollToSectionButton sectionId={nextSectionId} />
    </div>
  );
};

export default PresentationSection;
