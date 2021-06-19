import React from "react";
import {
  TextField,
  Container,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const FirstStepFields = ({ handleChange, formState, errors, setError }) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        id="standard-required"
        variant="outlined"
        label="Nome Completo"
        defaultValue={formState.username}
        name="username"
        onChange={handleChange}
        className={classes.textField}
        error={errors.username}
        helperText={
          errors.username ? "Preencha o campo antes de continuar" : null
        }
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Email"
        defaultValue={formState.email}
        name="email"
        error={errors.email}
        helperText={errors.email ? "Preencha o campo antes de continuar" : null}
        onChange={handleChange}
        className={classes.textField}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Telefone"
        defaultValue={formState.phone}
        name="phone"
        onChange={handleChange}
        error={errors.phone}
        helperText={errors.phone ? "Preencha o campo antes de continuar" : null}
        className={classes.textField}
      />
      <Container>
        <Box display="flex" justifyContent="center">
          <TextField
            id="standard-start-adornment"
            variant="outlined"
            label="Senha"
            defaultValue={formState.password}
            name="password"
            error={errors.password}
            helperText={
              errors.password ? "Preencha o campo antes de continuar" : null
            }
            onChange={handleChange}
            className={classes.passwordField}
            style={{ marginRight: "30px " }}
          />
          <TextField
            id="outlined-adornment-password"
            variant="outlined"
            label="Confirmar Senha"
            defaultValue={formState.confirmPassword}
            error={errors.confirmPassword}
            helperText={
              errors.confirmPassword ? "As senhas devem ser iguais" : null
            }
            name="confirmPassword"
            onChange={handleChange}
            className={classes.passwordField}
          />
        </Box>
      </Container>
    </>
  );
};

export default FirstStepFields;
