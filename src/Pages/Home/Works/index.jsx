import { Divider, Typography, Grid, Container, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import WorkCard from "./WorkCard";
import { Link } from "react-router-dom";

export default function Works() {
  const [works, setWorks] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://all-backend.liara.run/makarya-portfolio?_start=0&_end=6`
      );
      const data = await res.json();
      setWorks(data);
    })();
  }, []);
  return (
    <Container sx={{ paddingTop: "10vh" }}>
      <Typography
        textAlign={"center"}
        variant="h3"
        component={"h4"}
        gutterBottom
      >
        Our Works
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
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "start" },
          marginBottom: "25px",
        }}
      >
        {works?.map((work, index) => (
          <WorkCard key={index} work={work} index={index} />
        ))}
      </Grid>

      <Link to="/portfolio-list">
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
            fontSize:"20px"
          }}
        >
          View All
        </Button>
      </Link>
    </Container>
  );
}
