import { Box, Heading, Image, SimpleGrid, Text, Link } from "@chakra-ui/react";
import CourseImage from "../../../assets/kurs.jpeg";
import { Link as ALink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../api";
import { useTranslation } from "react-i18next";

function Header() {
  const [t, i18n] = useTranslation();
  const [course, setCourse] = useState();
  useEffect(() => {
    axios
      .get(`${API_URL}/courses/main`)
      .then((res) => setCourse(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box {...css.box}>
      <Box className="container">
        <Heading {...css.name}>
          {t(
            "AL-MUAMALAT taklif etadigan Kurslar, Treyninglar va sertifikatli dasturlar"
          )}
        </Heading>
        <SimpleGrid
          gap={"20px"}
          mt={"30px"}
          columns={{ base: 1 }}>
          {course?.map((item, index) => (
            <ALink key={index} to={`/direction/${item.course_id}`}>
              <Box {...css.list}>
                <Heading {...css.title}>
                  {" "}
                  {item[`name_${i18n?.language}`]}
                </Heading>
              </Box>
            </ALink>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  box: {
    padding: "30px 0",
    paddingTop: "120px",
  },
  name: {
    fontSize: {
      base: "25px",
      md: "35px",
    },
    lineHeight: "40px",
    color: "#103741",
    textAlign: "center",
  },
  list: {
    borderRadius: "0px 0px 12px 12px",
    border: "1px solid #E1E5E8",
    paddingBottom: "20px",
    transition: "0.3s",

    _hover: {
      boxShadow:
        "0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1)",
    },
  },
  image: {
    borderRadius: "12px 12px 0px 0px",
  },
  title: {
    fontSize: {
      base: "20px",
      md: "25px",
    },
    lineHeight: "35px",
    color: "#103741",
    padding: "1rem",
  },
  text: {
    padding: "0 1rem",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#616970",
    marginBottom: "10px",
  },
  link: {
    fontSize: "24px",
    lineHeight: "34px",
    color: " #fe5d37",
    padding: "10px 1rem",
    fontWeight: "600",
  },
  button: {
    border: "2px solid #fe5d37",
    background: "transparent",
    color: "#fe5d37",
    width: "230px",
    fontSize: "18px",
    height: "59px",
    borderRadius: "10px",
    marginTop: "35px",
    lineHeight: "26px",
    transition: "0.3s",

    _hover: {
      background: "#fe5d37",
      color: "#ffffff",
    },
  },
};
