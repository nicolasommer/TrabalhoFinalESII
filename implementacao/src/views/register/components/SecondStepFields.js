import React from "react";
import {
  TextField,
  Container,
  Box,
  Grid,
  Typography,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  root: {},
  textField: {
    width: "800px",
    marginTop: "50px",
    marginLeft: "50%",
    transform: "translate(-50%, 0)",
  },
}));

const SecondStepFields = ({
  handleChange,
  formState,
  setFormState,
  errors,
  checked1,
  checked2,
  setChecked1,
  setChecked2
}) => {
  const classes = useStyles();

  const handleChangeCheckbox = (event) => {
    if (checked1) {
      setChecked2(true);
      setFormState({ ...formState, gymOwner: false });
      return setChecked1(false);
    }

    setChecked2(false);
    setFormState({ ...formState, gymOwner: true });
    return setChecked1(true);
  };

  return (
    <>
      <Typography
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}
        variant="h5"
      >
        Você usará o MY GYM para:
      </Typography>

      <Box display="flex" justifyContent="center">
        <FormControlLabel
          control={
            <Checkbox
              checked={checked1}
              onChange={handleChangeCheckbox}
              name="checked"
            />
          }
          label="Encontrar academias para treinar"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={checked2}
              onChange={handleChangeCheckbox}
              name="checked"
            />
          }
          label="Cadastrar nova academia no aplicativo"
        />
      </Box>

      {checked2 && (
        <>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Nome da academia"
            defaultValue={formState.gymName}
            name="gymName"
            onChange={handleChange}
            className={classes.textField}
            error={errors.gymName}
            helperText={
              errors.gymName ? "Preencha o campo antes de continuar" : null
            }
          />

          <Box
            display="flex"
            justifyContent="flex-start"
            style={{ marginLeft: "218px", marginTop: "50px" }}
          >
            <TextField
              id="standard-select-currency"
              label="Valor da diária"
              defaultValue={formState.value}
              name="value"
              onChange={handleChange}
              style={{ width: "230px", marginRight: "90px" }}
              error={errors.value}
              helperText={
                errors.value ? "Preencha o campo antes de continuar" : null
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
            />
            <TextField
              id="time"
              label="Horário de Abertura"
              type="time"
              defaultValue={formState.openingTime}
              onChange={handleChange}
              style={{ width: "200px" }}
              name="openingTime"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <Typography
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                marginTop: "28px",
              }}
            >
              até
            </Typography>
            <TextField
              id="time"
              label="Horário de Fechamento"
              type="time"
              name="closingTime"
              defaultValue={formState.closingTime}
              onChange={handleChange}
              style={{ width: "200px" }}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            style={{ marginTop: "50px", marginLeft: "218px" }}
          >
            <Typography>Fazer upload de fotos</Typography>
            <IconButton style={{ marginTop: "-13px" }} disabled>
              <CloudUploadIcon />
            </IconButton>
          </Box>
        </>
      )}

      {checked1 && (
        <Box
          display="flex"
          justifyContent="center"
          style={{ marginTop: "30px" }}
        >
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            style={{ width: "220px", marginRight: "50px" }}
            name="gender"
            value={formState.gender}
            onChange={handleChange}
            label="Selecione o gênero"
          >
            <MenuItem value="masculino">Masculino</MenuItem>
            <MenuItem value="feminino">Feminino</MenuItem>
            <MenuItem value="outro">Outro</MenuItem>
          </Select>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="none"
              id="date-picker-inline"
              name="birthDate"
              label="Data de Nascimento"
              style={{ width: "300px" }}
              onChange={handleChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Box>
      )}
    </>
  );
};

export default SecondStepFields;
