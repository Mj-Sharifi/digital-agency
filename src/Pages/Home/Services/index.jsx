import React from "react";
import { Divider, Typography, Grid, Container, Button } from "@mui/material";
import ServiceCard from "./ServiceCard";

const services = [
  {
    image: "Home-services-camera-retro.svg",
    title: "Branding",
    description:
      "Maecenas faucibus neque nec purus viverra molestie. Sed euismod eleifend faucibus. Maecenas viverra massa quis felis finibus posuere. Cras ut luctus quam. Vestibulum eget lectus id nulla tincidunt posuere. Cras eget vehicula lorem, vel posuere mauris. Etiam sollicitudin elit eget odio sollicitudin posuere. Vivamus quis lorem sit amet eros consequat egestas eu non lorem. Proin convallis rhoncus urna. Fusce vehicula placerat ultrices. Fusce vehicula placerat ultrices.",
  },
  {
    image: "Home-services-newspaper.svg",
    title: "Print Design",
    description:
      "Maecenas faucibus neque nec purus viverra molestie. Sed euismod eleifend faucibus. Maecenas viverra massa quis felis finibus posuere. Cras ut luctus quam. Vestibulum eget lectus id nulla tincidunt posuere. Cras eget vehicula lorem, vel posuere mauris. Etiam sollicitudin elit eget odio sollicitudin posuere. Vivamus quis lorem sit amet eros consequat egestas eu non lorem. Proin convallis rhoncus urna. Fusce vehicula placerat ultrices.",
  },
  {
    image: "Home-services-file-image.svg",
    title: "Photography",
    description:
      "Maecenas faucibus neque nec purus viverra molestie. Sed euismod eleifend faucibus. Maecenas viverra massa quis felis finibus posuere. Cras ut luctus quam. Vestibulum eget lectus id nulla tincidunt posuere. Cras eget vehicula lorem, vel posuere mauris. Etiam sollicitudin elit eget odio sollicitudin posuere. Vivamus quis lorem sit amet eros consequat egestas eu non lorem. Proin convallis rhoncus urna. Fusce vehicula placerat ultrices.",
  },
];
export default function Services() {
  return (
    <Container>
      <Typography
        textAlign={"center"}
        variant="h3"
        component={"h4"}
        gutterBottom
      >
        Our Services
      </Typography>
      <Divider
        sx={{
          width: "40px",
          height: "4px",
          borderRadius: "5px",
          backgroundColor: "#FFB51F",
          marginX: "auto",
          marginBottom: "40px",
        }}
      />
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "start" },
          marginBottom: "25px",
        }}
      >
        {services?.map((service,index)=><ServiceCard key={index} service={service}/>)}
      </Grid>

      <Button
        variant="contained"
        color="primary"
        disableElevation
        sx={{
          display: "flex !important",
          color: "white",
          width: "150px",
          height: "50px",
          margin: "0 auto",
          fontSize:"16px"
        }}
      >
        Pricing Plan
      </Button>
    </Container>
  );
}
