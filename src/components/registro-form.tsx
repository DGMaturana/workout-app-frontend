import { Button, TextField } from "@mui/material";
import { useFormik, FormikProps } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../hooks/use-fetch";

interface FormValues {
  nombre: string;
  email: string;
  password: string;
}

const baseURL = "http://localhost:8000/api/usuarios/";
const RegistroForm = () => {
  const [user, setUser] = useState(null);
  //   useEffect(() => {
  //     axios.get(`${baseURL}`).then((response) => {
  //       setUser(response.data);
  //     });
  //   }, []);

  const handleSubmit = () => {
    axios
      .post(baseURL, {
        email: formik.values.email,
        password: formik.values.password,
        nombre: formik.values.nombre,
      })
      .then((response) => {
        setUser(response.data);
      });
  };

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
      nombre: "",
    },
    onSubmit: handleSubmit,
  });

  if (user) return <h2> Creaste el user machucao!</h2>;

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="nombre"
        name="nombre"
        value={formik.values.nombre}
        onChange={formik.handleChange}
      />
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

export default RegistroForm;
