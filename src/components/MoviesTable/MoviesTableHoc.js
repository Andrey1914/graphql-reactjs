// import { styled } from "@mui/material/styles";
import { compose } from "recompose";
import { graphql } from "react-apollo";

import { moviesQuery } from "./queries";

// import { styles } from "./styles";

// export default compose(styled(styles), graphql(moviesQuery));
export default compose(graphql(moviesQuery));
