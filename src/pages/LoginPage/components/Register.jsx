import { Box, Button, Heading, Image, Input } from "@chakra-ui/react";
import NewLogoImage from "../../../assets/new-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { API } from "../../../api";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function Register() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate } = useMutation(async (payload) => {
    return await API.registerUser(payload)
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
          {t("Ro'yhatdan o'tish")}
        </Heading>
        <Input
          {...register("full_name", {
            required: true,
          })}
          {...css.input}
          type="name"
          autoComplete="off"
          required
          placeholder={t("Full Name")}
        />
        {errors.full_name && <span>This field is required</span>}
        <Input
          {...register("password", {
            required: true,
          })}
          {...css.input}
          type="password"
          autoComplete="new-password"
          required
          placeholder={t("Password")}
        />
        {errors.password && <span>This field is required</span>}
        <Input
          {...css.input}
          type="number"
          autoComplete="off"
          {...register("phone_number", {
            required: true,
          })}
          required
          placeholder={t("Sizning raqamingiz")}
        />
        {errors.phone_number && <span>This field is required</span>}
        <Button className="btn btn-primary" type="submit">
          {t("Yuborish")}
        </Button>
      </form>
    </Box>
  );
}

export default Register;

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
    top: "calc(100% / 5)",
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
    height: "120px",
    objectFit: "cover",
    width: "100%",
  },
};
