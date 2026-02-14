import { Box, Heading } from "@chakra-ui/react";
import ContactBanner from "../../../assets/contacts.jpg";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <Box mt={"96px"}>
      <Box py={"6rem"} {...css.image} className="container">
        <Heading as="h1"
          fontWeight="700"
          letterSpacing="-1px"
          size="2xl" {...css.title}>
           {t("Bog'lanish")}
        </Heading>
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
  },
  title: {
    color: "#fff",
  },
};
