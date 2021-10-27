import { TemplateHome } from "../templates";

import { TopBar } from "../molecules";
import { FirstSection, SecondSection, ThirdSection, FourthSection } from "../organisms";

export const Home = () => {
  return (
    <TemplateHome
      topBar={<TopBar />}
      firstSection={<FirstSection />}
      secondSection={<SecondSection/>}
      thirdSection={<ThirdSection/>}
      fourthSection={<FourthSection/>}
    />
  );
};
