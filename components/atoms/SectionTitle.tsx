const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="mb-10 mt-12 px-2 text-center font-light text-4xl uppercase bg-gradient-to-r from-red-400 to-red-400/70 bg-no-repeat bg-100%_20px bg-bottom">
      {title}
    </h2>
  );
};

export default SectionTitle;
