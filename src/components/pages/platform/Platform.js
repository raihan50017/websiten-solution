import React from "react";
import Header from "../../shared/header/Header";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import YouTube from "react-youtube";
import Footer from "../../shared/footer/Footer";

const styles = makeStyles((theme) => ({
  platformBanner: {},
  bannerLeft: {
    padding: "40px 20px",
    border: "1px solid gray",
    "& ul": {
      listStyleType: "none",
      fontSize: "16px",
      fontWeignt: "400",
      "& li": {
        padding: "5px 10px",
      },
    },
  },
  bannerRight: {
    padding: "40px 20px",
    backgroundColor: "#6A737BD9",
  },
  bannerRightItem: {
    display: "flex",
    alignItems: "center",
    "& p": {
      fontSize: "16px",
      fontWeignt: "400",
      padding: "14px 14px",
    },
  },
  presentation: {
    alignItems: "center",
  },
  digitalScalability: {
    padding: "40px 0px",
  },
  partnershipSectionLeft: {
    backgroundColor: "#6A737BD9",
    padding: "20px 40px",
    textAlign: "center",
  },
  whatMakesHeading: {
    padding: "40px 0px",
  },
}));

const Platform = () => {
  const classes = styles();

  return (
    <div>
      <Header></Header>
      <Box container className={classes.platformBanner}>
        <Grid className={classes.platform} container>
          <Grid className={classes.bannerLeft} md={6}>
            <Typography variantMapping={{ ul: "ul" }} variant="ul">
              <Typography variantMapping={{ li: "li" }} variant="li">
                Platform overview
              </Typography>
              <Typography variantMapping={{ li: "li" }} variant="li">
                Trust and Security
              </Typography>
              <Typography variantMapping={{ li: "li" }} variant="li">
                Pricing
              </Typography>
              <Typography variantMapping={{ li: "li" }} variant="li">
                xxxxxxxxxxxxxxxxx
              </Typography>
              <Typography variantMapping={{ li: "li" }} variant="li">
                xxxxxxxxxxxxxxxxx
              </Typography>
            </Typography>
          </Grid>
          <Grid className={classes.bannerRight} md={6}>
            <Box className={classes.bannerRightItem}>
              <img alt="" src="../../images/file.svg"></img>
              <Typography variantMapping={{ p: "p" }} variant="p">
                Digitize your documents with the FliMoDi Platform. Use the
                unique platform to connect people and technology through digital
                workflows.
              </Typography>
            </Box>
            <Box className={classes.bannerRightItem}>
              <img
                style={{ width: "50px" }}
                alt=""
                src="../../images/clapping.svg"
              ></img>
              <Typography variantMapping={{ p: "p" }} variant="p">
                Our sustainable services help us to do away with paper and pens
                as much as possible.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.digitalScalability}
        >
          <Typography variant="h6">
            digital scalability and flexibility for the cecture of tomorrow
          </Typography>
        </Grid>
      </Box>
      <Box>
        <Grid className={classes.partnershipSection} container>
          <Grid className={classes.partnershipSectionLeft} md={6}>
            <Typography variant="h6">
              Partnerships are based on trust to be successful
            </Typography>
            <Box>
              <img
                style={{
                  width: "110px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                alt=""
                src="../../images/partnership.svg"
              ></img>
            </Box>
          </Grid>
          <Grid className={classes.partnershipSectionRight} md={6}></Grid>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.whatMakesHeading}
        >
          <Typography variant="h6">What makes us different</Typography>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box style={{ width: "50%" }}>
            <YouTube
              onReady={(event) => event.target.pauseVideo()}
              opts={{
                playerVars: { autoplay: 1 },
                width: "100%",
              }}
              videoId="090SqsRCbaI"
            />
            ;
          </Box>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Platform;
