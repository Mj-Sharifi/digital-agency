import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";

export default function TeamMember({ img, name, skill }) {
  const cardTitle = useRef();
  const cardInfo = useRef();
  const cardImage = useRef();
  useEffect(() => {
    const mouseOver = () => {
      cardImage.current.style.height = "100px";
      cardInfo.current.style.top = "100px";
      cardInfo.current.style.visibility = "visible";
      cardInfo.current.style.opacity = "1";
      cardTitle.current.style.visibility = "hidden";
      cardTitle.current.style.opacity = "0";
    };
    cardTitle.current.addEventListener("mouseover", mouseOver);
    const mouseLeave = () => {
      cardImage.current.style.height = "270px";
      cardInfo.current.style.top = "270px";
      cardInfo.current.style.visibility = "hidden";
      cardInfo.current.style.opacity = "0";
      cardTitle.current.style.visibility = "visible";
      cardTitle.current.style.opacity = "1";
    };
    cardInfo.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      cardTitle.current &&
        cardTitle.current.removeEventListener("mouseover", mouseOver);
      cardInfo.current &&
        cardInfo.current.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <Grid item xs={10} sm={6} md={4}>
      <Card sx={{ height: "350px", position: "relative" }}>
        <CardMedia
          ref={cardImage}
          component={"img"}
          src={`assets/images/about-us/${img}`}
          alt={name}
          sx={{ height: "270px", objectPosition: "top", transition: "0.3s" }}
        />
        <CardContent ref={cardTitle} sx={{ height: "80px" }}>
          <Typography variant="h4" component={"h2"} textAlign={"center"}>
            {name}
          </Typography>
        </CardContent>
        <CardContent
          ref={cardInfo}
          sx={{
            height: "250px",
            width: "100%",
            position: "absolute",
            top: "270px",
            left: "0",
            visibility: "hidden",
            opacity: "0",
            zIndex: "10",
            transition: "0.3s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component={"h2"} textAlign={"center"}>
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ opacity: "0.85" }}
            textAlign={"center"}
          >
            {skill}
          </Typography>
          <Divider
            sx={{
              marginX: "auto",
              width: "40px",
              height: "5px",
              backgroundColor: "#FFB51F",
              marginTop: "25px",
              marginBottom: "15px",
            }}
          />
          <Typography
            variant="body2"
            sx={{ opacity: "0.85" }}
            textAlign={"center"}
            gutterBottom
          >
            Follow him on:
          </Typography>
          <Grid
            container
            spacing={4}
            sx={{ paddingX: { xs: "80px", md: "40px" } }}
          >
            <Grid item xs={4}>
              <img src={`assets/images/footer/linkedin.svg`} />
            </Grid>
            <Grid item xs={4}>
              <img src={`assets/images/footer/dribbble.svg`} />
            </Grid>
            <Grid item xs={4}>
              <img src={`assets/images/footer/twitter.svg`} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
{
  /* <Box><img src={`assets/images/about-us${img}`} alt={name}/></Box>
<Box><Typography variant='s' component={"h2"}>{name}</Typography></Box> */
}
