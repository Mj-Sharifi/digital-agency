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
      <Card elevation={0} sx={{borderRadius:"0"}}>
        <CardMedia component="img" src={`assets/images/home/${image}`} alt={title}/>
        <CardContent sx={{ paddingX: "20px",display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid #FFB51F60" }}>
          <ListItemText primary={title} primaryTypographyProps={{variant:"m"}} secondary={subtitle} secondaryTypographyProps={{variant:"s"}} />
          <Button variant="contained" color="primary" disableElevation sx={{color:"white",width:"72px",height:"40px",textTransform:"inherit"}}>View</Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
