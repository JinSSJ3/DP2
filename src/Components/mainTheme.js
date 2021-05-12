import { createMuiTheme } from "@material-ui/core";

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#EDF5E1",
      main: "#05386B",
      dark: "#F88E41",
      contrastText: "#EDF5E1",
    },
    secondary: {
      light: "#EDF5E1",
      main: "#5CDB95",
      dark: "#091118",
    },
  },
});

export default mainTheme;