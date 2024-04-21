import { Divider, Typography, Grid, Container, Button } from "@mui/material";
import React from "react";
import WorkCard from "./WorkCard";
import { Link } from "react-router-dom";
const works = [
  { image: "Home-works-1.jpg", title: "Photography", subtitle: "Strawthings Co." },
  { image: "Home-works-2.jpg", title: "Branding", subtitle: "Teen-Shirt" },
  { image: "Home-works-3.jpg", title: "Branding", subtitle: "Streetyoung" },
  { image: "Home-works-4.jpg", title: "Photography", subtitle: "Freshfruit" },
  { image: "Home-works-5.jpg", title: "Print Design", subtitle: "INKGril Co." },
  { image: "Home-works-6.jpg", title: "Print Design", subtitle: "Lifehealth Inc." },
];
export default function Works() {
  return (
    <Container sx={{ paddingTop: "10vh" }}>
      <Typography
        textAlign={"center"}
        variant="l"
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
      <Grid container spacing={3} sx={{display:"flex",justifyContent:{xs:"center",sm:"start"},marginBottom:"25px"}}>
        {works.map((work,index)=><WorkCard key={index} work={work} index={index}/>)}
      </Grid>

      <Link to="/portfolio-list"><Button variant="contained" color="primary" disableElevation sx={{display:"flex !important",color:"white",width:"161px",height:"53px",margin:"0 auto"}}>View All</Button></Link>
    </Container>
  );
}
