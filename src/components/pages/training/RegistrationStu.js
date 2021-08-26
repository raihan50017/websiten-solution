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
      paddingBottom: "10px",
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
    textAlign: "right",
    padding: "60px",
  },
  textField: {
    width: "39%",
  },
  textEmail: {
    width: "80%",
  },
  textSelection: {
    width: "80%",
  },
  formCancelButton: {
    backgroundColor: "#fff",
    color: "#000",
    textTransform: "lowercase",
    padding: "10px 30px",
    borderRadius: "5px",
    border: "1px solid #F39200",
  },
  formSaveButton: {
    backgroundColor: "#F39200",
    color: "#fff",
    textTransform: "lowercase",
    padding: "10px 30px",
    borderRadius: "5px",
  },
}));

const RegistrationStu = () => {
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
                log in for your assigned training
              </span>
            </Grid>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
              <br></br>
              <TextField
                className={classes.textEmail}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <br></br>
              <TextField
                className={classes.textSelection}
                id="outlined-select-currency-native"
                select
                label="selection_"
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
              <Button className={classes.formCancelButton} variant="outlined">
                cancel
              </Button>
              <Button className={classes.formSaveButton} variant="outlined">
                save
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default RegistrationStu;
