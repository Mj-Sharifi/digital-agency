import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import PostCard from "./PostCard";
import {
  Divider,
  Container,
  Typography,
  Grid,
  Stack,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Loader from "../../Components/Loader";

export default function Blog() {
  // Handle Pagination
  const [page, setPage] = useState(1);
  const handlePage = (event, value) => {
    setPage(value);
  };
  //
  const [posts, setPosts] = useState();
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(
          `https://all-backend.liara.run/makarya-posts?_page=${page}&_limit=6`
        );
        const data = await res.json();
        setPosts(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [page]);
  return (
    <>
      <Hero
        img={"assets/images/post/post-hero.jpg"}
        title={"Blog"}
        subtitle={"Nulla vitae elit libero, a pharetra augue mollis interdum."}
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
          gutterBottom
        >
          Maecenas faucibus neque nec purus viverra molestie. Sed euismod
          eleifend faucibus. Maecenas viverra massa quis felis finibus posuere.
          Cras ut luctus quam. Vestibulum eget lectus id nulla tincidunt
          posuere.
        </Typography>
        {posts ? (
          <>
            {" "}
            <Grid container spacing={4}>
              {posts?.map((e, i) => (
                <PostCard key={i} post={e} />
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
                count={2}
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
    </>
  );
}
