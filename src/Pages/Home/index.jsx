import { Divider, Container } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import About from "./About";
import Works from "./Works";
import Services from "./Services";
import Contact from "./Contact";
import Testimony from "../../Components/Testimony";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Works />
      <Divider
        sx={{
          width: { md: "730px" },
          backgroundColor: "#FFB51F",
          marginX: "auto",
          marginY: "60px",
        }}
      />
      <Services />
      <Divider
        sx={{
          width: { md: "730px" },
          backgroundColor: "#FFB51F",
          marginX: "auto",
          marginY: "60px",
        }}
      />
      <Container
        sx={{
          marginBottom: { xs: "20px", sm: "30px", md: "40px" },
        }}
      >
        <Testimony />
      </Container>
      <Contact />
    </>
  );
}
