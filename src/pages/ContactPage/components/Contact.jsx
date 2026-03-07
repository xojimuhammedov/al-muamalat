import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import ContactImage from "../../../assets/contact-banner.png";
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
    setCompany("");
    setNameValueTwo("");
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
      },
    ).then(
      () => {
        handleClear();
        toast.success(t("Sizning xabaringiz muvaffaqiyatli yuborildi!"));
      },
      (error) => {
        console.log(error);
      },
    );
  }
  return (
    <Box mt={6}>
      <Box py={"5rem"} className="container">
        <VStack spacing={4} mb={8} textAlign="center">
          <Heading
            as="h2"
            size="2xl"
            color="#1B4D3E"
            fontWeight="700"
            letterSpacing="-1px"
          >
            {t("Contact Us")}
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
              <Heading as={"h3"}>{t("Aloqaga chiqing")}</Heading>
              <form className="contact-form space-y-4" action="">
                <div className="flex w-full flex-col md:flex-row gap-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe5d37] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder={t("Ismingiz")}
                    required
                    value={nameValue}
                    onChange={(e) => changeName(e.target.value)}
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe5d37] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder={t("Familyangiz")}
                    required
                    value={nameValueTwo}
                    onChange={(e) => setNameValueTwo(e.target.value)}
                  />
                </div>
                <div className="flex w-full flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe5d37] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder={t("Sizning elektron manzilingiz")}
                    value={email}
                    onChange={(e) => changeEmail(e.target.value)}
                    required
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe5d37] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder={t("Tashkilotingiz")}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <input
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe5d37] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="number"
                  placeholder={t("Sizning raqamingiz")}
                  value={numberValue}
                  onChange={(e) => changeNumber(e.target.value)}
                />
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe5d37] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={t("Xabaringiz / Izoh...")}
                  value={textValue}
                  onChange={(e) => changeText(e.target.value)}
                />
                <button
                  onClick={sendMessage}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe5d37] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#fe5d37] text-white hover:bg-[#fe5d37]/90 h-10 px-6 py-2 shadow-sm w-[150px]"
                  type="submit"
                >
                  {t("Yuborish")}
                </button>
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
    objectFit: "cover",
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
