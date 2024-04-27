import {
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const slugMaker = (str) => {
  return str.toLowerCase().split(" ").join("-");
};
export default function PostCard({ post }) {
  const { image, title, category, excerpt, id } = post;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper sx={{ display: "flex", overflow: "hidden", borderRadius: "3%" }}>
        <Box
          component={"img"}
          src={`assets/images/post/${image}`}
          alt={title}
          sx={{ width: "25%" }}
        />
        <Box sx={{ width: "75%", padding: "25px 15px" }}>
          <Stack
            display={"inline-flex"}
            flexWrap={"wrap"}
            marginBottom={"15px"}
          >
            {category.map((e, i) => (
              <Chip key={i} label={e} variant="outlined" sx={{border:"none",backgroundColor:"primary.main",color:"text.white"}} />
            ))}
          </Stack>
          <Typography variant="h4" component={"h2"}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            component={"p"}
            color={"text.grey"}
            marginY={"16px"}
          >
            {excerpt}
          </Typography>
          {(id < 3 || id === 5) ? (
            <Link to={`/blog/${id}/${slugMaker(title)}`}>
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
          ) : (
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
          )}
        </Box>
      </Paper>
    </Grid>
  );
}
