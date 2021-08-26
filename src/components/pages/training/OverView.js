import React from "react";
import Header from "./../components/training/header/Header";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Footer from "./training/footer/Footer";

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

const OverView = () => {
  const classes = styles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <Header></Header>
      <Box>
        <Grid className={classes.cardContainer}>
          <Grid container>
            <Grid className={classes.cardBack} md={3}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                --back
              </Typography>
            </Grid>
          </Grid>

          <Grid className={classes.form}>
            <Grid className={classes.salesTraining} md={9}>
              <span variantMapping={{ p: "p" }} variant="p">
              each students has a progress view that lists their workouts, modules and content 
              </span>
            </Grid>
            <form className={classes.root} noValidate autoComplete="off">
              <span style={{fontWeight: "700"}}>training</span>
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
            <Grid className={classes.card}>
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
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default OverView;
