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
  cardBack: {
    fontWeight:"700",
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

const SalesTraining = () => {
  const classes = styles();

  return (
    <div>
      <Header></Header>
      <Box>
        <Grid className={classes.cardContainer}>
          <Grid container>
            <Grid className={classes.cardBack} md={5}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                --back
              </Typography>
            </Grid>
            <Grid className={classes.salesTraining} md={7}>
                <img
                  style={{ width: "60px" }}
                  alt=""
                  src="../../images/Training/sales.png"
                ></img>
              <span className={classes.cardHeading} variantMapping={{ p: "p" }} variant="p">
                Sales-training
              </span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid className={classes.card} md={4}>
              <Box className={classes.userIcon}>
                <img
                  style={{ width: "60px" }}
                  alt=""
                  src="../../images/Training/module.png"
                ></img>
              </Box>
              <Box className={classes.cardHeading}>
                <Typography variantMapping={{ p: "p" }} variant="p">
                  module 1
                </Typography>
              </Box>
              <Box className={classes.cardDescription}>
                <Typography variantMapping={{ p: "p" }} variant="p">
                  record goal from module
                </Typography>
              </Box>
              <Box>
                <Button className={classes.button} variant="contained">
                  excute
                </Button>
              </Box>
            </Grid>

            <Grid className={classes.card} md={4}>
              <Box className={classes.userIcon}>
                <img
                  style={{ width: "60px" }}
                  alt=""
                  src="../../images/Training/module.png"
                ></img>
              </Box>
              <Box className={classes.cardHeading}>
                <Typography variantMapping={{ p: "p" }} variant="p">
                  module 2
                </Typography>
              </Box>
              <Box className={classes.cardDescription}>
                <Typography variantMapping={{ p: "p" }} variant="p">
                  record goal from module
                </Typography>
              </Box>
              <Box>
                <Button className={classes.button} variant="contained">
                  excute
                </Button>
              </Box>
            </Grid>

            <Grid className={classes.card} md={4}>
              <Box className={classes.userIcon}>
                <img
                  style={{ width: "60px" }}
                  alt=""
                  src="../../images/Training/new-module.png"
                ></img>
              </Box>
              <Box className={classes.cardHeading}>
                <Typography variantMapping={{ p: "p" }} variant="p">
                  new module
                </Typography>
              </Box>
              <Box className={classes.cardDescription}>
                <Typography variantMapping={{ p: "p" }} variant="p">
                  add new modules
                </Typography>
              </Box>
              <Box>
                <Button className={classes.button} variant="contained">
                  excute
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default SalesTraining;
