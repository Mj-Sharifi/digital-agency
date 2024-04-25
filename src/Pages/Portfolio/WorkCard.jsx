import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function WorkCard({ work }) {
  const { image, title, client,id } = work;
  return (
    <Grid item xs={9} sm={6} md={4}>
      <Card elevation={0} sx={{ borderRadius: "0",height:"350px" }}>
        <CardMedia
          component="img"
          src={`assets/images/portfolio/${image}`}
          alt={title}
          sx={{height:"75%"}}
        />
        <CardContent
          sx={{
            paddingX: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #FFB51F60",
            height:"25%"
          }}
        >
          <ListItemText
            primary={title}
            primaryTypographyProps={{ variant: "m" }}
            secondary={client}
            secondaryTypographyProps={{ variant: "s" }}
          />
          {id < 4 ? (
            <Link to={`/portfolio/${id}/${title.toLowerCase().split(" ").join("-")}`}>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                sx={{
                  color: "white",
                  width: "72px",
                  height: "40px",
                  textTransform: "inherit",
                }}
              >
                View
              </Button>
            </Link>
          ) : (
            <Button
              variant="contained"
              color="primary"
              disableElevation
              sx={{
                color: "white",
                width: "72px",
                height: "40px",
                textTransform: "inherit",
              }}
            >
              View
            </Button>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
