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
  FormLabel,
} from "@material-ui/core";
import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditIcon from "@material-ui/icons/Edit";
import RefreshIcon from "@material-ui/icons/Refresh";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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

const ChangePaymentInfo = () => {
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

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
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
        <Box>
          <Typography className={classes.padding10} variant="h6">
            Payment adresse
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
              label="Lastname"
              variant="outlined"
              className={classes.formControl}
              required
            />
          </Box>
          <Grid container>
            <Grid className={classes.padding10} xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                className={classes.formControl}
                required
              />
            </Grid>
            <Grid className={classes.padding10} xs={12} md={6}>
              {" "}
              <TextField
                id="outlined-basic"
                label="Postcode"
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
              label="Email"
              variant="outlined"
              className={classes.formControl}
              type="email"
              required
            />
          </Box>
          <Box>
            <Typography className={classes.padding10} variant="h6">
              Account status
            </Typography>
            <Box className={classes.padding10}>
              {" "}
              <TextField
                id="outlined-basic"
                label="your membership is currently active"
                variant="outlined"
                className={classes.formControl}
                type="email"
                required
              />
            </Box>
          </Box>
          <Box>
            <Grid container>
              <Grid className={classes.padding10} xs={12} md={6}>
                <Typography className={classes.padding10} variant="h6">
                  Card in profile
                </Typography>
                <Box
                  style={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                  }}
                  className={classes.padding10}
                >
                  <Typography variantMapping={{ p: "p" }} variant="p">
                    IBAN ends on 6587<br></br> BIC XXXXXXXXX<br></br> Show
                    client
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} md={6} className={classes.padding10}>
                <Typography className={classes.padding10} variant="h6">
                  Change payment method
                </Typography>
                <Box
                  style={{ border: "1px solid gray", borderRadius: "5px" }}
                  className={classes.padding10}
                >
                  <Grid container>
                    <Grid xs={5}>
                      <Box
                        style={{
                          textAlign: "right",
                          paddingRight: "15px",
                          height: "60px",
                        }}
                      ></Box>
                      <Box style={{ paddingRight: "15px" }}>
                        <img
                          style={{ height: "40px", verticalAlign: "middle" }}
                          alt=""
                          src="../../images/visa.svg"
                        ></img>
                        <img
                          style={{ height: "30px", verticalAlign: "middle" }}
                          alt=""
                          src="../../images/master-card.svg"
                        ></img>
                      </Box>
                      <Box style={{ paddingRight: "15px" }}>
                        <img
                          style={{ height: "30px", verticalAlign: "middle" }}
                          alt=""
                          src="../../images/sepa.webp"
                        ></img>
                      </Box>
                    </Grid>
                    <Grid xs={7}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          select your payment method
                        </FormLabel>
                        <RadioGroup
                          aria-label="payment-method"
                          name="payment"
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="card in profile"
                            control={<Radio />}
                            label="Card in profile"
                          />
                          <FormControlLabel
                            value="new credit card"
                            control={<Radio />}
                            label="New credit card"
                          />
                          <FormControlLabel
                            value="New IBAN"
                            control={<Radio />}
                            label="new iban"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            className={classes.padding10}
          >
            <Button color="primary" variant="contained">
              SAVE
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

export default ChangePaymentInfo;
