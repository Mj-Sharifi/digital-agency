import React,{useState,useEffect} from "react";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function RelatedWorkCard({ work }) {
  const [relatedWork, setRelatedWork] = useState();
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}makarya-portfolio/${work}`);
        const data = await res.json();
        setRelatedWork(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [work]);

  return (
    <Grid item xs={10} sm={6} md={4}>
      <Paper sx={{ height: "350px", borderRadius: "4%", overflow: "hidden" }}>
        <Box
          component={"img"}
          src={`../../assets/images/portfolio/${relatedWork?.image}`}
          alt={relatedWork?.title}
          sx={{ height: "80%",width:"100%" }}
        />
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} height={"20%"} paddingX={"15px"}>
          <Box>
            <Typography variant="m" fontSize={"24px"}>{relatedWork?.title}</Typography>
            <Typography
              variant="s"
              color={"text.grey"}
              sx={{ marginTop: "-5px" }}
            >
              {relatedWork?.client}
            </Typography>
          </Box>
          <Link to={`/portfolio/${relatedWork?.id}/${relatedWork?.title}`}><Button
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
          </Button></Link>
        </Stack>
      </Paper>
    </Grid>
  );
}
