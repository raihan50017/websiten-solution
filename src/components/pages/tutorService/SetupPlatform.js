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
import { useDropzone } from "react-dropzone";
import PublishIcon from "@material-ui/icons/Publish";
import { Link as RouterLink } from "react-router-dom";

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
    padding: "20px 40px",
    marginTop: "90px",
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
  card: {
    width: "60%",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    marginBottom: "20px",
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
  logoUpload: {
    display: "flex",
    alignItems: "center",
    border: "1px solid gray",
    padding: "10px",
    width: "auto",

    "& .MuiSvgIcon-root": {
      color: "#D24D57",
      marginLeft: "8px",
    },
  },
}));

const SetupPlatform = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

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
          <Grid xs={4}>
            <Box style={{ display: "inline-block" }}>
              <section className="container">
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <Box className={classes.logoUpload}>
                    <Typography variantMapping={{ p: "p" }} variant="p">
                      Add logo file here
                    </Typography>
                    <PublishIcon></PublishIcon>
                  </Box>
                </div>
                <aside>
                  <ul>{files}</ul>
                </aside>
              </section>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box>
              <Typography style={{ textAlign: "center" }} variant="h5">
                Welcome to our platform
              </Typography>
            </Box>
          </Grid>
          <Grid xs={4}></Grid>
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
          <Grid xs={12} md={6}>
            <Box style={{ marginLeft: "auto" }} className={classes.card}>
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
          <Grid xs={12} md={6}>
            <Box className={classes.card}>
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
        <Box style={{ marginTop: "30px" }}>
          <RouterLink
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <box className={classes.backArrow}>
              <ArrowBackIcon></ArrowBackIcon>
              <Typography variant="body1">Back</Typography>
            </box>
          </RouterLink>
        </Box>
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

export default SetupPlatform;
