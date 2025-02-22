import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import ContactBanner from "../../../assets/contacts.jpg";
import BgHeaderTop from "../../../assets/bg-header-top.png";
import BgHeaderBottom from "../../../assets/bg-header-bottom.png";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <Box mt={"40px"}>
      <Box py={"6rem"} {...css.image} className="container">
        <Heading {...css.title} as={"h1"}>
          {t("Uchrashuv belgilang")}
        </Heading>
        <Flex color={"#fff"} gap={"10px"} align={"center"}>
          <Link {...css.link} href="/">
            {t("Bosh sahifa")}
          </Link>{" "}
          / {t("Bog'lanish")}
        </Flex>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  image: {
    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), center center no-repeat url(${ContactBanner})`,
    backgroundSize: "cover",
    position: "relative",

    _before: {
      position: "absolute",
      content: "''",
      width: "100%",
      height: "10px",
      top: "0",
      left: "0",
      background: `url(${BgHeaderTop})`,
      zIndex: "1",
    },

    _after: {
      position: "absolute",
      content: "''",
      width: "100%",
      height: "19px",
      top: "auto",
      bottom: "0",
      left: "0",
      background: `url(${BgHeaderBottom})`,
      zIndex: "1",
    },
  },
  title: {
    color: "#fff",
    fontSize: {
      base: "30px",
      md: "60px",
    },
    lineHeight: {
      base: "40px",
      md: "86px",
    },
  },
  link: {
    color: "#fe5d37",
  },
};
