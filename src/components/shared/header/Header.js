import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import { Box, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { alpha } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    desktop:{
        [theme.breakpoints.down("md")]: {
              display: "none",
        
            },
    },
  grow: {
    flexGrow: 1,
  },
  mainNav: {
    position: "relative",
    color: "black",
    minHeight: "90px",
  },
  logo:{
   marginRight:"20px",
  },
  dropIconButton: {
    padding: "5px",
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
  navMenu: {
    transition: "all .5s ease",
  },
  navItem: {
    display: "inline-block",
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
  menuButton: {
    // right: "30px",
    // top: "0px",
    // [theme.breakpoints.down("md")]: {
    //   display: "block",
    // },
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft:"auto",
    border:"1px solid black",
  
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
     
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
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
    search,
    searchIcon,
    inputRoot,
    inputInput,
    desktop
  } = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={desktop}>
          <Toolbar className={mainNav}>
            <Typography style={{marginRight:"20px"}} className={{logo}} variant="h6" noWrap>
              WEBSITEN-SOLUTION
            </Typography>
              <Box className={navMenu}>
                <Box className={`${navItem} ${dropDown}`}>
                  <Typography
                    className={navLink}
                    variantMapping={{ a: "a" }}
                    variant="a"
                  >
                    Solution
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
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Cloud And Cyber Security
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Buciness Intelligence
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      ML & AI
                    </Typography>
                  </Box>
                </Box>
                <Box className={`${navItem} ${dropDown}`}>
                  <Typography
                    className={navLink}
                    variantMapping={{ a: "a" }}
                    variant="a"
                  >
                   Platform
                    <IconButton className={dropIconButton} color="inherit">
                      <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>
                  </Typography>
                  <Box className={`${dropDownContent} dropdown-content`}>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Fintech
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Telecom
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Education
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Halthcare
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      E-commerce
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Startup
                    </Typography>
                  </Box>
                </Box>
                <Box className={`${navItem} ${dropDown}`}>
                  <Typography
                    className={navLink}
                    variantMapping={{ a: "a" }}
                    variant="a"
                  >
                    About Us
                    <IconButton className={dropIconButton} color="inherit">
                      <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>
                  </Typography>
                  <Box className={`${dropDownContent} dropdown-content`}>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      About Us
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Our Partners
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Media
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Career
                    </Typography>
                  </Box>
                </Box>
                <Box className={`${navItem} ${dropDown}`}>
                  <Typography
                    className={navLink}
                    variantMapping={{ a: "a" }}
                    variant="a"
                  >
                    Contact
                    <IconButton className={dropIconButton} color="inherit">
                      <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>
                  </Typography>
                  <Box className={`${dropDownContent} dropdown-content`}>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      About Us
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Our Partners
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Media
                    </Typography>
                    <Typography variantMapping={{ a: "a" }} variant="a">
                      Career
                    </Typography>
                  </Box>
                </Box>
              </Box>
           <div style={{marginLeft:"auto", display:"flex", alignItems:"center"}} >
           <div  className={search}>
            <div className={searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: inputRoot,
                input: inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
         <div>
         <IconButton>
              <AccountCircleIcon fontSize="large"></AccountCircleIcon>
          </IconButton>
         </div>
         </div>
            {/* <IconButton
              className={menuButton}
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleToggle}
            >
              <MenuIcon />
            </IconButton> */}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
