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
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  withStyles,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditIcon from "@material-ui/icons/Edit";
import RefreshIcon from "@material-ui/icons/Refresh";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as RouterLink } from "react-router-dom";

const styles = makeStyles((theme) => ({
  container: {
    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "20%",
    paddingRight: "20%",
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

  backArrow: {
    display: "flex",
    alignItems: "center",
    "& .MuiSvgIcon-root": {
      marginRight: "5px",
      color: "#083C6B",
      fontSize: "20px",
    },
  },
  formControl: {
    width: "100%",
  },
  padding10: {
    padding: "10px 10px",
  },
}));

const ReportTraining = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const anchorRef = React.useRef(null);
  const anchorRef2 = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleToggle2 = () => {
    setOpen2((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleClose2 = (event) => {
    if (anchorRef2.current && anchorRef2.current.contains(event.target)) {
      return;
    }

    setOpen2(false);
  };

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      "&:focus": {
        backgroundColor: theme.palette.primary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

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
          <Grid xs={4}></Grid>
          <Grid xs={4}>
            <Box>
              <Typography style={{ textAlign: "center" }} variant="h5">
                Report Training
              </Typography>
            </Box>
          </Grid>
          <Grid xs={4}>
            <div style={{ marginRight: "auto", display: "inline-block" }}>
              <Typography
                variantMapping={{ p: "p" }}
                variant="p"
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                style={{
                  border: "1px solid gray",
                  padding: "12px 14px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  paddingRight: "10px",
                }}
              >
                Account Dtails{" "}
                <ExpandMoreIcon
                  style={{ verticalAlign: "middle" }}
                ></ExpandMoreIcon>
              </Typography>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                style={{ zIndex: "999" }}
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
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <StyledMenuItem>
                            <ListItemIcon>
                              <EditIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="edit account details" />
                          </StyledMenuItem>
                          <StyledMenuItem>
                            <ListItemIcon>
                              <RefreshIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Show activities" />
                          </StyledMenuItem>
                          <StyledMenuItem>
                            <ListItemIcon>
                              <DeleteIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="delete account" />
                          </StyledMenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </Grid>
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
            <Typography variant="h4">Reporting trainings</Typography>
          </Box>
        </Grid>
      </Box>
      <Box className={classes.container}>
        <Grid container>
          <Box>
            <Grid container wrap="nowrap" alignItems="flex-start">
              <Box className={classes.padding10}>
                <img
                  style={{ width: "60px" }}
                  alt=""
                  src="../../images/classlecture.svg"
                ></img>
              </Box>
              <Box style={{ paddingTop: "5px" }}>
                <Typography style={{ marginBottom: "10px" }} variant="h6">
                  Evaluation of the trainings
                </Typography>
                <Box>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    className={classes.formControl}
                    type="text"
                  />
                </Box>
              </Box>
            </Grid>
          </Box>
          <Box>
            <div>
              <Typography
                ref={anchorRef2}
                aria-controls={open2 ? "menu-list-grow-2" : undefined}
                aria-haspopup="true"
                onClick={handleToggle2}
                style={{
                  margin: "12px 30px",
                  border: "1px solid gray",
                  padding: "8px 10px",
                  cursor: "pointer",
                }}
              >
                account details
                <ExpandMoreIcon
                  style={{ verticalAlign: "middle" }}
                ></ExpandMoreIcon>
              </Typography>
              <Popper
                open={open2}
                anchorEl={anchorRef2.current}
                role={undefined}
                transition
                disablePortal
                style={{ zIndex: "999" }}
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
                      <ClickAwayListener onClickAway={handleClose2}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow-2"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleClose}>
                            {" "}
                            edit account details
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            show activities
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            {" "}
                            delete account
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </Box>
        </Grid>
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            className={classes.padding10}
            style={{ marginTop: "40px" }}
          >
            <Button color="primary" variant="contained">
              + Add CHART
            </Button>
          </Grid>
        </Box>
        <Grid
          style={{ marginTop: "0px" }}
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.createAccountContainer}
        >
          <RouterLink
            to="/"
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

export default ReportTraining;
