import React from "react";
import {
  Box,
  Step,
  Typography,
  StepLabel,
  Stepper,
  StepContent,
  Divider
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import sidebarImage from "./../../public/img/sidebarImage.svg";

const useStyles = makeStyles({
  image: {
    width: "90%",
    maxWidth: "300px",
    height: "auto"
  }
});

const STEPS = [
  {
    label: "Personal information",
    id: 1,
    subText: "Please enter your personal information"
  },
  {
    label: "More about you",
    id: 2,
    subText: "More info about you"
  },
  {
    label: "Confirm Details",
    id: 3,
    subText: "Confirm your details before submitting"
  }
];

const Sidebar = props => {
  //header
  //progress bar +(text and icon) in flex
  //Image
  const classes = useStyles();
  const { pageNumber } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      mt="20"
      height="80vh"
      // marginLeft="30px"
      justifyContent="space-around"
      alignItems="center"
    >
      <Typography color="textSecondary" variant="h5">
        User Registration
      </Typography>
      <Divider />
      <Stepper activeStep={pageNumber} orientation="vertical">
        {STEPS.map(step => (
          <Step key={step.id}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography variant="button">{step.subText}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      <img src={sidebarImage} className={classes.image}></img>
    </Box>
  );
};

export default Sidebar;
