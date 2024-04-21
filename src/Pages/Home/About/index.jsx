import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const lowerBoxStyles = {
  sx: {
    height: "50%",
    width: "100%",
    backgroundImage: "url(assets/images/home/Home-about.png)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};
export default function About() {
  return (
    <Stack sx={{ height: "100vh" }}>
      <Box sx={{ height: "50%" }}>
        <Container sx={{paddingTop:"10vh"}}>
          <Typography textAlign={"center"} variant="l" component={"h4"} gutterBottom>Who We Are</Typography>
          <Divider  sx={{width:"40px",height:"4px",borderRadius:"5px",backgroundColor:"#FFB51F",marginX:"auto",marginBottom:"40px"}}/>
          <Typography textAlign={"center"} variant="s" component={"p"} sx={{paddingX:{md:"50px"}}}>
            Maecenas faucibus neque nec purus viverra molestie. Sed euismod
            eleifend faucibus. Maecenas viverra massa quis felis finibus
            posuere. Cras ut luctus quam. Vestibulum eget lectus id nulla
            tincidunt posuere. Cras eget vehicula lorem, vel posuere mauris.
            Etiam sollicitudin elit eget odio sollicitudin posuere. Vivamus quis
            lorem sit amet eros consequat egestas eu non lorem. Proin convallis
            rhoncus urna. Fusce vehicula placerat ultrices. Nam id ultricies
            risus, vitae auctor urna. Curabitur augue felis, semper quis neque
            auctor, ornare mattis lacus. Maecenas rutrum nisi ac maximus congue.
            Nunc luctus turpis elementum accumsan molestie.
          </Typography>
        </Container>
      </Box>
      <Box {...lowerBoxStyles} />
    </Stack>
  );
}
