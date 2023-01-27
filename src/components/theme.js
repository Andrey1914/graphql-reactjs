import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    useNextVariants: true,
    color: "#fff",
  },
  palette: {
    type: "dark",
    primary: {
      main: "#E535AB",
    },
    secondary: blue,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    getContrastText: "#fff",
  },
});
