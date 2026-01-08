import { Box, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import CeoImage from "../assets/iskandar.jpg";
import CtoImage from "../assets/cto1.jpg";
import TeamTwo from "../assets/team55.jpg";
import BlogImage from "../assets/team7.jpg";
import { useTranslation } from "react-i18next";
import LinkedinIcon from "../assets/linkedin.png";

import TeamEleven from "../assets/prof.png";
import TeamTwelve from "../assets/team11.webp";
import TeamThirteen from "../assets/magda.jpg";

import TeamFourthen from '../assets/blog-13.jpg'
import TeamFifthen from '../assets/blog-11.jpg'
import GayratImage from '../assets/blog-12.jpg'

import OybekImage from '../assets/oybek.jpg'
import BaxtiyorImage from '../assets/baxtiyor.jpg'

function Blog() {
  const { t } = useTranslation();
  return (
    <Box>
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
          columns={{ base: 1, sm: 2, md: 3, xl: 4 }}>
          <Box {...css.item}>
            <Image {...css.image} src={CeoImage} alt="CeoImage" />
            <Heading {...css.title}>Iskandar Tursunov</Heading>
            <Heading {...css.titles}>{t("blog")}</Heading>
            <Text {...css.text}>{t("text")}</Text>
            <Link
              href="https://www.linkedin.com/in/iskandar-tursunov-575b591b7/"
              target="_blank">
              <Image {...css.icon} src={LinkedinIcon} />
            </Link>
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={CtoImage} alt="CeoImage" />
            <Heading {...css.title}>Dr. Mezbah Uddin Ahmed</Heading>
            <Heading {...css.titles}>{t("blog1")}</Heading>
            <Text {...css.text}>{t("text1")}</Text>
            <Link
              href="https://www.linkedin.com/in/mezbahahmed/"
              target="_blank">
              <Image {...css.icon} src={LinkedinIcon} />
            </Link>
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={TeamFourthen} alt="CeoImage" />
            <Heading {...css.title}>Hayot Azimov</Heading>
            <Heading {...css.titles}>{t("blog3")}</Heading>
            <Text {...css.text}>{t("text3")}</Text>
            <Link href="https://www.linkedin.com/in/hayotjon/" target="_blank">
              <Image {...css.icon} src={LinkedinIcon} />
            </Link>
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={TeamTwo} alt="CeoImage" />
            <Heading {...css.title}>Khamid Rakhmatov</Heading>
            <Heading {...css.titles}>{t("blog4")}</Heading>
            <Text {...css.text}>{t("text4")}</Text>
            <Link
              href="https://www.linkedin.com/in/xamid-raxmatov-775439202/"
              target="_blank">
              <Image {...css.icon} src={LinkedinIcon} />
            </Link>
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={TeamFifthen} alt="CeoImage" />
            <Heading {...css.title}>Oripov Sarvar</Heading>
            <Heading {...css.titles}>{t("blog5")}</Heading>
            <Text {...css.text}>{t("text5")}</Text>
            <Link href="https://www.linkedin.com/" target="_blank">
              <Image {...css.icon} src={LinkedinIcon} />
            </Link>
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={BlogImage} alt="CeoImage" />
            <Heading {...css.title}>{t("Dr. A'lam Ilhomovich Asadov")}</Heading>
            <Heading {...css.titles}>{t("blog6")}</Heading>
            <Text {...css.text}>{t("text13")}</Text>
            <Link
              href="https://www.linkedin.com/in/alam-asadov/"
              target="_blank">
              <Image {...css.icon} src={LinkedinIcon} />
            </Link>
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={GayratImage} alt="CeoImage" />
            <Heading {...css.title}>{t("G'ayrat Rakhmanberdiev")}</Heading>
            <Heading {...css.titles}>{t("blog8")}</Heading>
            <Text {...css.text}>{t("text17")}</Text>
            <Link
              href="https://www.linkedin.com/in/alam-asadov/"
              target="_blank">
              <Image {...css.icon} src={LinkedinIcon} />
            </Link>
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={OybekImage} alt="CeoImage" />
            <Heading {...css.title}>{t("Oybek Khojimamatov")}</Heading>
            <Heading {...css.titles}>{t("blog9")}</Heading>
            <Text {...css.text}>{t("text18")}</Text>
            <Link
              href="https://www.linkedin.com/in/oybekkhojimamatov/"
              target="_blank">
              <Image {...css.icon} src={LinkedinIcon} />
            </Link>
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={BaxtiyorImage} alt="CeoImage" />
            <Heading {...css.title}>{t("Baxtiyorjon Fayzullayev")}</Heading>
            <Heading {...css.titles}>{t("Islomiy moliya bo'yicha konsalting va maxsulot tuzilmalari eksperti")}</Heading>
            <Text {...css.text}>{t("baxtiyor_text")}</Text>
            <Link
              href="https://www.linkedin.com/in/bakhtiyorjon-fayzullaev-fmva-cpss-955a58273/"
              target="_blank">
              <Image {...css.icon} src={LinkedinIcon} />
            </Link>
          </Box>
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
            <Image {...css.images} src={TeamEleven} alt="CeoImage" />
            <Heading {...css.title}>{t("team11")}</Heading>
            <Heading {...css.titles}>{t("team11-blog")}</Heading>
            <Text {...css.text}>{t("team11-text")}</Text>
          </Box>
          <Box {...css.items}>
            <Image {...css.images} src={TeamTwelve} alt="CeoImage" />
            <Heading {...css.title}>{t("team12")}</Heading>
            <Heading {...css.titles}>{t("team12-blog")}</Heading>
            <Text {...css.text}>{t("team12-text")}</Text>
          </Box>
          <Box {...css.items}>
            <Image {...css.images} src={TeamThirteen} alt="CeoImage" />
            <Heading {...css.title}>{t("team13")}</Heading>
            <Heading {...css.titles}>{t("team13-blog")}</Heading>
            <Text {...css.text}>{t("team13-text")}</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Blog;

const css = {
  image: {
    width: "100%",
    height: {
      base: "350px",
      md: "300px",
    },
    borderRadius: "999px",
    objectFit: "cover",
    padding: "16px",
  },
  title: {
    textAlign: "center",
    fontSize: "20px",
    marginTop: "0",
    marginBottom: "16px",
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
    background: "#fff",
    borderTopLeftRadius: "999px",
    borderTopRightRadius: "999px",
    position: "relative",
    height: "580px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  icon: {
    width: "35px",
    height: "35px",
    position: "absolute",
    bottom: "15px",
    left: "45%",
  },
  images: {
    width: "100%",
    height: {
      base: "350px",
      md: "380px",
    },
    borderRadius: "999px",
    objectFit: "cover",
    padding: "16px",
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
