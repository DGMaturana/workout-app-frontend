import React, { useContext } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthContext from "../context/auth";
import Login from "../pages/login";
import Registro from "../pages/registro";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  // const { token } = useContext(AuthContext) as ;
  console.log(user);
  return (
    <Routes>
      <Route path="/login" element={<Login />}>
        Login
      </Route>
      <Route path="/registro" element={<Registro />}>
        Registro
      </Route>
    </Routes>
  );
};
