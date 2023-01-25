import React from "react";

import { Paper } from "@mui/material/Paper";
import { Table } from "@mui/material/Table";
import { TableBody } from "@mui/material/TableBody";
import { TableCell } from "@mui/material/TableCell";
import { TableHead } from "@mui/material/TableHead";
import { TableRow } from "@mui/material/TableRow";
import MoreIcon from "@mui/material/MoreVert";
import { IconButton } from "@mui/material/IconButton";
import { MenuItem } from "@mui/material/MenuItem";
import { Menu } from "@mui/material/Menu";
import DeleteIcon from "@mui/material/Delete";
import CreateIcon from "@mui/material/Create";

import DirectorsDialog from "../DirectorsDialog/DirectorsDialog";

import withHocs from "./DirectorsTableHoc";

const directors = [
  {
    id: 1,
    name: "Quentin Tarantino",
    age: 55,
    movies: [{ name: "Movie 1" }, { name: "Movie 2" }],
  },
  {
    id: 2,
    name: "Guy Ritchie",
    age: 50,
    movies: [{ name: "Movie 1" }, { name: "Movie 2" }],
  },
];

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
    const { classes } = this.props;

    return (
      <>
        <DirectorsDialog
          open={openDialog}
          handleClose={this.handleDialogClose}
          id={activeElem.id}
        />
        <Paper className={classes.root}>
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
                          <MoreIcon />
                        </IconButton>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={this.handleClose}
                        >
                          <MenuItem onClick={() => this.handleEdit(director)}>
                            <CreateIcon />
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
