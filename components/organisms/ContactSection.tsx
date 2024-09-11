import Image from "next/image";
import Link from "next/link";
import ScrollToSectionButton from "../atoms/ScrollToSectionButton";
import SectionTitle from "../atoms/SectionTitle";
import ContactLinks from "../molecules/ContactLinks";

const ContactSection = ({
  sectionId,
  nextSectionId,
}: {
  sectionId: string;
  nextSectionId: string;
}) => {
  return (
    <div
      id={sectionId}
      className="relative min-h-screen flex flex-col items-center"
    >
      <SectionTitle title="CONTACT" />
      <div className="grid grid-cols-1 md:grid-cols-2 mb-12 mt-12">
        <Image
          className="rounded-full"
          src="/antoine.png"
          width={250}
          height={250}
          alt="Photo d'Antoine Ludeau"
        />
        <div className="flex justify-center text-center md:text-left flex-col md:border-l-4 border-red-400 border-opacity-60 p-2 mt-4">
          <div className="text-gray-600">+33 6 37 69 25 19</div>
          <div className="text-gray-600">antoine.ludeau@gmail.com</div>
          <div className="flex justify-center md:justify-start gap-2 mt-2">
            <ContactLinks />
          </div>
        </div>
      </div>
      <div className="mb-12">
        <p className="text-center italic text-light text-gray-600 p-2 ">
          Ce portfolio a été réalisé avec Next.js, TypeScript et TailwindCSS.
        </p>
        <p className="text-center italic text-light text-gray-600 p-2">
          Voici le code source :{" "}
          <Link className="underline" href="https://github.com/antoineludeau/portfolio" aria-label='Lien Github'>
            Github
          </Link>
        </p>
      </div>
      <ScrollToSectionButton sectionId={nextSectionId} side="up" />
    </div>
  );
};

export default ContactSection;
