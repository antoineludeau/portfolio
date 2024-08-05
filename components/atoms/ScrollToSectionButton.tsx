import Link from "next/link";
import ChevronDownIcon from "./icons/ChevronDownIcon";
import ChevronUpIcon from "./icons/ChevronUpIcon";

type Side = "up" | "down";

const ScrollToSectionButton = ({
  sectionId,
  side = "down",
}: {
  sectionId: string;
  side?: Side;
}) => {
  return (
    <Link
      href={`#${sectionId}`}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 p-2 hover:bg-red-100 rounded-full duration-200 mb-2"
      aria-label="scroll button to next section"
    >
      <div className="stroke-red-400">
        {side === "up" ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
    </Link>
  );
};

export default ScrollToSectionButton;
