import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { useTranslation } from "react-i18next";

function LoginPage() {
  const [login, setLogin] = useState("login");
  const { t } = useTranslation();
  return (
    <Box bg={"#f2f2f2"} position="relative" h={"100vh"}>
      <Button
        onClick={() => setLogin(login === "login" ? "Register" : "login")}
        {...css.button}
      >
        {login === "login" ? t("Ro'yhatdan o'tish") : t("Kirish")}
      </Button>
      {login === "login" ? <Login /> : <Register />}
    </Box>
  );
}

export default LoginPage;

const css = {
  button: {
    width: "160px",
    background: "#fe7555",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "10px",
    transition: "background 0.3s ease",
    position: "relative",
    top: "20px",
    left: {
      base: "20px",
      md: "80%",
    },

    _hover: {
      background: "#fe7555",
    },
  },
};
