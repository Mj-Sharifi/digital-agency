import React from "react";
import {
  Box,
  Divider,
  Typography,
  Container,
  Button,
  Input,
} from "@mui/material";
import styles from "./style.module.css";
export default function Contact() {
  return (
    <Box sx={{ backgroundColor: "#FFB51F", paddingY: "60px" }}>
      <Container sx={{}}>
        <Typography
          textAlign={"center"}
          variant="h3"
          component={"h4"}
          gutterBottom
        >
          Contact Us
        </Typography>
        <Divider
          sx={{
            width: "40px",
            height: "4px",
            borderRadius: "5px",
            backgroundColor: "white",
            marginX: "auto",
            marginBottom: "40px",
          }}
        />
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "70%" },
              marginBottom: "25px",
            }}
          >
            <Typography>Email address</Typography>
            <Input
              id="subscription-email"
              sx={{
                transition: "all 0.3s",
                height: "50px",
                width: "100%",
                "&::before": { border: "none !important" },
                "&::after": { border: "none !important" },
                "& input": {
                  padding: "0 10px",
                  width: "100%",
                  height: "100%",
                  outline: "none",
                  borderRadius: "5px",
                  border: "1px solid black",
                  "&:focus": {
                    backgroundColor: "white",
                  },
                },
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "70%" },
              marginBottom: "25px",
            }}
          >
            <Typography>Subject</Typography>
            <Input
              id="subscription-email"
              sx={{
                transition: "all 0.3s",
                height: "50px",
                width: "100%",
                "&::before": { border: "none !important" },
                "&::after": { border: "none !important" },
                "& input": {
                  padding: "0 10px",
                  width: "100%",
                  height: "100%",
                  outline: "none",
                  borderRadius: "5px",
                  border: "1px solid black",
                  "&:focus": {
                    backgroundColor: "white",
                  },
                },
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "70%" },
              marginBottom: "20px",
            }}
          >
            <Typography>Massage</Typography>
            <textarea
              name="message"
              id="message"
              rows={10}
              className={styles.textarea}
            ></textarea>
          </Box>
        </Box>

        <Button
          variant="contained"
          disableRipple
          sx={{
            display: "flex !important",
            backgroundColor: "text.main",
            color: "white",
            width: "119px",
            height: "53px",
            margin: "0 auto",
            fontSize: "20px",
          }}
        >
          Send
        </Button>
      </Container>
    </Box>
  );
}
