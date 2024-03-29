import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback, ErrorHandler } from "./utils/errors";
import themeCustom from "./theme";

import { InitLoader } from "./components/molecules";

const Main = React.lazy(() => import("./components/pages/main"));

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={ErrorHandler}>
      <ThemeProvider theme={themeCustom}>
        <Suspense fallback={<InitLoader />}>
          <Router>
            <Main />
          </Router>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
