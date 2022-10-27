import { Home } from './components/pages'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme( );

theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
