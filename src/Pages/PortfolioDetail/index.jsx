import React, { useEffect, useState } from "react";
import DateFormatter from "../../Utils/DateFormatter";
import Hero from "../../Components/Hero";
import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import RelatedWorkCard from "./WorkCard";
import Slider from "./Slider";
import { useParams } from "react-router-dom";

export default function PortfolioDetail() {
  const { id } = useParams();
  const [work, setWork] = useState();
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}makarya-portfolio/${id}`
        );
        const data = await res.json();
        setWork(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <>
      <Hero
        img={"portfolio-detail/portfolio-detail-hero.jpg"}
        title={"Portfolio Detail"}
        subtitle={"Nulla vitae elit libero, a pharetra augue mollis interdum."}
      />
      <Container sx={{ marginBottom: "50px" }}>
        <Stack direction={{ xs: "column", md: "row-reverse" }} gap={4}>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h4" component={"h3"}>
              {work?.title}
            </Typography>
            <Divider
              sx={{
                width: "40px",
                height: "5px",
                backgroundColor: "#FFB51F",
                marginBottom: "30px",
              }}
            />
            <Typography variant="body2" sx={{ marginBottom: "30px" }}>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                {work?.description[0]}
              </span>
              {work?.description.slice(1)}
            </Typography>
            <Typography variant="body2">
              <span style={{ fontWeight: "500" }}>Client: </span> {work?.client}
            </Typography>
            <Typography variant="body2">
              <span style={{ fontWeight: "500" }}>Date: </span>
              {work?.date&&DateFormatter(work?.date)}
            </Typography>
            <Stack direction={"row"}>
              <Typography
                variant="body2"
                sx={{ fontWeight: "500", marginRight: "25px" }}
              >
                Category:
              </Typography>
              <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                {work?.category.map((e, i) => (
                  <Chip key={i} color="primary" sx={{ color: "white" }} label={e} />
                ))}
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            {work&&<Slider slides={work["detailed-image"]} />}
            
          </Box>
        </Stack>
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
          Related Works
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
        <Grid
          container
          spacing={4}
          justifyContent={{ xs: "center", sm: "start" }}
        >
          {work?.related.map((e, i) => (
            <RelatedWorkCard key={i} work={e} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
