import {
  Box,
  Heading,
  Tab,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  eightData,
  elevenData,
  fiveData,
  fourData,
  nineData,
  oneData,
  sevenData,
  sixData,
  tenData,
  threeData,
  twelfeData,
  twoData,
} from "../../../mockData/council";

const tabMenu = {
  color: "white",
  bg: "#fe5d37",
  borderRadius: "10px",
  padding: "8px 16px",
};

const tabListData = [
  {
    id: 1,
    title_uz: "Ijara",
    title_en: "Murobaha",
  },
  {
    id: 2,
    title_uz: "Mushoraka",
    title_en: "Musavama",
  },
  {
    id: 3,
    title_uz: "Murobaha",
    title_en: "Ijarah",
  },
  {
    id: 4,
    title_uz: "Muzoraba",
    title_en: "Istasna'a",
  },
  {
    id: 5,
    title_uz: "Salam",
    title_en: "Stocks",
  },
  {
    id: 6,
    title_uz: "Istisna",
    title_en: "Sukuk",
  },
  {
    id: 7,
    title_uz: "Parallel Salam",
    title_en: "Islamic Mutual Funds",
  },
  {
    id: 8,
    title_uz: "Parallel Istisna",
    title_en: "Salam",
  },
  {
    id: 9,
    title_uz: "Mushoraka Mutanaqisa",
    title_en: "Mudarabah",
  },
  {
    id: 10,
    title_uz: "Vakala (Wakalah)",
    title_en: "Musharakah",
  },
  {
    id: 11,
    title_uz: "Ujra (ish/xizmat haqi)",
    title_en: "Musharakah Mutanaqisah",
  },
  {
    id: 12,
    title_uz: "Shariatga muvofiqlik",
    title_en: "",
  },
];

function Main() {
  const { t, i18n } = useTranslation();
  return (
    <Box pt={"30px"}>
      <Box mt={"3rem"} py={"3rem"} className="container">
        <Heading fontSize={"25px"} as={"h5"}>
          {t("”ISLOM MOLIYASI”")}
        </Heading>
        <Tabs p={"0"} mt="1.5rem" variant="unstyled">
          <TabList flexWrap={"wrap"} mb={"16px"} gap={"10px"}>
            {tabListData.map((item, index) => (
              <Tab key={index} {...css.name} _selected={tabMenu}>
                {item[`title_${i18n?.language}`]}
              </Tab>
            ))}
          </TabList>
          <TabPanels p={"0"}>
            <TabPanel p={"0"}>
              <Box {...css.item}>
                <Text {...css.title}>{oneData[`title_${i18n?.language}`]}</Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: oneData[`text_${i18n?.language}`],
                  }}
                  {...css.text}
                />
              </Box>
            </TabPanel>
            <TabPanel p={"0"}>
              <Box {...css.item}>
                <Text {...css.title}>{twoData[`title_${i18n?.language}`]}</Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: twoData[`text_${i18n?.language}`],
                  }}
                  {...css.text}
                />
              </Box>
            </TabPanel>
            <TabPanel p={"0"}>
              <Box {...css.item}>
                <Text {...css.title}>
                  {threeData[`title_${i18n?.language}`]}
                </Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: threeData[`text_${i18n?.language}`],
                  }}
                  {...css.text}
                />
              </Box>
            </TabPanel>
            <TabPanel p={"0"}>
              <Box {...css.item}>
                <Text {...css.title}>
                  {fourData[`title_${i18n?.language}`]}
                </Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: fourData[`text_${i18n?.language}`],
                  }}
                  {...css.text}
                />
              </Box>
            </TabPanel>
            <TabPanel p={"0"}>
              <Box {...css.item}>
                <Text {...css.title}>
                  {fiveData[`title_${i18n?.language}`]}
                </Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: fiveData[`text_${i18n?.language}`],
                  }}
                  {...css.text}
                />
              </Box>
            </TabPanel>
            <TabPanel p={"0"}>
              <Box {...css.item}>
                <Text {...css.title}>{sixData[`title_${i18n?.language}`]}</Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: sixData[`text_${i18n?.language}`],
                  }}
                  {...css.text}
                />
              </Box>
            </TabPanel>
            <TabPanel p={"0"}>
              <Box {...css.item}>
                <Text {...css.title}>
                  {sevenData[`title_${i18n?.language}`]}
                </Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: sevenData[`text_${i18n?.language}`],
                  }}
                  {...css.text}
                />
              </Box>
            </TabPanel>
            <TabPanel p={"0"}>
              <Box {...css.item}>
                <Text {...css.title}>
                  {eightData[`title_${i18n?.language}`]}
                </Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: eightData[`text_${i18n?.language}`],
                  }}
                  {...css.text}
                />
              </Box>
            </TabPanel>
            <TabPanel p={"0"}>
              <Box {...css.item}>
                <Text {...css.title}>
                  {nineData[`title_${i18n?.language}`]}
                </Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: nineData[`text_${i18n?.language}`],
                  }}
                  {...css.text}
                />
              </Box>
            </TabPanel>
            <TabPanel p={"0"}>
              <Box {...css.item}>
                <Text {...css.title}>{tenData[`title_${i18n?.language}`]}</Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: tenData[`text_${i18n?.language}`],
                  }}
                  {...css.text}
                />
              </Box>
            </TabPanel>
            <TabPanel p={"0"}>
              <Box {...css.item}>
                <Text {...css.title}>
                  {elevenData[`title_${i18n?.language}`]}
                </Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: elevenData[`text_${i18n?.language}`],
                  }}
                  {...css.text}
                />
              </Box>
            </TabPanel>
            <TabPanel p={"0"}>
              <Box {...css.item}>
                <Text {...css.title}>
                  {twelfeData[`title_${i18n?.language}`]}
                </Text>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: twelfeData[`text_${i18n?.language}`],
                  }}
                  {...css.text}
                />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  name: {
    fontSize: "14px",
    color: "#fe5d37",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  item: {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  title: {
    padding: "1rem",
    color: "#74787c",
    lineHeight: "24px",
    fontWeight: "500",
  },
  text: {
    padding: {
      base: "16px",
      lg: "16px 48px",
    },
    color: "#74787c",
    lineHeight: "24px",
    fontWeight: "500",
  },
};
