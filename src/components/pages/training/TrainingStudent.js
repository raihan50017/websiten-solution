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
import { useDropzone } from "react-dropzone";

const trainings = [
  {
    value: "selection",
    label: "Selection__",
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
  view1: {
    backgroundColor: "#fff",
  },
  viewContainer: {
    padding: "70px 0px",
  },
  overText: {
    paddingBottom: "100px",
    textAlign: "center",
  },
  back: {
    textAlign: "center",
    fontWeight: "700",
  },
  selection: {
    textAlign: "center",
    paddingTop: "50px",
  },
  textSelection: {
    width: "60%",
  },
}));

const TrainingStudent = () => {
  const classes = styles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <Header></Header>
      <Box className={classes.view1}>
        <Grid container className={classes.viewContainer}>
          <Grid className={classes.back} md={1}>
            <Box className={classes.backHeading}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                --back
              </Typography>
            </Box>
          </Grid>

          <Grid className={classes.selection} md={11}>
            <Box className={classes.overText}>
              below you can see the students who are already registered on the
              platform.
            </Box>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.textSelection}
                id="outlined-select-currency-native"
                select
                label="part"
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
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default TrainingStudent;
