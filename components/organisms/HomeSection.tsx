import HomeScrollButton from "../molecules/HomeScrollButton";

const HomeSection = ({
  sectionId,
  nextSectionId,
}: {
  sectionId: string;
  nextSectionId: string;
}) => {
  return (
    <div
      id={sectionId}
      className="min-h-screen bg-[url('/home-background.png')] flex bg-center bg-cover"
    >
      <h1 className="p-5 pt-20 md:p-10 md:pt-20">
        <div className="text-3xl md:text-3xl font-extralight text-gray-800 mb-3 animate-slidein300">
          Bonjour, je suis
        </div>
        <div className="text-6xl md:text-6xl font-medium text-gray-800 mb-7 animate-slidein400">
          Antoine Ludeau.
        </div>
        <div className="animate-slidein500">
          <div className="text-4xl white font-light text-white mb-4 p-2 bg-red-400 bg-opacity-60 w-fit rounded-md shadow-2xl">
            Développeur Web{" "}
            <span className="inline-flex flex-col h-[calc(theme(fontSize.5xl))] md:h-[calc(theme(fontSize.5xl))] overflow-hidden">
              <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block">
                <li>Full Stack</li>
                <li>Senior</li>
                <li>Freelance</li>
                <li aria-hidden="true">Full Stack</li>
              </ul>
            </span>
          </div>
        </div>
      </h1>
      <HomeScrollButton sectionId={nextSectionId} />
    </div>
  );
};

export default HomeSection;
