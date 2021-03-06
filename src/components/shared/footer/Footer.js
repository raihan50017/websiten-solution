import React from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const styles = makeStyles((theme) => ({
  footerSection: {
    borderTop: "1px solid #6A737BD9",
    padding: "30px 40px",
    backgroundColor: "rgba(0,0,0,.04)",
    textAlign: "center",
    "& p": {
      fontSize: "17px",
      fontWeight: "400",
    },
  },
  subscribeForm: {
    padding: "15px 0px",
  },
  subscribeButton: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  footerContact: {
    padding: "0px 0px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
    },
  },
  ourPrivacy: {
    padding: "10px 0px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
      display: "block",
      paddingLeft: "0",
    },
    "& ul": {
      listStyleType: "none",
      padding: "0px",
      textAlign: "left",
      fontSize: "16px",
      fontWeight: "400",
      "& li": {
        display: "inline-block",
        marginLeft: "13px",
        transition: "all .3s ease",
        cursor: "pointer",
        borderBottom: "1px solid transparent",
        "&:hover": {
          color: "gray",
          borderBottom: "1px solid black",
        },
        [theme.breakpoints.down("md")]: {
          display: "block",
          marginLeft: "0px",
        },
      },
    },
  },
  bottomFooter: {
    backgroundColor: "#6A737BD9",
    padding: "20px 40px",
    "& p": {
      fontWeight: "500",
      fontSize: "16px",
      textAlign: "left",
      padding: "5px",
    },
  },
}));

const Footer = () => {
  const classes = styles();

  return (
    <div>
      <Box className={classes.footerSection}>
        <Typography variantMapping={{ p: "p" }} variant="p">
          Get the latest FLIMoDI Updates
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.subscribeForm}
        >
          <Box style={{ width: "100%" }}>
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput id="outlined-adornment-email" labelWidth={60} />
            </FormControl>
            <Box className={classes.subscribeButton}>
              <Button color="primary" variant="contained">
                Subscrive
              </Button>
            </Box>
          </Box>
        </Grid>
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={classes.footerContact}
          >
            <Typography variantMapping={{ p: "p" }} variant="p">
              Contact with us:
            </Typography>
            <Box>
              <IconButton
                style={{
                  padding: "5px",
                  margin: "4px",
                }}
              >
                <LinkedInIcon></LinkedInIcon>
              </IconButton>
              <IconButton
                style={{
                  padding: "5px",
                  margin: "4px",
                }}
              >
                <TwitterIcon></TwitterIcon>
              </IconButton>
              <IconButton
                style={{
                  padding: "5px",
                  margin: "4px",
                }}
              >
                <YouTubeIcon></YouTubeIcon>
              </IconButton>
              <IconButton
                style={{
                  padding: "5px",
                  margin: "4px",
                }}
              >
                <FacebookIcon></FacebookIcon>
              </IconButton>
              <IconButton
                style={{
                  padding: "5px",
                  margin: "4px",
                }}
              >
                <InstagramIcon></InstagramIcon>
              </IconButton>
            </Box>
          </Grid>
        </Box>
        <Box className={classes.ourPrivacy}>
          <Typography variantMapping={{ ul: "ul" }} variant="ul">
            <Typography variantMapping={{ li: "li" }} variant="li">
              Website Privacy Policy
            </Typography>
            <Typography variantMapping={{ li: "li" }} variant="li">
              Privacy Policy Service
            </Typography>
            <Typography variantMapping={{ li: "li" }} variant="li">
              General Terms and Conditions
            </Typography>
            <Typography variantMapping={{ li: "li" }} variant="li">
              Imprint
            </Typography>
            <Typography variantMapping={{ li: "li" }} variant="li">
              Guidelines for the Use Cookies
            </Typography>
          </Typography>
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

export default Footer;
