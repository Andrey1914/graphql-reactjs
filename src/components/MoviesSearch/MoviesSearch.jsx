import React from "react";

import { InputBase } from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

// import withHocs from "./MoviesSearchHoc";

class MoviesSearch extends React.Component {
  render() {
    // const { classes } = this.props;

    return (
      // <div className={classes.search}>
      //   <div className={classes.searchIcon}>
      <div>
        <div>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search..."
          // classes={{
          //   root: classes.inputRoot,
          //   input: classes.inputInput,
          // }}
        />
      </div>
    );
  }
}

// export default withHocs(MoviesSearch);
export default MoviesSearch;
