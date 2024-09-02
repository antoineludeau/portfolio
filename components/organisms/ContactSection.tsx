import Image from "next/image";
import Link from "next/link";
import ScrollToSectionButton from "../atoms/ScrollToSectionButton";
import SectionTitle from "../atoms/SectionTitle";

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
      <div className="grid grid-cols-1 md:grid-cols-2 mb-2 mt-12">
        <Image
          className="rounded-full"
          src="/antoine.png"
          width={250}
          height={250}
          alt="author photo"
        />
        <div className="flex justify-center text-center md:text-left flex-col md:border-l-4 border-red-400 border-opacity-60 p-2 mt-4">
          <div className="text-gray-600">+33 6 37 69 25 19</div>
          <div className="text-gray-600">antoine.ludeau@gmail.com</div>
          <div className="flex justify-center md:justify-start gap-2 mt-2">
            <Link href="https://www.linkedin.com/in/antoineludeau/" target="_blank">
              <Image
                src="/linkedin.png"
                width={30}
                height={30}
                alt="linkedin link"
              />
            </Link>
            <Link href="https://github.com/antoineludeau" target="_blank">
              <Image
                src="/github.png"
                width={30}
                height={30}
                alt="github link"
              />
            </Link>
            <Link href="https://www.malt.fr/profile/antoineludeau" target="_blank">
              <Image
                src="/malt.png"
                width={30}
                height={30}
                alt="malt link"
              />
            </Link>
          </div>
          
        </div>
      </div>
      <div className="text-center absolute bottom-16 italic text-light text-gray-600 p-2">
        Ce portfolio a été réalisé avec Next.js, TailwindCSS et TypeScript.
      </div>
      <ScrollToSectionButton sectionId={nextSectionId} />
    </div>
  );
};

export default ContactSection;
