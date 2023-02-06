import React from "react";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import withHocs from "./DirectorsSearchHoc";

class DirectorsSearch extends React.Component {
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
            input: classes.inputInput,
          }}
        />
      </div>
    );
  }
}

// export default DirectorsSearch;
export default withHocs(DirectorsSearch);
