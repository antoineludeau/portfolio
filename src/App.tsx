import { Home } from "./components/pages";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

let theme = createTheme();

theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Home />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
