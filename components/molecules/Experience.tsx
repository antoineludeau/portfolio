import Image from "next/image";
import Link from "next/link";
import WebsiteIcon from "../atoms/icons/WebsiteIcon";

interface Experience {
  label: string;
  logoName: string;
  position: string;
  labelDetailed: string;
  websiteLink?: string;
  githubLink?: string;
  date?: {
    start: string;
    end: string;
  };
  place: string;
  tags: string[];
  content: string[];
}

const Experience = ({ experience }: { experience: Experience }) => (
  <div className="">
    <div className="relative h-16 mb-8 ml-4">
      <Image
        src={`/${experience.logoName}`}
        alt="Logo de l'entreprise"
        className="object-contain object-fit object-left"
        fill
      ></Image>
    </div>
    <p className="text-2xl mb-2">{experience.position}</p>
    <p className="text mb-2">{experience.labelDetailed}</p>
    <div className="flex items-center gap-2">
      {experience.githubLink && (
        <div className="mb-2">
          <Link href={experience.githubLink} target="_blank">
            <Image src="/github.png" width={30} height={30} alt="lien github" />
          </Link>
        </div>
      )}
      {experience.websiteLink && (
        <div className="mb-2">
          <Link href={experience.websiteLink} target="_blank">
            <WebsiteIcon />
          </Link>
        </div>
      )}
    </div>
    <p className="mb-4 text-sm text-gray-600 font-light">
      {experience.date?.start} - {experience.date?.end} - {experience.place}
    </p>
    <ul className="mb-4">
      {experience.tags?.map((tag, idx) => (
        <li
          key={idx}
          className="text-sm inline-block rounded-full bg-gray-900/10 py-1.5 px-2 m-0.5 text-gray-900"
        >
          #{tag}
        </li>
      ))}
    </ul>
    <ul>
      {experience.content?.map((content, idx) => (
        <li key={idx} className="list-disc ml-4 mb-4">
          {content}
        </li>
      ))}
    </ul>
  </div>
);

export default Experience;
