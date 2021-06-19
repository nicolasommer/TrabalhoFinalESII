import React from "react";
import { Typography, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    textAlign: "center",
    padding: "40px",
    marginTop: "50px",
  },
  button: {
    width: "350px",
    marginTop: "30px",
  },
}));

const UsecaseButtons = ({ children, subtitle }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.paper}>
        <Typography
          style={{ fontWeight: "bold", fontSize: "22px", marginBottom: "10px" }}
        >
          CASOS DE USO DISPONÍVEIS:
        </Typography>
        <Link component={RouterLink} to="/register" underline="none">
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="primary"
          >
            REGISTRAR-SE
          </Button>
        </Link>

        <Link component={RouterLink} to="/list" underline="none">
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="primary"
          >
            VISUALIZAR TREINOS MARCADOS
          </Button>
        </Link>

        <Link component={RouterLink} to="/list-delete" underline="none">
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="primary"
          >
            DESMARCAR TREINO
          </Button>
        </Link>
      </div>
    </>
  );
};

export default UsecaseButtons;
