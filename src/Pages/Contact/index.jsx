import React from "react";
import Hero from "../../Components/Hero";
import {
  Box,
  Container,
  Divider,
  Stack,
  InputLabel,
  Grid,
  TextField,
  Typography,
  Button,
  Input,
} from "@mui/material";
import { Send } from "@mui/icons-material";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      firstName: data.get("firstname"),
      lastName: data.get("lastname"),
      email: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
    });
  };
  return (
    <>
      <Hero
        img={"contact/contact-hero.jpg"}
        title={"Contact"}
        subtitle={"Nulla vitae elit libero, a pharetra augue mollis interdum."}
      />
      <Container sx={{ paddingX: { md: "100px", lg: "200px", xl: "300px" } }}>
        <Typography variant="l" gutterBottom textAlign={"center"}>
          Contact
        </Typography>
        <Divider
          sx={{
            marginX: "auto",
            width: "40px",
            height: "5px",
            backgroundColor: "#FFB51F",
          }}
        />
        <Box
          component={"form"}
          noValidate
          sx={{
            paddingY: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <InputLabel
                htmlFor="firstname"
                sx={{ fontWeight: "500", color: "black" }}
              >
                First Name
              </InputLabel>
              <TextField
                name="firstname"
                id="firstname"
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel
                htmlFor="lastname"
                sx={{ fontWeight: "500", color: "black" }}
              >
                Last Name
              </InputLabel>
              <TextField
                name="lastname"
                id="lastname"
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <InputLabel
                htmlFor="lastname"
                sx={{ fontWeight: "500", color: "black" }}
              >
                Email Address
              </InputLabel>
              <TextField
                type="email"
                name="email"
                id="email"
                inputProps={{ id: "lastname" }}
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <InputLabel
                htmlFor="lastname"
                sx={{ fontWeight: "500", color: "black" }}
              >
                Subject
              </InputLabel>
              <TextField
                name="subject"
                id="subject"
                inputProps={{ id: "lastname" }}
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <InputLabel
                htmlFor="lastname"
                sx={{ fontWeight: "500", color: "black" }}
              >
                Message
              </InputLabel>
              <TextField
                name="message"
                id="message"
                multiline
                rows={8}
                inputProps={{ id: "lastname" }}
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            disableRipple
            variant="contained"
            startIcon={<Send />}
            sx={{
              marginTop: "40px",
              color: "white",
              width: "110px",
              height: "50px",
              "&:hover": { backgroundColor: "#FFB51F" },
            }}
          >
            Send
          </Button>
        </Box>
      </Container>
      <Box sx={{ position: "relative", height: "390px" }}>
        <Box
          sx={{
            borderLeft: "5px solid #FFB51F",
            height: "85px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "15px",
            position: "absolute",
            top: "25%",
            left: "5%",
          }}
        >
          <Typography variant="m" component="h4">
            Our <br /> location
          </Typography>
        </Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d25714.177790868052!2d59.5767962!3d36.3299517!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1707208614906!5m2!1sen!2s"
          style={{ border: "0", width: "100%", height: "100%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </Box>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={4}
        height={"380px"}
        bgcolor={"primary.main"}
      >
        <Box>
          <Typography variant="l" gutterBottom>
            JOIN OUR NEWSLETTER
          </Typography>
          <Divider
            sx={{
              marginX: "auto",
              width: "40px",
              height: "5px",
              backgroundColor: "white",
            }}
          />
        </Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", md: "end" }}
          justifyContent={"center"}
          columnGap={6}
          rowGap={4}
          width="100%"
        >
          <Box>
            <InputLabel htmlFor="subscription-email"></InputLabel>
            <Input
              id="subscription-email"
              sx={{
                transition:"all 0.3s",
                height:"50px",
                "&:hover:not(.Mui-disabled, .Mui-error):before": {
                  border: "2px solid #00000080",
                },
                "&::before": { top:"0",border: "1px solid #00000080",borderRadius:"5px" },
                "&::after": { border: "none" },

                "& input": {
                  padding:"0 10px",
                  width:"280px",
                  height:"100%",
                  outline: "none",
                  borderRadius: "5px",
                  "&:focus":{
                    backgroundColor:"white"
                  }
                },
              }}
            />
          </Box>
          <Button
            type="submit"
            disableRipple
            variant="contained"
            startIcon={<Send />}
            sx={{
              backgroundColor:"black",
              marginTop: "40px",
              color: "white",
              width: "110px",
              height: "50px",
              "&:hover": { backgroundColor: "black" },
            }}
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
