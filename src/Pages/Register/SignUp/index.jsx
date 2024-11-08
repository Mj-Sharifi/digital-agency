import React, { useContext, useEffect, useState } from "react";
import Auth from "../../../Utils/Auth";
import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Modal,
  Typography,
  InputLabel,
  TextField,
} from "@mui/material";

import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

export default function RegisterForm({ handlePage }) {
  const [token, setToken] = useState();
  const { handleToken } = useContext(Auth);
  // Modal
  const [modal, setModal] = useState(false);
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    let timer;
    if (modal && seconds > 0) {
      timer = setInterval(() => {
        setSeconds(seconds-1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [modal, seconds]);

  const handleModal = (token) => {
    setToken(token);
    setModal(true);

    setTimeout(() => {
      setModal(false);
      handleToken(token);
    }, 5000);
  };

  // Form Validation and Submit
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
      console.log("values", values);
      fetch(`https://all-backend.liara.run/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => handleModal(data.accessToken))
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
      <Modal
        open={modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "400px" },
            bgcolor: "text.main",
            border: "2px solid #FFB51F80",
            borderRadius: "10%",
            boxShadow: 24,
            py: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="body2"
            component="h2"
            color={"primary"}
            gutterBottom
            textAlign={"center"}
          >
            Your registeration was successful
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            color={"primary"}
            gutterBottom
            textAlign={"center"}
          >
            WELCOME TO OUR COMMUNITY
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="body2"
            component="h2"
            color={"primary"}
            gutterBottom
            textAlign={"center"}
          >
            Your're navigating to{" "}
            <Link to="/" onClick={()=>handleToken(token)} style={{textDecoration:"underline"}}>
              Homepage
            </Link>{" "}
            at {seconds}s
          </Typography>
        </Box>
      </Modal>
    </Stack>
  );
}
