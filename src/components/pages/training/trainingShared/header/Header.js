import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import { Box, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  // desktop: {
  //   [theme.breakpoints.down("md")]: {
  //     display: "none",
  //   },
  // },
  grow: {
    flexGrow: 1,
  },
  mainNav: {
    position: "relative",
    color: "black",
    minHeight: "90px",
    borderBottom: "1px solid gray",
  },
  logo: {
    marginRight: "20px",
  },
  dropIconButton: {
    padding: "5px",
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
  navMenu: {
    transition: "all .5s ease",
    border:"1px solid gray",
    borderRadius: "5px",
  },
  navItem: {
    display: "inline-block",
    color: "gray",
    "&:hover": {
      color: "#009fdb",
    },
  },
  navLink: {
    padding: "14px 16px",
    fontSize: "17px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "all .2s linear",
  },
  dropDown: {
    position: "relative",
    "&:hover": {
      "& .dropdown-content": {
        display: "block",
      },
    },
  },
  dropDownContent: {
    display: "none",
    position: "absolute",
    backgroundColor: "#f9f9f9",
    minWidth: "240px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: "1",
    [theme.breakpoints.down("md")]: {
      position: "relative",
    },
    "& a": {
      float: "none",
      color: "black",
      padding: "12px 16px",
      textDecoration: "none",
      fontSize: "17px",
      display: "block",
      textAlign: "left",
      cursor: "pointer",
      transition: "all .3s ease",
      borderTop: "1px solid #eaeaea",
      "&:hover": {
        backgroundColor: "#ddd",
        color: "black",
      },
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 88,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "white" : "white",
      transition: "all .3s ease",
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960 ? setOpen(false) : setOpen(true);
    };
    setResponsiveness();
  }, []);

  const {
    grow,
    mainNav,
    dropIconButton,
    navLink,
    navItem,
    dropDown,
    dropDownContent,
    menuButton,
    navMenu,
    logo,
    desktop,
  } = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={desktop}>
          <Toolbar className={mainNav}>
            <img
              style={{ width: "170px", padding: "0px 10px" }}
              alt=""
              src="../../images/Training/logo.png"
            ></img>
            <div style={{marginLeft:"auto", display:"flex", alignItems:"center"}} >
            <Box className={navMenu}>
              <Box className={`${navItem} ${dropDown}`}>
                <Typography
                  className={navLink}
                  variantMapping={{ a: "a" }}
                  variant="a"
                >
                  account details
                  <IconButton className={dropIconButton} color="inherit">
                    <ExpandMoreIcon></ExpandMoreIcon>
                  </IconButton>
                </Typography>
                <Box className={`${dropDownContent} dropdown-content`}>
                  <Typography variantMapping={{ a: "a" }} variant="a">
                    Banking Solution
                  </Typography>
                  <Typography variantMapping={{ a: "a" }} variant="a">
                    Mobile App Development
                  </Typography>
                  <Typography variantMapping={{ a: "a" }} variant="a">
                    E-commerce Solution
                  </Typography>
                </Box>
              </Box>
            </Box>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
