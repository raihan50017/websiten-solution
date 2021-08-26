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
import { useDropzone } from "react-dropzone";
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
  bottomFooter: {
    backgroundColor: "#6A737BD9",
    padding: "20px 40px",
    marginTop: "90px",
    "& p": {
      fontWeight: "500",
      fontSize: "16px",
      textAlign: "left",
      padding: "5px",
    },
  },
  linechartContainer: {
    padding: "15px",
    backgroundColor: "#6A737B4F",
  },
  card: {
    width: "50%",
    textAlign: "center",
    marginLeft: "auto",
    border: "1px solid rgba(0,0,0,.1)",
    height: "100%",
    padding: "20px 15px",
    "& h6": {
      marginTop: "20px",
      marginBottom: "20px",
    },
    "& p": {
      marginBottom: "20px",
      fontSize: "16px",
      fontWeight: "400",
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
  logoUpload: {
    display: "flex",
    alignItems: "center",
    border: "1px solid gray",
    padding: "10px",
    width: "auto",

    "& .MuiSvgIcon-root": {
      color: "#D24D57",
      marginLeft: "8px",
    },
  },
  editItemCard: {
    border: "1px solid rgba(0,0,0,.2)",
    padding: "20px",
    marginBottom: "20px",
  },
}));

const EditUserAccount = () => {
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
                Edit user account
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
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.pageHeading}
        >
          <Box>
            <Typography variant="h4">first and last name of tutor</Typography>
          </Box>
        </Grid>
      </Box>
      <Box className={classes.container}>
        <Grid
          className={classes.editItemCard}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Grid container alignItems="center">
              <img
                style={{ height: "80px" }}
                alt=""
                src="../../images/user.svg"
              ></img>
              <Box>
                <Typography variant="h6">Edit profile</Typography>
                <Typography variantMapping={{ p: "p" }} variant="p">
                  company details, website, bio
                </Typography>
              </Box>
            </Grid>
          </Box>
          <Box>
            <Button variant="outlined" color="primary">
              Customize
            </Button>
          </Box>
        </Grid>
        <Grid
          className={classes.editItemCard}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Grid container alignItems="center">
              <img
                style={{ height: "80px", marginRight: "10px" }}
                alt=""
                src="../../images/change-payment-info.svg"
              ></img>
              <Box>
                <Typography variant="h6">
                  Change payment information{" "}
                </Typography>
                <Typography variantMapping={{ p: "p" }} variant="p">
                  Credit card, IBAN, SEPA direct debit
                </Typography>
              </Box>
            </Grid>
          </Box>
          <Box>
            <Button variant="outlined" color="primary">
              Customize
            </Button>
          </Box>
        </Grid>
        <Grid
          className={classes.editItemCard}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Grid container alignItems="center">
              <img
                style={{ height: "80px", marginRight: "10px" }}
                alt=""
                src="../../images/change-password.svg"
              ></img>
              <Box>
                <Typography variant="h6">Change password</Typography>
                <Typography
                  variantMapping={{ p: "p" }}
                  variant="p"
                ></Typography>
              </Box>
            </Grid>
          </Box>
          <Box>
            <Button variant="outlined" color="primary">
              Customize
            </Button>
          </Box>
        </Grid>
        <Box style={{ marginTop: "30px" }}>
          <RouterLink
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <box className={classes.backArrow}>
              <ArrowBackIcon></ArrowBackIcon>
              <Typography variant="body1">Back</Typography>
            </box>
          </RouterLink>
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

export default EditUserAccount;
