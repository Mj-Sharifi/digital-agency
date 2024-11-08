import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import ArticleCard from "./Articles";
import { Comment, FavoriteBorder, Feed, Visibility } from "@mui/icons-material";
export default function MyProfile() {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(`https://all-backend.liara.run/users`);
        const data = await res.json();
        setUserInfo(data[0]);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Hero
        title={userInfo?.fullName}
        subtitle={""}
        img={"assets/images/my-profile/my-profile-hero.jpg"}
      />

      <Container sx={{marginBottom:"80px"}}>
        <Stack direction={{ xs: "column", md: "row" }} gap={10}>
          <Paper sx={{position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 10px",width:{xs:"100%",md:"36%",lg:"25%"},border:"1px solid #FFB51F80",borderRadius:"15px",backgroundColor:"transparent"}}>
            <Box
              component={"img"}
              src={`assets/images/testimony/${userInfo?.avatar}`}
              sx={{ borderRadius: "100%", width: "80px", height: "80px" }}
            />
            <Typography variant="h4" component={"h2"}>
              {userInfo?.fullName}
            </Typography>
            <Typography variant="body2" color="text.grey">
              {userInfo?.city}, {userInfo?.country}
            </Typography>
            <Typography>{userInfo?.about}</Typography>
            <List sx={{"& .MuiListItem-root":{paddingY:"0px"},"& .css-cveggr-MuiListItemIcon-root":{minWidth:"0px",marginRight:"10px"}}}>
              <ListItem>
                <ListItemIcon>
                  <Feed />
                </ListItemIcon>
                <ListItemText
                  primary={`${(userInfo?.articles)?.length} Articles`}
                  primaryTypographyProps={{variant:"body2"}}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Visibility />
                </ListItemIcon>
                <ListItemText
                  primary={`${userInfo?.numberOfViews} Views`}
                  primaryTypographyProps={{variant:"body2"}}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FavoriteBorder />
                </ListItemIcon>
                <ListItemText
                  primary={`${userInfo?.numberOfLikes} Likes`}
                  primaryTypographyProps={{variant:"body2"}}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Comment />
                </ListItemIcon>
                <ListItemText
                  primary={`${userInfo?.numberOfComments} Comments`}
                  primaryTypographyProps={{variant:"body2"}}
                />
              </ListItem>
            </List>
            <Button
              disableRipple
              variant="contained"
              sx={{
                borderRadius:"0",
                color: "white",
                width: "100%",
                height: "40px",
                position:"absolute",
                bottom:"0",
                fontSize:"18px",
                fontWeight:"500",
                "&:hover": { backgroundColor: "#FFB51F" },
              }}
            >
              Edit
            </Button>
          </Paper>
          <Grid container spacing={3} justifyContent={"center"}>
            {userInfo?.articles.map((e, i) => (
              <ArticleCard key={i} id={e} />
            ))}
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
