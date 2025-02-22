import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import ContactImage from "../assets/contacts.webp";
import { MailOpen, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <Box>
      <Box py={"3rem"} className="container">
        <Box p={{ base: "0", md: "15px" }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} {...css.list}>
            <Box width={"100%"} p={{ base: "10px", md: "3rem" }}>
              <Heading as={"h3"}>{t("Uchrashuv belgilang")}</Heading>
              <form className="contact-form" action="">
                <Input
                  {...css.input}
                  type="text"
                  placeholder={t("Ismingiz")}
                  required
                  width={{ base: "100%", md: "48%" }}
                />
                <Input
                  type="email"
                  {...css.input}
                  placeholder={t("Sizning elektron manzilingiz")}
                  required
                  width={{ base: "100%", md: "48%" }}
                />
                <Input
                  {...css.input}
                  type="number"
                  placeholder={t("Sizning raqamingiz")}
                />
                <Textarea {...css.input} placeholder="Xabar" />
                <Button className="btn btn-primary" type="submit">
                  {t("Yuborish")}
                </Button>
              </form>
            </Box>
            <Box>
              <Image {...css.image} src={ContactImage} alt="ContactImage" />
            </Box>
          </SimpleGrid>
        </Box>
        <SimpleGrid mt={"3rem"} gap={"16px"} columns={{ base: 1, md: 3 }}>
          <Flex flexDirection={"column"} align={"center"}>
            <Box {...css.box}>
              <MapPin
                fill="#FE5D37"
                stroke="#fff"
                color="#FE5D37"
                size={"35px"}
              />
            </Box>
            <Text {...css.text}>{t("house")}</Text>
          </Flex>
          <Flex flexDirection={"column"} align={"center"}>
            <Box {...css.box}>
              <MailOpen
                size={"35px"}
                fill="#FE5D37"
                stroke="#fff"
                color="#FE5D37"
              />
            </Box>
            <Text {...css.text}>info@al-muamalat.uz</Text>
          </Flex>
          <Flex flexDirection={"column"} align={"center"}>
            <Box {...css.box}>
              <Phone size={"35px"} color="#FE5D37" fill="#FE5D37" />
            </Box>
            <Text {...css.text}>+998 99 051 18 81</Text>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Contact;

const css = {
  list: {
    borderRadius: "10px",
    background: "#FFF5F3",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
  input: {
    width: "100%",
    color: "#74787C",
    border: "0",
    backgroundColor: "#fff",
    borderRadius: "10px",
    transition: "border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out",
    padding: "1rem 0.75rem",
    height: "calc(3.5rem + 2px)",

    _focus: {
      boxShadow: "0 0 0 .25rem rgba(254,93,55,0.25)",
      color: "#74787C",
    },

    _placeholder: {
      fontSize: "14px",
    },
  },
  box: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    backgroundColor: "#FFF5F3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#103741",
    marginBottom: "0.5rem",
    fontWeight: "600",
    textAlign: "center",
    fontSize: "14px",
    marginTop: "5px",
  },
};
