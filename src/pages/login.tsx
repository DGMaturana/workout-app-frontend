import { Box } from "@mui/material";
import React from "react";
import LoginForm from "../components/login-form";

const Login = () => {
  return (
    <Box
      alignItems={"center"}
      justifyItems="center"
      sx={{ width: 200, marginX: "auto", marginY: "20" }}
    >
      <LoginForm />
    </Box>
  );
};

export default Login;
