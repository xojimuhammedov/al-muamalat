import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import AvatarIcon from "../../../assets/avatar1.jpg";
import { API, API_URL } from "../../../api";
import { useQuery } from "react-query";
import { get } from "lodash";

function Main() {
  const { data } = useQuery("userMe", async () => {
    return await API.userMe().catch((err) => {
      console.log(err);
    });
  });

  const profileImage = get(data, "data.data.image_src")
    ? `${API_URL}/uploads/images/${get(data, "data.data.image_src")}`
    : AvatarIcon;

  return (
    <Box position={"relative"} p={"30px 0"} mt={"100px"}>
      <Box className="container">
        <Box {...css.box}></Box>
        <Flex {...css.list}>
          <Image {...css.image} src={profileImage} />
          <Box mt={{ base: "0", md: "35px" }}>
            <Heading {...css.title} size={"h5"}>
              {get(data, "data.data.full_name")}
            </Heading>
            <Text {...css.number}>+{get(data, "data.data.phone_number")}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  list: {
    position: "absolute",
    top: "5%",
    left: "8%",
    gap: "15px",
  },
  title: {
    color: "#103741",
    fontSize: {
      base: "16px",
      md: "28px",
    },
    fontWeight: "700",
    lineHeight: {
      base: "22px",
      md: "35px",
    },
    letterSpacing: "1px",
    fontFamily: "sans-serif",
  },
  number: {
    color: "#103741",
    marginTop: "10px",
    fontSize: {
      base: "14px",
      md: "18px",
    },
    fontWeight: "400",
    lineHeight: "25px",
  },
  box: {
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    backgroundColor: "#fff",
    width: "100%",
    height: {
      base: "80px",
      md: "100px",
    },
  },
  image: {
    width: {
      base: "80px",
      md: "140px",
    },
    height: {
      base: "80px",
      md: "140px",
    },
    borderRadius: "50%",
    objectFit: "cover",
  },
};
