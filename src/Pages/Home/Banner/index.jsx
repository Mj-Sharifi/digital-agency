import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// an array for background image addresses
const images = ["Home-banner-1.jpg", "Home-banner-2.jpg"];

export default function Banner() {
  const [bgImage, setBgImage] = useState(images[0]);
  const handleClick = () => {
    bgImage === images[0] ? setBgImage(images[1]) : setBgImage(images[0]);
    slide === "Slide 1" ? setSlide("Slide 2") : setSlide("Slide 1");
  };

  const [slide, setSlide] = useState("Slide 1");
  const handleChange = (event, p) => {
    setSlide(p);
    slide === "Slide 1" ? setBgImage(images[1]) : setBgImage(images[0]);
  };
  const control = {
    value: slide,
    onChange: handleChange,
    exclusive: true,
  };

  const toggleButtonStyle = {
    sx: {
      width: '50px !important',
      height:"5px !important",
      minHeight:"0 !important",
      minWidth:"0 !important",
      padding:"0 !important",
      outline: "none",
      border:'none !important',
      backgroundColor: "white",
      borderRadius: "5px !important",
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor:"#FFB51F",
        opacity:'0.5'
      },
      "&.Mui-selected":{
        backgroundColor:'#FFB51F !important',
        cursor:"auto",
        "&:hover":{
          backgroundColor: '#FFB51F !important',
          opacity:"1"
        }
      }
    },
  };

  return (
    <Box
      sx={{
        transition: "all 1s",
        backgroundImage: `url(assets/images/home/${bgImage})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: { xs: "50vh", sm: "100vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        paddingX:"10%"
      }}
    >
      <Typography
        textAlign={"center"}
        variant="xl"
        component="h4"
        gutterBottom
      >
        Make it Happen
      </Typography>
      <Typography textAlign={"center"} variant="s" component="p">
        Got a lot of idea to be realized? Tell it to the right one to make it
        happen! And fortunately, that right one is just in front of you.
      </Typography>
      <ToggleButtonGroup
          {...control}
          sx={{width:"110px", gap: "10px",flexDirection:"row",position:"absolute",bottom:"25px",right:'50%',transform:"translateX(50%)"}}
        >
          <ToggleButton
            {...toggleButtonStyle}
            value="Slide 1"
            key="Slide 1"
          >
          </ToggleButton>
          <ToggleButton
            {...toggleButtonStyle}
            value="Slide 2"
            key="Slide 2"
          >
          </ToggleButton>
        </ToggleButtonGroup>
      <ArrowBackIos
        color="primary"
        sx={{
          fontSize: "44px",
          position: "absolute",
          cursor: "pointer",
          top: "50%",
          transform: "translate(50%)",
          left: "3%",
        }}
        onClick={handleClick}
      />
      <ArrowForwardIos
        color="primary"
        sx={{
          fontSize: "44px",
          position: "absolute",
          cursor: "pointer",
          top: "50%",
          transform: "translate(50%)",
          right: "3%",
        }}
        onClick={handleClick}
      />
    </Box>
  );
}
