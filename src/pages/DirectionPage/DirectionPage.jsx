import { Box, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { API_URL } from "../../api";
import CourseAbout from "../CourseAbout/CourseAbout";

function DirectionPage() {
  const { id } = useParams();
  const [, i18n] = useTranslation();
  const [course, setCourse] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}/courses/main/`)
      .then((response) =>
        setCourse(response?.data?.data?.find((item) => item?.course_id === id))
      )
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <Box pt={"80px"}>
        <Box py={"3rem"} className="container">
          {course && (
            <>
              <Heading {...css.name}>
                {course[`name_${i18n?.language}`]}
              </Heading>

              <Box {...css.item}>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: course[`description_${i18n?.language}`],
                  }}
                  {...css.text}
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
      {/* <CoursePage /> */}
      <CourseAbout course={course} />
    </>
  );
}

export default DirectionPage;

const css = {
  name: {
    color: "#103741",
    fontSize: "24px",
    lineHeight: "28px",
  },
  item: {
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "white",
  },
  title: {
    color: "#103741",
    fontSize: "22px",
    lineHeight: "26px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "16px",
  },
};
