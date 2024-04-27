import React from "react";
import { Box} from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import styles from "./style.module.css";

// import required modules
import { Navigation } from 'swiper/modules';

export default function ClientsSlider({ clients }) {
  return (
    <Swiper slidesPerView={2} spaceBetween={10} breakpoints={{
      600: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    }} className="mySwiper" navigation={true} modules={[Navigation]} >
      {clients?.map((slide, i) => (
        <SwiperSlide key={i} className={styles["swiper-slide"]}>
          <Box component={"img"} src={`assets/images/pricing/${slide.logo}`} alt={slide.name} sx={{width:"100px",height:"100px"}}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
