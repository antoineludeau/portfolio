import Image from "next/image";
import Link from "next/link";
import QuoteIcon from "../atoms/icons/QuoteIcon";

const TestimonialSlide = ({
  testimonial,
  photoName,
  name,
  position,
  linkedInLink,
}: {
  testimonial: string;
  photoName?: string;
  name: string;
  position: string;
  linkedInLink?: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <QuoteIcon />
      <p className="text-center text-lg">{testimonial}</p>
      <figcaption className="mt-6 mb-10">
        <div className="flex flex-col items-center justify-center space-x-3 text-base">
          <div className="relative m-2">
            {photoName ? (
              <Image
                className="rounded-full"
                src={`/${photoName}`}
                width={64}
                height={64}
                alt="testimonial author photo"
              />
            ) : (
              <Image
                className="rounded-full"
                src={`/avatar.svg`}
                width={64}
                height={64}
                alt="testimonial author placeholder"
              />
            )}
          </div>
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <div className="font-semibold text-gray-900">{name}</div>
            <svg
              viewBox="0 0 2 2"
              width="3"
              height="3"
              aria-hidden="true"
              className="fill-gray-900"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div className="text-gray-600">{position}</div>
            {linkedInLink && (
              <Link href={linkedInLink} target="_blank">
                <Image
                  src="/linkedin.png"
                  width={30}
                  height={30}
                  alt="linkedin link"
                />
              </Link>
            )}
          </div>
        </div>
      </figcaption>
    </div>
  );
};

export default TestimonialSlide;
