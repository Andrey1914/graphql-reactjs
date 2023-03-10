import React from "react";

import {
  TextField,
  OutlinedInput,
  MenuItem,
  Select,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  Button,
  DialogTitle,
  Dialog,
} from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";

import withHocs from "./MoviesFormHoc";

class MoviesForm extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  handleSave = () => {
    const { selectedValue, onClose, addMovie, updateMovie } = this.props;
    const { id, name, genre, rate, directorId, watched } = selectedValue;
    id
      ? updateMovie({
          id,
          name,
          genre,
          rate: Number(rate),
          directorId,
          watched: Boolean(watched),
        })
      : addMovie({
          name,
          genre,
          rate: Number(rate),
          directorId,
          watched: Boolean(watched),
        });
    onClose();
  };

  render() {
    const {
      classes,
      data = {},
      open,
      handleChange,
      handleSelectChange,
      handleCheckboxChange,
      selectedValue = {},
    } = this.props;
    const { name, genre, rate, directorId, watched } = selectedValue;
    const { directors = [] } = data;

    return (
      <Dialog
        onClose={this.handleClose}
        open={open}
        aria-labelledby="simple-dialog-title"
      >
        <DialogTitle className={classes.title} id="simple-dialog-title">
          Movie information
        </DialogTitle>

        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={name}
            onChange={handleChange("name")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-genre"
            label="Genre"
            className={classes.textField}
            value={genre}
            onChange={handleChange("genre")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-rate"
            label="Rate"
            value={rate}
            onChange={handleChange("rate")}
            type="number"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <FormControl variant="outlined" className={classes.formControlSelect}>
            <InputLabel
              ref={(ref) => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-age-simple"
            >
              Director
            </InputLabel>
            <Select
              value={directorId}
              onChange={handleSelectChange}
              input={
                <OutlinedInput
                  name="directorId"
                  id="outlined-director"
                  labelwidth={57}
                />
              }
            >
              {directors.map((director) => (
                <MenuItem key={director.id} value={director.id}>
                  {director.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className={classes.wrapper}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={watched}
                  onChange={handleCheckboxChange("watched")}
                  value="watched"
                />
              }
              label="Watched movie"
            />
            <Button
              onClick={this.handleSave}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              <SaveIcon /> Save
            </Button>
          </div>
        </form>
      </Dialog>
    );
  }
}

export default withHocs(MoviesForm);
