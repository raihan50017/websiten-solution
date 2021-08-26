import React from "react";
import Header from "./../components/training/header/Header";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Footer from "./training/footer/Footer";
import { useDropzone } from "react-dropzone";
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";

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
    marginTop: "350px",
    padding: "10px",
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
  },
  save: {
      paddingLeft: "90px",
  },
  saveButton: {
    backgroundColor: "#F39200",
    padding: "5px 40px",
    textTransform: "lowercase",
  },
  editor: {
    margin: "50px",
    padding: "10px",
    border: "1px solid gray",
  },
}));

const CreateNewModule = () => {
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
    MUIEditorState.createEmpty(),
  )
  const onChange = newState => {
    setEditorState(newState)
  }

  return (
    <div>
      <Header></Header>
      <Box className={classes.view1}>
        <Grid container className={classes.viewContainer}>
          <Grid className={classes.selection} md={8}>
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
              <TextField
                className={classes.textSelection}
                id="outlined-select-currency-native"
                select
                label="title"
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
                <p style={{textAlign: "left"}}>content</p>
            <MUIEditor editorState={editorState} onChange={onChange} />
            </Box>
          </Grid>

          <Grid className={classes.dragDrop} md={4}>
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

        <Grid container>
          <Grid className={classes.back} md={10}>
              --back
          </Grid>

          <Grid className={classes.save} md={2}>
            <section className="container">
              <Button className={classes.saveButton} variant="outlined">
                save
              </Button>
            </section>
          </Grid>
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default CreateNewModule;
