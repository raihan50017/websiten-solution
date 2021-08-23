import {
  Box,
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import React from "react";

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
    padding: "20px 40px",
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
          <Grid className={classes.createAccountAsTutor} md={6}>
            <Box className={classes.createAccountCard}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box className={classes.iconContainer}>
                  <img
                    style={{ height: "80px" }}
                    alt=""
                    src="../../images/teaching2.svg"
                  ></img>
                </Box>
                <Typography variantMapping={{ p: "p" }} variant="p">
                  I am a
                </Typography>
                <Button style={{ marginRight: "15px" }} variant="contained">
                  Tutor
                </Button>
              </Grid>
            </Box>
            <Box>
              <Typography
                style={{ textAlign: "center", padding: "40px 20px" }}
                variantMapping={{ p: "p" }}
                variant="p"
              >
                Teach, learn and apply
              </Typography>
            </Box>
          </Grid>
          <Grid className={classes.createAccountAsStudent} md={6}>
            <Box className={classes.createAccountCard}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box className={classes.iconContainer}>
                  <img
                    style={{ height: "80px" }}
                    alt=""
                    src="../../images/graduate.svg"
                  ></img>
                </Box>
                <Typography variantMapping={{ p: "p" }} variant="p">
                  I am a
                </Typography>
                <Button style={{ marginRight: "15px" }} variant="contained">
                  Student
                </Button>
              </Grid>
            </Box>
            <Box>
              <Typography
                style={{ textAlign: "center", padding: "40px 20px" }}
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

export default RegisterNewCustomer;
