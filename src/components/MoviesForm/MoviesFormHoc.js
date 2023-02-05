import { withStyles } from "@mui/styles";
import { compose } from "recompose";
import { graphql } from "react-apollo";

import { addMovieMutation, updateMovieMutation } from "./mutations";
import { moviesQuery } from "../MoviesTable/queries";
import { directorsQuery } from "./queries";

import { styles } from "./styles";

const withGraphqlAdd = graphql(addMovieMutation, {
  props: ({ mutate }) => ({
    addMovie: (movie) =>
      mutate({
        variables: movie,
        refetchQueries: [{ query: moviesQuery }],
      }),
  }),
});

const withGraphqlupdate = graphql(updateMovieMutation, {
  props: ({ mutate }) => ({
    updateMovie: (movie) =>
      mutate({
        variables: movie,
        refetchQueries: [{ query: moviesQuery }],
      }),
  }),
});

export default compose(
  withStyles(styles),
  withGraphqlAdd,
  withGraphqlupdate,
  graphql(directorsQuery)
);
