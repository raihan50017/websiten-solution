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

const ConfirmDelete = () => {
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
            <Typography variant="h6">
              Request account closure and data deletion
            </Typography>
            <Typography variant="body1">
              You may submit a request to permanently close your account and
              delete your personal data.<br></br> To send a request to close
              your account and delete your personal data: <br></br>1. go to
              Close your account.<br></br> 2. Sign in to the account you want to
              close.<br></br> 3. review the products and services associated
              with your account.<br></br> 4. If you still want to proceed,
              select a reason from the drop-down menu, check the box next to
              Yes, I want to close my account permanently and delete my data,
              and click Close My Account.<br></br> <br></br>A confirmation
              notification will be sent to the email address associated with
              your account or via SMS. You must respond within 5 days to verify
              your request.<br></br>
              <br></br> <strong>Note: </strong>
              Once your account is closed, it is no longer accessible to you or
              anyone else and cannot be restored. If you later decide you want
              to order from us again or use website features that require a
              customer account, you will need to create a new account. To learn
              more, visit What happens if I close my account?
            </Typography>
          </Box>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            className={classes.padding10}
          >
            <Button color="primary" variant="contained">
              go to close your account
            </Button>
          </Grid>
        </Box>
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

export default ConfirmDelete;
