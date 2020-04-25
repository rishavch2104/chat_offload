import React from "react";
import Navbar from "./../components/Navbar";
import Sidebar from "../components/Sidebar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormPage from "../components/FormPage";
import makeStyles from "@material-ui/styles/makeStyles";
import * as Yup from "yup";
import { RegisterFormSchema } from "./../config/validationSchema";
import { formFields1 } from "./../constants/formInput";

const useStyles = makeStyles(theme => ({
  paperRoot: {
    marginLeft: "20px"
  }
}));

const Register = () => {
  const styles = useStyles();
  const [pageNumber, setPageNumber] = React.useState(0);
  const [formValues, setFormValues] = React.useState({});
  const handlePageUpdate = pageNumber => {
    setPageNumber(() => number);
  };

  return (
    <>
      <Navbar />
      <Grid container spacing={10}>
        <Grid item xs={5}>
          <Paper elevation={2} classes={{ root: styles.paperRoot }}>
            <Sidebar pageNumber={pageNumber} />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          {pageNumber === 0 ? (
            <FormPage
              initialValues={formFields1}
              validationSchema={RegisterFormSchema}
              pageNumber={pageNumber}
              handlePageUpdate={handlePageUpdate}
              setFormValues={setFormValues}
            />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default Register;
