import { styled } from "@mui/material/styles";
import { compose } from "recompose";

import { styles } from "./styles";

export default compose(styled(styles, { withTheme: true }));
