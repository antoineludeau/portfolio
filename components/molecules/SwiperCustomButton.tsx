import ChevronLeftIcon from "../atoms/icons/ChevronLeftIcon";
import ChevronRightIcon from "../atoms/icons/ChevronRightIcon";

const SwiperCustomButton = ({
  side,
  onClick,
}: {
  side: string;
  onClick: () => void;
}) => {
  if (side === "prev") {
    return (
      <div>
        <button
          type="button"
          className="p-2 hover:bg-gray-200 rounded-full duration-200 mb-2"
          onClick={onClick}
          aria-label="prev testimonial"
        >
          <ChevronLeftIcon />
        </button>
      </div>
    );
  } else if (side === "next") {
    return (
      <div>
        <button
          type="button"
          className="p-2 hover:bg-gray-200 rounded-full duration-200 mb-2"
          onClick={onClick}
          aria-label="next testimonial"
        >
          <ChevronRightIcon />
        </button>
      </div>
    );
  }
};

export default SwiperCustomButton;
