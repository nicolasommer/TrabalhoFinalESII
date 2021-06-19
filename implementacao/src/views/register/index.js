import React from "react";
import Fields from "./components/Fields";
import { Stepper, Step, StepLabel, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import initialValues from "./initialValues";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "65px",
  },
}));

const RegisterForm = () => {
  const classes = useStyles();

  const [formState, setFormState] = React.useState(initialValues);

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Etapa 1", "Etapa 2", "Etapa 3"];

  return (
    <>
      <Container className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Fields
          formState={formState}
          setFormState={setFormState}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        ></Fields>
      </Container>
    </>
  );
};

export default RegisterForm;
