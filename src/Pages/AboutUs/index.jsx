import React, { useState, useEffect } from "react";
import Hero from "../../Components/Hero";
import { useLocation } from "react-router-dom";
import {
  Box,
  Grid,
  Container,
  Stack,
  Input,
  InputLabel,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import TeamMember from "./TeamMember";
import { Send } from "@mui/icons-material";

export default function AboutUs() {
  const [teamMembers, setTeamMembers] = useState();
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch("http://localhost:3000/teamMembers");
        const data = await res.json();
        setTeamMembers(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const pathName = useLocation();
  const page = pathName.pathname;
  return (
    <>
      <Hero
        img={"about-us/about-us-hero.jpg"}
        title={"About Us"}
        subtitle={"Nulla vitae elit libero, a pharetra augue mollis interdum."}
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "60px", sm: "80px", md: "150px" },
          marginBottom: { xs: "60px", sm: "80px", md: "150px" },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          columnGap={{ sm: 8, md: 16, lg: 24 }}
          rowGap={4}
        >
          <Box
            sx={{
              borderLeft: "5px solid #FFB51F",
              height: "85px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "15px",
            }}
          >
            <Typography variant="m" component="h4">
              Our <br /> History
            </Typography>
          </Box>
          <Box>
            <Typography variant="s" component={"p"}>
              <span style={{ fontSize: "32px", fontWeight: "600" }}>M</span>
              aecenas faucibus neque nec purus viverra molestie. Sed euismod
              eleifend faucibus. Maecenas viverra massa quis felis finibus
              posuere. Cras ut luctus quam. Vestibulum eget lectus id nulla
              tincidunt posuere. Cras eget vehicula lorem, vel posuere mauris.
              Etiam sollicitudin elit eget odio sollicitudin posuere. Vivamus
              quis lorem sit amet eros consequat egestas eu non lorem. Proin
              convallis rhoncus urna. Fusce vehicula placerat ultrices. Nam id
              ultricies risus, vitae auctor urna. Curabitur augue felis, semper
              quis neque auctor, ornare mattis lacus.
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row-reverse" }}
          columnGap={{ sm: 6, md: 12, lg: 16 }}
          rowGap={4}
        >
          <Box
            sx={{
              borderRight: "5px solid #FFB51F",
              height: "85px",
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              paddingRight: "15px",
            }}
          >
            <Typography variant="m" component="h4">
              Our <br /> Team
            </Typography>
          </Box>
          <Grid container spacing={2} justifyContent={"center"}>
            {teamMembers?.map((e, index) => (
              <TeamMember
                key={index}
                img={e.img}
                name={e.name}
                skill={e.skill}
              />
            ))}
          </Grid>
        </Stack>
      </Container>
      <Box
        sx={{
          backgroundColor: "black",
          width: "100%",
          height: { xs: "200px", md: "340px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          paddingY: { xs: "15px", md: "30px" },
        }}
      >
        <img src="assets/images/about-us/magic.svg" alt="magic" />
        <Typography variant="m" sx={{ color: "white" }}>
          " Lorem ipsum doler sit amet "
        </Typography>
        <Divider
          sx={{
            marginX: "auto",
            width: "40px",
            height: "5px",
            backgroundColor: "#FFB51F",
          }}
        />
      </Box>

      <Box sx={{ position: "relative", height: "390px" }}>
        <Box
          sx={{
            borderLeft: "5px solid #FFB51F",
            height: "85px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "15px",
            position: "absolute",
            top: "25%",
            left: "5%",
          }}
        >
          <Typography variant="m" component="h4">
            Our <br /> location
          </Typography>
        </Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d25714.177790868052!2d59.5767962!3d36.3299517!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1707208614906!5m2!1sen!2s"
          style={{ border: "0", width: "100%", height: "100%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </Box>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={4}
        height={"380px"}
        bgcolor={"primary.main"}
      >
        <Box>
          <Typography variant="l" gutterBottom>
            JOIN OUR NEWSLETTER
          </Typography>
          <Divider
            sx={{
              marginX: "auto",
              width: "40px",
              height: "5px",
              backgroundColor: "white",
            }}
          />
        </Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", md: "end" }}
          justifyContent={"center"}
          columnGap={6}
          rowGap={4}
          width="100%"
        >
          <Box>
            <InputLabel htmlFor="subscription-email"></InputLabel>
            <Input
              id="subscription-email"
              sx={{
                transition: "all 0.3s",
                height: "50px",
                "&::before": { border: "none !important" },
                "&::after": { border: "none !important" },
                "& input": {
                  padding: "0 10px",
                  width: "280px",
                  height: "100%",
                  outline: "none",
                  borderRadius: "5px",
                  border:"1px solid black",
                  "&:focus": {
                    backgroundColor: "white",
                  },
                },
              }}
            />
          </Box>
          <Button
            type="submit"
            disableRipple
            variant="contained"
            startIcon={<Send />}
            sx={{
              backgroundColor: "text.main",
              marginTop: "40px",
              color: "white",
              width: "110px",
              height: "50px",
              "&:hover": { backgroundColor: "text.main" },
            }}
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
