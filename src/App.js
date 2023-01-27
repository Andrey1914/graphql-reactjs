// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Tabs from "./components/Tabs/Tabs";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Tabs />
    </ThemeProvider>
  );
}

export default App;
