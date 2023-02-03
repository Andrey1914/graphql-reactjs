// import { styled } from "@mui/material/styles";
import { compose } from "recompose";
import { graphql } from "react-apollo";

import { directorsQuery } from "./queries";

// import { styles } from "./styles";

// export default compose(styled(styles), graphql(directorsQuery));
// export default graphql(directorsQuery);
export default compose(graphql(directorsQuery));
