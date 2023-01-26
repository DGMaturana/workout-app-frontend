import { Button, TextField } from "@mui/material";
import { useFormik, FormikProps } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";

interface FormValues {
  email: string;
  password: string;
}

const baseURL = "http://localhost:8000/api/auth/login";

const LoginForm = () => {
  const getData = async (endpoint: string) => {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  };
  const [user, setUser] = useState(null);

  const handleSubmit = () => {
    axios
      .post(baseURL, {
        email: formik.values.email,
        password: formik.values.password,
      })
      .then((response) => {
        setUser(response.data);
      });
  };

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  if (user) return <h2>User logeado!</h2>;

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <TextField
        id="password"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <Button id="button" variant="contained" type="submit">
        Ingresar
      </Button>
    </form>
  );
};

export default LoginForm;
