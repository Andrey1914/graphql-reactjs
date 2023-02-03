// import { styled } from "@mui/material/styles";
import { compose } from "recompose";
import { graphql } from "react-apollo";

import { addDirectorMutation } from "./mutations";
import { directorsQuery } from "../DirectorsTable/queries";

// import { styles } from "./styles";

const withGraphqlAdd = graphql(addDirectorMutation, {
  props: ({ mutate }) => ({
    addDirector: (director) =>
      mutate({
        variables: director,
        refetchQueries: [{ query: directorsQuery }],
      }),
  }),
});

// export default compose(styled(styles), withGraphqlAdd);
export default compose(withGraphqlAdd);
