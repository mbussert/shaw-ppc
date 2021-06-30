import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import {
  Container,
  Button,
  Icon,
  TextField,
  Select,
  MenuItem,
  Divider,
  FormControl,
  FormHelperText,
  Tooltip,
  Grid,
  Card,
  Checkbox,
  FormControlLabel,
  Hidden,
  Step,
  Stepper,
  StepLabel,
  StepContent,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function getSteps() {
  return ["Create Your Project", "Add Wall(s)", "Save/Submit"];
}

function getStepContent(step) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  switch (step) {
    case 0:
      return (
        <Grid container justify="center" style={{ marginBottom: 10 }}>
          <Grid item container>
            <TextField
              id="title"
              label="Project Title"
              variant="outlined"
              name="projectTitle"
              helperText="Please enter a title for your project."
              fullWidth
              style={{ margin: 8 }}
              required
            />
          </Grid>
          <Grid container item justify="space-between" xs={12}>
            <TextField
              id="firstname"
              label="First Name"
              variant="outlined"
              name="firstName"
              style={{ margin: 8, width: "45%" }}
            />
            <TextField
              id="lastname"
              label="Last Name"
              variant="outlined"
              name="lastName"
              style={{ margin: 8, width: "45%" }}
            />
          </Grid>
          <Grid container item justify="space-between">
            <TextField
              id="email"
              label="Email Address"
              variant="outlined"
              name="email"
              style={{ margin: 8, width: "45%" }}
            />
            <TextField
              id="phone"
              label="Phone Number"
              variant="outlined"
              name="phone"
              type="text"
              placeholder="e.g. (248) 555-5555"
              style={{ margin: 8, width: "45%" }}
            />
            <FormControl fullWidth style={{ margin: 8 }}>
              <Select disabled defaultValue={1} variant="outlined">
                <MenuItem value={1}>Material WC-J3</MenuItem>
              </Select>
              <FormHelperText style={{ margin: 8 }}>Required</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      );
    case 1:
      return (
        <Grid container justify="center" style={{ marginBottom: 10 }}>
          <Grid container item justify="center">
            <div>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
              >
                Add New Wall
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Add New Wall</DialogTitle>
                <DialogContent>
                  <DialogContentText style={{ marginBottom: 20 }}>
                    Please enter a title and the dimensions of this wall (in
                    inches).
                  </DialogContentText>
                  <TextField
                    autoFocus
                    id="wallTitle"
                    variant="outlined"
                    label="Wall Title"
                    type="text"
                    required
                    helperText="Enter a name in order to identify this wall in your project."
                    fullWidth
                    style={{ marginBottom: 10 }}
                  />
                  <TextField
                    id="width"
                    label="Width"
                    variant="outlined"
                    name="width"
                    type="number"
                    helperText="Inches"
                    style={{ marginBottom: 10, marginRight: 10, width: "49%" }}
                  />
                  <TextField
                    id="height"
                    label="Height"
                    variant="outlined"
                    name="height"
                    type="number"
                    helperText="Inches"
                    style={{ marginBottom: 10, width: "49%" }}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="secondary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Add Wall
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Grid>
        </Grid>
      );
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "35%",
    marginBottom: 40,
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function Project() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const classes = useStyles();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid container justify="center">
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Thank you. Your project has been submitted.</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    </Grid>
  );
}

export default Project;
