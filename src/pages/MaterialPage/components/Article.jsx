import { Box, Heading, Image, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

function Article() {
  var settings = {
    speed: 5000,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
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
    <Box className="article">
      <Box mt={"3rem"} py={"3rem"} className="container">
        <Heading mb={"2rem"} {...css.heading}>
          {t("Bizning Maqolalar!")}
        </Heading>
        <Slider {...settings}>
          <Box width={"100%"}>
            <Image
              {...css.image}
              src="https://storage.kun.uz/source/8/lXlDe4nm25Ogr_DPnaFuDVyVXYcJClTM.jpg"
            />
            <Heading {...css.title}>{t("text6")}</Heading>
            <Link {...css.link} href="https://kun.uz/07488561" target="_blank">
              {t("Batafsil o'qish")}
            </Link>
          </Box>
          <Box width={"100%"}>
            <Image
              {...css.image}
              src="https://storage.kun.uz/source/9/ZPs7sFTXrdIKgaGUbkmqvMc73pltsejo.jpg"
            />
            <Heading {...css.title}>{t("text7")}</Heading>
            <Link {...css.link} href="https://kun.uz/21925231" target="_blank">
              {t("Batafsil o'qish")}
            </Link>
          </Box>
          <Box width={"100%"}>
            <Image
              {...css.image}
              src="https://storage.kun.uz/source/9/SagBTMCP2tgAJB3HIXdbtL9BkxJ9LQhE.jpg"
            />
            <Heading {...css.title}>{t("text9")}</Heading>
            <Link {...css.link} href="https://kun.uz/79966396" target="_blank">
              {t("Batafsil o'qish")}
            </Link>
          </Box>
          <Box width={"100%"}>
            <Image
              {...css.image}
              src="https://storage.kun.uz/source/8/NNOsQNu9x-bAebGq7m7_DkFH314Ka6j-.jpg"
            />
            <Heading {...css.title}>{t("text10")}</Heading>
            <Link {...css.link} href="https://kun.uz/58004341" target="_blank">
              {t("Batafsil o'qish")}
            </Link>
          </Box>
          <Box width={"100%"}>
            <Image
              {...css.image}
              src="https://storage.kun.uz/source/10/g0n6CUzh3GGOmgcJxTyKwhYG7O-vsG-x.jpg"
            />
            <Heading {...css.title}>{t("text11")}</Heading>
            <Link {...css.link} href="https://kun.uz/78090115" target="_blank">
              {t("Batafsil o'qish")}
            </Link>
          </Box>
          <Box width={"100%"}>
            <Image
              {...css.image}
              src="https://storage.kun.uz/source/10/ZZTeykiJcEwfgH1Pf1e6auXiQBfcm93-.jpg"
            />
            <Heading {...css.title}>{t("text12")}</Heading>
            <Link
              {...css.link}
              href="https://kun.uz/kr/29339373"
              target="_blank">
              {t("Batafsil o'qish")}
            </Link>
          </Box>
          <Box width={"100%"}>
            <Image
              {...css.image}
              src="https://storage.kun.uz/source/11/3bGr23_d5dEA-xBn4qbLsT67jPv_OR5c.jpg"
            />
            <Heading {...css.title}>{t("Islomiy moliyada nazorat: “o‘tlab ketmaslik” uchun qanday vositalar bor?")}</Heading>
            <Link
              {...css.link}
              href="https://kun.uz/kr/58795378"
              target="_blank">
              {t("Batafsil o'qish")}
            </Link>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}

export default Article;

const css = {
  heading: {
    color: "#103741",
    fontSize: {
      base: "25px",
      lg: "2.5rem",
    },
    lineHeight: "48px",
    textAlign: "center",
  },
  title: {
    color: "#103741",
    fontSize: "18px",
    lineHeight: "26px",
    margin: "10px 0",
  },
  image: {
    height: "410px",
  },
  link: {
    color: "#fe5d37",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
  },
};
