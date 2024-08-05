
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
  skills?: string[];
  advancedSkills?: Skill[];
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto mb-2 max-w-sm gap-2">
      <div className="text-lg uppercase text-white text-center lg:text-right lg:pl-1 px-2 mb-1 bg-red-300 rounded-md">
        {title}
      </div>

      {skills && (
        <div className="text-center col-span-2 font-medium">
          {skills.join(", ")}
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
                      <div className="font-medium">{value}</div>
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
