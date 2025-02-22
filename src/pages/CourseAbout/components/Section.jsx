import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { API, API_URL } from "../../../api";
import { useParams } from "react-router-dom";
import { get } from "lodash";
import axios from "axios";
import { useTranslation } from "react-i18next";

function Section({ course }) {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data } = useQuery("userMe", async () => {
    return await API.userMe().catch((err) => {
      console.log(err);
    });
  });

  const { mutate } = useMutation(async (payload) => {
    return await API.purchasesPost(payload)
      .then((res) => {
        console.log(res);
        axios
          .get(`${API_URL}/courses/purchase/${res?.data?.data?.id}`)
          .then((response) => {
            const url = get(response, "data.data.data"); // Response ichidan URL ni olish
            console.log(get(response, "data.data.data"));
            console.log(get(response, "data.data"));
            if (url) {
              // Dinamik <a> tegi yaratish
              const aTag = document.createElement("a");
              aTag.href = url; // URL ni href ga qo'yish
              aTag.target = "_blank"; // Sahifani yangi oynada ochish
              aTag.rel = "noopener noreferrer"; // Xavfsizlik uchun rel qo'shish
              document.body.appendChild(aTag); // <a> tegini DOM ga qo'shish
              aTag.click(); // Linkni avtomatik bosish (foydalanuvchini yo'naltirish)
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "Please login in to get access") {
          toast.error("To'lov qilish uchun ro'yhatdan o'ting iltimos!");
        }
        // toast.error("Bu kurs uchun oldin to'lov qilgansiz!");
      });
  });
  const onSubmit = () => {
    const submitData = {
      course_id: id,
      user_id: get(data, "data.data.user_id"),
    };
    mutate(submitData);
  };

  return (
    <Box {...css.section}>
      <Box className="container">
        <Heading {...css.title}>{t("Kurs qay tartibda oʻtiladi?")}</Heading>
        <SimpleGrid gap={"32px"} columns={{ base: 1, md: 2 }}>
          <Box>
            <Heading {...css.subname}>{t("Videodarslar")}</Heading>
            <Text {...css.subtext}>
              Darslar video shaklida platformaga joylangan boʻlib, ularni
              xohlagan paytda va istalgan joyda koʻrish mumkin. Videodarslar
              yangilab boriladi.
            </Text>
          </Box>
          <Box>
            <Heading {...css.subname}>{t("Vazifalar")}</Heading>
            <Text {...css.subtext}>
              Modul oxirida test topshiriqlari berilgan. Testdan muvaffaqiyatli
              oʻtgan oʻquvchilargina keyingi moduldagi darslarga kirish
              imkoniyatiga ega boʻladi.
            </Text>
          </Box>
        </SimpleGrid>
        <Flex {...css.box}>
          <Box>
            <Heading {...css.name}>
              {t("Kursni oʻrganishni hozirdan boshlang")}
            </Heading>
            <Text {...css.text}>{t("Bir umrlik foydalanish imkoniyati")}</Text>
            <Text {...css.text}>{t("Videodarslar")}</Text>
            <Text {...css.text}>{t("Testlar")}</Text>
            <Text {...css.text}>{t("Loyihalar")}</Text>
            <Text {...css.text}>{t("Yuklab olinadigan manbalar")}</Text>
            <Text {...css.text}>{t("Mobil qurilma orqali kirish")}</Text>
          </Box>
          <Box {...css.list}>
            <Text {...css.number}>{t("1 MARTALIK TO'LOV")}</Text>
            <Text {...css.number}>
              {t("Kursni sotib oling va o'rganishni boshlang.")}
            </Text>

            {course?.price === 0 ? (
              ""
            ) : (
              <Text {...css.number}>
                {t("Narxi")} : {course?.price === 300000000 ? "3000000" : ""}{" "}
                {t("so`m")}
              </Text>
            )}
            {course?.price === 200000000 || course?.price === 300000000 ? (
              <Button type="submit" onClick={onSubmit} {...css.button}>
                {t("Sotib olish")}
              </Button>
            ) : (
              ""
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Section;

const css = {
  section: {
    padding: "48px 0",
  },
  box: {
    background: "rgb(23 34 43)",
    padding: {
      base: "16px",
      md: "2rem 3.5rem",
    },
    borderRadius: {
      base: "16px",
      md: "1.5rem",
    },
    justifyContent: "space-between",
    marginTop: "60px",
    flexDirection: {
      base: "column",
      md: "row",
    },
  },
  name: {
    color: "#fff",
    marginBottom: "20px",
    fontWeight: "700",
    fontSize: {
      base: "22px",
      md: "36px",
    },
    lineHeight: {
      base: "28px",
      md: "42px",
    },
  },
  text: {
    color: "#fff",
    fontSize: {
      base: "16px",
      md: "18px",
    },
    lineHeight: {
      base: "22px",
      md: "26px",
    },
    margin: "5px 0",
    position: "relative",
    paddingLeft: "15px",

    _before: {
      content: "''",
      background: "#fff",
      width: "5px",
      height: "5px",
      position: "absolute",
      top: "10px",
      left: "0px",
      borderRadius: "50%",
    },
  },
  list: {
    background:
      "linear-gradient(158.32deg,#2e5068 -14.25%,#142c3d 100.2%),linear-gradient(150.87deg,#afcbdf4d -8.26%,#fff0 109.3%)",
    padding: "2rem 1.5rem",
    borderRadius: "0.75rem",
    marginTop: {
      base: "16px",
      md: 0,
    },
  },
  number: {
    color: "#fff",
    fontSize: {
      base: "18px",
      md: "20px",
    },
    lineHeight: "28px",
    marginBottom: "1rem",
  },
  price: {
    color: " #fe5d37",
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "30px",
    marginTop: "4rem",
  },
  button: {
    background: "#fe5d37",
    color: "#fff",
    fontSize: "18px",
    lineHeight: "26px",
    cursor: "pointer",
    width: "100%",
    height: "50px",
    transition: "0.3s",
    marginTop: "80px",

    _hover: {
      background: "#db4220",
      color: "#fff",
    },
  },
  subname: {
    color: "#db4220",
    fontSize: "24px",
    lineHeight: "32px",
    marginBottom: "10px",
    fontWeight: "500 !important",
  },
  subtext: {
    fontSize: "18px",
    lineHeight: "28px",
    color: "#616970",
  },
  title: {
    marginBottom: "40px",
    fontWeight: "700",
    fontSize: {
      base: "22px",
      md: "48px",
    },
    lineHeight: {
      base: "28px",
      md: "56px",
    },
    color: "#103741",
  },
};
