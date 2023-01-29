import React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

import MoviesDialog from "../MoviesDialog/MoviesDialog";

import withHocs from "./MoviesTableHoc";

// const movies = [
//   {
//     id: 1,
//     name: "Pulp Fiction",
//     genre: "Crime",
//     rate: 10,
//     director: { name: "Quentin Tarantino" },
//     watched: true,
//   },
//   {
//     id: 2,
//     name: "Lock, Stock and Two Smoking Barrels",
//     genre: "Crime-comedy",
//     rate: 9,
//     director: { name: "Guy Ritchie" },
//     watched: false,
//   },
// ];

class MoviesTable extends React.Component {
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
    this.setState({
      anchorEl: null,
    });
  };

  handleEdit = () => {
    this.props.onOpen(this.state.data);
    this.handleClose();
  };

  handleDelete = () => {
    this.handleDialogOpen();
    this.handleClose();
  };

  render() {
    const { anchorEl, openDialog, data: activeElem = {} } = this.state;
    const { classes, data = {} } = this.props;
    const { movies = [] } = data;

    // console.log(this.props.data);

    return (
      <>
        <MoviesDialog
          open={openDialog}
          handleClose={this.handleDialogClose}
          id={activeElem.id}
        />
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell align="right">Rate</TableCell>
                <TableCell>Director</TableCell>
                <TableCell>Watched</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((movie) => {
                return (
                  <TableRow key={movie.id}>
                    <TableCell component="th" scope="row">
                      {movie.name}
                    </TableCell>
                    <TableCell>{movie.genre}</TableCell>
                    <TableCell align="right">{movie.rate}</TableCell>
                    <TableCell>{movie.director.name}</TableCell>
                    <TableCell>
                      <Checkbox checked={movie.watched} disabled />
                    </TableCell>
                    <TableCell>
                      <>
                        <IconButton
                          color="inherit"
                          onClick={(e) => this.handleClick(e, movie)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={this.handleClose}
                        >
                          <MenuItem onClick={this.handleEdit}>
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

export default withHocs(MoviesTable);
