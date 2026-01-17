import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import BannerImage from "../assets/newbanner.jpg";

function Header() {
  return (
    <Box>
      <Box
        position={"relative"}
        mt={"2.5rem"}
        py={"3rem"}
        className="container">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide >
            <Image w={'100%'} src={BannerImage} loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}

export default Header;
