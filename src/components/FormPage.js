import React from "react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";

import {
  Paper,
  FormControl,
  InputLabel,
  Input,
  TextField,
  FormLabel,
  Radio,
  FormControlLabel,
  RadioGroup,
  ButtonGroup,
  Button
} from "@material-ui/core";

import Yup from "Yup";
import Formik, { useFormik } from "formik";
import { InputFields } from "../constants/formInput";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  numberForm: {
    width: "70%"
  }
});

const FormPage = props => {
  const {
    initialValues,
    validationSchema,
    pageNumber,
    handlePageUpdate,
    setFormValues
  } = props;

  const formFields = initialValues.reduce(
    (res, current) => ({
      ...res,
      [current.key]: current.defaultValue
    }),
    {}
  );

  const formik = useFormik({
    initialValues: formFields,
    validationSchema: validationSchema,
    onSubmit: async (e, values) => {
      console.log("submit");
      e.preventDefault();
      console.log({ values });
    }
  });

  const errorHandler = key => {
    return (
      <>
        {" "}
        {formik.touched[formField.key] && formik.errors[formField.key] ? (
          <div>{formik.errors[formField.key]}</div>
        ) : null}
      </>
    );
  };

  return (
    <Paper>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {initialValues.map(formField => {
          switch (formField.type) {
            case InputFields.TEXT_INPUT:
              return (
                <TextField
                  style={{ width: "70%", margin: "15px" }}
                  required
                  id="outlined-required"
                  name={formField.key}
                  label={formField.label}
                  defaultValue={formField.placeholder}
                  variant="outlined"
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched[formField.key] &&
                    Boolean(formik.errors[formField.key])
                  }
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched[formField.key]
                      ? formik.errors[formField.key]
                      : ""
                  }
                  value={formik.values[formField.key]}
                />
              );

            case InputFields.NUMBER_INPUT:
              return (
                <PhoneInput
                  style={{ width: "70%", margin: "10px" }}
                  placeholder="Enter Phone Number"
                  value={formik.values[formField.key]}
                  onChange={formik.handleChange}
                />
              );
            case InputFields.DATE_PICKER:
              return (
                <TextField
                  style={{ width: "70%", margin: "10px" }}
                  variant="outlined"
                  id={formField.key}
                  helperText={formField.label}
                  type={formField.subType}
                />
              );

            case InputFields.RADIO:
              return (
                <FormControl
                  component="fieldset"
                  row="true"
                  style={{ width: "70%", margin: "20px" }}
                >
                  <FormLabel component="legend">{formField.label}</FormLabel>
                  <RadioGroup
                    row
                    name={formField.key}
                    value={formik.values[formField.key]}
                    onChange={formik.handleChange}
                  >
                    {formField.placeholder.map(val => (
                      <FormControlLabel
                        control={<Radio />}
                        value={val}
                        label={val}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              );
          }
        })}
        <ButtonGroup style={{ marginTop: "50px" }} size="large">
          <Button disabled={pageNumber == 0 ? true : false}>Previous</Button>
          <Button type="submit">Next</Button>
        </ButtonGroup>
      </form>
    </Paper>
  );
};

FormPage.propTypes = {
  validationSchema: PropTypes.object.isRequired
};

export default FormPage;
