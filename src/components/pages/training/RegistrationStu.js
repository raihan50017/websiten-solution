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
  sectionContainer: {
    backgroundColor: "white",
    padding: "40px 30px",
    [theme.breakpoints.up("md")]: {
      padding: "40px 150px",
    },
  },

  formControl: {
    width: "100%",
    margin: "10px",
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

const RegistrationStu = () => {
  const classes = styles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <Header title="Registration student"></Header>
      <Box className={classes.sectionContainer}>
        <Typography align="center" variant="h6">
          {" "}
          log in for your assigned training
        </Typography>
        <Grid container>
          <Grid xs={12} md={6}>
            <TextField
              className={classes.formControl}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              className={classes.formControl}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
          </Grid>
          <Grid xs={12} md={12}>
            <TextField
              className={classes.formControl}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid xs={12} md={12}>
            <TextField
              className={classes.formControl}
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
          </Grid>
        </Grid>
        <Button
          style={{ margin: "10px" }}
          className={classes.formCancelButton}
          variant="outlined"
        >
          cancel
        </Button>
        <Button
          style={{ margin: "10px" }}
          className={classes.formSaveButton}
          variant="outlined"
        >
          save
        </Button>
        <Box style={{ margin: "10px" }}>
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
      </Box>
      <Box style={{ height: "80px" }}></Box>
      <Footer></Footer>
    </div>
  );
};

export default RegistrationStu;
