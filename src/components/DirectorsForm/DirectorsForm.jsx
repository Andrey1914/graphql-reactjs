import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import SaveIcon from "@mui/icons-material/Save";

// import withHocs from "./DirectorsFormHoc";

class DirectorsForm extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  handleSave = () => {
    const { selectedValue, onClose } = this.props;
    const { id, name, age } = selectedValue;
    onClose();
  };

  render() {
    // const { classes, open, handleChange, selectedValue = {} } = this.props;
    const { open, handleChange, selectedValue = {} } = this.props;
    const { name, age } = selectedValue;

    return (
      <Dialog
        onClose={this.handleClose}
        open={open}
        aria-labelledby="simple-dialog-title"
      >
        {/* <DialogTitle className={classes.title} id="simple-dialog-title"> */}
        <DialogTitle id="simple-dialog-title">Director information</DialogTitle>
        {/* <form className={classes.container} noValidate autoComplete="off"> */}
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Name"
            // className={classes.textField}
            value={name}
            onChange={handleChange("name")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-rate"
            label="Age"
            // className={classes.textField}
            value={age}
            onChange={handleChange("age")}
            type="number"
            margin="normal"
            variant="outlined"
          />
          {/* <div className={classes.wrapper}> */}
          <div>
            <Button
              onClick={this.handleSave}
              variant="contained"
              color="primary"
              // className={classes.button}
            >
              <SaveIcon /> Save
            </Button>
          </div>
        </form>
      </Dialog>
    );
  }
}

// export default withHocs(DirectorsForm);
export default DirectorsForm;
