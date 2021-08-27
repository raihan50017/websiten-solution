import {
  Box,
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const styles = makeStyles((theme) => ({
  registrationHeading: {
    padding: "20px 30px",
    borderBottom: "1px solid gray",
    color: "#6A737B",
  },
  welcomeHeading: {
    padding: "20px 30px",
    color: "#6A737B",
  },
  loginOrRegistrationFormContainer: {
    padding: "20px 20%",
  },
  login: {
    padding: "0px 20px",
    marginBottom: "15px",
  },
  userIcon: {
    backgroundColor: "#6A737BD9",
    textAlign: "center",
    padding: "30px 10px",
  },
  newRegistration: {
    padding: "0px 20px",
    marginBottom: "15px",
  },
  loginHeading: {
    textAlign: "center",
    padding: "30px 20px",
    fontSize: "18px",
    fontWeight: "500",
    color: "#083C6B",
  },
  regHeading: {
    textAlign: "center",
    padding: "30px 20px",
    fontSize: "18px",
    fontWeight: "500",
    color: "#083C6B",
  },
  registerDescription: {
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "center",
    marginTop: "15px",
  },
  registerButton: {
    paddingTop: "30px",
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
  bottomFooter: {
    backgroundColor: "#6A737BD9",
    padding: "20px 40px",
    marginTop: "40px",
    "& p": {
      fontWeight: "500",
      fontSize: "16px",
      textAlign: "left",
      padding: "5px",
    },
  },
}));

const Registration = () => {
  const classes = styles();

  return (
    <div>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.registrationHeading}
        >
          <Box>
            <Typography variant="h5">Registration FliMoDi Platform</Typography>
          </Box>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.welcomeHeading}
        >
          <Box>
            <Typography variant="h4">Welcome to our Website</Typography>
          </Box>
        </Grid>
      </Box>
      <Box>
        <Grid container className={classes.loginOrRegistrationFormContainer}>
          <Grid xs={12} className={classes.login} md={6}>
            <Box className={classes.userIcon}>
              <img
                style={{ width: "60px" }}
                alt=""
                src="../../images/user.svg"
              ></img>
            </Box>
            <Box className={classes.loginHeading}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                I am already a customer
              </Typography>
            </Box>
            <Box>
              <TextField
                style={{ marginBottom: "10px" }}
                id="standard-full-width"
                fullWidth
                label="Email"
              />
              <TextField
                style={{ marginBottom: "10px" }}
                type="password"
                id="standard-full-width"
                fullWidth
                label="Password"
              />
            </Box>
            <Box>
              <Grid
                style={{ marginTop: "40px" }}
                container
                direction="row"
                alignItems="center"
              >
                <Grid xs={6}>
                  <Button variant="contained">Login</Button>
                </Grid>
                <Grid xs={6}>Password forgotten?</Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid xs={12} className={classes.newRegistration} md={6}>
            <Box className={classes.userIcon}>
              <img
                style={{ width: "60px" }}
                alt=""
                src="../../images/userplus.svg"
              ></img>
            </Box>
            <Box className={classes.regHeading}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                I am new here?
              </Typography>
            </Box>
            <Box className={classes.registerDescription}>
              <Typography variantMapping={{ p: "p" }} variant="p">
                Enjoy your individual place on our platform. Whether you are a
                student or a tutor, all documents are digitally accessible 24/7,
                customisable.
              </Typography>
            </Box>
            <Box>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classes.registerButton}
              >
                <Box>
                  <RouterLink
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/new-registration"
                  >
                    <Button variant="contained">Register Now</Button>
                  </RouterLink>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ margin: "40px" }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.createAccountContainer}
        >
          <RouterLink
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <box className={classes.backArrow}>
              <ArrowBackIcon></ArrowBackIcon>
              <Typography variant="body1">Back</Typography>
            </box>
          </RouterLink>
        </Grid>
      </Box>
      <Box className={classes.bottomFooter}>
        <Grid container>
          <Grid xs={12} md={4}>
            <Typography variantMapping={{ p: "p" }} variant="p">
              Made byKmitk Gmbh
            </Typography>
          </Grid>
          <Grid xs={12} md={4}>
            <Typography variantMapping={{ p: "p" }} variant="p">
              Kreantivitat Koph
            </Typography>
          </Grid>
          <Grid xs={12} md={4}>
            <Typography variantMapping={{ p: "p" }} variant="p">
              Tel. +41 79 699 71 72 Email: xxx@xxx.ch
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Registration;
