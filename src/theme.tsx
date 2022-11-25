import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let themeCustom = createTheme({
  palette: {
    primary: {
      main: "#e4a0a1",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

themeCustom = responsiveFontSizes(themeCustom);

export default themeCustom;
