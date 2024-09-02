const MainSkillsGroupsTitle = ({
  title,
  iconComponent,
}: {
  title: string;
  iconComponent: React.ReactElement;
}) => {
  return (
    <div className="flex justify-center mt-2 mb-4 bg-red-400 bg-opacity-70 w-fit mx-auto rounded-lg">
      <div className="text-center font-medium text-2xl text-white p-1 pl-2">{title}</div>
      <div className="ml-2 mr-2 mt-2 h-fit stroke-white">{iconComponent}</div>
    </div>
  );
};

export default MainSkillsGroupsTitle;
