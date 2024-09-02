import ChatBubbleIcon from "../atoms/icons/ChatBubbleIcon";
import CodeBracketIcon from "../atoms/icons/CodeBracketIcon";
import CheckCircleIcon from "../atoms/icons/CheckCircleIcon";
import ScrollToSectionButton from "../atoms/ScrollToSectionButton";
import SectionTitle from "../atoms/SectionTitle";
import MainSkillsGroupsTitle from "../atoms/MainSkillsGroupsTitle";
import SkillsGroup from "../molecules/SkillsGroup";
import Indicator from "../atoms/icons/Indicator";

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
      className="relative min-h-screen flex flex-col items-center bg-red-100"
    >
      <SectionTitle title="MES COMPÉTENCES" />
     
      <div className="grid md:grid-cols-2 grid-cols-1 w-3/4">
        <div>
          <div className="mb-8 md:mb-16">
            <MainSkillsGroupsTitle
              title="DÉVELOPPEMENT"
              iconComponent={<CodeBracketIcon />}
            />
            <SkillsGroup
              title="Languages"
              skills={{
                values: ["Javascript", "Typescript", "Python", "SQL"],
                expertise: ["Javascript", "Typescript", "SQL"],
              }}
            />
            <SkillsGroup
              title="Front-end"
              advancedSkills={[
                {
                  title: "Front-end frameworks",
                  values: ["React", "Vue.js"],
                  expertise: ["React"],
                },
                {
                  title: "Meta frameworks",
                  values: ["Next.js", "Nuxt.js"],
                  expertise: ["Next.js"],
                },
                {
                  title: "CSS frameworks",
                  values: ["TailwindCSS"],
                  expertise: ["TailwindCSS"],
                },
              ]}
            />
            <SkillsGroup
              title="Back-end"
              advancedSkills={[
                {
                  title: "Plateforme",
                  values: ["Node.js"],
                  expertise: ["Node.js"],
                },
                {
                  title: "Frameworks",
                  values: ["Express.js", "NestJS"],
                  expertise: ["Express.js"],
                },
                {
                  title: "Bases de données",
                  values: ["PostgreSQL", "MongoDB", "Redis"],
                  expertise: ["PostgreSQL", "MongoDB"],
                },
              ]}
            />
            <SkillsGroup
              title="Testing"
              skills={{
                values: ["Vitest", "Jest", "Cypress"],
                expertise: ["Vitest", "Cypress"],
              }}
            />
            <SkillsGroup
              title="Dev-ops"
              skills={{
                values: ["Docker", "Docker Compose", "Scalingo", "AWS"],
                expertise: ["Docker", "Docker Compose"],
              }}
            />
          </div>
        </div>
        <div className="mb-16">
          <div className="md:mb-20 mb-8">
            <MainSkillsGroupsTitle
              title="MÉTHODE"
              iconComponent={<CheckCircleIcon />}
            />
            <SkillsGroup
              title="Principes"
              skills={{ values: ["SOLID", "KISS", "YAGNI", "DRY"] }}
            />
            <SkillsGroup
              title="Architectures"
              advancedSkills={[
                {
                  title: "Front-end",
                  values: ["Atomic Design"],
                  expertise: ["Atomic Design"],
                },
                {
                  title: "Back-end",
                  values: ["API REST", "Queue/Worker"],
                  expertise: ["API REST", "Queue/Worker"],
                },
              ]}
            />
          </div>
          <div className="">
            <MainSkillsGroupsTitle
              title="COMMUNICATION"
              iconComponent={<ChatBubbleIcon />}
            />
            <SkillsGroup
              title="Tools"
              advancedSkills={[
                { title: "Gestion", values: ["Notion", "JIRA"] },
                {
                  title: "Design",
                  values: ["Figma", "Illustrator", "InDesign"],
                  expertise: ["Illustrator"],
                },
                {
                  title: "Vidéo",
                  values: ["Premiere"],
                  expertise: ["Premiere"],
                },
              ]}
            />
            <SkillsGroup
              title="Langues"
              skills={{ values: ["Anglais", "Portugais", "Espagnol"] }}
            />
          </div>
        </div>
      </div>
      
      <ScrollToSectionButton sectionId={nextSectionId} />
    </div>
  );
};

export default SkillsSection;
