import { responsiveFontSizes, createMuiTheme } from "@material-ui/core";
// import "typeface-roboto";
let muiThemeLight = createMuiTheme({
  overrides: {},
  palette: {
    text: {
      secondary: "#60d284"
    }
  },
  typography: {
    h4: {
      color: "#60d284"
      // fontFamily: "typeface-roboto"
    }
  }
});

muiThemeLight = responsiveFontSizes(muiThemeLight);
export { muiThemeLight };
