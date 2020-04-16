import React from "react";
import Navbar from "./../components/Navbar";
import Sidebar from "../components/Sidebar";
import Box from "@material-ui/core/Box";
import FormPage from "../components/FormPage";
const Register = () => {
  return (
    <Box>
      <Navbar />
      <Sidebar />
      <FormPage />
    </Box>
  );
};
export default Register;
