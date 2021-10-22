import { BrowserRouter as Router, Route } from "react-router-dom";
interface TemplateHomeProps {
  topBar: React.ReactNode;
  firstScreen: any;
}

export const TemplateHome = ({ topBar, firstScreen }: TemplateHomeProps) => {
  return (
    <>
      <Router>
        {topBar}
        {firstScreen}
      </Router>
    </>
  );
};
