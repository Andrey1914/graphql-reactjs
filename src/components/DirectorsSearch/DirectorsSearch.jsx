import React from "react";

import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";

import SearchIcon from "@mui/icons-material/Search";

import withHocs from "./DirectorsSearchHoc";

class DirectorsSearch extends React.Component {
  render() {
    const { classes, name, handleChange, handleSearch } = this.props;

    return (
      <>
        <CssBaseline />
        <Box className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            onChange={handleChange("name")}
            onKeyPress={(e) => handleSearch(e)}
            value={name}
            placeholder="Search..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </Box>
      </>
    );
  }
}

export default withHocs(DirectorsSearch);
