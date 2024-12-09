import Image from "next/image";
import ChatBubbleIcon from "../atoms/icons/ChatBubbleIcon";
import CodeBracketIcon from "../atoms/icons/CodeBracketIcon";
import CheckCircleIcon from "../atoms/icons/CheckCircleIcon";
import ScrollToSectionButton from "../atoms/ScrollToSectionButton";
import SectionTitle from "../atoms/SectionTitle";
import MainSkillsGroupsTitle from "../atoms/MainSkillsGroupsTitle";
import SkillsGroup from "../molecules/SkillsGroup";

const SkillsSection = ({
  sectionId,
  nextSectionId,
}: {
  sectionId: string;
  nextSectionId: string;
}) => {
  return (
    <div
      id={sectionId}
      className="relative min-h-screen flex flex-col items-center bg-gray-50"
    >
      <SectionTitle title="Mes compétences" />
      <div className="grid md:grid-cols-5 grid-cols-1 w-3/4 mb-8 max-w-screen-xl">
        <div className="col-span-2 mb-8">
          <MainSkillsGroupsTitle
            title="Développement"
            iconComponent={<CodeBracketIcon />}
          />
          <SkillsGroup
            title="Languages"
            skills={["Javascript", "Typescript", "Python", "SQL"]}
          />
          <SkillsGroup
            title="Front-end"
            advancedSkills={[
              {
                title: "Front-end frameworks",
                values: ["React", "Vue.js"],
              },
              {
                title: "Meta frameworks",
                values: ["Next.js", "Nuxt.js"],
              },
              {
                title: "CSS frameworks",
                values: ["TailwindCSS"],
              },
            ]}
          />
          <SkillsGroup
            title="Back-end"
            advancedSkills={[
              {
                title: "Plateforme",
                values: ["Node.js"],
              },
              {
                title: "Frameworks",
                values: ["Express.js", "NestJS"],
              },
              {
                title: "Bases de données",
                values: ["PostgreSQL", "PostGIS", "MongoDB", "Redis"],
              },
            ]}
          />
          <SkillsGroup
            title="Testing"
            skills={["Vitest", "Jest", "Cypress"]}
          />
          <SkillsGroup
            title="Dev-ops"
            skills={["Docker", "Docker Compose", "Scalingo", "AWS"]}
          />
        </div>
        <div className="col-span-1 mb-8 p-2 flex justify-center">
          <Image
            src="/developer-activity.svg"
            alt="Un développeur qui code avec son activité github en arrière plan"
            width={200}
            height={200}
          />
        </div>
        <div className="col-span-2 flex flex-col justify-between">
          <div className="mb-8">
            <MainSkillsGroupsTitle
              title="Méthode"
              iconComponent={<CheckCircleIcon />}
            />
            <SkillsGroup
              title="Principes"
              skills={["SOLID", "KISS", "YAGNI", "DRY"]}
            />
            <SkillsGroup
              title="Archi"
              advancedSkills={[
                {
                  title: "Front-end",
                  values: ["Atomic Design"],
                },
                {
                  title: "Back-end",
                  values: ["API REST", "Queue/Worker"],
                },
              ]}
            />
          </div>
          <div className="mb-8">
            <MainSkillsGroupsTitle
              title="Communication"
              iconComponent={<ChatBubbleIcon />}
            />
            <SkillsGroup
              title="Tools"
              advancedSkills={[
                { title: "Gestion", values: ["Notion", "JIRA"] },
                {
                  title: "Design",
                  values: ["Figma", "Illustrator", "InDesign"],
                },
                {
                  title: "Vidéo",
                  values: ["Premiere"],
                },
              ]}
            />
            <SkillsGroup
              title="Langues"
              skills={["Anglais", "Portugais", "Espagnol"]}
            />
          </div>
        </div>
      </div>

      <ScrollToSectionButton sectionId={nextSectionId} />
    </div>
  );
};

export default SkillsSection;
