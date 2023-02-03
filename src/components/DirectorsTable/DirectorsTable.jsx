import React from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

import DirectorsDialog from "../DirectorsDialog/DirectorsDialog";

import withHocs from "./DirectorsTableHoc";

class DirectorsTable extends React.Component {
  state = {
    anchorEl: null,
    openDialog: false,
  };

  handleDialogOpen = () => {
    this.setState({ openDialog: true });
  };
  handleDialogClose = () => {
    this.setState({ openDialog: false });
  };

  handleClick = ({ currentTarget }, data) => {
    this.setState({
      anchorEl: currentTarget,
      data,
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleEdit = (row) => {
    this.props.onOpen(this.state.data);
    this.handleClose();
  };

  handleDelete = () => {
    this.handleDialogOpen();
    this.handleClose();
  };

  render() {
    const { anchorEl, openDialog, data: activeElem = {} } = this.state;
    // const { classes, data = {} } = this.props;
    const { data = {} } = this.props;

    const { directors = [] } = data;

    // console.log(this.props.data);

    return (
      <>
        <DirectorsDialog
          open={openDialog}
          handleClose={this.handleDialogClose}
          id={activeElem.id}
        />
        {/* <Paper className={classes.root}> */}
        <Paper elevation={1}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell>Movies</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {directors.map((director) => {
                return (
                  <TableRow key={director.id}>
                    <TableCell component="th" scope="row">
                      {director.name}
                    </TableCell>
                    <TableCell align="right">{director.age}</TableCell>
                    <TableCell>
                      {director.movies.map((movie, key) => (
                        <div key={movie.name}>
                          {`${key + 1}.`}
                          {movie.name}
                        </div>
                      ))}
                    </TableCell>
                    <TableCell align="right">
                      <>
                        <IconButton
                          color="inherit"
                          onClick={(e) => this.handleClick(e, director)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={this.handleClose}
                        >
                          <MenuItem onClick={() => this.handleEdit(director)}>
                            <CreateIcon /> Edit
                          </MenuItem>
                          <MenuItem onClick={this.handleDelete}>
                            <DeleteIcon /> Delete
                          </MenuItem>
                        </Menu>
                      </>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
}

export default withHocs(DirectorsTable);
// export default DirectorsTable;
