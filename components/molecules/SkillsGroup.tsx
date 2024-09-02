import Indicator from "../atoms/icons/Indicator";

interface Skill {
  title?: string;
  values: string[];
  expertise?: string[];
}

const SkillsGroup = ({
  title,
  skills,
  advancedSkills,
}: {
  title: string;
  skills?: Skill;
  advancedSkills?: Skill[];
}) => {
  return (
    <div className="grid grid-cols-1 gap-2 lg:gap-6 lg:grid-cols-3 mx-auto max-w-sm mb-2">
      <div className="text-md font-medium text-center lg:text-right lg:ml-2 mb-2">
        {title.toUpperCase()}
      </div>

      {skills && (
        <div className="col-span-2 text-center mb-2">
          {skills.values.map((value, index) => {
            const isExpertise =
              skills.expertise && skills.expertise.includes(value);
            return (
              <div
                key={value}
                className={`relative inline-flex ${isExpertise ? "mr-2" : ""} ${index === 0 ? '' : 'ml-2'}`}
              >
                <div className="font-medium">{value}</div>
                {skills.expertise && skills.expertise.includes(value) && (
                  <Indicator />
                )}
              </div>
            );
          })}
        </div>
      )}
      {advancedSkills && (
        <div className="col-span-2">
          {advancedSkills.map((skill, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-2 gap-2 divide-black divide-x mb-2"
              >
                <div className="text-right font-light italic text-gray-800">
                  {skill.title}
                </div>
                <div className="pl-2">
                  {skill.values.map((value) => (
                    <div key={value}>
                      <div className="relative inline-flex">
                        <div className="font-medium">{value}</div>
                        {skill.expertise && skill.expertise.includes(value) && (
                          <Indicator />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SkillsGroup;
