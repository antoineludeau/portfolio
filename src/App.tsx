import React, { Suspense } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Box from "@mui/material/Box";

import { Loader } from "./components/atoms";

const Main = React.lazy(() => import("./components/pages/main"));

let theme = createTheme();

theme = responsiveFontSizes(theme);

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
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={ErrorHandler}>
        <Suspense
          fallback={
            <Box height="100vh" width="100%" alignItems="center" display="flex">
              <Loader />
            </Box>
          }
        >
          <ThemeProvider theme={theme}>
            <Router>
              <Main />
            </Router>
          </ThemeProvider>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
