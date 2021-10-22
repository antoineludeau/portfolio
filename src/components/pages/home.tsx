import { TemplateHome } from "../templates";

import { TopBar } from "../molecules";
import { FirstScreen } from "../organisms";

export const Home = () => {
  return (
    <TemplateHome
      topBar={<TopBar />}
      firstScreen={<FirstScreen />}
    />
  );
};
