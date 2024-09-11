import Image from "next/image";
import Link from "next/link";
import ArrowDownIcon from "../atoms/icons/ArrowDownIcon";

const HomeScrollButton = ({ toSectionId }: { toSectionId: string }) => {
  return (
    <>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-fadein">
        <div className="translate-y-5">
          <Image
            src="/bienvenue.png"
            width="100"
            height="100"
            alt="bienvenue"
            className="animate-spin"
          />
        </div>
        <Link
          href={`#${toSectionId}`}
          className="w-fit absolute bottom-0 left-1/2 -translate-x-1/2"
          aria-label="Bouton pour scroller vers la prochaine section"
        >
          <div className="animate-fadein">
            <div className="animate-bounce bg-red-400 bg-opacity-60 hover:bg-opacity-70 rounded-full p-2 w-fit">
              <ArrowDownIcon />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomeScrollButton;
