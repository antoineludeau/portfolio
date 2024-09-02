import ScrollToSectionButton from "../atoms/ScrollToSectionButton";
import HandWaveIcon from "../atoms/icons/HandWaveIcon";

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
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="w-full md:w-2/4 lg:w-2/5 text-center p-6">
        <div className="flex justify-center gap-3">
          <p className="text-5xl font-medium mb-4">Enchanté.</p>
          <HandWaveIcon />
        </div>

        <p className="text-xl sm:text-2xl font-light">
          Passionné de création, je développe aujourd’hui des{" "}
          <span className="font-medium">
            applications à fort impact social et/ou environnemental
          </span>
          . Issu d’un cursus d’ingénieur en mécanique suivi d&apos;expériences
          entrepreneuriales, je me suis réorienté vers le développement
          informatique{" "}
          <span className="font-medium">depuis plus de 5 ans</span>. Mon but :
          répondre à de <span className="font-medium">réels besoins</span>
          {" "}en conciliant la{" "}
          <span className="font-medium">transition numérique</span> de nos
          sociétés avec les urgences{" "}
          <span className="font-medium">écologiques</span> et{" "}
          <span className="font-medium">sociales</span>.
        </p>
      </div>
      <ScrollToSectionButton sectionId={nextSectionId} />
    </div>
  );
};

export default PresentationSection;
