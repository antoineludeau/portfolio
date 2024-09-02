import Image from "next/image";
import Link from "next/link";
import ArrowDownIcon from "../atoms/icons/ArrowDownIcon";

const HomeScrollButton = ({ sectionId }: { sectionId: string }) => {
  return (
    <>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 animate-fadein">
        <Image
          src="bienvenue.svg"
          width="100"
          height="100"
          alt="bienvenue"
          className="animate-spin"
        />
      </div>
      <Link
        href={`#${sectionId}`}
        className="w-fit absolute bottom-0 left-1/2 -translate-x-1/2"
        aria-label="scroll button to next section"
      >
        <div className="animate-fadein">
          <div className="animate-bounce bg-red-400 bg-opacity-60 hover:bg-opacity-70 rounded-full p-2 w-fit">
            <ArrowDownIcon />
          </div>
        </div>
      </Link>
    </>
  );
};

export default HomeScrollButton;
