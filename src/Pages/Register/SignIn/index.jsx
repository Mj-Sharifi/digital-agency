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
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
export default function SignIn({ handlePage }) {
  const { handleToken } = useContext(Auth);
  const [validation, setValidation] = useState(false);
  const { values, errors, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Please Enter a valid email")
        .required("Please enter your email"),
      password: yup.string().required("Please enter your password"),
    }),
    validateOnBlur: validation,
    validateOnChange: false,
    onSubmit: (e) => {
      setValidation(true);
      fetch(`${process.env.REACT_APP_API_URL}login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => handleToken(data.accessToken))
        .catch((err) => console.log(err));
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
          Sign In
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
        component={"form"}
        onSubmit={handleSubmit}
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
            Sign In
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
              htmlFor="email"
              sx={{ fontWeight: "500", color: "black" }}
            >
              Email
            </InputLabel>
            <TextField
              name="email"
              id="email"
              placeholder="hayden.show@gmail.com"
              sx={{ width: "100%" }}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.email && (
              <Typography sx={{ color: "red" }}>{errors.email}</Typography>
            )}
          </Box>
          <Box sx={{ width: "100%" }}>
            <InputLabel
              htmlFor="password"
              sx={{ fontWeight: "500", color: "black" }}
            >
              Password
            </InputLabel>
            <TextField
              name="password"
              id="password"
              placeholder="Abcd1234*"
              sx={{ width: "100%" }}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            ></TextField>
            {errors.password && (
              <Typography sx={{ color: "red" }}>{errors.password}</Typography>
            )}
          </Box>
          <Box sx={{ width: "100%", paddingX: "3%", marginY: "16px" }}>
            <FormControlLabel
              control={<CheckBox defaultChecked color="primary" />}
              label="Remember me"
            ></FormControlLabel>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography>
              Forgot your password?
              <Link style={{ color: "#FFB51F" }}>Click Here</Link>
            </Typography>
          </Box>
          <Stack direction={"row"}></Stack>

          <Button
            type="submit"
            disableRipple
            variant="contained"
            sx={{
              margin: "16px auto",
              color: "white",
              width: "100px",
              height: "40px",
              "&:hover": { backgroundColor: "#FFB51F" },
            }}
          >
            Sign in
          </Button>
          <Typography>Or, Sign in with your:</Typography>
          <Stack direction={"row"} gap={4} marginY={2}>
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
              Doesn't have any account?{" "}
              <span
                style={{ color: "#FFB51F", cursor: "pointer" }}
                onClick={() => handlePage()}
              >
                Sign up
              </span>
            </Typography>
          </Box>
        </Paper>
      </Stack>
    </Stack>
  );
}
