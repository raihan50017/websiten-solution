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

const ProfileSetting = () => {
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
          <Grid xs={6}>
            <Box>
              <Typography
                style={{ textAlign: "right", marginRight: "20px" }}
                variant="h5"
              >
                Profile setting
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
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
          <Typography className={classes.padding10} variant="h6">
            Setting
          </Typography>
        </Box>

        <Box>
          <Grid container>
            <Grid className={classes.padding10} xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Firstname"
                variant="outlined"
                className={classes.formControl}
                required
              />
            </Grid>
            <Grid className={classes.padding10} xs={12} md={6}>
              {" "}
              <TextField
                id="outlined-basic"
                label="Lastname"
                variant="outlined"
                className={classes.formControl}
                required
              />
            </Grid>
          </Grid>
          <Box className={classes.padding10}>
            {" "}
            <TextField
              id="outlined-basic"
              label="Company"
              variant="outlined"
              className={classes.formControl}
              required
            />
          </Box>
          <Box className={classes.padding10}>
            {" "}
            <TextField
              id="outlined-basic"
              label="Experience"
              variant="outlined"
              className={classes.formControl}
              required
            />
          </Box>
          <Box className={classes.padding10}>
            {" "}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.formControl}
              type="email"
              required
            />
          </Box>
          <Box className={classes.padding10}>
            {" "}
            <TextField
              id="outlined-basic"
              label="Website"
              variant="outlined"
              className={classes.formControl}
              required
            />
          </Box>
          <Box className={classes.padding10}>
            {" "}
            <TextField
              id="outlined-basic"
              label="Instagram"
              variant="outlined"
              className={classes.formControl}
              required
            />
          </Box>
          <Box className={classes.padding10}>
            {" "}
            <TextField
              id="outlined-basic"
              label="Linkedin"
              variant="outlined"
              className={classes.formControl}
              required
            />
          </Box>
          <Box className={classes.padding10}>
            {" "}
            <TextField
              id="outlined-basic"
              label="Fusszeile"
              variant="outlined"
              className={classes.formControl}
              required
            />
          </Box>
          <Grid container>
            <Grid className={classes.padding10} xs={12} md={6}>
              <Typography variant="body1">Profile picture</Typography>
              <input
                style={{
                  border: "1px solid gray",
                  padding: "10px 12px",
                  width: "100%",
                  borderRadius: "5px",
                  backgroundColor: "rgba(0,0,0,.1)",
                }}
                type="file"
              ></input>
            </Grid>
            <Grid className={classes.padding10} xs={12} md={6}>
              <Typography variant="body1">Company logo</Typography>
              <input
                style={{
                  border: "1px solid gray",
                  padding: "10px 12px",
                  width: "100%",
                  borderRadius: "5px",
                  backgroundColor: "rgba(0,0,0,.1)",
                }}
                type="file"
              ></input>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            className={classes.padding10}
          >
            <Button color="primary" variant="contained">
              UPDATE PROFILE
            </Button>
          </Grid>
        </Box>
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

export default ProfileSetting;
