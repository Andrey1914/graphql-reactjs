import React from "react";
import Tabs from "./components/Tabs/Tabs";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/theme";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  // uri: `http://localhost:3005/graphql`,
  uri: `https://graphql-server-cb11.onrender.com`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Tabs />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
