import { TemplateHome } from "../templates";

import { TopBar } from "../molecules";
import { FirstScreen, SecondScreen } from "../organisms"


export const Home = () => {
  return <TemplateHome 
    topBar={<TopBar/>} 
    screens={[
      <FirstScreen/>,
      <SecondScreen/>
    ]}
    />;
};
