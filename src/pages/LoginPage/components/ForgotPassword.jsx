import React, { useState } from "react";
import NewLogoImage from "../../../assets/logo-bg.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { API } from "../../../api";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function ForgotPassword({ onBackToLogin }) {
    const { t } = useTranslation();
    const [step, setStep] = useState(1);
    const [savedEmail, setSavedEmail] = useState("");

    const {
        register: registerStep1,
        handleSubmit: handleSubmitStep1,
        formState: { errors: errorsStep1 },
    } = useForm();

    const {
        register: registerStep2,
        handleSubmit: handleSubmitStep2,
        formState: { errors: errorsStep2 },
    } = useForm();

    const { mutate: mutateResend, isLoading: isLoadingResend } = useMutation(async (data) => {
        return await API.forgotPasswordResend({ email: data.email })
            .then((res) => {
                if (res?.data?.success || res?.status === 200 || res?.status === 201) {
                    setSavedEmail(data.email);
                    setStep(2);
                    toast.success(res.data?.message || t("Tasdiqlash kodi elektron pochtangizga yuborildi"));
                } else {
                    console.log(res);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.response?.data?.message || t("Foydalanuvchi topilmadi yoki xatolik yuz berdi"));
            });
    });

    const { mutate: mutateConfirm, isLoading: isLoadingConfirm } = useMutation(async (data) => {
        return await API.forgotPasswordConfirm({
            email: savedEmail,
            otp: data.otp,
            newPassword: data.newPassword,
        }).then((res) => {
            if (res?.data?.success || res?.status === 200 || res?.status === 201) {
                toast.success(t("Parol muvaffaqiyatli o'zgartirildi!"));
                onBackToLogin();
            }
        }).catch((err) => {
            console.log(err);
            toast.error(err.response?.data?.message || t("Noto'g'ri kod yuborildi yoki xatolik yuz berdi"));
        });
    });

    const onStep1Submit = (data) => {
        mutateResend(data);
    };

    const onStep2Submit = (data) => {
        mutateConfirm(data);
    };

    const inputClasses = "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe5d37] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
    const labelClasses = "text-sm font-medium leading-none mb-2 block";
    const errorText = "text-red-500 text-sm mt-1 font-medium";

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-slate-50/50">
            <div className="w-full max-w-[450px] flex flex-col gap-6">
                <div className="cursor-pointer block w-fit mx-auto mb-2" onClick={onBackToLogin}>
                    <img className="h-[70px] object-contain w-full" src={NewLogoImage} alt="Logo" />
                </div>

                <div className="rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm">
                    {step === 1 ? (
                        <>
                            <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                <h3 className="font-semibold tracking-tight text-2xl text-center">
                                    {t("Parolni tiklash")}
                                </h3>
                                <p className="text-sm text-slate-500 text-center">
                                    {t("Elektron pochtangizni kiriting. Biz sizga parolni tiklash uchun tasdiqlash kodini yuboramiz.")}
                                </p>
                            </div>
                            <div className="p-6 pt-0">
                                <form onSubmit={handleSubmitStep1(onStep1Submit)} className="space-y-4">
                                    <div>
                                        <label className={labelClasses} htmlFor="email">{t("Email")}</label>
                                        <input
                                            id="email"
                                            type="email"
                                            {...registerStep1("email", { required: true })}
                                            autoComplete="off"
                                            className={inputClasses}
                                            placeholder="m@example.com"
                                        />
                                        {errorsStep1.email && <p className={errorText}>{t("Ushbu maydon majburiy")}</p>}
                                    </div>
                                    <button
                                        disabled={isLoadingResend}
                                        type="submit"
                                        className="w-full mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe5d37] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#fe5d37] text-white hover:bg-[#fe5d37]/90 h-10 px-4 py-2 shadow-sm"
                                    >
                                        {isLoadingResend ? (
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        ) : t("Kodni yuborish")}
                                    </button>
                                    <div className="mt-4 text-center text-sm">
                                        <button
                                            type="button"
                                            onClick={onBackToLogin}
                                            className="underline underline-offset-4 hover:text-slate-900"
                                        >
                                            {t("Orqaga qaytish")}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                <h3 className="font-semibold tracking-tight text-2xl text-center">
                                    {t("Yangi parol")}
                                </h3>
                                <p className="text-sm text-slate-500 text-center">
                                    {t("Pochtangizga yuborilgan tasdiqlash kodini va yangi parolingizni kiriting.")}
                                    <br />
                                    <span className="font-medium text-slate-900 mt-1 block">{savedEmail}</span>
                                </p>
                            </div>
                            <div className="p-6 pt-0">
                                <form onSubmit={handleSubmitStep2(onStep2Submit)} className="space-y-4">
                                    <div>
                                        <label className={labelClasses} htmlFor="otp">{t("Tasdiqlash kodi")}</label>
                                        <input
                                            id="otp"
                                            type="number"
                                            {...registerStep2("otp", { required: true, minLength: 6, maxLength: 6 })}
                                            autoComplete="off"
                                            className={`${inputClasses} tracking-[0.5rem] font-bold`}
                                            placeholder={t("Tasdiqlash kodi")}
                                        />
                                        {errorsStep2.otp && <p className={errorText}>{t("Kamida 6 xonali kod")}</p>}
                                    </div>
                                    <div>
                                        <label className={labelClasses} htmlFor="newPassword">{t("Yangi parol")}</label>
                                        <input
                                            id="newPassword"
                                            type="password"
                                            {...registerStep2("newPassword", { required: true, minLength: 6 })}
                                            autoComplete="new-password"
                                            className={inputClasses}
                                            placeholder={t("Yangi parol")}
                                        />
                                        {errorsStep2.newPassword && <p className={errorText}>{t("Ushbu maydon majburiy")}</p>}
                                    </div>
                                    <button
                                        disabled={isLoadingConfirm}
                                        type="submit"
                                        className="w-full mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe5d37] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#fe5d37] text-white hover:bg-[#fe5d37]/90 h-10 px-4 py-2 shadow-sm"
                                    >
                                        {isLoadingConfirm ? (
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        ) : t("Parolni saqlash")}
                                    </button>
                                    <div className="mt-4 text-center text-sm">
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="underline underline-offset-4 hover:text-slate-900"
                                        >
                                            {t("Qaytadan urinib ko'rish")}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
