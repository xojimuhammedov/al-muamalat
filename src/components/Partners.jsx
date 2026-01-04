import { Box, Heading, Image, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import LogoOne from "../assets/logo.jpg";
import LogoTwo from "../assets/logo1.jpg";
import LogoFour from "../assets/logo3.jpg";
import LogoFive from "../assets/logo4.jpg";
import LogoSix from "../assets/logo5.jpg";
import LogoSeven from "../assets/logo6.jpg";
import { useTranslation } from "react-i18next";

function Partners() {
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
            {t("Bizning hamkorlarimiz va mijozlarimiz!")}
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
            <Image {...css.image} src={LogoOne} />
          </Box>
          <Box {...css.list}>
            <Image {...css.image} src={LogoTwo} />
          </Box>
          <Box {...css.list}>
            <Image {...css.image} src={LogoFour} />
          </Box>
          <Box {...css.list}>
            <Image {...css.image} src={LogoFive} />
          </Box>
          <Box {...css.list}>
            <Image {...css.image} src={LogoSix} />
          </Box>
          <Box {...css.list}>
            <Image {...css.image} src={LogoSeven} />
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}

export default Partners;

const css = {
  list: {
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "white",
    width: "100%",
    height: "200px",
    display: "flex !important",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "140px",
    objectFit: "contain",
    transition: "0.3s",

    _hover: {
      transform: "scale(1.2)",
      cursor: "pointer",
    },
  },
  title: {
    color: "#103741",
    textAlign: "center",
    fontSize: {
      base: "25px",
      lg: "2.5rem",
    },
    lineHeight: "1.2",
  },
};
