import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../../api";

function MyCoursesPage() {
  const { id } = useParams();
  const [, i18n] = useTranslation();
  const [course, setCourse] = useState();
  const [lesson, setLesson] = useState();

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

  useEffect(() => {
    axios
      .get(`${API_URL}/lessons?course_id=${id}`)
      .then((response) => setLesson(response?.data?.data))
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
          <Heading mt={"24px"}>Bizning video darslarimiz</Heading>
          <SimpleGrid mt={"16px"} columns={3}>
            {lesson?.map((item) => (
              <Link to={`/lessons/${item?.id}`} key={item.id}>
                <Box key={item.id} {...css.item}>
                  <Heading {...css.titles}>
                    {item[`title_${i18n?.language}`]}
                  </Heading>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default MyCoursesPage;

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
    cursor: "pointer",
  },
  title: {
    color: "#103741",
    fontSize: "22px",
    lineHeight: "26px",
  },
  titles: {
    color: "#103741",
    fontSize: "18px",
    lineHeight: "26px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "16px",
  },
};
