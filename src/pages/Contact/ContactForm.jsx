import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Grid, Button } from "@mui/material";
const registerSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2)
    .max(30)
    .required("Should be atleast 2 characters long"),
  email: yup.string().trim().email().required("Enter a valid email"),
  remark: yup
    .string()
    .trim()
    .min(6)
    .required("Feedback must be atleast 6 characters long"),
});

const initialRegisterValues = {
  name: "",
  email: "",
  remark: "",
};

const RegisterForm = ({ callbackToGrabFeedback }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialRegisterValues,
      validationSchema: registerSchema,
      onSubmit: async (values, action) => {
        const feedbackToSend = {
          name: values.name.trim(),
          email: values.email.trim(),
          remark: values.remark.trim(),
        };
        // console.log(
        //   `Name: ${feedbackToSend.name}\nEmail: ${feedbackToSend.email}\Remark: ${feedbackToSend.remark}`
        // );
        // await fetch("https://techvinform-backend.onrender.com/formdata", {
        //   method: "POST",
        //   body: JSON.stringify(feedbackToSend),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });
        action.resetForm();
        callbackToGrabFeedback(feedbackToSend);
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
              multiline
              maxRows={6}
              aria-label="empty textarea"
              placeholder="Empty"
              id="remark"
              variant="outlined"
              required
              fullWidth
              name="remark"
              label="Remark"
              type="text"
              value={values.remark}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="current-remark"
              helperText={
                errors.remark && touched.remark ? `${errors.remark}` : ""
              }
              error={errors.remark && touched.remark}
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
