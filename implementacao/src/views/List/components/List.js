import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Divider,
  Link,
  CardHeader,
  IconButton,
  Box,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

const treinos = [
  {
    gymName: "Smart Fit",
    openingTime: "15:00",
    closingTime: "16:30",
    endereco: "Rua Augusta, 1585 - Consolação, São Paulo.",
    value: "20,00",
  },
  {
    gymName: "Alta Performance",
    openingTime: "13:00",
    closingTime: "14:30",
    endereco: "Rua da Consolação, 3122 - Cerqueira Cezar, São Paulo.",
    value: "15,00",
  },
  {
    gymName: "Brasil Fitness",
    openingTime: "18:30",
    closingTime: "19:30",
    endereco: "Avenida Angélica, 2424 - Consolação, São Paulo.",
    value: "25,00",
  },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    maxHeight: 190,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "40px",
  },
  title: {
    fontSize: 30,
  },
});

const TrainingList = ({ showButtonDelete }) => {
  const classes = useStyles();

  const [trainings, setTrainings] = React.useState(treinos);

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        {trainings.map((training) => {
          return (
            <Card className={classes.root}>
              <CardHeader
                action={
                  showButtonDelete && (
                    <Button size="small"  onClick={() => setTrainings(treino => treino.filter((props) => props.gymName !== training.gymName))}>
                      DESMARCAR TREINO
                      <IconButton aria-label="settings">
                        <DeleteIcon />
                      </IconButton>
                    </Button>
                  )
                }
                title={training.gymName}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="p"
                  style={{ paddingBottom: "10px" }}
                >
                  Horário marcado: {training.openingTime} até {training.closingTime}{" "}
                  -------- Valor da Diária: {training.value}
                  <br />
                </Typography>
                <Divider></Divider>
                <Typography
                  variant="body2"
                  component="p"
                  style={{ marginTop: "7px", marginBottom: "-18px" }}
                >
                  Endereço: {training.endereco}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://www.smartfit.com.br/"
                  target="blank"
                  style={{ marginLeft: "3px", paddingBottom: '15px' }}
                >
                  ACESSE O SITE
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default TrainingList;
