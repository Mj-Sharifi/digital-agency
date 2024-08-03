import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import Testimony from "../../Components/Testimony";
import { Container, Divider, Grid, Typography, Stack } from "@mui/material";
import PlanCard from "./PlanCard";
import ClientsSlider from "./ClientsSlider";
import Loader from "../../Components/Loader";

export default function Pricing() {
  const [plans, setPlans] = useState();
  const [clients, setClients] = useState();
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}makarya-pricing`
        );
        const data = await res.json();
        setPlans(data[0].plans);
        setClients(data[0].clients);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Hero
        img="assets/images/pricing/pricing-hero.jpg"
        title="Pricing"
        subtitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius similique repudiandae molestias, consectetur dignissimos"
        }
      />
      <Container sx={{ marginBottom: { xs: "60px", sm: "80px", md: "150px" } }}>
        <Typography variant="h4" component={"h3"} textAlign={"center"}>
          Get Inspired
        </Typography>
        <Divider
          sx={{
            marginX: "auto",
            width: "40px",
            height: "5px",
            backgroundColor: "#FFB51F",
            marginBottom: "30px",
          }}
        />
        <Typography
          variant="body2"
          component={"p"}
          textAlign={"center"}
          sx={{ marginBottom: "50px" }}
        >
          Maecenas faucibus neque nec purus viverra molestie. Sed euismod
          eleifend faucibus. Maecenas viverra massa quis felis finibus posuere.
          Cras ut luctus quam. Vestibulum eget lectus id nulla tincidunt
          posuere.
        </Typography>
        {plans ? (
          <>
            <Grid container spacing={4} justifyContent={"center"}>
              {plans?.map((p, i) => (
                <PlanCard key={i} plan={p} index={i} />
              ))}
            </Grid>
          </>
        ) : (
          <Loader />
        )}

        <Divider
          sx={{
            marginX: "auto",
            width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
            height: "2px",
            backgroundColor: "#FFB51F",
            marginY: "30px",
          }}
        />
        <Typography variant="h4" component={"h3"} textAlign={"center"}>
          Testimony
        </Typography>
        <Divider
          sx={{
            marginX: "auto",
            width: "40px",
            height: "5px",
            backgroundColor: "#FFB51F",
            marginBottom: "30px",
          }}
        />
        <Testimony />
        <Divider
          sx={{
            marginX: "auto",
            width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
            height: "2px",
            backgroundColor: "#FFB51F",
            marginY: "30px",
          }}
        />
        <Typography variant="h4" component={"h3"} textAlign={"center"}>
          Our Clients
        </Typography>
        <Divider
          sx={{
            marginX: "auto",
            width: "40px",
            height: "5px",
            backgroundColor: "#FFB51F",
            marginBottom: "30px",
          }}
        />
        {clients ? <ClientsSlider clients={clients} /> : <Loader />}
      </Container>
    </>
  );
}
