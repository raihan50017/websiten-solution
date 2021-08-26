import React from "react";
import Header from "./../components/training/header/Header";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Footer from "./training/footer/Footer";

const styles = makeStyles((theme) => ({
  cardContainer: {
    padding: "70px 40px",
    backgroundColor: "#fff",
  },
  card: {
    textAlign: "center",
    lineHeight: "55px",
    padding: "10px 30px",
  },
  userIcon: {
    textAlign: "center",
    padding: "30px 10px",
  },
  cardHeading: {
    height: "100px",
    fontSize: "24px",
    fontWeight: "700",
  },
  cardDescription: {
    height: "100px",
    fontSize: "18px",
    lineHeight: "25px",
    fontStyle: "Montserrat",
    color: "gray",
    margin: "10px",
  },
   button: {
      backgroundColor: "#F39200",
      color: "#fff",
      textTransform: "lowercase",
      padding: "10px 50px",
  },
}));

const SelectTraining = () => {
  const classes = styles();

  return (
    <div>
      <Header></Header>
      <Box>
        <Grid container className={classes.cardContainer}>
          <Grid className={classes.card} md={3}>
            <Box className={classes.userIcon}>
              <img
                style={{ width: "60px" }}
                alt=""
                src="../../images/Training/sales.png"
              ></img>
            </Box>
            <Box className={classes.cardHeading}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                Sales-training
              </Typography>
            </Box>
            <Box className={classes.cardDescription}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                Brain.Power.Selling Selling from A-Z,
              </Typography>
            </Box>
            <Box>
              <Button className={classes.button} variant="contained">excute</Button>
            </Box>
          </Grid>

          <Grid className={classes.card} md={3}>
            <Box className={classes.userIcon}>
              <img
                style={{ width: "60px" }}
                alt=""
                src="../../images/Training/communication.png"
              ></img>
            </Box>
            <Box className={classes.cardHeading}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                Communications-training
              </Typography>
            </Box>
            <Box className={classes.cardDescription}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                record goal from insert text by tutor,
              </Typography>
            </Box>
            <Box>
              <Button className={classes.button} variant="contained">excute</Button>
            </Box>
          </Grid>

          <Grid className={classes.card} md={3}>
            <Box className={classes.userIcon}>
              <img
                style={{ width: "60px" }}
                alt=""
                src="../../images/Training/leadership.png"
              ></img>
            </Box>
            <Box className={classes.cardHeading}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                Leadership-training
              </Typography>
            </Box>
            <Box className={classes.cardDescription}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                Brain.Power.Leadership record goal from training insert text by
                tutor,
              </Typography>
            </Box>
            <Box>
              <Button className={classes.button} variant="contained">excute</Button>
            </Box>
          </Grid>

          <Grid className={classes.card} md={3}>
            <Box className={classes.userIcon}>
              <img
                style={{ width: "60px" }}
                alt=""
                src="../../images/Training/new-module.png"
              ></img>
            </Box>
            <Box className={classes.cardHeading}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                new-training
              </Typography>
            </Box>
            <Box className={classes.cardDescription}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                Register new learners with name, firt name and course,
              </Typography>
            </Box>
            <Box>
              <Button className={classes.button} variant="contained">add</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default SelectTraining;
