import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Iframe from "react-iframe";

function Videos() {
  const [video, setVideo] = useState([]);
  const [t, i18n] = useTranslation();

  useEffect(() => {
    axios
      .get("https://v1.centurysilkroadtravel.uz/api/blogs")
      .then((res) => {
        setVideo(res?.data?.data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });
  }, []);
  return (
    <Box>
      <Box className="container">
        <Heading {...css.title} mb={"3rem"}>
          {t("Bizning Videolar!")}
        </Heading>
        <SimpleGrid gap={"20px"} columns={{ base: 1, sm: 2, lg: 3 }}>
          <Box {...css.list}>
            <Iframe
              url={`https://www.youtube.com/embed/eRHgRlGz_64`}
              width="100%"
              height="300px"
              id=""
              className=""
              display="block"
              position="relative"
              styles={{ borderRadius: "10px" }}
            />
            <Heading {...css.name}>{t("Islomiy moliya olimlari Toshkentda yig‘ildi")}</Heading>
          </Box>
          <Box {...css.list}>
            <Iframe
              url={`https://www.youtube.com/embed/JrJ02_hxwwk`}
              width="100%"
              height="300px"
              id=""
              className=""
              display="block"
              position="relative"
              styles={{ borderRadius: "10px" }}
            />
            <Heading {...css.name}>{t("Islom moliyasi bo‘yicha 20-xalqaro forum Toshkentda bo‘lib o‘tdi")}</Heading>
          </Box>
          <Box {...css.list}>
            <Iframe
              url={`https://www.youtube.com/embed/KJjhSlAGwFw`}
              width="100%"
              height="300px"
              id=""
              className=""
              display="block"
              position="relative"
              styles={{ borderRadius: "10px" }}
            />
            <Heading {...css.name}>{t("ISSF 2025 forumi - islom moliyasini joriy etish yo'lidagi muhim qadam")}</Heading>
          </Box>
          <Box {...css.list}>
            <Iframe
              url={`https://www.youtube.com/embed/m0iMVuu2Tb4`}
              width="100%"
              height="300px"
              id=""
              className=""
              display="block"
              position="relative"
              styles={{ borderRadius: "10px" }}
            />
            <Heading {...css.name}>{t("Islomiy moliya – nima u?")}</Heading>
          </Box>
          <Box {...css.list}>
            <Iframe
              url={`https://www.youtube.com/embed/kUEuvJba73Q`}
              width="100%"
              height="300px"
              id=""
              className=""
              display="block"
              position="relative"
              styles={{ borderRadius: "10px" }}
            />
            <Heading {...css.name}>
              {t("Oʻzbekistonda islom moliyasi qay ahvolda?")}
            </Heading>
          </Box>
          <Box {...css.list}>
            <Iframe
              url={`https://www.youtube.com/embed/ZGDU0Bnwjl4`}
              width="100%"
              height="300px"
              id=""
              className=""
              display="block"
              position="relative"
              styles={{ borderRadius: "10px" }}
            />
            <Heading {...css.name}>
              {t("Islom moliyasi ekotizimi sari yo'l...")}
            </Heading>
          </Box>
          <Box {...css.list}>
            <Iframe
              url={`https://www.youtube.com/embed/bmmWlOKSnW4`}
              width="100%"
              height="300px"
              id=""
              className=""
              display="block"
              position="relative"
              styles={{ borderRadius: "10px" }}
            />
            <Heading {...css.name}>
              {t("Nima uchun Islom moliyasi zarur?")}
            </Heading>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Videos;

const css = {
  title: {
    color: "#103741",
    textAlign: "center",
    fontSize: {
      base: "25px",
      lg: "2.5rem",
    },
    lineHeight: "1.2",
  },
  name: {
    color: "#103741",
    fontSize: "22px",
    lineHeight: "32px",
    margin: "8px 0",
  },
  list: {
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    background: "#fff",
    padding: "1rem",
    borderRadius: "10px",
    height: "400px",
  },
};
