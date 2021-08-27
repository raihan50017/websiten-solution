import React from "react";
import Header from "./trainingShared/header/Header";
import {
  Badge,
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import Footer from "./trainingShared/footer/Footer";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const styles = makeStyles((theme) => ({
  cardContainer: {
    width: "100%",
    padding: "70px 40px",
    backgroundColor: "#fff",
  },
  cardBack: {
    fontWeight: "700",
  },
  salesTraining: {
    paddingBottom: "40px",
    textAlign: "left",
  },
  title: {
    fontWeight: "700",
    paddingTop: "35px",
  },

  card: {
    textAlign: "center",
    lineHeight: "55px",
    border: "1px solid #f0ebeb",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    marginRight: "auto",
    marginLeft: "auto",
  },
  userIcon: {
    textAlign: "center",
    padding: "30px 10px",
    borderBottom: "1px solid #f0ebeb",
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

const defaultProps = {
  color: "secondary",
};

const TrainingsansichtStudent = () => {
  const classes = styles();

  return (
    <div>
      <Header title="Trainingsansicht Student"></Header>
      <Box>
        <Box className={classes.cardContainer}>
          <Grid container>
            <Grid className={classes.cardBack} xs={12}>
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
          </Grid>

          <Grid container>
            <Grid className={classes.salesTraining} xs={12}>
              <Typography
                style={{
                  fontSize: "18px",
                  padding: "20px",
                  textAlign: "center",
                }}
                variantMapping={{ p: "p" }}
                variant="p"
              >
                meine Trainings, meine Module und sämtliche Inhalte zu den
                Trainings.
              </Typography>
            </Grid>

            <Grid xs={12}>
              <Box className={classes.card}>
                <Box className={classes.userIcon}>
                  <Badge
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    badgeContent={1}
                    {...defaultProps}
                  />
                  <img
                    style={{ width: "60px" }}
                    alt=""
                    src="../../images/Training/training.png"
                  ></img>
                </Box>
                <Box className={classes.cardHeading}>
                  <Typography variantMapping={{ p: "p" }} variant="p">
                    training
                  </Typography>
                </Box>
                <Box className={classes.cardDescription}>
                  <Typography variantMapping={{ p: "p" }} variant="p">
                    Führungskurs Beschreibung
                  </Typography>
                </Box>
                <Box>
                  <Button className={classes.button} variant="contained">
                    Ausführen
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default TrainingsansichtStudent;
