import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.css";

// import required modules
import { Navigation } from "swiper/modules";
import TestimonyCard from "./TestimonyCard";
import Loader from "../Loader";
export default function Testimony() {
  const [testimony, setTestimony] = useState();
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}makarya-testimony`);
        const data = await res.json();
        setTestimony(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>{testimony?    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      className="mySwiper"
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },

      }}
    >
      {testimony?.map((slide, i) => (
        <SwiperSlide key={i} className={styles["swiper-slide"]}>
          <TestimonyCard testimony={slide}/>
        </SwiperSlide>
      ))}
    </Swiper>:<Loader/>}</>
    

  );
}
