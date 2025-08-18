import {
  Box,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import LogoIcon from "../assets/new-logo.jpg";
import { Link as ALink } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../api";
import NavMenu from "./NavMenu";

function Navbar() {
  const [t, i18n] = useTranslation();
  const userId = localStorage.getItem("userToken");
  const routeName = userId ? "/profile" : "/login";
  const subName = userId ? "Profile" : "Login";
  const [moduleId, setModuleId] = useState("");

  const [module, setModule] = useState();
  const [course, setCourse] = useState();
  const [hover, setHover] = useState(false);
  useEffect(() => {
    axios
      .get(`${API_URL}/new_modules`)
      .then((res) => setModule(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/courses/main`)
      .then((res) =>
        setCourse(res.data.data.filter((item) => item?.module_id === moduleId))
      )
      .catch((err) => {
        console.log(err);
      });
  }, [moduleId]);

  return (
    <Box>
      <Box {...css.nav} className="container">
        <Flex justifyContent={"space-between"} align={"center"}>
          <ALink to={"/"}>
            <Image {...css.image} src={LogoIcon} alt="LogoIcon" />
          </ALink>
          <Flex align={"center"}>
            <ALink to={"/"}>
              <Link {...css.link} href="#">
                {t("Bosh sahifa")}
              </Link>
            </ALink>
            <ALink to={"/"}>
              <Link {...css.link} href="#">
                {t("Xizmatlar")}
              </Link>
            </ALink>
            <Menu>
              <MenuButton>
                <Text className="dropbtn" {...css.link}>
                  {t("O'quv dasturlari")}
                </Text>
              </MenuButton>
              <MenuList {...css.menuList}>
                {module?.map((item, index) => (
                  <MenuItem
                    onMouseEnter={() => {
                      setHover(true);
                      setModuleId(item.id);
                    }}
                    key={index}>
                    {item[`name_${i18n?.language}`]}
                  </MenuItem>
                ))}
                <div
                  style={{ display: `${hover ? "block" : "none"}` }}
                  className="dropdown-content">
                  {course?.map((item, index) => (
                    <ALink
                      onClick={() => setHover(false)}
                      key={index}
                      to={`/direction/${item?.course_id}`}>
                      {item[`name_${i18n?.language}`]}
                    </ALink>
                  ))}
                </div>
              </MenuList>
            </Menu>
            <ALink to={"/material"}>
              <Link {...css.link} href="#">
                {t("Islom moliyasi")}
              </Link>
            </ALink>
            <ALink to={"/council"}>
              <Link {...css.link} href="#">
                {t("Maxsus Kengash")}
              </Link>
            </ALink>
            <ALink to={"/contact"}>
              <Link {...css.link} href="#">
                {t("Bog'lanish")}
              </Link>
            </ALink>
            <Language />
          </Flex>
          <NavMenu />
          <ALink to={routeName}>
            <Link {...css.contact}>
              {subName}
              <ArrowForwardIcon />
            </Link>
          </ALink>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  image: {
    width: {
      base: "120px",
    },
    paddingLeft:"8px"
  },
  nav: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    width: "100%",
    boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,0.075) !important",
    zIndex: "1001",
    padding: {
      base: "10px",
      md: "0",
    },
  },
  link: {
    padding: "30px 10px",
    color: "#103741",
    fontWeight: "500",
    outline: "none",
    fontSize: "14px",
    display: {
      base: "none",
      md: "block",
    },

    _hover: {
      color: " #fe5d37",
    },
  },
  links: {
    color: "#103741",
    fontWeight: "500",
    outline: "none",
    fontSize: "14px",
  },
  contact: {
    fontWeight: "500",
    transition: "0.5s",
    background: "#FE5D37",
    border: "1px solid #FE5D37",
    padding: "0.375rem 0.75rem",
    borderRadius: "50rem",
    color: "#fff",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    textAlign: "center",
    verticalAlign: "middle",
    userSelect: "none",
  },
  menuList: {
    width: "240px",
    top: "-25px",
    position: "relative",
    borderRadius: "0",
    borderWidth: "0",
    boxShadow: "none",
  },
};
