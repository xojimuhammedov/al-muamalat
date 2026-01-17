import { Box, Flex, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link as ALink } from 'react-router-dom'

function Footer() {
  const { t } = useTranslation();
  return (
    <Box>
      <Box py={"3rem"} bg={"#103741"} className="container">
        <SimpleGrid gap={5} columns={{ base: 1, md: 2, lg: 3 }}>
          <Flex flexDirection={"column"}>
            <Heading {...css.title} as={"h3"}>
              {t("Aloqaga chiqing")}
            </Heading>
            <Link
              href="https://maps.app.goo.gl/qmn1Ks37foJ3iE7C8"
              target="_blank"
              {...css.link}>
              {" "}
              <MapPin size={"28px"} /> {t("house")}
            </Link>
            <Link href="tel:+998990511881" target="_blank" {...css.link}>
              {" "}
              <Phone size={"18px"} /> +998 99 051 18 81
            </Link>
            <Link
              target="_blank"
              href="mailto:info@al-muamalat.uz"
              {...css.link}>
              {" "}
              <Mail size={"18px"} /> info@al-muamalat.uz
            </Link>
          </Flex>
          <Flex flexDirection={"column"}>
            <Heading {...css.title} as={"h3"}>
              {t("Tezkor havolalar")}
            </Heading>
            <ALink to={'/aaoifi-exam'}>
              <Text {...css.link}>{t("AAOIFI imtihonlari")}</Text>
            </ALink>
            <ALink to={'/education-course'}>
              <Text {...css.link}>{t("O’quv kurslari")}</Text>
            </ALink>
            <ALink to="/contact">
              <Text {...css.link}>{t("Bog'lanish")}</Text>
            </ALink>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  title: {
    color: "#fff",
    marginBottom: "1.5rem",
    fontSize: {
      base: "18px",
      lg: "1.75rem",
    },
  },
  link: {
    color: "#889BA0",
    marginBottom: "10px",
    textAlign: "left",
    transition: "0.3s",
    display: "flex",
    fontSize: {
      base: "13px",
      lg: "14px",
    },
    gap: "10px",
    fontWeight: "500 !important",
    _hover: {
      color: " #fe5d37",
    },
  },
  text: {
    color: "#889BA0",
    borderTop: "1px solid #889BA0",
    paddingTop: "2rem",
    textAlign: "left",
    textTransform: "capitalize",
  },
};
