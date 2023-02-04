import React from "react";
import SwipeableViews from "react-swipeable-views";

import { AppBar, Tabs, Tab, Typography } from "@mui/material";

import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import CameraIcon from "@mui/icons-material/Camera";

import Movies from "../Movies/Movies";
import Directors from "../Directors/Directors";

import withHocs from "./TabsHoc";

const TabContainer = ({ children, dir }) => (
  <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
    {children}
  </Typography>
);

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    // const { theme } = this.props;

    const { value } = this.state;

    return (
      <div className={classes.root}>
        {/* <div> */}
        <AppBar position="static">
          <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
            <Tab label="Movies" icon={<CameraIcon />} />
            <Tab label="Directors" icon={<MovieCreationIcon />} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            {/* <TabContainer> */}
            <Movies />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            {/* <TabContainer> */}
            <Directors />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default withHocs(SimpleTabs);
// export default SimpleTabs;
