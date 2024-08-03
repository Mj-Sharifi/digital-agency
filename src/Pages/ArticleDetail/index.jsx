import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import ArticleCard from "./ArticleCard";
import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Loader from "../../Components/Loader";

export default function ArticleDetail() {
  const { id } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}makarya-posts/${id}`
        );
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  console.log(post)
  return (
    <>
      <Hero
        img={"../../assets/images/article-detail/article-detail-hero.jpg"}
        title={post?.title}
        subtitle={"Nulla vitae elit libero, a pharetra augue mollis interdum."}
      />
      <Container>
        {post ? (
          <>
            <Typography
              variant="h4"
              component={"h2"}
              textAlign={"center"}
              gutterBottom
            >
              {post?.title}
            </Typography>
            <Stack direction={"row"} gap={6} alignItems={"center"}>
              {post?.avatar && (
                <Box
                  component={"img"}
                  src={`../../assets/images/article-detail/${post?.avatar}`}
                  sx={{ borderRadius: "50%", width: "65px" }}
                />
              )}
              <Box>
                <Typography color={"primary.main"}>
                  <span
                    style={{
                      marginRight: "20px",
                      fontWeight: "00",
                      color: "black",
                    }}
                  >
                    By:
                  </span>
                  {post?.author}
                </Typography>
                <Typography>
                  <span
                    style={{
                      marginRight: "20px",
                      fontWeight: "600",
                      color: "black",
                    }}
                  >
                    Date:
                  </span>
                  {post?.date}
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              flexWrap={"wrap"}
              margin={"15px 0px 30px 0"}
            >
              <Typography component={"p"}>
                <span
                  style={{
                    marginRight: "20px",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  Category:
                </span>
              </Typography>
              {post?.category.map((e, i) => (
                <Chip
                  key={i}
                  label={e}
                  variant="outlined"
                  sx={{
                    border: "none",
                    backgroundColor: "primary.main",
                    color: "text.white",
                  }}
                />
              ))}
            </Stack>
            {post?.body.map((e, i) => {
              if (i === 0) {
                const letters = e.split("");
                return (
                  <Typography
                    key={i}
                    variant="body2"
                    component="p"
                    sx={{
                      marginBottom: { xs: "15px", md: "20px" },
                      "&::first-letter": {
                        textTransform: "uppercase",
                        fontWeight: "700",
                        fontSize: { xs: "18px", md: "24px", xl: "28px" },
                      },
                    }}
                  >
                    {letters}
                  </Typography>
                );
              } else {
                return (
                  <Typography
                    key={i}
                    variant="body2"
                    component="p"
                    sx={{ marginBottom: { xs: "15px", md: "20px" } }}
                  >
                    {e}
                  </Typography>
                );
              }
            })}
            <Divider
              sx={{
                marginX: "auto",
                marginY: "25px",
                width: "40px",
                height: "5px",
                backgroundColor: "#FFB51F",
                marginBottom: "30px",
              }}
            />
            <Box>
              <Typography textAlign={"center"} variant="h6" gutterBottom>
                Share it on your:
              </Typography>
              <Stack direction={"row"} gap={2} justifyContent={"center"}>
                <Box
                  component={"img"}
                  src="../../assets/images/article-detail/linkedin.svg"
                  alt="linkedin"
                />
                <Box
                  component={"img"}
                  src="../../assets/images/article-detail/medium.svg"
                  alt="medium"
                />
                <Box
                  component={"img"}
                  src="../../assets/images/article-detail/twitter.svg"
                  alt="twitter"
                />
                <Box
                  component={"img"}
                  src="../../assets/images/article-detail/facebook.svg"
                  alt="facebook"
                />
              </Stack>
            </Box>
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
            <Grid container spacing={4} justifyContent={"center"}>
              {post?.relatedArtcile.map((e, i) => (
                <ArticleCard key={i} article={e.id} />
              ))}
            </Grid>

            {<Comments id={id} />}
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
