import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import { HeroHeader } from "./HeroHeader";
import { HeaderBanner } from "./HeaderBanner";
import { Navigation } from "swiper/modules";

function Header() {
  return (
    <Box>
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <HeroHeader />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderBanner />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default Header;
