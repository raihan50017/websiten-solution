import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import { Box, Grid, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = makeStyles((theme) => ({
  footer: {
    background: "#F39200",
    padding: "20px",
    color: "#fff",
  },
  footerName: {},
  footerContact: {
    textAlign: "right",
  },
}));

const Footer = () => {
  const classes = styles();

  return (
    <Box className={classes.footer}>
      <Grid container>
        <Grid className={classes.footerName} md={6}>
          <Typography variantMapping={{ p: "p" }} variant="p">
            made by KmitK GmbH
          </Typography>
        </Grid>
        <Grid className={classes.footerContact} md={6}>
          <Typography variantMapping={{ p: "p" }} variant="p">
            Tel. +41 43 211 34 25 Email: info@mikefruet.ch
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
