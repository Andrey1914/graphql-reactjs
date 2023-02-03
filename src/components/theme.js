import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    useNextVariants: true,
    color: "#fff",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#E535AB",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2196f3",
      contrastText: "#fff",
    },
    error: {
      main: "#d32f2f",
      contrastText: "#fff",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
