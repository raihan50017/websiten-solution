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
  tutorImg: {
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
  },
  createAccountContainer: {
    padding: "20px 5%",
  },
  createAccountAsTutor: {
    padding: "0px 20px",
  },
  createAccountCard: {
    border: "1px solid #6A737BD9",
  },
  iconContainer: {
    backgroundColor: "#6A737B4F",
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
  formControl: {
    width: "100%",
  },
  padding10: {
    padding: "10px 10px",
  },
}));

const TutorRegistrationForm = () => {
  const [preName, setPreName] = useState("");

  const handleChange = (event) => {
    setPreName(event.target.value);
  };

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
              Registration New tutor FliMoDi Platform
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
            <Typography variant="h4">I am a Tutor/Trainer</Typography>
          </Box>
        </Grid>
      </Box>
      <Box>
        <Grid container className={classes.createAccountContainer}>
          <Grid className={classes.createAccountAsTutor} md={2}>
            <Box
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",
                width: "100%",
              }}
            >
              <Grid style={{ width: "100%" }} container justifyContent="flex-end">
                <Box
                  style={{ width: "100px" }}
                  className={classes.iconContainer}
                >
                  <img
                    className={classes.tutorImg}
                    alt=""
                    src="../../images/teaching2.svg"
                  ></img>
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Grid xs={12} md={10}>
            <Box>
              <Box>
                <Typography
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    color: "#083C6B",
                  }}
                  variant="h6"
                >
                  personal information{" "}
                </Typography>
              </Box>
              <Grid container>
                <Grid xs={12} md={4} className={classes.padding10}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Anrede
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={preName}
                      onChange={handleChange}
                      label="Arnede..."
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Arnede</MenuItem>
                      <MenuItem value={20}>Arnede</MenuItem>
                      <MenuItem value={30}>Arnede</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid xs={12} md={4} className={classes.padding10}>
                  <TextField
                    id="outlined-basic"
                    label="Firstname"
                    variant="outlined"
                    className={classes.formControl}
                    required
                  />
                </Grid>
                <Grid xs={12} md={4} className={classes.padding10}>
                  <TextField
                    id="outlined-basic"
                    label="Lastname"
                    variant="outlined"
                    className={classes.formControl}
                    required
                  />
                </Grid>
              </Grid>
              <Grid container className={classes.padding10}>
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                  required
                />
              </Grid>
              <Box>
                <Box>
                  <Typography
                    style={{
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "10px",
                      color: "#083C6B",
                    }}
                    variant="h6"
                  >
                    Login information{" "}
                  </Typography>
                </Box>
                <Grid container>
                  <Grid xs={6} className={classes.padding10}>
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      className={classes.formControl}
                      required
                      type="password"
                    />
                  </Grid>
                  <Grid xs={6} className={classes.padding10}>
                    <TextField
                      id="outlined-basic"
                      label="Repeat password"
                      variant="outlined"
                      className={classes.formControl}
                      required
                      type="password"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box className={classes.padding10}>
                <Button variant="contained">Submit</Button>
              </Box>
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
            to="/new-registration"
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

export default TutorRegistrationForm;
