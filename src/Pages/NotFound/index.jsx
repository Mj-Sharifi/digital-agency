import { Home } from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Stack sx={{ backgroundColor: "black", height: "100vh" }}>
      <Box
        sx={{
          height: "8%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "85%" }}
          src="assets/images/footer/footer logo.svg"
          alt="Makarya"
          title="Makarya"
        />
      </Box>
      <Divider sx={{ backgroundColor: "white" }} />
      <Box
        sx={{
          height: "86%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <Typography variant="h3" component="h4">
          ERROR
        </Typography>
        <Typography
          component="span"
          color={"primary"}
          sx={{
            fontSize: {
              xs: "80px",
              sm: "100px",
              md: "120px",
            },
            lineHeight: { xs: "100px", sm: "130px", md: "160px" },
            fontWeight:"900",
            letterSpacing: { xs: "30px", md: "40px" },
          }}
        >
          404
        </Typography>
        <Typography variant="h3">SORRY {":("}</Typography>
        <Divider
          sx={{
            width: "30px",
            height: "4px",
            backgroundColor: "#F2B92A",
            marginY: "10px",
          }}
        />
        <Typography variant="body2" sx={{ color: "white" }} gutterBottom>
          You're looking for the page that is not available.
          <br /> Why not comeback to our awesome homepage?
        </Typography>
        <Link to="/">
          <Button
            variant="contained"
            size="large"
            startIcon={<Home fontSize="large" />}
            sx={{ color: "white", fontWeight: "600" }}
          >
            Home
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          height: "7%",
          width: "100%",
          backgroundColor: "#FFB51F",
          position: "fixed",
          bottom: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" color={"white"}>
          2018 Makarya. All rights reserved.
        </Typography>
      </Box>
    </Stack>
  );
}
