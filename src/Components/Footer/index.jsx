import {
  Box,
  Container,
  Grid,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import logo
import brandLogo from "./logo/footer logo.svg";
import linkedin from "./logo/linkedin.svg";
import medium from "./logo/medium.svg";
import twitter from "./logo/twitter.svg";
import dribbble from "./logo/dribbble.svg";
import facebook from "./logo/facebook.svg";
import instagram from "./logo/instagram.svg";
import Auth from "../../Utils/Auth";

const secondFooterEl = ["HOME", "ABOUT US", "PORTFOLIO", "BLOG"];
const thirdFooterEl = ["PAGES", "CONTACT"];
const pagesItems = [
  "LOGIN/REGISTER",
  "MY PROFILE",
  "PRICING",
  "FAQ",
  "404 PAGE",
];
const socialMedia = [linkedin, medium, twitter, dribbble, facebook, instagram];

export default function Footer() {
  const { token } = useContext(Auth);
  return (
    <Box
      sx={{ backgroundColor: "black", color: "white", marginTop: "20px" }}
      component={"footer"}
    >
      <Container>
        <Grid
          container
          rowSpacing={3}
          sx={{
            justifyContent: { xs: "center", md: "start" },
            paddingY: "20px",
          }}
        >
          <Grid
            item
            xs={10}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "start" },
            }}
          >
            <Box
              component={"img"}
              src={brandLogo}
              alt="Makarya"
              sx={{ width: "80px", height: "80px", paddingY: "8px" }}
            />
            <Typography
              variant="body2"
              component={"p"}
              sx={{
                color: "white !important",
                paddingRight: { xs: "0px", md: "28%" },
                textAlign: { xs: "center", md: "start" },
              }}
            >
              With supporting text below as a natural lead-in to additional
              content. Lorem ipsum and something else.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: { xs: "30px", md: "45px" },
                color: "white",
                fontWeight: "300",
                lineHeight: "16px",
              }}
            >
              Special Region of Yogyakarta
              <br /> Indonesia
              <br /> (027) 333333
            </Typography>
          </Grid>
          <Grid
            item
            xs={7}
            sm={5}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              justifyContent: { xs: "center", sm: "start" },
              "& span:hover": {
                transition: "0.3s",
                color: "primary.main",
                cursor:"pointer"
              },
            }}
          >
            {!token && (
              <Typography
                component={"span"}
                variant="body2"
                onClick={() => {
                  const loginBtn = document.getElementById("login-btn")
                  loginBtn?.click()
                }}
              >
                Login
              </Typography>
            )}
            <Link to={"/"}>
              <Typography component={"span"} variant="body2">
                Home
              </Typography>
            </Link>
            <Link to={"/faq"}>
              <Typography component={"span"} variant="body2">
                Frequently Asked Questions
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={6} sm={5} md={4} sx={{ paddingX: "5%" }}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                marginBottom: "25px",
                textAlign: { xs: "center", sm: "inherit" },
              }}
            >
              Follow us on:
            </Typography>
            <Grid container spacing={3}>
              {socialMedia.map((icon, index) => (
                <Grid key={index} item xs={4}>
                  <Box component={"img"} src={icon} alt={icon} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
