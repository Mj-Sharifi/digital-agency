import {
    Box,
    Button,
    Chip,
    Grid,
    Paper,
    Stack,
    Typography,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import React, { useEffect, useState } from "react";
  
  const slugMaker = (str) => {
    return str?.toLowerCase().split(" ").join("-");
  };
  
  export default function ArticleCard({ article }) {
    const [relatedArticle, setRelatedArticle] = useState();
    useEffect(() => {
      try {
        (async () => {
          const res = await fetch(`https://all-backend.liara.run/makarya-posts/${article}`);
          const data = await res.json();
          setRelatedArticle(data);
        })();
      } catch (error) {
        console.log(error);
      }
    }, [article]);
    return (
      <Grid item xs={10} sm={5} md={3}>
        <Paper sx={{ display: "flex", overflow: "hidden", borderRadius: "3%" }}>
          {relatedArticle?.image && (
            <Box
              component={"img"}
              src={`/assets/images/post/${relatedArticle?.image}`}
              alt={relatedArticle?.title}
              sx={{ width: "25%" }}
            />
          )}
  
          <Box sx={{ width: "75%", padding: "25px 15px" }}>
            <Stack
              display={"inline-flex"}
              flexWrap={"wrap"}
              marginBottom={"15px"}
            >
              {relatedArticle?.category.map((e, i) => (
                <Chip key={i} label={e} variant="outlined" sx={{border:"none",backgroundColor:"primary.main",color:"text.white"}}/>
              ))}
            </Stack>
            <Typography variant="h4" component={"h2"}>
              {relatedArticle?.title}
            </Typography>
            <Typography
              variant="body2"
              component={"p"}
              color={"text.grey"}
              marginY={"16px"}
            >
              {relatedArticle?.excerpt}
            </Typography>
            <Link
              to={`/blog/${relatedArticle?.id}/${slugMaker(relatedArticle?.title)}`}
            >
              <Button
                disableRipple
                variant="contained"
                sx={{
                  color: "white",
                  width: "72px",
                  height: "40px",
                  fontSize:"18px",
                  "&:hover": { backgroundColor: "#FFB51F" },
                }}
              >
                View
              </Button>
            </Link>
          </Box>
        </Paper>
      </Grid>
    );
  }