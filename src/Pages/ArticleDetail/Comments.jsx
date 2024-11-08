import React, { useEffect, useState } from "react";
import { Divider, Typography } from "@mui/material";
import Comment from "./Comment";

export default function Comments({ id }) {
  const [comments, setComments] = useState();

  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(`https://all-backend.liara.run/makarya-comments?post-id=${id}`);
        const data = await res.json();
        setComments(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <>
      <Divider
        sx={{
          marginX: "auto",
          width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
          height: "2px",
          backgroundColor: "#ECEEEF",
          marginY: "30px",
        }}
      />
      <Typography
        variant="h4"
        component={"p"}
        textAlign={"center"}
      >
        {comments?.length} Comments:
      </Typography>
      <Divider
        sx={{
          marginX: "auto",
          width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
          height: "2px",
          backgroundColor: "#ECEEEF",
          marginY: "30px",
        }}
      />
      {comments?.map((e,i)=><Comment key={i} com={e}/>)}
    </>
  );
}
