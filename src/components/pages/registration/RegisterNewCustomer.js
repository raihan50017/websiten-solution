import {
  Box,
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link as RouterLink } from "react-router-dom";

const styles = makeStyles((theme) => ({
  registrationHeading: {
    padding: "20px 30px",
    borderBottom: "1px solid gray",
    color: "#6A737B",
  },
  pageHeading: {
    padding: "20px 30px",
    color: "#6A737B",
  },
  headerDescription: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: "18px",
    padding: "20px 20px",
  },
  createAccountContainer: {
    padding: "20px 10%",
  },
  createAccountAsTutor: {
    padding: "0px 20px",
  },
  createAccountCard: {
    border: "1px solid #6A737BD9",
  },
  iconContainer: {
    backgroundColor: "#6A737BD9",
    padding: "10px 10px",
  },
  createAccountAsStudent: {
    padding: "0px 20px",
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
    marginTop: "130px",
    "& p": {
      fontWeight: "500",
      fontSize: "16px",
      textAlign: "left",
      padding: "5px",
    },
  },
}));

const RegisterNewCustomer = () => {
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
            <Typography variant="h5">
              Registration New Customer FliMoDi Platform
            </Typography>
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
            <Typography variant="h4">Create user account</Typography>
          </Box>
        </Grid>
      </Box>
      <Box className={classes.headerDescription}>
        <Typography variantMapping={{ p: "p" }} variant="p">
          I order for us to set up your personal account, we only need your
          contact details. We will not pass this data on to third parties.
        </Typography>
      </Box>
      <Box>
        <Grid container className={classes.createAccountContainer}>
          <Grid xs={12} className={classes.createAccountAsTutor} md={6}>
            <Box className={classes.createAccountCard}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                // wrap="nowrap"
              >
                <Box className={classes.iconContainer}>
                  <img
                    style={{ height: "80px" }}
                    alt=""
                    src="../../images/teaching2.svg"
                  ></img>
                </Box>
                <Typography
                  style={{ fontWeight: "400", fontSize: "16px" }}
                  variantMapping={{ p: "p" }}
                  variant="p"
                >
                  I am a
                </Typography>
                <RouterLink
                  to="/tutor-registration"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button style={{ marginRight: "15px" }} variant="contained">
                    Tutor
                  </Button>
                </RouterLink>
              </Grid>
            </Box>
            <Box>
              <Typography
                style={{
                  textAlign: "center",
                  padding: "20px 20px",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
                variantMapping={{ p: "p" }}
                variant="p"
              >
                Teach, learn and apply
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} className={classes.createAccountAsStudent} md={6}>
            <Box className={classes.createAccountCard}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                // wrap="nowrap"
              >
                <Box className={classes.iconContainer}>
                  <img
                    style={{ height: "80px" }}
                    alt=""
                    src="../../images/graduate.svg"
                  ></img>
                </Box>
                <Typography
                  style={{ fontWeight: "400", fontSize: "16px", padding:"10px" }}
                  variantMapping={{ p: "p" }}
                  variant="p"
                >
                  I am a
                </Typography>
                <RouterLink
                  to="/student-registration"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button style={{ margin: "15px" }} variant="contained">
                    Student
                  </Button>
                </RouterLink>
              </Grid>
            </Box>
            <Box>
              <Typography
                style={{
                  textAlign: "center",
                  padding: "20px 20px",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
                variantMapping={{ p: "p" }}
                variant="p"
              >
                Students today are used to working online on almost everything
                they do. The FliMoDi platform offers this rich collaborative
                experience.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          style={{ marginTop: "0px" }}
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.createAccountContainer}
        >
          <RouterLink
            to="/registration"
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

export default RegisterNewCustomer;
