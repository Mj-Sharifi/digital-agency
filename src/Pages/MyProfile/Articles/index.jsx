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

export default function ArticleCard({ id }) {
  const [article, setarticle] = useState();
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}makarya-posts/${id}`);
        const data = await res.json();
        setarticle(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  return (
    <Grid item xs={10} sm={6} md={4} lg={3}>
      <Paper sx={{ display: "flex", overflow: "hidden", borderRadius: "3%" }}>
        {article?.image && (
          <Box
            component={"img"}
            src={`assets/images/post/${article?.image}`}
            alt={article?.title}
            sx={{ width: "35%" }}
          />
        )}

        <Box sx={{ width: "65%", padding: "40px 5px",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center" }}>
          <Typography variant="m" component={"h2"}>
            {article?.title}
          </Typography>
          {id < 3 || id===5 ? (
            <Link to={`/Blog/${article?.id}/${slugMaker(article?.title)}`}>
              <Button
                disableRipple
                variant="contained"
                sx={{
                  color: "white",
                  width: "72px",
                  height: "40px",
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
