import React from "react";
import Box from "@material-ui/core/Box";
const BackgroundImageHoc = props => {
  return (
    <Box
      height="100vh"
      style={{
        backgroundImage:
          "linear-gradient(45deg,rgba(255,255,255,1),rgba(255,255,255,1),rgba(255,255,255,1) , rgba(154,247,185,.7))"
      }}
    >
      {props.children}
    </Box>
  );
};

export default BackgroundImageHoc;
