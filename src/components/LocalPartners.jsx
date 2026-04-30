import { Box, Heading, Image, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import AsiaAlliance from "../assets/asia_alliance.svg";
import IpotekaBank from "../assets/ipoteka_bank.png";
import TuronBank from "../assets/turon_bank.png";
import XalqBank from "../assets/xalq_bank.webp";
import OkaAgency from "../assets/oka_agency.png";
import HamkorSugurta from "../assets/hamkor_sugurta.jpg";
import Tadbirkorlik from "../assets/tadbirkorlik.jpg";
import Kifoya from "../assets/kifoya.jpg";
import Asterium from "../assets/asterium.jpg";
import { useTranslation } from "react-i18next";

function LocalPartners() {
  var settings = {
    speed: 5000,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const { t } = useTranslation();
  return (
    <Box>
      <Box py={"3rem"} className="container">
        <VStack spacing={4} mb={8} textAlign="center">
          <Heading
            as="h2"
            size="2xl"
            color="#1B4D3E"
            fontWeight="700"
            letterSpacing="-1px"
          >
            {t("Bizning mahalliy hamkorlarimiz va mijozlarimiz")}
          </Heading>
          <Box
            width="80px"
            height="4px"
            bgGradient="linear(to-r, #FF6B00, #1B4D3E)"
            borderRadius="full"
            mb={4}
          />
        </VStack>
        <Slider {...settings}>
          <Box {...css.list}>
            <Image {...css.image} src={AsiaAlliance} />
          </Box>
          <Box {...css.list}>
            <Image {...css.image} src={IpotekaBank} />
          </Box>
          <Box {...css.list}>
            <Image {...css.image} src={TuronBank} />
          </Box>
          <Box {...css.list}>
            <Image {...css.image} src={XalqBank} />
          </Box>
          <Box {...css.list}>
            <Image {...css.image} src={OkaAgency} />
          </Box>
          <Box {...css.list}>
            <Image {...css.image} src={HamkorSugurta} />
          </Box>
          <Box {...css.list}>
            <Image {...css.image} src={Tadbirkorlik} />
          </Box>
          <Box {...css.list}>
            <Image {...css.image} src={Kifoya} />
          </Box>
          <Box {...css.list}>
            <Image {...css.image} src={Asterium} />
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}

export default LocalPartners;

const css = {
  list: {
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    padding: "12px 20px",
    borderRadius: "12px",
    backgroundColor: "white",
    width: "100%",
    height: "180px",
    display: "flex !important",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100px",
    width: "auto",
    maxWidth: "90%",
    objectFit: "contain",
    transition: "0.3s",

    _hover: {
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
};
