import { FavoriteBorder, Reply } from "@mui/icons-material";
import { Box, Button,Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import DateFormatter from "../../Utils/DateFormatter";

export default function Comment({ com }) {
  const { like, date, body, name, avatar } = com;

  return (
    <Box sx={{ marginBottom: "35px" }}>
      <Stack
        direction={"row"}
        gap={6}
        alignItems={"center"}
        marginBottom={"25px"}
      >
        <Box
          component={"img"}
          src={`../../assets/images/post/comments/${avatar}`}
          alt={name}
          style={{ width: "70px", borderRadius: "50%" }}
        />
        <Box>
          <Typography variant="h6" component={"p"} gutterBottom>
            {name}
          </Typography>
          <Typography color={"text.grey"}>{DateFormatter(date)}</Typography>
        </Box>
      </Stack>
      <Typography variant="body2" component={"p"} gutterBottom>
        {body}
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <IconButton>
            <FavoriteBorder color="primary" />
          </IconButton>
          <Typography variant="body2" fontWeight={"500"}>{like}</Typography>
        </Stack>
        <Button disableRipple variant="outlined" startIcon={<Reply/>}>Reply</Button>
      </Stack>
      <Divider
        sx={{
          marginX: "auto",
          width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
          height: "2px",
          backgroundColor: "#ECEEEF",
          marginTop: "10px",
          marginBottom:"20px"
        }}
      />
    </Box>
  );
}
