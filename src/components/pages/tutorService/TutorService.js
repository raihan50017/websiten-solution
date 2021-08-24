import {
  Box,
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@material-ui/core";
import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const styles = makeStyles((theme) => ({
  container: {
    padding: "30px 40px",
  },
  topHeading: {
    padding: "20px 30px",
    borderBottom: "1px solid gray",
    color: "#6A737B",
  },
  pageHeading: {
    padding: "20px 30px",
    color: "#6A737B",
  },
  bottomFooter: {
    backgroundColor: "#6A737BD9",
    marginTop: "25px",
    padding: "10px 10px",
    position: "fixed",
    bottom: "0",
    width: "100%",
    "& p": {
      fontWeight: "400",
      fontSize: "16px",
      textAlign: "center",
    },
  },
  linechartContainer: {
    padding: "15px",
    backgroundColor: "#6A737B4F",
  },
  card: {
    width: "50%",
    textAlign: "center",
    marginLeft: "auto",
    border: "1px solid rgba(0,0,0,.1)",
    height: "100%",
    padding: "20px 15px",
    "& h6": {
      marginTop: "20px",
      marginBottom: "20px",
    },
    "& p": {
      marginBottom: "20px",
      fontSize: "16px",
      fontWeight: "400",
    },
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

const TutorService = () => {
  const classes = styles();

  return (
    <div>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.topHeading}
        >
          <Box>
            <Typography variant="h5">Welcome to our platform</Typography>
          </Box>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.pageHeading}
        >
          <Box>
            <Typography variant="h4">Functions as needes</Typography>
          </Box>
        </Grid>
      </Box>
      <Box>
        <Typography
          style={{ textAlign: "center", fontSize: "16px", fontWeight: "400" }}
          variantMapping={{ p: "p" }}
          variant="p"
        >
          Expandable as you grow
        </Typography>
      </Box>
      <Box className={classes.container}>
        <Grid container>
          <Grid md={6}>
            <Box className={classes.card}>
              <img
                style={{ height: "50px" }}
                sty
                alt=""
                src="../../images/classlecture.svg"
              ></img>
              <Typography variant="h6">trainings</Typography>
              <Typography variantMapping={{ p: "p" }} variant="p">
                record the trianings I offer with short bullet points.{" "}
              </Typography>
              <Button variant="contained">Add</Button>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box
              style={{ marginRight: "auto", marginLeft: "0" }}
              className={classes.card}
            >
              <img
                style={{ height: "50px" }}
                sty
                alt=""
                src="../../images/user.svg"
              ></img>
              <Typography variant="h6">User account </Typography>
              <Typography variantMapping={{ p: "p" }} variant="p">
                Edit profile, account settings, logout
              </Typography>
              <Button variant="contained">Add</Button>
            </Box>
          </Grid>
        </Grid>
        <Grid
          style={{ marginTop: "50px" }}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <box className={classes.backArrow}>
            <ArrowBackIcon></ArrowBackIcon>
            <Typography variant="body1">Back</Typography>
          </box>
          
        </Grid>
      </Box>
      <Box className={classes.bottomFooter}>
        <Grid container>
          <Grid md={4}>
            <Typography variantMapping={{ p: "p" }} variant="p">
              Made byKmitk Gmbh
            </Typography>
          </Grid>
          <Grid md={4}>
            <Typography variantMapping={{ p: "p" }} variant="p">
              Kreantivitat Koph
            </Typography>
          </Grid>
          <Grid md={4}>
            <Typography variantMapping={{ p: "p" }} variant="p">
              Tel. +41 79 699 71 72 Email: xxx@xxx.ch
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default TutorService;
