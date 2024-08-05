import HomeScrollButton from "../molecules/HomeScrollButton";
import ContactLinks from "../molecules/ContactLinks";

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
      className="min-h-screen flex justify-center bg-[url('/home-background.png')] bg-center bg-cover"
    >
      <div className="w-full max-w-screen-2xl">
        <h1 className="p-5 mt-20">
          <div className="text-3xl font-extralight text-gray-800 mb-3 animate-slidein300">
            Bonjour, je suis
          </div>
          <div className="text-6xl font-medium text-gray-800 mb-7 animate-slidein400">
            Antoine Ludeau.
          </div>
          <div className="animate-slidein500 mb-4">
            <div className="text-4xl font-light text-white p-2 bg-red-400/80 w-fit rounded-md">
              Développeur Web{" "}
              <span className="inline-flex flex-col h-[calc(theme(fontSize.4xl))] md:h-[calc(theme(fontSize.4xl))] overflow-hidden">
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
       
      </div>
      <HomeScrollButton toSectionId={nextSectionId} />
    </div>
  );
};

export default HomeSection;
