import Link from "next/link";
import ChevronDownIcon from "./icons/ChevronDownIcon";

const ScrollToSectionButton = ({ sectionId }: { sectionId: string }) => {
  return (
    <Link
      href={`#${sectionId}`}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 p-2 hover:bg-gray-100 rounded-full duration-200 mb-2"
      aria-label="scroll button to next section"
    >
      <div className='stroke-red-400'>
        <ChevronDownIcon/>
      </div>
    </Link>
  );
};

export default ScrollToSectionButton;
