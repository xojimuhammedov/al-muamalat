import { Box } from "@chakra-ui/react";
import {
  Flex,
  Link,
  Modal,
  useDisclosure,
  ModalContent,
  ModalCloseButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { Link as Alink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../api";

function NavMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation();
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
    <>
      <HamburgerIcon
        className="modal-button"
        color={"#FE5D37"}
        fontSize={"30px"}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent className="navbar-modal">
          <ModalCloseButton color={"#FE5D37"} fontSize={"25px"} />
          <Box>
            <Flex
              justifyContent={"center"}
              align={"center"}
              mt={"80px"}
              flexDirection={"column"}
              gap={"20px"}>
              <Alink onClick={onClose} to={"/"}>
                <Link {...css.link} href="#">
                  {t("Bosh sahifa")}
                </Link>
              </Alink>
              <Alink onClick={onClose} to={"/"}>
                <Link {...css.link} href="#">
                  {t("Xizmatlar")}
                </Link>
              </Alink>
              <Menu isLazy>
                <MenuButton {...css.link}>{t("O'quv dasturlari")}</MenuButton>
                <MenuList {...css.menuList} mt={"-25px"}>
                  <MenuItem onClick={onClose} {...css.links}>
                    <Alink to={'/aafoi-exam'}>
                      {t("AAOIFI imtihonlari")}
                    </Alink>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Alink onClick={onClose} to={"/material"}>
                <Link {...css.link} href="#">
                  {t("Islom moliyasi")}
                </Link>
              </Alink>
              <Alink onClick={onClose} to={"/council"}>
                <Link {...css.link} href="#">
                  {t("Maxsus Kengash")}
                </Link>
              </Alink>
              <Alink onClick={onClose} to={"/contact"}>
                <Link {...css.link} href="#">
                  {t("Bog'lanish")}
                </Link>
              </Alink>
            </Flex>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NavMenu;

const css = {
  link: {
    color: "#103741",
    fontWeight: "500",
    outline: "none",
    fontSize: "16px",

    _hover: {
      color: " #fe5d37",
    },
  },
  links: {
    color: "#103741",
    fontWeight: "500",
    fontSize: {
      base: "14px",
      md: "16px",
    },
  },
  menuList: {
    maxWidth: "200px",
  },
};
