import { Box, Heading, Image, SimpleGrid, useDisclosure, VStack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import TeamEleven from "../../assets/prof.png";
import TeamTwelve from "../../assets/team11.webp";
import TeamThirteen from "../../assets/magda.jpg";

import { blogData } from "../../mockData/blogData";
import BlogModal from "./BlogModal";
import { useState } from "react";

function Blog() {
  const { t, i18n } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [blogId, setBlogId] = useState(null)

  const aboutData = blogData.find((item) => item?.id === blogId)
  return (
    <Box mt={'60px'}>
      <Box py={"3rem"} className="container">
        <VStack spacing={4} mb={8} textAlign="center">
          <Heading
            as="h2"
            size="2xl"
            color="#1B4D3E"
            fontWeight="700"
            letterSpacing="-1px"
          >
            {t("Bizning Jamoa!")}
          </Heading>
          <Box
            width="80px"
            height="4px"
            bgGradient="linear(to-r, #FF6B00, #1B4D3E)"
            borderRadius="full"
            mb={4}
          />
        </VStack>
        <SimpleGrid
          mt={"30px"}
          gap={"20px"}
          columns={{ base: 2, md: 3, xl: 5 }}>
          {blogData.map((item) => (
            <Box onClick={() => {
              onOpen();
              setBlogId(item?.id)
            }} {...css.item}>
              <Image {...css.image} src={item?.image} alt={item[`title_${i18n?.language}`]} loading="lazy" />
              <Heading {...css.title}>{item[`title_${i18n?.language}`]}</Heading>
              <Heading {...css.name}>{item[`job_${i18n?.language}`]}</Heading>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box py={"3rem"} className="container">
        <VStack spacing={4} mb={8} textAlign="center">
          <Heading
            as="h2"
            size="2xl"
            color="#1B4D3E"
            fontWeight="700"
            letterSpacing="-1px"
          >
            {t("Xalqaro mutaxassislar")}
          </Heading>
          <Box
            width="80px"
            height="4px"
            bgGradient="linear(to-r, #FF6B00, #1B4D3E)"
            borderRadius="full"
            mb={4}
          />
        </VStack>
        <SimpleGrid
          mt={"30px"}
          gap={"20px"}
          columns={{ base: 1, sm: 2, md: 3 }}>
          <Box {...css.items}>
            <Image {...css.images} src={TeamEleven} alt="CeoImage" loading="lazy" />
            <Heading {...css.title}>{t("team11")}</Heading>
            <Heading {...css.titles}>{t("team11-blog")}</Heading>
            <Text {...css.text}>{t("team11-text")}</Text>
          </Box>
          <Box {...css.items}>
            <Image {...css.images} src={TeamTwelve} alt="CeoImage" loading="lazy" />
            <Heading {...css.title}>{t("team12")}</Heading>
            <Heading {...css.titles}>{t("team12-blog")}</Heading>
            <Text {...css.text}>{t("team12-text")}</Text>
          </Box>
          <Box {...css.items}>
            <Image {...css.images} src={TeamThirteen} alt="CeoImage" loading="lazy" />
            <Heading {...css.title}>{t("team13")}</Heading>
            <Heading {...css.titles}>{t("team13-blog")}</Heading>
            <Text {...css.text}>{t("team13-text")}</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <BlogModal isOpen={isOpen} onClose={onClose} aboutData={aboutData} />
    </Box>
  );
}

export default Blog;

const css = {
  image: {
    width: "100%",
    objectFit: "cover",
    borderTopLeftRadius: "26px",
    borderTopRightRadius: "26px",
    minHeight: {
      base: "200px",
      lg: "260px"
    },
    maxHeight: {
      base: "200px",
      lg: "260px"
    }
  },
  title: {
    textAlign: "center",
    fontSize: {
      base: "16px",
      lg: "18px"
    },
    paddingTop: "10px",
    lineHeight: {
      base: "22px",
      lg: "24px"
    },
    fontWeight: "500"
  },
  name: {
    textAlign: "center",
    fontSize: {
      base: "14px",
    },
    paddingBottom: "15px",
    lineHeight: {
      base: "20px",
    },
    fontWeight: "500"
  },
  text: {
    color: "#74787c",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "20px",
    padding: "0 10px",
  },
  titles: {
    fontSize: "14px",
    lineHeight: "22px",
    textAlign: "center",
    marginTop: "0",
    marginBottom: "16px",
  },
  item: {
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    background: "#f2f2f8",
    borderRadius: "26px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "260px",
    maxHeight: {
      base: "250px",
      lg: "350px"
    },
    cursor: "pointer"
  },
  images: {
    width: "100%",
    height: {
      base: "380px"
    },
    objectFit: "cover",
  },
  items: {
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    background: "#fff",
    borderTopLeftRadius: "999px",
    borderTopRightRadius: "999px",
    position: "relative",
    height: "630px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
};
