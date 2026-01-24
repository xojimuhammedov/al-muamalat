import React, { useState } from "react";
import {
    ArrowUpRight,
    Phone,
    MapPin,
    Mail,
    Linkedin,
    Instagram,
    Facebook,
} from "lucide-react";

import LogoIcon from "../assets/logo-bg.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const social = [
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/al-muamalat/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnGmqagTGF5nFNiS5f_Aomg-8fuxSeVtJVcMbMVX83Gh9X7_dSKHLy0zkLbm8_aem_-_dvqPZouquiFlK1R0DhPA" },
    { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/al_muamalat/" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61564471340177&ref=pl_edit_xav_ig_profile_page_web#" },
];


function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Input({ className = "", ...props }) {
    return (
        <input
            {...props}
            className={cn(
                "h-12 w-full rounded-full bg-white/10 px-5 text-sm text-white placeholder:text-white/55",
                "border border-white/10 outline-none transition",
                "focus:border-orange-400/40 focus:ring-4 focus:ring-emerald-700/30",
                className
            )}
        />
    );
}

function Textarea({ className = "", ...props }) {
    return (
        <textarea
            {...props}
            className={cn(
                "min-h-[120px] w-full rounded-2xl bg-white/10 px-5 py-4 text-sm text-white placeholder:text-white/55",
                "border border-white/10 outline-none transition resize-none",
                "focus:border-orange-400/40 focus:ring-4 focus:ring-emerald-700/30",
                className
            )}
        />
    );
}

export default function NewFooter() {
    const { t } = useTranslation()
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [textValue, setTextValue] = useState("");
    const [email, setEmail] = useState("");

    function changeNumber(item) {
        setNumberValue(item);
    }

    function changeName(item) {
        setNameValue(item);
    }
    function changeText(item) {
        setTextValue(item);
    }
    function changeEmail(item) {
        setEmail(item);
    }
    const handleClear = () => {
        setNameValue("");
        setNumberValue("");
        setTextValue("");
        setEmail("");
    };
    let bot = {
        TOKEN: "7124566656:AAFYAZxPTZZPtPFUiPJekWVc1Kp35t1sjHY",
        chatID: "-1002196684816",
        message: `
            Assalomu alaykum, sizga yangi xabar keldi!
            Ismi 👤: ${nameValue}; 
            Telefon raqami ☎: ${numberValue};
            Elektron manzil: ${email};
            Xabar: ${textValue};
            `,
    };
    const encodedMessage = encodeURIComponent(bot.message);

    function sendMessage(e) {
        e.preventDefault();
        if (!nameValue || !numberValue || !email) return null

        fetch(
            `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${encodedMessage} `,
            {
                method: "GET",
            }
        ).then(
            () => {
                handleClear();
                toast.success(t("Sizning xabaringiz muvaffaqiyatli yuborildi!"));
            },
            (error) => {
                console.log(error);
            }
        );
    }

    const companyLinks = [
        { label: t("AAOIFI imtihonlari"), href: "/aaoifi-exam" },
        { label: t("O’quv kurslari"), href: "/education-course" },
        { label: t("Bog'lanish"), href: "/contact" },
    ];

    return (
        <section className="relative overflow-hidden bg-[#081C12] mt-8 text-white">
            {/* BACKGROUND: gradient + texture lines + glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B2416] to-[#081C12]" />
                {/* texture lines */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 10px)",
                    }}
                />
                {/* green glow */}
                <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-700/20 blur-3xl" />
                {/* orange glow */}
                <div className="absolute right-[-180px] top-24 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl" />
            </div>

            <div className="relative px-4 py-4 sm:px-6 lg:px-8">

                <div className="new-container">
                    <div className="mx-auto mt-10">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8">
                            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                                {/* LEFT: Brand block */}
                                <div className="lg:col-span-4">
                                    {/* Replace with your real logo image */}
                                    <div className="flex items-center gap-3">
                                        <img className="w-40" src={LogoIcon} alt="" />
                                    </div>

                                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                                        {t("Al-Muamalat – Islom moliyasi bo‘yicha innovatsion yechimlar! Treninglar, konsulting va global hamkorliklar orqali moliyaviy muvaffaqiyatga erishing!")}
                                    </p>

                                    <div className="mt-5 flex items-center gap-2">
                                        {social.map((s) => {
                                            const Icon = s.icon;
                                            return (
                                                <a
                                                    key={s.label}
                                                    href={s.href}
                                                    target="_blank"
                                                    aria-label={s.label}
                                                    className={cn(
                                                        "grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10",
                                                        "transition hover:bg-orange-500/20 hover:text-orange-300"
                                                    )}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* RIGHT: Form */}
                                <div className="lg:col-span-8">
                                    <form className="space-y-4">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <Input
                                                name="fullName"
                                                placeholder={t("Ismingiz")}
                                                autoComplete="name"
                                                required
                                                value={nameValue}
                                                onChange={(e) => changeName(e.target.value)}
                                            />
                                            <Input
                                                name="phone"
                                                placeholder={t("Sizning raqamingiz")}
                                                autoComplete="tel"
                                                required
                                                value={numberValue}
                                                onChange={(e) => changeNumber(e.target.value)}
                                            />
                                        </div>

                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder={t("Sizning elektron manzilingiz")}
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) => changeEmail(e.target.value)}
                                            required
                                        />

                                        <Textarea
                                            name="message"
                                            value={textValue} onChange={(e) => changeText(e.target.value)}
                                            placeholder={t("Xabaringiz / Izoh...")}
                                        />

                                        <div className="flex justify-center sm:justify-end">
                                            <button
                                                type="submit"
                                                onClick={sendMessage}
                                                className={cn(
                                                    "group inline-flex items-center gap-3 rounded-full bg-[#FE5D37] px-6 py-3",
                                                    "text-sm font-semibold text-[#0B2416] shadow-[0_18px_50px_rgba(255,106,0,0.22)]",
                                                    "transition hover:bg-orange-400"
                                                )}
                                            >
                                                {t("Yuborish")}
                                                <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-700 text-white transition group-hover:translate-x-0.5">
                                                    <ArrowUpRight className="h-5 w-5" />
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="mt-8 h-px w-full bg-white/10" />
                            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-12">
                                <div className="lg:col-span-4">
                                    <div className="text-sm font-semibold tracking-wider text-white">
                                        {t("Tezkor havolalar")}
                                    </div>
                                    <ul className="mt-4 space-y-2 text-sm text-white/70">
                                        {companyLinks.map((l) => (
                                            <li key={l.label}>
                                                <Link
                                                    to={l.href}
                                                    onClick={() => window.scrollTo({ top: 0 })}
                                                    className="transition hover:text-orange-300"
                                                >
                                                    {l.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Contact */}
                                <div className="lg:col-span-6">
                                    <div className="text-sm font-semibold tracking-wider text-white">
                                        {t("Aloqaga chiqing")}
                                    </div>
                                    <ul className="mt-4 space-y-3 text-sm text-white/70">
                                        <li className="flex items-start gap-2">
                                            <Phone className="mt-0.5 h-4 w-4 text-orange-300" />
                                            <a target="_blank" href="tel:+998990511881">+998 99 051 18 81</a>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <MapPin className="mt-0.5 h-4 w-4 text-orange-300" />
                                            <a href="https://maps.app.goo.gl/qmn1Ks37foJ3iE7C8" target="_blank">
                                                {t("house")}
                                            </a>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Mail className="mt-0.5 h-4 w-4 text-orange-300" />
                                            <a href="mailto:info@al-muamalat.uz" target="_blank" >info@al-muamalat.uz</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
