import React, {useState } from "react";
import { Box, Stack } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import styles from "./style.module.css";

export default function Slider({slides}) {
  const [slide, setSlide] = useState(0);
  return (
    <Stack alignItems={"center"} gap={4} width={"100%"}>
      <Box component={"img"} src={`../../assets/images/portfolio/${slides[slide]}`} alt="slider" sx={{width:"100%"}}></Box>
      <Box sx={{ width: "80%" }}>
        <Swiper
          onActiveIndexChange={(e) => setSlide(e.activeIndex)}
          slidesPerView={2}
          spaceBetween={20}
          className={styles.myswipper}
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={i}
              onClick={(e) => setSlide(+e.target.id)}
              className={styles["swiper-slide"]}
            >
              <Box component={"img"} id={`${i}`} src={`../../assets/images/portfolio/${slide}`} alt="slider image"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Stack>
  );
}
