import React from "react";
import Header from "../../shared/header/Header";
import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import YouTube from "react-youtube";
import Footer from "../../shared/footer/Footer";

const styles = makeStyles((theme) => ({
  presentionBanner: {
    paddingTop: "170px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "130px",
    backgroundColor: "#6A737BD9",
    // backgroundColor: "#000000",
    // backgroundImage: "linear-gradient(315deg, #000000 0%, #414141 74%)",
    // color: "white",
  },
  presentation: {},
  digitalScalability: {
    marginTop: "30px",
    padding: "40px 20px",
  },
  partnershipSectionLeft: {
    backgroundColor: "#6A737BD9",
    // backgroundColor: "#000000",
    // backgroundImage: "linear-gradient(315deg, #000000 0%, #414141 74%)",
    // color: "white",
    padding: "120px 40px",
    textAlign: "center",
  },
  whatMakesHeading: {
    marginTop: "30px",
    padding: "40px 30px",
  },
  youtube: {
    transition: "all .3s ease",
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    marginBottom: "40px",
    boxShadow: "2px 2px 4px 4px rgba(0,0,0,.2)",
    "&:hover": {
      boxShadow: "2px 2px 4px 4px rgba(0,0,0,.3)",
    },
  },
}));

const Home = () => {
  const classes = styles();

  return (
    <div>
      <Header></Header>
      <Box m={2}></Box>
      <Box container className={classes.presentionBanner}>
        <Grid className={classes.presentation} container>
          <Grid
            style={{
              textAlign: "right",
            }}
            md={2}
          >
            <img
              style={{ width: "140px", padding: "0px 10px" }}
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
                  width: "130px",
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
          <Box className={classes.youtube}>
            <YouTube
              onReady={(event) => event.target.pauseVideo()}
              opts={{
                playerVars: { autoplay: 0 },
                width: "100%",
              }}
              videoId="090SqsRCbaI"
            />
          </Box>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Home;
