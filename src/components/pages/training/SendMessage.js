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
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const trainings = [
  {
    value: "selection",
    label: "select files",
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
    padding: "10px 0px",
  },
  selection: {
    textAlign: "center",
    paddingTop: "50px",
  },
  textSelection: {
    width: "90%",
    margin: "10px 0",
  },
  dragDrop: {
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },
    paddingRight: "10px",
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
  back: {
    fontWeight: "700",
    padding: "20px",
    textAlign: "right",
  },
  editor: {
    margin: "50px",
    padding: "10px",
    border: "1px solid gray",
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
}));

const SendMessage = () => {
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
  const [editorState, setEditorState] = React.useState(
    MUIEditorState.createEmpty()
  );
  const onChange = (newState) => {
    setEditorState(newState);
  };

  return (
    <div>
      <Header title="Send message"></Header>
      <Box className={classes.view1}>
        <Grid container className={classes.viewContainer}>
          <Grid xs={12} className={classes.selection} md={8}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.textSelection}
                id="outlined-select-currency-native"
                select
                label="training"
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
            <Box className={classes.editor}>
              <p style={{ textAlign: "left" }}>content</p>
              <MUIEditor editorState={editorState} onChange={onChange} />
            </Box>

            <Box>
              <aside className={classes.files}>
                <ul className={classes.elementFile}>{files}</ul>
              </aside>
            </Box>
          </Grid>

          <Grid xs={12} className={classes.dragDrop} md={4}>
            <section className="container">
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
        <Box className={classes.back}>
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
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default SendMessage;
