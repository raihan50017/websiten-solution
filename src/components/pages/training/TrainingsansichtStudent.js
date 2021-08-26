import React from "react";
import Header from "./training/header/Header";
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
import Footer from "./training/footer/Footer";

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

  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  form: {
    width: "70%",
    margin: "auto",
    padding: "60px",
  },
  textSelection: {
    width: "80%",
  },
  card: {
    textAlign: "center",
    lineHeight: "55px",
    border: "1px solid #f0ebeb",
    margin: "30px 250px",
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
}));

const defaultProps = {
  color: "secondary",
};

const TrainingsansichtStudent = () => {
  const classes = styles();

  return (
    <div>
      <Header></Header>
      <Box>
        <Grid className={classes.cardContainer}>
          <Grid container>
            <Grid className={classes.cardBack} md={3}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                --Zurück
              </Typography>
            </Grid>
          </Grid>

          <Grid className={classes.form}>
            <Grid className={classes.salesTraining} md={9}>
              <span variantMapping={{ p: "p" }} variant="p">
                meine Trainings, meine Module und sämtliche Inhalte zu den
                Trainings.
              </span>
            </Grid>
            
            <Grid className={classes.card}>
              
              <Box  className={classes.userIcon}>
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
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default TrainingsansichtStudent;
