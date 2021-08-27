import React from "react";
import Header from "./trainingShared/header/Header";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Footer from "./trainingShared/footer/Footer";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const trainings = [
  {
    value: "ongoing",
    label: "Ongoing__",
  },
  {
    value: "sales",
    label: "Sales-training",
  },
  {
    value: "communication",
    label: "Communication-training",
  },
  {
    value: "leadership",
    label: "Leadership-training",
  },
];

const styles = makeStyles((theme) => ({
  cardContainer: {
    width: "100%",
    padding: "70px 180px",
    [theme.breakpoints.down("md")]: {
      padding: "70px 40px",
    },
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
  textSelection: {
    width: "100%",
  },
  card: {
    textAlign: "center",
    lineHeight: "55px",
    border: "1px solid #f0ebeb",
    marginTop: "15px",
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

const OverView = () => {
  const classes = styles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <Header title="Overview trainings"></Header>
      <Box>
        <Grid className={classes.cardContainer}>
          <Grid container>
            <Grid xs={12} className={classes.cardBack} md={3}>
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
            <Grid xs={12} className={classes.salesTraining} md={12}>
              <span
                style={{ fontSize: "18px" }}
                variantMapping={{ p: "p" }}
                variant="p"
              >
                each students has a progress view that lists their workouts,
                modules and content
              </span>
            </Grid>
            <Grid xs={12}>
              <form className={classes.root} noValidate autoComplete="off">
                <span style={{ fontSize: "18px", paddingRight: "10px" }}>
                  training
                </span>
                <TextField
                  className={classes.textSelection}
                  id="outlined-select-currency-native"
                  select
                  value={currency}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                >
                  {trainings.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </form>
            </Grid>
            <Grid xs={12}>
              <Box xs={12} className={classes.card}>
                <Box className={classes.userIcon}>
                  <img
                    style={{ width: "60px" }}
                    alt=""
                    src="../../images/Training/leadership.png"
                  ></img>
                </Box>
                <Box className={classes.cardHeading}>
                  <Typography variantMapping={{ p: "p" }} variant="p">
                    leadership-training
                  </Typography>
                </Box>
                <Box className={classes.cardDescription}>
                  <Typography variantMapping={{ p: "p" }} variant="p">
                    record goal from module
                  </Typography>
                </Box>
                <Box>
                  <Button className={classes.button} variant="contained">
                    module
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default OverView;
