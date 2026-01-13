import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { CircleCheck } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
    const { t } = useTranslation()
    return (
        <>
            <Box className='container'>
                <Heading {...css.title}>{t("AAOIFI tashkilotining O‘zbekistondagi rasmiy hamkori")}</Heading>
                <Text {...css.subtext}>{t("AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions) — dunyoning 50 dan ortiq mamlakatlarida tan olingan islom moliyasi standartlarini belgilovchi yetakchi xalqaro tashkilot.")}</Text>
            </Box>
            <Box {...css.topBox}>
                <Box bg={'#F7F7F7'} className='container'>
                    <Heading {...css.name}>{t("Ro‘yxatdan o‘tish va imtihon topshirish tartibi")}:</Heading>
                    <Flex gap={'12px'} flexDirection={'column'}>
                        <Text {...css.text}> <CircleCheck color="#EB6845" /> {t("Mos sertifikat dasturini tanlash")};</Text>
                        <Text {...css.text}> <CircleCheck color="#EB6845" /> {t("Ro‘yxatdan o‘tish va hujjatlarni topshirish")};</Text>
                        <Text {...css.text}> <CircleCheck color="#EB6845" /> {t("Imtihon uchun to’lov qilish")};</Text>
                        <Text {...css.text}> <CircleCheck color="#EB6845" /> {t("Imtihonlarga tayyorgarlik ko‘rish")};</Text>
                        <Text {...css.text}> <CircleCheck color="#EB6845" /> {t("Imtihon topshirish (tanlangan dasturga qarab sanalar qo‘shimcha e’lon qilinadi)")};</Text>
                        <Text {...css.text}> <CircleCheck color="#EB6845" /> {t("Natijalar e’lon qilinishi")};</Text>
                        <Text {...css.text}> <CircleCheck color="#EB6845" /> {t("Sertifikat olish agar imtihondan muvaffaqiyatli o‘tsa")}.</Text>
                    </Flex>
                    <Text {...css.subtext}>{t("Yuqoridagi dasturlar bo‘yicha AAOIFI imtihonlari Toshkent shahridagi Al Muamalat rasmiy imtihon markazi tomonidan o‘tkaziladi.")}</Text>
                </Box>
            </Box>
        </>
    );
}

export default Main;

const css = {
    title: {
        fontSize: {
            base: "24px",
            lg: "40px"
        },
        lineHeight: {
            base: "30px",
            lg: "44px"
        },
        color: "#4D4D4D"
    },
    subtext: {
        color: "#717171",
        margin: "12px 0",
        fontSize: {
            base: "16px",
            lg: "18px"
        },
        fontWeight: "500"
    },
    topBox: {
        backgroundColor: "#F7F7F7",
        padding: "36px 0",
        margin: "24px 0"
    },
    name: {
        fontSize: {
            base: "20px",
            lg: "36px"
        },
        lineHeight: {
            base: "26px",
            lg: "44px"
        },
        fontWeight: "600",
        width: {
            base: "100%",
            lg: "550px"
        },
        marginBottom: "16px",
        color: "#4D4D4D"
    },
    text: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: {
            base: "14px",
            lg: "20px"
        }
    }
}