import React from "react";

import { InputBase } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import withHocs from "./MoviesSearchHoc";

class MoviesSearch extends React.Component {
  render() {
    const { classes, name, handleChange, handleSearch } = this.props;

    return (
      <div className={classes.search}>
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
          }}
        />
      </div>
    );
  }
}

export default withHocs(MoviesSearch);
