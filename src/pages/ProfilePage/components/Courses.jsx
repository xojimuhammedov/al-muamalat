import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { API, API_URL } from "../../../api";
import { get } from "lodash";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Courses() {
  const {  i18n } = useTranslation();
  const { data } = useQuery("myCourses", async () => {
    return await API.myCourses().catch((err) => {
      console.log(err);
    });
  });

  return (
    <Box>
      <SimpleGrid columns={3} mt={"24px"}>
        {get(data, "data.data.courses")?.map((item) => (
          <>
            {item?.courses?.map((evt, index) => {
              return (
                <Link to={`/my-courses/${evt?.id}`} key={index}>
                  <Box {...css.item}>
                    <Image
                      src={`${API_URL}/uploads/images/${evt?.images[0]?.src}`}
                      {...css.image}
                    />
                    <Heading {...css.name}>
                      {evt[`name_${i18n?.language}`]}
                    </Heading>
                  </Box>
                </Link>
              );
            })}
          </>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Courses;

const css = {
  item: {
    height: "400px",
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    borderRadius: "12px",
    backgroundColor: "white",
  },
  image: {
    height: "320px",
    objectFit: "cover",
    width: "100%",
    borderRadius: "12px 12px 0 0",
  },
  name: {
    color: "#103741",
    fontSize: "24px",
    lineHeight: "28px",
    padding: "16px",
  },
};
