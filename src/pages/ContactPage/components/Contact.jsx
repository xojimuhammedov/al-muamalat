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
  VStack,
} from "@chakra-ui/react";
import ContactImage from "../../../assets/contact-new.jpg";
import { MailOpen, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const { t } = useTranslation();
  const [nameValue, setNameValue] = useState("");
  const [nameValueTwo, setNameValueTwo] = useState("");
  const [company, setCompany] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [email, setEmail] = useState("");

  function changeNumber(item) {
    setNumberValue(item);
  }

  function changeName(item) {
    setNameValue(item);
  }
  function changeText(item) {
    setTextValue(item);
  }
  function changeEmail(item) {
    setEmail(item);
  }
  const handleClear = () => {
    setNameValue("");
    setNumberValue("");
    setTextValue("");
    setEmail("");
    setCompany("")
    setNameValueTwo("")
  };
  let bot = {
    TOKEN: "7124566656:AAFYAZxPTZZPtPFUiPJekWVc1Kp35t1sjHY",
    chatID: "-1002196684816",
    message: `
          Assalomu alaykum, sizga yangi xabar keldi!
          Ismi 👤: ${nameValue}; 
          Familyasi 👤: ${nameValueTwo}; 
          Tashkiloti: ${company}; 
          Telefon raqami ☎: ${numberValue};
          Elektron manzil: ${email};
          Xabar: ${textValue};
          `,
  };
  const encodedMessage = encodeURIComponent(bot.message);

  function sendMessage(e) {
    e.preventDefault();

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${encodedMessage} `,
      {
        method: "GET",
      }
    ).then(
      () => {
        handleClear();
        toast.success(t("Sizning xabaringiz muvaffaqiyatli yuborildi!"));
      },
      (error) => {
        console.log(error);
      }
    );
  }
  return (
    <Box>
      <Box py={"5rem"} className="container">
        <VStack spacing={4} mb={8} textAlign="center">
          <Heading
            as="h2"
            size="2xl"
            color="#1B4D3E"
            fontWeight="700"
            letterSpacing="-1px"
          >
            {t("Aloqaga chiqing")}
          </Heading>
          <Box
            width="80px"
            height="4px"
            bgGradient="linear(to-r, #FF6B00, #1B4D3E)"
            borderRadius="full"
            mb={4}
          />
        </VStack>
        <Box p={"15px"}>
          <SimpleGrid gap={"16px"} columns={{ base: 1, md: 3 }}>
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
          <SimpleGrid mt={"3rem"} columns={{ base: 1, md: 2 }} {...css.list}>
            <Box width={"100%"} p={{ base: "10px", md: "3rem" }}>
              <Heading as={"h3"}>{t("Uchrashuv belgilang")}</Heading>
              <form className="contact-form" action="">
                <Input
                  {...css.input}
                  type="text"
                  placeholder={t("Ismingiz")}
                  required
                  width={{ base: "100%", md: "48%" }}
                  value={nameValue}
                  onChange={(e) => changeName(e.target.value)}
                />
                <Input
                  {...css.input}
                  type="text"
                  placeholder={t("Familyangiz")}
                  required
                  width={{ base: "100%", md: "48%" }}
                  value={nameValueTwo}
                  onChange={(e) => setNameValueTwo(e.target.value)}
                />
                <Input
                  type="email"
                  {...css.input}
                  placeholder={t("Sizning elektron manzilingiz")}
                  value={email}
                  onChange={(e) => changeEmail(e.target.value)}
                  required
                  width={{ base: "100%", md: "48%" }}
                />
                <Input
                  {...css.input}
                  type="number"
                  placeholder={t("Tashkilotingiz")}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  width={{ base: "100%", md: "48%" }}
                />
                <Input
                  {...css.input}
                  type="number"
                  placeholder={t("Sizning raqamingiz")}
                  value={numberValue}
                  onChange={(e) => changeNumber(e.target.value)}
                />
                <Textarea {...css.input} placeholder="Xabar" value={textValue} onChange={(e) => changeText(e.target.value)} />
                <Button onClick={sendMessage} className="btn btn-primary" type="submit">
                  {t("Yuborish")}
                </Button>
              </form>
            </Box>
            <Box>
              <Image {...css.image} src={ContactImage} alt="ContactImage" />
            </Box>
          </SimpleGrid>
        </Box>
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
    borderRadius: "10px",
    objectFit: "cover"
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
