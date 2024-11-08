import {
  Container,
  Stack,
  Pagination,
  PaginationItem,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import WorkCard from "./WorkCard";
import Hero from "../../Components/Hero";
import Loader from "../../Components/Loader";
export default function Portfolio() {
  // Handle Pagination
  const [page, setPage] = useState(1);
  const handlePage = (event, value) => {
    setPage(value);
  };
  //
  const [works, setWorks] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://all-backend.liara.run/makarya-portfolio?_page=${page}&_limit=6`
      );
      const data = await res.json();
      setWorks(data);
    })();
  }, [page]);

  return (
    <>
      <Hero
        img={"assets/images/portfolio/portfolio-hero.jpg"}
        title={"Portfolio"}
        subtitle={"Nulla vitae elit libero, a pharetra augue mollis interdum."}
      />
      <Container>
        <Typography variant="h4" component={"h3"} textAlign={"center"}>
          Our Works
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
        {works ? (
          <>
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
                <WorkCard key={index} work={work} />
              ))}
            </Grid>
            <Stack
              spacing={2}
              alignItems={"center"}
              sx={{
                marginTop: "40px",
                marginBottom: {
                  xs: "40px",
                  sm: "50px",
                  md: "60px",
                  lg: "80px",
                },
              }}
            >
              <Pagination
                page={page}
                onChange={handlePage}
                color="primary"
                count={3}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBack, next: ArrowForward }}
                    {...item}
                  />
                )}
                sx={{
                  "& .css-b8h5kt-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected ":
                    { color: "white" },
                }}
              />
            </Stack>
          </>
        ) : (
          <Stack
            alignItems={"center"}
            justifyContent={"start"}
            width={"100%"}
            paddingTop={{ xs: "20px", md: "40px" }}
            height={"80vh"}
          >
            <Loader />
          </Stack>
        )}
      </Container>
      <Contact />
    </>
  );
}
