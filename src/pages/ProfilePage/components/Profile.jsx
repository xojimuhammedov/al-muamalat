import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { LogOut, UserRound } from "lucide-react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { API, API_URL } from "../../../api";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { get } from "lodash";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";

function Profile() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const removeClick = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };
  const [image, setImage] = useState(null);

  const { data, refetch } = useQuery("userMe", async () => {
    return await API.userMe().catch((err) => {
      console.log(err);
    });
  });

  const { handleSubmit, register, reset } = useForm({
    defaultValues: useMemo(() => {
      return {
        full_name: get(data, "data.data.full_name"),
        // password: get(data, "data.data.password"),
        phone_number: get(data, "data.data.phone_number"),
        address: get(data, "data.data.address"),
      };
    }, [data]),
    mode: "onChange",
  });

  useEffect(() => {
    reset({
      full_name: get(data, "data.data.full_name"),
      // password: get(data, "data.data.password"),
      phone_number: get(data, "data.data.phone_number"),
      address: get(data, "data.data.address"),
    });
  }, [data]);

  const { mutate } = useMutation(async (payload) => {
    return await axios
      .put(`${API_URL}/users/${get(data, "data.data.user_id")}`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        refetch();
        toast.success("Profile updated successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Profile update failed");
      });
  });
  const onSubmit = (value) => {
    const submitData = {
      images: image,
      ...value,
    };
    mutate(submitData);
  };

  return (
    <Box width={"100%"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="profile-form"
        action="">
        <label htmlFor="setup-profile-img" className="setup-img-upload">
          {image ? (
            <img src={!!image && URL?.createObjectURL(image)} alt="error" />
          ) : (
            <div className="setup-img-default">
              <img src={get(data, "data.data.images")} />
              <UserRound color="gray" />
            </div>
          )}

          <input
            // {...register("images")}
            type="file"
            id="setup-profile-img"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <span style={{ color: "#fe5d37", fontWeight: "500" }}>
            {t("Image Upload")}
          </span>
        </label>
        <label className="profile-label" htmlFor="full_name">
          {t("Ismingizni kiriting")}
        </label>
        <Input
          id="full_name"
          {...css.input}
          {...register("full_name")}
          type="name"
          autoComplete="off"
          placeholder="Full Name"
        />
        <label className="profile-label" htmlFor="address">
          {t("Manzilingizni kiriting (ixtiyoriy)")}
        </label>
        <Input
          id="address"
          {...css.input}
          {...register("address")}
          autoComplete="new-address"
          type="address"
          placeholder={t("Address")}
        />
        <label className="profile-label" htmlFor="password">
          {t("Password kiriting")}
        </label>
        <Input
          {...register("password")}
          {...css.input}
          autoComplete="new-password"
          type="password"
          placeholder={t("Password")}
        />
        <label className="profile-label" htmlFor="phone_number">
          {t("Sizning raqamingiz")}
        </label>
        <Input
          {...css.input}
          {...register("phone_number")}
          type="number"
          defaultValue={get(data, "data.data.phone_number")}
          id="phone_number"
          placeholder={t("Sizning raqamingiz")}
        />
        <Flex align={"center"} gap={{ base: "24px", md: "50px" }} mt={"20px"}>
          <Button {...css.button} className="btn btn-primary" type="submit">
            {t("Yangilash")}
          </Button>
          <Flex
            onClick={removeClick}
            cursor={"pointer"}
            align={"center"}
            gap={"10px"}>
            <LogOut color="#fe5d37" />
            <Text {...css.name}>{t("Profildan chiqish")}</Text>
          </Flex>
        </Flex>
      </form>
    </Box>
  );
}

export default Profile;

const css = {
  input: {
    width: {
      base: "100%",
      md: "650px",
    },
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
  button: {
    borderRadius: "40px",
    width: {
      base: "120px",
      md: "199px",
    },
    height: "40px !important",
  },
  name: {
    color: "#fe5d37",
    fontWeight: "400",
    fontSize: "18px",
  },
};
