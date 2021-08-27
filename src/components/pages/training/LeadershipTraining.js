import React from "react";
import Header from "./trainingShared/header/Header";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Footer from "./trainingShared/footer/Footer";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const styles = makeStyles((theme) => ({
  cardContainer: {
    padding: "70px 40px",
    backgroundColor: "#fff",
  },
  card: {
    textAlign: "center",
    lineHeight: "55px",
    padding: "10px 30px",
    marginBottom: "20px",
  },
  userIcon: {
    textAlign: "center",
    padding: "30px 10px",
  },
  cardHeading: {
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
  backArrow: {
    display: "flex",
    alignItems: "center",
    "& .MuiSvgIcon-root": {
      marginRight: "5px",
      color: "#083C6B",
      fontSize: "20px",
    },
  },
}));

const LeadershipTraining = () => {
  const classes = styles();

  return (
    <div>
      <Header title="Modules of the trainings"></Header>
      <Box>
        <Grid className={classes.cardContainer}>
          <Grid container>
            <Grid xs={12}>
              <Box>
                <RouterLink
                  to="/select-training"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "inline-block",
                  }}
                >
                  <box className={classes.backArrow}>
                    <ArrowBackIcon></ArrowBackIcon>
                    <Typography variant="body1">Back</Typography>
                  </box>
                </RouterLink>
              </Box>
            </Grid>
            <Grid className={classes.salesTraining} xs={12}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="row"
                wrap="nowrap"
              >
                <img
                  style={{ width: "110px", padding: "10px" }}
                  alt=""
                  src="../../images/classlecture.svg"
                ></img>
                <span
                  className={classes.cardHeading}
                  variantMapping={{ p: "p" }}
                  variant="p"
                >
                  Leadership-training
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={12} className={classes.card} md={4}>
              <Box className={classes.userIcon}>
                <img
                  style={{ width: "60px" }}
                  alt=""
                  src="../../images/sharing.svg"
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

            <Grid xs={12} className={classes.card} md={4}>
              <Box className={classes.userIcon}>
                <img
                  style={{ width: "60px" }}
                  alt=""
                  src="../../images/sharing.svg"
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

            <Grid xs={12} className={classes.card} md={4}>
              <Box className={classes.userIcon}>
                <img
                  style={{ width: "60px" }}
                  alt=""
                  src="../../images/plus.svg"
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

export default LeadershipTraining;
