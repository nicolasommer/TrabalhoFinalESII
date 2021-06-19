import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";
import UsecaseButtons from "./components/UsecaseButtons";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        style={{
          marginTop: "100px",
          textAlign: "center",
          fontFamily: "BlinkMacSystemFont",
        }}
        variant="h1"
      >
        MY GYM
      </Typography>
      <Container maxWidth="sm" className={classes.root}>
        <UsecaseButtons />
      </Container>
    </>
  );
};

export default Home;
