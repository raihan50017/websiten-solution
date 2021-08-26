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
import { Link as RouterLink } from "react-router-dom";
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
  linechartContainer: {
    padding: "15px",
    backgroundColor: "#6A737B4F",
  },
}));

const DashboardQuotasPerCoach = () => {
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
            <Typography variant="h5">Report or Dashboard</Typography>
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
            <Typography variant="h4">
              Reporting trainer, studends, storage ...
            </Typography>
          </Box>
        </Grid>
      </Box>
      <Box className={classes.container}>
        <Grid container>
          <Grid md={6}>
            <Box>
              <Grid
                container
                style={{ marginBottom: "20px" }}
                wrap="nowrap"
                justifyContent="center"
              >
                <Box className={classes.linechartContainer}>
                  <img
                    style={{ width: "50px" }}
                    alt=""
                    src="../../images/linechart.svg"
                  ></img>
                </Box>
                <Box>
                  <Typography
                    style={{
                      color: "#083C6B",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                    variant="h6"
                  >
                    used quotas per coach{" "}
                  </Typography>
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box>
              <Grid
                container
                wrap="nowrap"
                justifyContent="center"
                style={{ marginBottom: "20px" }}
              >
                <Box>
                  <img
                    style={{ width: "90px" }}
                    alt=""
                    src="../../images/database.svg"
                  ></img>
                </Box>
                <Box>
                  <Typography
                    style={{
                      color: "#083C6B",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                    variant="h6"
                  >
                    used storage{" "}
                  </Typography>
                  <Typography
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                    variantMapping={{ p: "p" }}
                    variant="p"
                  >
                    Summary from the used data memory of the tutor/trainer
                  </Typography>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid
          wrap="nowrap"
          container
          justifyContent="center"
          style={{ paddingTop: "40px" }}
        >
          <Box>
            <img
              style={{ width: "80px" }}
              alt=""
              src="../../images/speak-speech.svg"
            ></img>
          </Box>
          <Box>
            <Typography
              style={{
                color: "#083C6B",
                marginLeft: "10px",
                marginRight: "10px",
              }}
              variant="h6"
            >
              used quotas per coach{" "}
            </Typography>
            <Typography
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                fontSize: "16px",
                fontWeight: "500",
              }}
              variantMapping={{ p: "p" }}
              variant="p"
            >
              how many trainers/ tutor have registered on the platform
            </Typography>
          </Box>
        </Grid>
        <Grid
          style={{ marginTop: "15px" }}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Grid
              style={{ marginTop: "0px" }}
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
          <Button variant="contained">+ Add Chart</Button>
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

export default DashboardQuotasPerCoach;
