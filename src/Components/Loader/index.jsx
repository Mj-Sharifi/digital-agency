import { Stack } from "@mui/material";
import React from "react";
import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"start"}
      width={"100%"}
      paddingTop={{ xs: "20px", md: "40px" }}
      height={"40vh"}
    >
      <RotatingLines strokeColor="#FFB51F" width="100" />
    </Stack>
  );
}
