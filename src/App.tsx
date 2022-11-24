import { Main } from "./components/pages";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

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

const myErrorHandler = (error: Error) => {
  console.log(error);
};

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        <ThemeProvider theme={theme}>
          <Router>
            <Main />
          </Router>
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
