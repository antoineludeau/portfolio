import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let themeCustom = createTheme({
  palette: {
    primary: {
      main: "#E4A0A1",
      light: "#E4A0A1CC",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

themeCustom = responsiveFontSizes(themeCustom);

export default themeCustom;
