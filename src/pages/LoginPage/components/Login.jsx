import { Box, Button, Heading, Image, Input } from "@chakra-ui/react";
import NewLogoImage from "../../../assets/logo-bg.png";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { API } from "../../../api";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate } = useMutation(async (payload) => {
    return await API.loginUser(payload)
      .then((res) => {
        if (res?.data?.success) {
          navigate("/profile");
          toast.success("Siz muvaffaqiyatli login qildingiz!");
        }
        localStorage.setItem(
          "userToken",
          `${res?.data?.data?.tokens?.accessToken}`
        );
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Telefon nomer yoki parolni xato kiritdingiz!");
      });
  });
  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <Box className="login-form" {...css.login}>
      <Link to={"/"}>
        <Image {...css.image} src={NewLogoImage} />
      </Link>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <Heading color={"#fe5d37"} textAlign={"center"}>
          {t("Kirish")}
        </Heading>
        <Input
          type="number"
          {...register("phone_number", {
            required: true,
          })}
          {...css.input}
          autoComplete="off"
          required
          placeholder={t("Sizning raqamingiz")}
        />
        {errors.phone_number && <span>This field is required</span>}
        <Input
          {...register("password", {
            required: true,
          })}
          {...css.input}
          type="password"
          required
          autoComplete="new-password"
          placeholder={t("Password")}
        />
        {errors.password && <span>This field is required</span>}
        <Button mt={"25px"} className="btn btn-primary" type="submit">
          {t("Yuborish")}
        </Button>
      </form>
    </Box>
  );
}

export default Login;

const css = {
  login: {
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "white",
    width: "100%",
    maxWidth: {
      base: "94%",
      md: "450px",
    },
    margin: "auto",
    position: "absolute",
    top: "calc(100% / 4)",
    left: {
      base: "10px",
      lg: "calc(100% / 3)",
    },
  },
  input: {
    width: "100%",
    color: "#000",
    border: "2px solid #fe5d37",
    backgroundColor: "#fff",
    borderRadius: "10px",
    transition: "border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out",
    padding: "1rem 0.75rem",
    height: "50px",
    margin: "15px 0",

    _focus: {
      boxShadow: "0 0 0 .25rem rgba(254,93,55,0.25)",
      border: "2px solid #fe5d37",
      color: "#000",
    },

    _hover: {
      border: "2px solid #fe5d37",
    },

    _placeholder: {
      fontSize: "16px",
    },
  },
  image: {
    height: "100px",
    objectFit: "contain",
    width: "100%",
  },
};
