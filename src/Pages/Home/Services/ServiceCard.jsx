import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";


export default function ServiceCard({ service }) {
  const { image, title, description } = service;
  return (
    <Grid item xs={9} sm={2} md={4} >
      <Box sx={{ width: "96px", height: "96px", backgroundColor: "black",borderRadius:"50%",margin:"auto",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"25px" }}>
        <img style={{transform:"scale(1.2)"}} src={`assets/images/home/${image}`} alt={title} title={title} />
      </Box>
      <Typography textAlign="center" variant="h4" sx={{display:"block"}} gutterBottom>{title}</Typography>
      <Typography textAlign="center" variant="body2" sx={{display:"block"}} gutterBottom>{description}</Typography>
    </Grid>
  );
}
