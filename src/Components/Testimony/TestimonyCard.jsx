import { Box,Paper, Rating, Typography } from '@mui/material'
import React from 'react'

export default function TestimonyCard({testimony}) {
  const {avatar,name,workAt,description,rating} = testimony
  return (
    <Paper sx={{width:{xs:"80%",sm:"100%"}}}>
      <Box sx={{height:"50px",backgroundColor:"black",display:"flex" ,justifyContent:"center",alignItems:'center'}}><Rating readOnly value={rating} color='primary'/></Box>
      <Box sx={{height:"350px",border:"1px solid #FFB51F60",paddingX:{xs:"5px",sm:"15px",md:"25px",lg:"40px"}}}>
        <Box component={"img"} src={`/assets/images/testimony/${avatar}`} alt={name} title={name} sx={{borderRadius:"50%",width:"60px",marginX:"auto",marginTop:"10px"}}/>
        <Typography variant='h4' textAlign={"center"}>{name}</Typography>
        <Typography variant='body2' textAlign={"center"} color="primary" sx={{marginBottom:"10px"}}>({workAt})</Typography>
        <Typography variant='body2' textAlign={"center"}>{description}</Typography>
      </Box>
    </Paper>
  )
}
