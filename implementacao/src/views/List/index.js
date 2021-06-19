import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TrainingList from "./components/List";
import { Typography, Container, Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
  root: {},
});

const List = ({ showButtonDelete }) => {
  const classes = useStyles();

  const [redirect, setRedirect] = React.useState(false);

  return (
    <>
      {redirect && <Redirect to="/home" />}
      <Container>
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginTop: "50px" }}
        >
          Treinos marcados:
        </Typography>
        <TrainingList showButtonDelete={showButtonDelete} />
        <Button
          variant="outlined"
          size="large"
          style={{ marginTop: "50px", width: "200px", marginLeft: "265px" }}
          color="primary"
          onClick={() => setRedirect(true)}
        >Voltar</Button>
      </Container>
    </>
  );
};

export default List;
