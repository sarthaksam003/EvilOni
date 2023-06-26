import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Paper,
  TextField,
  Grid,
  Avatar,
  useMediaQuery,
  Box,
  Typography,
  Button,
} from "@mui/material";

const registerSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2)
    .max(30)
    .required("Should be atleast 2 characters long"),
  email: yup.string().trim().email().required("Enter a valid email"),
  password: yup
    .string()
    .min(6)
    .required("Password must be atleast 6 characters long"),
  confirmPassword: yup
    .string()
    .min(6)
    .required("Passwords must match")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const initialRegisterValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = ({ toggleSuccesModal }) => {
  const isNonMobile = useMediaQuery("(min-width:1200px)");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialRegisterValues,
      validationSchema: registerSchema,
      onSubmit: async (values, action) => {
        toggleSuccesModal();

        const feedbackToSend = {
          name: values.name.trim(),
          email: values.email.trim(),
          password: values.password,
        };
        console.log(
          `Name: ${feedbackToSend.name}\nEmail: ${feedbackToSend.email}\nPassword: ${feedbackToSend.password}`
        );
        // await fetch("https://techvinform-backend.onrender.com/formdata", {
        //   method: "POST",
        //   body: JSON.stringify(feedbackToSend),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });
        action.resetForm();
      },
    });

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.name && touched.name ? `${errors.name}` : ""}
              error={errors.name && touched.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email address"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.email && touched.email ? `${errors.email}` : ""
              }
              error={errors.email && touched.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="current-password"
              helperText={
                errors.password && touched.password ? `${errors.password}` : ""
              }
              error={errors.password && touched.password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm password"
              type="password"
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.confirmPassword && touched.confirmPassword
                  ? `${errors.confirmPassword}`
                  : ""
              }
              error={errors.confirmPassword && touched.confirmPassword}
            />
          </Grid>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{
              width: "15rem",
              backgroundColor: "#8A2BE2 !important",
              textTransform: "capitalize",
              m: "2rem 0",
            }}
          >
            Send Feedback
          </Button>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
