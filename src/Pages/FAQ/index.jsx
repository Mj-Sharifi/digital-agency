import React,{useEffect, useState} from "react";
import { Container, Divider, Typography } from "@mui/material";
import Hero from "../../Components/Hero";
import CustomizedAccordions from "./CusomizedAccordion";

export default function FAQ() {
  const [accordionContent,setAccordionContent] = useState()
  useEffect(()=>{
    try {
      (async()=>{
        const res = await fetch(`${process.env.REACT_APP_API_URL}makarya-faq`)
        const data = await res.json()
        setAccordionContent(data)
      })()
    } catch (error) {
      console.log(error)
    }
  },[])
  // Handle Controlled Accordion
  const [expanded, setExpanded] = useState();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Hero
        img={"faq/faq-hero.jpg"}
        title={"FAQ"}
        subtitle={"Nulla vitae elit libero, a pharetra augue mollis interdum."}
      />
      <Container sx={{ marginY: "50px" }}>
        <Typography variant="h4" component={"h3"} textAlign={"center"}>
          Get Inspired
        </Typography>
        <Divider
          sx={{
            marginX: "auto",
            width: "40px",
            height: "5px",
            backgroundColor: "#FFB51F",
            marginBottom: "30px",
          }}
        />
        <Typography variant="body2" component={"p"} textAlign={"center"} sx={{marginBottom:"50px"}}>
          Maecenas faucibus neque nec purus viverra molestie. Sed euismod
          eleifend faucibus. Maecenas viverra massa quis felis finibus posuere.
          Cras ut luctus quam. Vestibulum eget lectus id nulla tincidunt
          posuere.
        </Typography>
        {accordionContent?.map((e, i) => (
          <CustomizedAccordions key={i} content={e} handleChange = {handleChange} expanded={expanded}/>
        ))}
      </Container>
    </>
  );
}
