import React, { useContext, useState } from "react";
import Auth from "../../../Utils/Auth";
import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
  InputLabel,
  TextField,
  FormControlLabel,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";

export default function RegisterForm({ handlePage }) {
  const { handleToken } = useContext(Auth);
  const [validation, setValidation] = useState(false);
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object().shape({
      fullName: yup.string().required("Required"),
      email: yup
        .string()
        .email("Enter a valid email address")
        .required("Required"),
      password: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required("Required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not match")
        .required("Required"),
    }),
    validateOnChange: false,
    validateOnBlur: validation,
    onSubmit: (e) => {
      setValidation(true);
      // e.preventDefault()
      console.log("values", values);
      fetch(`${process.env.REACT_APP_API_URL}users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((res) => res.json()).then(data=>handleToken(data.accessToken))
        .catch((err) => console.log(err));
      console.log(errors);
    },
  });
  return (
    <Stack
      direction={{ sm: "row" }}
      sx={{
        backgroundImage: `url(assets/images/register/sign-in-bg.jpg)`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        columnGap: "10%",
        rowGap: "20px",
      }}
      component={"form"}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "start" },
          justifyContent: "center",
          paddingLeft: { sm: "12%" },
        }}
      >
        <Typography variant="h4" gutterBottom color={"text.white"}>
          Sign Up
        </Typography>
        <Divider
          sx={{
            width: "40px",
            height: "5px",
            backgroundColor: "#FFB51F",
            marginBottom: { xs: "10px", sm: "25px" },
          }}
        />
        <Typography variant="body2" color={"text.white"}>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Typography>
      </Box>
      <Stack
        width={{ xs: "100%", sm: "50%" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Paper
          sx={{
            width: { xs: "90%", md: "60%", xl: "50%" },
            padding: "25px 10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>
          <Divider
            sx={{
              width: "40px",
              height: "5px",
              backgroundColor: "#FFB51F",
              marginBottom: "30px",
            }}
          />
          <Box sx={{ width: "100%" }}>
            <InputLabel
              htmlFor="fullName"
              sx={{ fontWeight: "500", color: "black" }}
            >
              Fullname
            </InputLabel>
            <TextField
              name="fullName"
              id="fullName"
              sx={{ width: "100%" }}
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.fullName && (
              <Typography sx={{ color: "red" }}>{errors.fullName}</Typography>
            )}
          </Box>
          <Box sx={{ width: "100%", mt: "8px" }}>
            <InputLabel
              htmlFor="email"
              sx={{ fontWeight: "500", color: "black" }}
            >
              Email Address
            </InputLabel>
            <TextField
              name="email"
              id="email"
              sx={{ width: "100%" }}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.email && (
              <Typography sx={{ color: "red" }}>{errors.email}</Typography>
            )}
          </Box>
          <Box sx={{ width: "100%", mt: "8px" }}>
            <InputLabel
              htmlFor="password"
              sx={{ fontWeight: "500", color: "black" }}
            >
              Password
            </InputLabel>
            <TextField
              name="password"
              id="password"
              sx={{ width: "100%" }}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.password && (
              <Typography sx={{ color: "red" }}>{errors.password}</Typography>
            )}
          </Box>
          <Box sx={{ width: "100%", mt: "8px" }}>
            <InputLabel
              htmlFor="confirmPassword"
              sx={{ fontWeight: "500", color: "black" }}
            >
              Confirm Password
            </InputLabel>
            <TextField
              name="confirmPassword"
              id="confirmPassword"
              sx={{ width: "100%" }}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.confirmPassword && (
              <Typography sx={{ color: "red" }}>
                {errors.confirmPassword}
              </Typography>
            )}
          </Box>
          <Box sx={{ width: "100%", paddingX: "3%", mt: "8px" }}>
            <FormControlLabel
              control={<CheckBox defaultChecked color="primary" />}
              label="Remember me"
            ></FormControlLabel>
          </Box>
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-around"}
            my={2}
          >
            <Button
              type="submit"
              disableRipple
              variant="contained"
              sx={{
                color: "white",
                width: "100px",
                height: "40px",
                "&:hover": { backgroundColor: "#FFB51F" },
              }}
            >
              Sign up
            </Button>
            <Button
              disableRipple
              variant="contained"
              sx={{
                color: "white",
                width: "100px",
                height: "40px",
                "&:hover": { backgroundColor: "#FFB51F" },
              }}
              onClick={handleReset}
            >
              Reset
            </Button>
          </Stack>
          <Typography>Or, Sign in with your:</Typography>
          <Stack direction={"row"} gap={4} my={2}>
            <Box
              component={"img"}
              src={"assets/images/footer/google.svg"}
              alt="google"
              sx={{ cursor: "pointer" }}
            />
            <Box
              component={"img"}
              src={"assets/images/footer/twitter.svg"}
              alt="twitter"
              sx={{ cursor: "pointer" }}
            />
            <Box
              component={"img"}
              src={"assets/images/footer/facebook.svg"}
              alt="facebook"
              sx={{ cursor: "pointer" }}
            />
          </Stack>
          <Box sx={{ width: "100%" }}>
            <Typography>
              Already have an account?{" "}
              <span
                style={{ color: "#FFB51F", cursor: "pointer" }}
                onClick={() => handlePage()}
              >
                Sign in
              </span>
            </Typography>
          </Box>
        </Paper>
      </Stack>
    </Stack>
  );
}
