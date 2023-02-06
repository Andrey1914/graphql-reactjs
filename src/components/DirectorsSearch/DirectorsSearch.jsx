import React from "react";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import withHocs from "./DirectorsSearchHoc";

class DirectorsSearch extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.search}>
        {/* <div> */}
        <div className={classes.searchIcon}>
          {/* <div> */}
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
    );
  }
}

// export default DirectorsSearch;
export default withHocs(DirectorsSearch);
