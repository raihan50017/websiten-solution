import React from "react";
import Header from "../../shared/header/Header";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import YouTube from "react-youtube";
import Footer from "../../shared/footer/Footer";

const styles = makeStyles((theme) => ({
  presentionBanner: {
    paddingTop: "70px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "30px",
    backgroundColor: "#6A737BD9",
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

const Home = () => {
  const classes = styles();

  return (
    <div>
      <Header></Header>
      <Box container className={classes.presentionBanner}>
        <Grid className={classes.presentation} container>
          <Grid style={{ textAlign: "right" }} md={2}>
            <img
              style={{ width: "120px", padding: "0px 10px" }}
              alt=""
              src="../../images/presentation.svg"
            ></img>
          </Grid>
          <Grid md={10}>
            <Typography variant="h6">Presenting the smart way</Typography>
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

export default Home;
