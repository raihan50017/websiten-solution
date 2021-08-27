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
    border: "1px solid gray",
    marginBottom: "20px",
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
  backArrow: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    "& .MuiSvgIcon-root": {
      marginRight: "5px",
      color: "#083C6B",
      fontSize: "20px",
    },
  },
}));

const SelectTraining = () => {
  const classes = styles();

  return (
    <div>
      <Header title="Select training"></Header>
      <Box style={{ padding: "30px", backgroundColor: "white" }}>
        <RouterLink
          to="/"
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
      <Box>
        <Grid container className={classes.cardContainer}>
          <Grid xs={12} className={classes.card} md={3}>
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
              <Button className={classes.button} variant="contained">
                excute
              </Button>
            </Box>
          </Grid>

          <Grid xs={12} className={classes.card} md={3}>
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
              <Button className={classes.button} variant="contained">
                excute
              </Button>
            </Box>
          </Grid>

          <Grid xs={12} className={classes.card} md={3}>
            <Box className={classes.userIcon}>
              <img
                style={{ width: "60px" }}
                alt=""
                src="../../images/Training/leadership.png"
              ></img>
            </Box>
            <Box className={classes.cardHeading}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                Sales Training
              </Typography>
            </Box>
            <Box className={classes.cardDescription}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                Brain.Power.Leadership record goal from training insert text by
                tutor,
              </Typography>
            </Box>
            <Box>
              <Button className={classes.button} variant="contained">
                excute
              </Button>
            </Box>
          </Grid>
          <Grid xs={12} className={classes.card} md={3}>
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
              <Button className={classes.button} variant="contained">
                add
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography style={{ padding: "10px" }} align="center" variant="h6">
          Related Pages
        </Typography>
        <Grid style={{ padding: "20px" }} wrap="wrap" justifyContent="center">
          <RouterLink
            to="/leadership-view1"
            style={{ margin: "10px", color: "inherit", textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Leadership1
            </Button>
          </RouterLink>
          <RouterLink
            to="/leadership-view2"
            style={{ margin: "10px", color: "inherit", textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Leadership2
            </Button>
          </RouterLink>
          <RouterLink
            to="/create-module"
            style={{ margin: "10px", color: "inherit", textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Create Module
            </Button>
          </RouterLink>
          <RouterLink
            to="/send-message"
            style={{ margin: "10px", color: "inherit", textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Send Message
            </Button>
          </RouterLink>
          <RouterLink
            to="/registration-student"
            style={{ margin: "10px", color: "inherit", textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Registration Student
            </Button>
          </RouterLink>
          <RouterLink
            to="/overview-training"
            style={{ margin: "10px", color: "inherit", textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Overview Training
            </Button>
          </RouterLink>
          <RouterLink
            to="/trainingsansicht"
            style={{ margin: "10px", color: "inherit", textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Trainingsansicht
            </Button>
          </RouterLink>
          <RouterLink
            to="/ansicht-student"
            style={{ margin: "10px", color: "inherit", textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Ansicht Student
            </Button>
          </RouterLink>
          <RouterLink
            to="/leadership-training"
            style={{ margin: "10px", color: "inherit", textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Leadership Training
            </Button>
          </RouterLink>
          <RouterLink
            to="/sales-training"
            style={{ margin: "10px", color: "inherit", textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Sales Training
            </Button>
          </RouterLink>
          <RouterLink
            to="/communications-training"
            style={{ margin: "10px", color: "inherit", textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Communications Training
            </Button>
          </RouterLink>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default SelectTraining;
