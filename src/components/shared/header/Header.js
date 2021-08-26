import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import { Box, Grid, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { alpha } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Drawer, Link } from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "white" : "white",
      color: trigger ? "rgba(0,0,0,.7)" : "rgba(0,0,0,.7)",
      transition: trigger ? "0.5s" : "0.5s",
      transform: trigger ? "scale(1)" : "scale(1.05)",
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  header: {
    paddingRight: "79px",
    paddingLeft: "79px",
    position: "fixed",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#82B440",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  homeBody: {
    marginTop: "-64px",
  },
  desktop: {
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
        color: "blue",
      },
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: "auto",
    border: "1px solid black",

    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header(props) {
  const { children } = props;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [open2, setOpen2] = React.useState(false);
  const anchorRef2 = React.useRef(null);
  const [open3, setOpen3] = React.useState(false);
  const anchorRef3 = React.useRef(null);
  const [open4, setOpen4] = React.useState(false);
  const anchorRef4 = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleToggle2 = () => {
    setOpen2((prevOpen) => !prevOpen);
    setOpen(false);
    setOpen3(false);
    setOpen4(false);
  };

  const handleClose2 = (event) => {
    if (anchorRef2.current && anchorRef2.current.contains(event.target)) {
      return;
    }

    setOpen2(false);
  };

  const handleToggle3 = () => {
    setOpen3((prevOpen) => !prevOpen);
    setOpen2(false);
    setOpen(false);
    setOpen4(false);
  };

  const handleClose3 = (event) => {
    if (anchorRef3.current && anchorRef3.current.contains(event.target)) {
      return;
    }

    setOpen3(false);
  };

  const handleToggle4 = () => {
    setOpen4((prevOpen) => !prevOpen);
    setOpen2(false);
    setOpen3(false);
    setOpen(false);
  };

  const handleClose4 = (event) => {
    if (anchorRef4.current && anchorRef4.current.contains(event.target)) {
      return;
    }

    setOpen4(false);
  };

  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    homeBody,
    grow,
    mainNav,
    dropIconButton,
    navLink,
    navItem,
    dropDown,
    dropDownContent,
    navMenu,
    search,
    searchIcon,
    inputRoot,
    inputInput,
    desktop,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <Typography
          style={{ marginRight: "20px" }}
          className={{ logo }}
          variant="h6"
          noWrap
        >
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
                <RouterLink style={{ border: "none", padding: "0" }} to="/">
                  Home
                </RouterLink>
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                <RouterLink
                  style={{ border: "none", padding: "0" }}
                  to="/registration"
                >
                  Registration
                </RouterLink>
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                <RouterLink
                  style={{ border: "none", padding: "0" }}
                  to="/dashboard-quotas"
                >
                  Dashboard Quotas
                </RouterLink>
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
                <RouterLink
                  style={{ border: "none", padding: "0" }}
                  to="/platform"
                >
                  Platform
                </RouterLink>
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                <RouterLink
                  style={{ border: "none", padding: "0" }}
                  to="/tutor-service"
                >
                  Tutor Service
                </RouterLink>
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                <RouterLink
                  style={{ border: "none", padding: "0" }}
                  to="/setup-platform"
                >
                  Setup Platform
                </RouterLink>
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                <RouterLink
                  style={{ border: "none", padding: "0" }}
                  to="/edit-user"
                >
                  Edit User
                </RouterLink>
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                <RouterLink
                  style={{ border: "none", padding: "0" }}
                  to="/change-payment-info"
                >
                  Change Payment Info
                </RouterLink>
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                <RouterLink
                  style={{ border: "none", padding: "0" }}
                  to="/profile-setting"
                >
                  Update Profile
                </RouterLink>
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                <RouterLink
                  style={{ border: "none", padding: "0" }}
                  to="/change-password"
                >
                  Change Password
                </RouterLink>
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                <RouterLink
                  style={{ border: "none", padding: "0" }}
                  to="/delete-account"
                >
                  Delete Account
                </RouterLink>
              </Typography>
              <Typography variantMapping={{ a: "a" }} variant="a">
                <RouterLink
                  style={{ border: "none", padding: "0" }}
                  to="/report-training"
                >
                  Report Training
                </RouterLink>
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
                <RouterLink
                  style={{ border: "none", padding: "0" }}
                  to="/about-us"
                >
                  About Us
                </RouterLink>
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
        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          <div className={search}>
            <div className={searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: inputRoot,
                input: inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div>
            <IconButton>
              <AccountCircleIcon fontSize="large"></AccountCircleIcon>
            </IconButton>
          </div>
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className={search}>
            <div className={searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: inputRoot,
                input: inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div>
            <IconButton>
              <AccountCircleIcon fontSize="large"></AccountCircleIcon>
            </IconButton>
          </div>
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <div>
        <Typography variant="h6">WEBSITEN-SOLUTION</Typography>
        <div>
          <Typography
            className={navLink}
            variantMapping={{ a: "a" }}
            variant="a"
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Solution
            <IconButton className={dropIconButton} color="inherit">
              <ExpandMoreIcon></ExpandMoreIcon>
            </IconButton>
          </Typography>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            style={{ zIndex: "999", width: "100%", padding: "10px" }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      style={{ zIndex: "9999" }}
                      autoFocusItem={open}
                      id="menu-list-grow"
                    >
                      <MenuItem onClick={handleClose}>
                        <RouterLink
                          style={{
                            border: "none",
                            padding: "0",
                            textDecoration: "none",
                            color: "inherit",
                          }}
                          to="/"
                        >
                          Home
                        </RouterLink>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <RouterLink
                          style={{
                            border: "none",
                            padding: "0",
                            textDecoration: "none",
                            color: "inherit",
                          }}
                          to="/registration"
                        >
                          Registration
                        </RouterLink>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Typography variantMapping={{ a: "a" }} variant="a">
                          <RouterLink
                            style={{
                              border: "none",
                              padding: "0",
                              textDecoration: "none",
                              color: "inherit",
                            }}
                            to="/dashboard-quotas"
                          >
                            Dashboard Quotas
                          </RouterLink>
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <div>
          <Typography
            className={navLink}
            variantMapping={{ a: "a" }}
            variant="a"
            ref={anchorRef2}
            aria-controls={open2 ? "menu-list-grow2" : undefined}
            aria-haspopup="true"
            onClick={handleToggle2}
          >
            Platform
            <IconButton className={dropIconButton} color="inherit">
              <ExpandMoreIcon></ExpandMoreIcon>
            </IconButton>
          </Typography>
          <Popper
            open={open2}
            anchorEl={anchorRef2.current}
            role={undefined}
            transition
            disablePortal
            style={{ zIndex: "999", width: "100%", padding: "10px" }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      style={{ zIndex: "9999", width: "100%", padding: "10px" }}
                      autoFocusItem={open2}
                      id="menu-list-grow2"
                    >
                      <MenuItem onClick={handleClose}>
                        <RouterLink
                          style={{
                            border: "none",
                            padding: "0",
                            textDecoration: "none",
                            color: "inherit",
                          }}
                          to="/platform"
                        >
                          Platform
                        </RouterLink>
                      </MenuItem>
                      <MenuItem onClick={handleClose2}>
                        <Typography variantMapping={{ a: "a" }} variant="a">
                          <RouterLink
                            style={{
                              border: "none",
                              padding: "0",
                              textDecoration: "none",
                              color: "inherit",
                            }}
                            to="/tutor-service"
                          >
                            Tutor Service
                          </RouterLink>
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClose2}>
                        <Typography variantMapping={{ a: "a" }} variant="a">
                          <RouterLink
                            style={{
                              border: "none",
                              padding: "0",
                              textDecoration: "none",
                              color: "inherit",
                            }}
                            to="/setup-platform"
                          >
                            Setup Platform
                          </RouterLink>
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClose2}>
                        <Typography variantMapping={{ a: "a" }} variant="a">
                          <RouterLink
                            style={{
                              border: "none",
                              padding: "0",
                              textDecoration: "none",
                              color: "inherit",
                            }}
                            to="/edit-user"
                          >
                            Edit User
                          </RouterLink>
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClose2}>
                        <Typography variantMapping={{ a: "a" }} variant="a">
                          <RouterLink
                            style={{
                              border: "none",
                              padding: "0",
                              textDecoration: "none",
                              color: "inherit",
                            }}
                            to="/change-payment-info"
                          >
                            Change Payment Info
                          </RouterLink>
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClose2}>
                        <Typography variantMapping={{ a: "a" }} variant="a">
                          <RouterLink
                            style={{
                              border: "none",
                              padding: "0",
                              textDecoration: "none",
                              color: "inherit",
                            }}
                            to="/profile-setting"
                          >
                            Update Profile
                          </RouterLink>
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClose2}>
                        <Typography variantMapping={{ a: "a" }} variant="a">
                          <RouterLink
                            style={{
                              border: "none",
                              padding: "0",
                              textDecoration: "none",
                              color: "inherit",
                            }}
                            to="/change-password"
                          >
                            Change Password
                          </RouterLink>
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClose2}>
                        <Typography variantMapping={{ a: "a" }} variant="a">
                          <RouterLink
                            style={{
                              border: "none",
                              padding: "0",
                              textDecoration: "none",
                              color: "inherit",
                            }}
                            to="/delete-account"
                          >
                            Delete Account
                          </RouterLink>
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClose2}>
                        <Typography variantMapping={{ a: "a" }} variant="a">
                          <RouterLink
                            style={{
                              border: "none",
                              padding: "0",
                              textDecoration: "none",
                              color: "inherit",
                            }}
                            to="/report-training"
                          >
                            Report Training
                          </RouterLink>
                        </Typography>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <div>
          <Typography
            className={navLink}
            variantMapping={{ a: "a" }}
            variant="a"
            ref={anchorRef3}
            aria-controls={open3 ? "menu-list-grow3" : undefined}
            aria-haspopup="true"
            onClick={handleToggle3}
          >
            About Us
            <IconButton className={dropIconButton} color="inherit">
              <ExpandMoreIcon></ExpandMoreIcon>
            </IconButton>
          </Typography>
          <Popper
            open={open3}
            anchorEl={anchorRef3.current}
            role={undefined}
            transition
            disablePortal
            style={{ zIndex: "999", width: "100%", padding: "10px" }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      style={{ zIndex: "9999" }}
                      autoFocusItem={open3}
                      id="menu-list-grow3"
                    >
                      <MenuItem onClick={handleClose}>
                        <RouterLink
                          style={{
                            border: "none",
                            padding: "0",
                            textDecoration: "none",
                            color: "inherit",
                          }}
                          to="/about-us"
                        >
                          About Us
                        </RouterLink>
                      </MenuItem>
                      <MenuItem onClick={handleClose3}>Profile</MenuItem>
                      <MenuItem onClick={handleClose3}>My account</MenuItem>
                      <MenuItem onClick={handleClose3}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <div>
          <Typography
            className={navLink}
            variantMapping={{ a: "a" }}
            variant="a"
            ref={anchorRef4}
            aria-controls={open4 ? "menu-list-grow4" : undefined}
            aria-haspopup="true"
            onClick={handleToggle4}
          >
            Contact
            <IconButton className={dropIconButton} color="inherit">
              <ExpandMoreIcon></ExpandMoreIcon>
            </IconButton>
          </Typography>
          <Popper
            open={open4}
            anchorEl={anchorRef4.current}
            role={undefined}
            transition
            disablePortal
            style={{ zIndex: "999", width: "100%", padding: "10px" }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      style={{ zIndex: "9999" }}
                      autoFocusItem={open4}
                      id="menu-list-grow4"
                    >
                      <MenuItem onClick={handleClose4}>Profile</MenuItem>
                      <MenuItem onClick={handleClose4}>My account</MenuItem>
                      <MenuItem onClick={handleClose4}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box className={homeBody}>{children}</Box>
    </React.Fragment>
  );
}
