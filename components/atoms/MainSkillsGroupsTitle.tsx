const MainSkillsGroupsTitle = ({
  title,
  iconComponent,
}: {
  title: string;
  iconComponent: React.ReactElement;
}) => {
  return (
    <div className="flex justify-center gap-2 mb-4">
      <h3 className="text-red-400 text-gray-900 text-3xl">{title}</h3>
      <div className="stroke-red-400">{iconComponent}</div>
    </div>
  );
};

export default MainSkillsGroupsTitle;
