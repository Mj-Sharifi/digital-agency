import { Box, Divider, Grid, Icon, Paper, Typography } from "@mui/material";
import {
  Visibility,
  Description,
  Quickreply,
  FavoriteBorder,
} from "@mui/icons-material";
import React from "react";

export default function PlanCard({ plan, index }) {
  const { name, price, features, icon } = plan;
  let bgColor;
  let secondaryColor;
  let textColor;
  switch (index) {
    case 0:
      bgColor = "white";
      secondaryColor = "#FFB51F";
      textColor = "black";
      break;
    case 1:
      bgColor = "#FFB51F";
      secondaryColor = "black";
      textColor = "white";
      break;
    case 2:
      bgColor = "black";
      secondaryColor = "#FFB51F";
      textColor = "white";
      break;
    default:
      break;
  }
  return (
    <Grid item xs={10} sm={4}>
      <Paper
        sx={{
          backgroundColor: bgColor,
          border: "1px solid #FFB51F60",
          borderRadius: "4%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          paddingY: "20px",
        }}
      >
        <Box
          sx={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: secondaryColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "70%", height: "70%" }}
            src={`assets/images/pricing/${icon}`}
            alt={name}
          />
        </Box>

        <Typography variant="h4" color={textColor}>
          {name}
        </Typography>
        <Divider
          sx={{
            marginX: "auto",
            width: "40px",
            height: "5px",
            backgroundColor: secondaryColor,
            marginTop: "-15px",
          }}
        />
        <Typography variant="h4" color={textColor}>
          <sup style={{ color: secondaryColor }}>$</sup>
          {price}
          <sub>/month</sub>
        </Typography>
        <Box>
          {features.map((e, i) => {
            let icon;
            switch (i) {
              case 0:
                icon = <Description fontSize="small" sx={{color:secondaryColor}} />;
                break;
              case 1:
                icon = <Visibility fontSize="small" sx={{color:secondaryColor}} />;
                break;
              case 2:
                icon = <FavoriteBorder fontSize="small" sx={{color:secondaryColor}} />;
                break;
              case 3:
                icon = <Quickreply fontSize="small" sx={{color:secondaryColor}} />;
                break;
              default:
                break;
            }
            return(<Typography key={i} variant="body2" color={textColor}>
            {icon} {e}
          </Typography>)
;
          })}
        </Box>
      </Paper>
    </Grid>
  );
}
