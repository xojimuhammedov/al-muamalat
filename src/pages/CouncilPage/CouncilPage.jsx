import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { councilData } from "../../mockData/council";
import { useTranslation } from "react-i18next";
import Section from "./components/Section";

function CouncilPage() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <Section />
      <Box pt={{ base: "20px" }}>
        <Box py={"3rem"} className="container">
          <Heading color={"#103741"} fontSize={"20px"}>
            {t("Maxsus Kengash")}
          </Heading>
          <SimpleGrid mt={"20px"} columns={{ base: 1, md: 2 }} gap={"20px"}>
            {councilData.map((item, index) => (
              <Box key={index} {...css.item}>
                <Heading {...css.title}>
                  {item[`title_${i18n?.language}`]}
                </Heading>
                <Text
                  {...css.text}
                  dangerouslySetInnerHTML={{
                    __html: item[`text_${i18n?.language}`],
                  }}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default CouncilPage;

const css = {
  item: {
    width: "100%",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
  },
  title: {
    fontSize: "22px",
    color: "#103741",
  },
  text: {
    fontSize: "16px",
    marginTop: "10px",
  },
};
