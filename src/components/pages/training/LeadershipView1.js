import React from "react";
import Header from "./trainingShared/header/Header";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Footer from "./trainingShared/footer/Footer";
import { useDropzone } from "react-dropzone";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const trainings = [
  {
    value: "selection",
    label: "Selection__",
  },
  {
    value: "sales",
    label: "Sales-training",
  },
  {
    value: "communication",
    label: "Communication-training",
  },
  {
    value: "leadership",
    label: "Leadership-training",
  },
];

const styles = makeStyles((theme) => ({
  view1: {
    backgroundColor: "#fff",
  },
  viewContainer: {
    padding: "70px 0px",
  },
  back: {
    textAlign: "center",
    fontWeight: "700",
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
  selection: {
    textAlign: "center",
    paddingTop: "50px",
  },
  textSelection: {
    width: "90%",
  },
  dragDrop: {
    padding: "0 20px",
  },
  dropzone: {
    border: "1px dashed gray",
    padding: "20px",
    textAlign: "center",
    color: "gray",
    backgroundColor: "#e6ede8",
  },
  files: {
    width: "90%",
    margin: "auto",
    textAlign: "left",
    padding: "40px 20px",
  },
  fileName: {
    padding: "20px 0",
  },
  elementFile: {
    backgroundColor: "black",
    color: "#fff",
  },
  taskStudent: {
    padding: "30px",
  },
  message: {
    padding: "40px 50px",
    border: "1px solid #ede9e8",
  },
  messageButton: {
    backgroundColor: "#F39200",
    padding: "10px 30px",
    textTransform: "lowercase",
  },
  update: {
    paddingTop: "70px",
  },
  updateButton: {
    backgroundColor: "#F39200",
    paddingLeft: "10px 30px",
    textTransform: "lowercase",
  },
}));

const LeadershipView1 = () => {
  const classes = styles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      <Header title="Leadership Module view 1"></Header>
      <Box className={classes.view1}>
        <Grid container className={classes.viewContainer}>
          <Grid className={classes.back} md={1}>
            <Box className={classes.backHeading}>
              <Box style={{ margin: "30px" }}>
                <RouterLink
                  to="/select-training"
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
          </Grid>

          <Grid xs={12} className={classes.selection} md={7}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.textSelection}
                id="outlined-select-currency-native"
                select
                label="part"
                value={currency}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {trainings.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </form>
          </Grid>

          <Grid xs={12} className={classes.dragDrop} md={4}>
            <section style={{ padding: "40px" }} className="container">
              <div className={classes.dropzone}>
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <Box className={classes.userIcon}>
                    <img
                      style={{ width: "60px" }}
                      alt=""
                      src="../../images/Training/drag-and-drop.png"
                    ></img>
                  </Box>
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </div>
            </section>
          </Grid>
        </Grid>
        <Box>
          <aside className={classes.files}>
            <h4 className={classes.fileName}>existing files</h4>
            <ul className={classes.elementFile}>{files}</ul>
          </aside>
        </Box>

        <Grid container alignItems="center">
          <Grid xs={12} className={classes.message} md={10}>
            <Box>
              <Grid container>
                <Grid alignItems="center" md={8}>
                  <Grid container alignItems="center">
                    <span>
                      <img
                        style={{ width: "50px", verticalAlign: "center" }}
                        alt=""
                        src="../../images/Training/communication.png"
                      ></img>
                    </span>
                    <span
                      style={{
                        fontWeight: "700",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      }}
                    >
                      send task to students
                    </span>
                  </Grid>
                </Grid>
                <Grid md={4}>
                  <span>
                    <Button
                      className={classes.messageButton}
                      variant="outlined"
                      style={{ marginLeft: "14px" }}
                    >
                      send message
                    </Button>
                  </span>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid xs={12} className={classes.update} md={2}>
            <section className="container">
              <Button
                style={{ margin: "14px" }}
                className={classes.updateButton}
                variant="outlined"
              >
                update
              </Button>
            </section>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default LeadershipView1;
