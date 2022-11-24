import React, { Suspense } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { InitLoader } from "./components/molecules";

const Main = React.lazy(() => import("./components/pages/main"));

const theme = responsiveFontSizes(createTheme());

const ErrorFallback = () => {
  return (
    <div role="alert">
      Une erreur s'est produite. Si le problème persiste, merci de contacter
      l'administrateur à l'adresse suivante : antoine.ludeau@gmail.com
    </div>
  );
};

const ErrorHandler = (error: Error) => {
  console.log(error);
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={ErrorHandler}>
      <Suspense fallback={<InitLoader />}>
        <ThemeProvider theme={theme}>
          <Router>
            <Main />
          </Router>
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
