import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

import MoviesDialog from "../MoviesDialog/MoviesDialog";
import MoviesSearch from "../MoviesSearch/MoviesSearch";

import withHocs from "./MoviesTableHoc";

class MoviesTable extends React.Component {
  state = {
    anchorEl: null,
    openDialog: false,
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleSearch = (e) => {
    const { data } = this.props;
    const { name } = this.props;

    if (e.charCode === 13) {
      data.fetchMore({
        variables: { name },
        updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
      });
    }
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
        <Paper>
          <CssBaseline />
          <MoviesSearch
            // name={name}
            handleChange={this.handleChange}
            handleSearch={this.handleSearch}
          />
        </Paper>
        <MoviesDialog
          open={openDialog}
          handleClose={this.handleDialogClose}
          id={activeElem.id}
        />
        <Paper className={classes.root}>
          {/* <Paper> */}
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
                    <TableCell align="right">
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
// export default MoviesTable;
