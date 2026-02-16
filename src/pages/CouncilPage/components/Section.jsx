import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { kengash } from "../../../mockData/kengash";
import SectionModal from "./SectionModal";

const Section = () => {
  const { t, i18n } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [blogId, setBlogId] = useState(null);

  const aboutData = kengash?.find((item) => item?.id === blogId);
  return (
    <>
      <Box py={8} pt={{ base: "96px", md: "120px" }}>
        <Box className="container">
          <Heading
            fontSize={{ base: "25px", lg: "30px" }}
            color="#103741"
            mb={"2rem"}
            textAlign={"center"}
          >
            {t("MAXSUS KENGASH")}
          </Heading>
          <Box display={{ base: "none", md: "block" }}>
            <SimpleGrid mt={"24px"} gap={"24px"} columns={{ base: 1 }}>
              {kengash?.map((item) => (
                <Flex key={item?.id} {...css.item}>
                  <Image {...css.image} src={item.image} />
                  <Box p={"24px"}>
                    <Heading className="council-name" {...css.name}>
                      {item[`title_${i18n?.language}`]}
                    </Heading>
                    <Text className="council-texts" {...css.text}>
                      {item[`description_${i18n?.language}`]}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>

          {/* ///////////////////////////// */}

          <Box display={{ base: "block", md: "none" }}>
            <SimpleGrid mt={"24px"} gap={"24px"} columns={{ base: 1 }}>
              {kengash?.map((item) => (
                <Flex
                  onClick={() => {
                    onOpen();
                    setBlogId(item?.id);
                  }}
                  key={item?.id}
                  {...css.item}
                >
                  <Image {...css.image} src={item.image} />
                  <Box p={"24px"}>
                    <Heading className="council-name" {...css.name}>
                      {item[`title_${i18n?.language}`]}
                    </Heading>
                    <Text className="council-texts" {...css.text}>
                      {item[`description_${i18n?.language}`]}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <SectionModal isOpen={isOpen} onClose={onClose} aboutData={aboutData} />
    </>
  );
};

export default Section;

const css = {
  item: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    height: {
      base: "150px",
      lg: "300px",
    },
  },
  image: {
    height: "100%",
    width: {
      base: "120px",
      lg: "250px",
    },
    borderRadius: "12px 0 0 12px",
  },
  text: {
    fontSize: {
      base: "12px",
      lg: "16px",
    },
    marginTop: "10px",
    lineHeight: {
      base: "18px",
      lg: "26px",
    },
  },
  name: {
    fontSize: {
      base: "16px",
      lg: "18px",
    },
    color: "#103741",
    textTransform: "uppercase",
  },
};
