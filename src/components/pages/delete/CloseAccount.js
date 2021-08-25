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
  Checkbox,
} from "@material-ui/core";
import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditIcon from "@material-ui/icons/Edit";
import RefreshIcon from "@material-ui/icons/Refresh";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
  bottomFooter: {
    backgroundColor: "#6A737BD9",
    marginTop: "25px",
    padding: "10px 10px",
    bottom: "0",
    width: "100%",
    "& p": {
      fontWeight: "400",
      fontSize: "16px",
      textAlign: "center",
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

const CloseAccount = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
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
                Delete account
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
      <Box className={classes.container}>
        <Box>
          <Box className={classes.padding10}>
            <img
              style={{ height: "50px" }}
              alt=""
              src="../../images/delete.svg"
            ></img>
          </Box>
          <Box className={classes.padding10}>
            <Typography variant="h6">PLEASE READ THIS CAREFULLY</Typography>
            <Typography align="justify" variant="body1">
              You are about to submit a request to permanently close your
              account and delete your information. Once your account has been
              closed, any services you access through your account will no
              longer be available to you. This applies to all features and
              access to and beyond the services and products offered through
              these websites.
              <br></br>
              <br></br>
              If you have uploaded your own content to any of our Services (such
              as photos, videos, or presentations), you may download that
              content before closing your account.
              <br></br>
              <br></br>
              If you proceed with this request, you will no longer be able to
              access products and services associated with your closed account,
              including:
            </Typography>
          </Box>
        </Box>
        <Box className={classes.padding10}>
          <Box
            className={classes.padding10}
            style={{ border: "1px dotted red" }}
          >
            <Grid container direction="row" wrap="nowrap">
              <Box>
                <img
                  style={{ height: "90px", paddingRight: "10px" }}
                  alt=""
                  src="../../images/exclamation2.svg"
                ></img>
              </Box>
              <Box>
                <Typography variant="h6">
                  An account closure is final{" "}
                </Typography>
                <Typography align="justify" variant="body1">
                  Please note that account closure is permanent. Once your
                  account is closed, it is no longer available to you and cannot
                  be restored. If you later decide to place services with us
                  again, or wish to use products and services that require an
                  account, you will need to create a new account.
                </Typography>
              </Box>
            </Grid>
          </Box>
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={classes.padding10}
        >
          <Box>
            <Grid container alignItems="center" wrap="nowrap">
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <Typography variant="body1">
                yes, I would like to close my account permanently and delete my
                data.{" "}
              </Typography>
            </Grid>
          </Box>
          <Button color="primary" variant="contained">
            close my account
          </Button>
        </Grid>
        <Grid
          style={{ marginTop: "50px" }}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <box className={classes.backArrow}>
            <ArrowBackIcon></ArrowBackIcon>
            <Typography variant="body1">Back</Typography>
          </box>
        </Grid>
      </Box>
      <Box className={classes.bottomFooter}>
        <Grid container>
          <Grid md={4}>
            <Typography variantMapping={{ p: "p" }} variant="p">
              Made byKmitk Gmbh
            </Typography>
          </Grid>
          <Grid md={4}>
            <Typography variantMapping={{ p: "p" }} variant="p">
              Kreantivitat Koph
            </Typography>
          </Grid>
          <Grid md={4}>
            <Typography variantMapping={{ p: "p" }} variant="p">
              Tel. +41 79 699 71 72 Email: xxx@xxx.ch
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CloseAccount;
