import { Box, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../api";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

function LessonsPage() {
  const { id } = useParams();
  const [, i18n] = useTranslation();
  const [lesson, setLesson] = useState();
  useEffect(() => {
    axios
      .get(`${API_URL}/lessons/${id}`)
      .then((response) => setLesson(response?.data?.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Box pt={"80px"}>
      <Box py={"3rem"} className="container">
        <div style={{ position: "relative", padding: "56.25% 0 0 0" }}>
          <iframe
            src={`https://player.vimeo.com/video/${lesson?.video_url}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            frameBorder={"0"}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Al-Muamalat CSAA exam preparatory training - 1"></iframe>
        </div>
        <Heading {...css.titles}>{lesson?.[`title_${i18n?.language}`]}</Heading>
        <Text
          dangerouslySetInnerHTML={{
            __html: lesson?.[`body_${i18n?.language}`],
          }}
          {...css.text}
        />
      </Box>
    </Box>
  );
}

export default LessonsPage;

const css = {
  titles: {
    color: "#103741",
    fontSize: "30px",
    lineHeight: "35px",
    marginTop: "24px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "16px",
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "white",
  },
};
