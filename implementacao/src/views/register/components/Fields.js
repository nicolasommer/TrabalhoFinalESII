import React from "react";
import {
  TextField,
  Container,
  Box,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FirstStepFields from "./FirstStepFields";
import SecondStepFields from "./SecondStepFields";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  textField: {
    width: "800px",
    marginTop: "50px",
    marginLeft: "50%",
    transform: "translate(-50%, 0)",
  },
  passwordField: {
    display: "inline-flex",
    width: "385px",
    marginTop: "50px",
  },
}));

const initialErrors = {
  username: false,
  email: false,
  phone: false,
  password: false,
  confirmPassword: false,
  gender: false,
  birthDate: false,
  gymOwner: false,
  gymName: false,
  value: false,
  openingTime: false,
  closingTime: false,
};

const Fields = ({ formState, setFormState, activeStep, setActiveStep }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
    console.log(formState);
  };

  const [checked1, setChecked1] = React.useState(true);

  const [checked2, setChecked2] = React.useState(false);

  const handleChangeStep = (step) => {
    if (activeStep === 2 && step === "next") return handleSubmit();

    if (activeStep === 0 && step !== "next") return setRedirect(true);

    if (step === "next") return validateFields();

    if (step === "back") return setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    if (checkboxTerms) {
      setRedirect(true);
    }

    setErrors(true);
  };

  const [checkboxTerms, setCheckboxTerms] = React.useState(false);

  const [redirect, setRedirect] = React.useState(false);

  const handleChangeCheckbox = () => {
    setCheckboxTerms(!checkboxTerms);
  };

  const [errors, setErrors] = React.useState(initialErrors);

  const validateFields = () => {
    if (!formState.username.length) return setErrors({ ...errors, username: true });
    if (!formState.email.length) return setErrors({ ...errors, email: true });
    if (!formState.phone.length) return setErrors({ ...errors, phone: true });
    if (!formState.password) return setErrors({ ...errors, password: true });
    if (!formState.confirmPassword || formState.confirmPassword !== formState.password) return setErrors({ ...errors, confirmPassword: true });
    if (!formState.gymName && !checked1) return setErrors({ ...errors, gymName: true });
    if (!formState.value && !checked1) return setErrors({ ...errors, value: true });

    setErrors(initialErrors);
    setActiveStep(activeStep + 1);
  };

  return (
    <form>
      {redirect && <Redirect to="/home" />}

      {activeStep === 0 && formState && errors && (
        <FirstStepFields
          formState={formState}
          errors={errors}
          setErrors={setErrors}
          handleChange={handleChange}
        />
      )}

      {activeStep === 1 && formState && errors && (
        <SecondStepFields
          setFormState={setFormState}
          formState={formState}
          checked1={checked1}
          checked2={checked2}
          setChecked1={setChecked1}
          setChecked2={setChecked2}
          handleChange={handleChange}
          errors={errors}
          setErrors={setErrors}
        />
      )}

      {activeStep === 2 && formState && (
        <>
          <div style={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              style={{ marginTop: "50px", marginBottom: "100px" }}
            >
              Tudo pronto pra você usar o app!
            </Typography>

            <ThumbUpIcon
              style={{
                display: "block",
                fontSize: 80,
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "70px",
              }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxTerms}
                  onChange={handleChangeCheckbox}
                  name="checked"
                />
              }
              label="Ao usar o My Gym você concorda com os termos de usuário"
            />
            {errors && !checkboxTerms && (
              <FormHelperText
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  marginTop: "-10px",
                }}
                error={true}
              >
                *Você precisa concordar com os termos antes de se registrar*
              </FormHelperText>
            )}
          </div>
        </>
      )}

      <Container>
        <Box display="flex" justifyContent="center">
          <Button
            variant="outlined"
            size="large"
            style={{ marginTop: "50px", width: "200px", marginRight: "30px" }}
            color="primary"
            onClick={() => handleChangeStep("back")}
          >
            Voltar
          </Button>
          <Button
            variant="contained"
            size="large"
            style={{ marginTop: "50px", width: "200px" }}
            color="primary"
            onClick={() => handleChangeStep("next")}
          >
            Próximo
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default Fields;
