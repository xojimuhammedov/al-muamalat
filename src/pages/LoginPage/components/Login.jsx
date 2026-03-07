import NewLogoImage from "../../../assets/logo-bg.png";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { API } from "../../../api";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useState } from "react";
import VerifyOtp from "./VerifyOtp";
import ForgotPassword from "./ForgotPassword";
import { Button } from "@chakra-ui/react";

function Login({ setLogin }) {
  const { t } = useTranslation();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading } = useMutation(async (payload) => {
    return await API.loginUserForEmail(payload)
      .then((res) => {
        if (res?.data?.success || res?.status === 200 || res?.status === 201) {
          setLoginEmail(payload.email);
          setIsOtpSent(true);
          toast.success(res.data?.message || t("OTP qabul qilingan emailga yuborildi"));
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.message || t("Email yoki parolni xato kiritdingiz!"));
      });
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  if (isOtpSent) {
    return <VerifyOtp email={loginEmail} type="signin" />;
  }

  if (isForgotPassword) {
    return <ForgotPassword onBackToLogin={() => setIsForgotPassword(false)} />;
  }

  const inputClasses = "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe5d37] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  const labelClasses = "text-sm font-medium leading-none mb-2 block";
  const errorText = "text-red-500 text-sm mt-1 font-medium";

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-slate-50/50">
      <div className="w-full max-w-[450px] flex flex-col gap-6">
        <Link to={"/"} className="block w-fit mx-auto mb-2">
          <img className="h-[70px] object-contain w-full" src={NewLogoImage} alt="Logo" />
        </Link>

        <div className="rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6 pb-4">
            <h3 className="font-semibold tracking-tight text-2xl text-center">
              {t("Kirish")}
            </h3>
            <p className="text-sm text-slate-500 text-center">
              {t("Enter your email below to login to your account")}
            </p>
          </div>
          <div className="p-6 pt-0">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className={labelClasses} htmlFor="email">{t("Email")}</label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  autoComplete="off"
                  className={inputClasses}
                  placeholder="m@example.com"
                />
                {errors.email && <p className={errorText}>{t("Ushbu maydon majburiy")}</p>}
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <label className="text-sm font-medium leading-none" htmlFor="password">{t("Password")}</label>
                  <button
                    type="button"
                    onClick={() => setIsForgotPassword(true)}
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-slate-900"
                  >
                    {t("Parolni unutdingizmi?")}
                  </button>
                </div>
                <input
                  id="password"
                  type="password"
                  {...register("password", { required: true })}
                  autoComplete="new-password"
                  className={inputClasses}
                />
                {errors.password && <p className={errorText}>{t("Ushbu maydon majburiy")}</p>}
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe5d37] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#fe5d37] text-white hover:bg-[#fe5d37]/90 h-10 px-4 py-2 shadow-sm"
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : t("Yuborish")}
              </button>
            </form>
            <div className="mt-4 text-center text-sm">
              {t("Don't have an account?")}{" "}
              <div onClick={() => setLogin("register")} className="underline underline-offset-4 hover:text-slate-900 cursor-pointer">
                {t("Ro'yhatdan o'tish")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
