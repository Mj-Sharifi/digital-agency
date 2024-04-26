import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  ListItemText,
} from "@mui/material";
import React from "react";

export default function WorkCard({work,index}) {
  const {image,title,subtitle} = work
  return (
    <Grid item xs={9} sm={6} md={4} display={{xs:`${index>1&&"none"}`,md:"block"}}>
      <Card elevation={0} sx={{borderRadius:"0",height:"450px"}}>
        <CardMedia component="img" src={`assets/images/portfolio/${image}`} alt={title} sx={{height:"75%",objectFit:"cover"}}/>
        <CardContent sx={{ height:"25%",paddingX: "20px",display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",alignItems:"center",border:"1px solid #FFB51F60" }}>
          <ListItemText primary={title} primaryTypographyProps={{variant:"h4"}} secondary={subtitle} secondaryTypographyProps={{variant:"body2"}} />
          <Button variant="contained" color="primary" disableElevation sx={{color:"white",width:"72px",height:"40px",textTransform:"inherit"}}>View</Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
