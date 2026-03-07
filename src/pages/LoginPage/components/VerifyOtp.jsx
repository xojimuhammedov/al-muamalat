import React from "react";
import NewLogoImage from "../../../assets/logo-bg.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { API } from "../../../api";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function VerifyOtp({ email, type = "signup" }) {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { mutate, isLoading } = useMutation(async (payload) => {
        const apiCall = type === "signin" ? API.verifyLoginEmail(payload) : API.verifyEmail(payload);

        return await apiCall
            .then((res) => {
                if (res?.data?.success || res?.status === 200 || res?.status === 201) {
                    const successMsg = type === "signin"
                        ? t("Siz muvaffaqiyatli tizimga kirdingiz!")
                        : t("Siz muvaffaqiyatli ro'yxatdan o'tdingiz!");
                    toast.success(successMsg);

                    if (res?.data?.data?.tokens?.accessToken) {
                        localStorage.setItem(
                            "userToken",
                            `${res?.data?.data?.tokens?.accessToken}`
                        );
                        if (res?.data?.data?.user) {
                            localStorage.setItem("user", JSON.stringify(res?.data?.data?.user));
                        }
                        navigate("/profile");
                        window.location.reload();
                    } else {
                        navigate("/login");
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error(t("Tasdiqlash kodi xato yoki muddati tugagan!"));
            });
    });

    const onSubmit = (data) => {
        mutate({
            email: email,
            otp: data.otp,
        });
    };

    const inputClasses = "flex h-[48px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-[20px] tracking-[1rem] sm:tracking-[1.5rem] font-bold text-center ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-300 placeholder:tracking-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe5d37] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-slate-50/50">
            <div className="w-full max-w-[450px] flex flex-col gap-6">
                <Link to={"/"} className="block w-fit mx-auto mb-2">
                    <img className="h-[70px] object-contain w-full" src={NewLogoImage} alt="Logo" />
                </Link>

                <div className="rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 pb-4">
                        <h3 className="font-semibold tracking-tight text-2xl text-center">
                            {t("Kodni tasdiqlash")}
                        </h3>
                        <p className="text-sm text-slate-500 text-center">
                            {t("Emailingizga yuborilgan 6 xonali kodni kiriting.")}
                            <br />
                            <span className="font-medium text-slate-900 mt-1 block">{email}</span>
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <input
                                    type="number"
                                    {...register("otp", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 6,
                                    })}
                                    autoComplete="off"
                                    placeholder={t("_ _ _ _ _ _")}
                                    className={inputClasses}
                                />
                                {errors.otp && (
                                    <p className="text-red-500 text-sm mt-2 font-medium text-center">
                                        {t("6 xonali kodni kiriting")}
                                    </p>
                                )}
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
                                ) : t("Tasdiqlash")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifyOtp;
