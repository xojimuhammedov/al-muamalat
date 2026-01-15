import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
    const { t } = useTranslation()
    return (
        <Box>
            <Box className='container'>
                <Heading {...css.title}>{t("Al Muamalat Consulting is official partner of AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions) in Uzbekistan.")}</Heading>
                <Text {...css.text}>{t("AAOIFI is an international organization that develops accounting, auditing, and Shari'ah standards for Islamic financial institutions. Al Muamalat Consulting provides preparatory training courses for AAOIFI certifications in Islamic finance, covering accounting, auditing, and Shari'ah standards.")}</Text>
                <Text {...css.text}>{t("Shuningdek, Al Muamalat Consulting AAOIFI tashkilotining rasmiy hamkori sifatida xalqaro sertifikatlar bo‘yicha:")}</Text>
                <Text {...css.text}>1. {t("Provides the opportunity to sit examinations at the Al Muamalat Test Center;")}</Text>
                <Text {...css.text}>2. {t("Offers registration discounts for AAOIFI examinations.")}</Text>
                <Text {...css.text}>{t("Al Muamalat Consulting tomonidan barcha o‘quv kurslar amaliy va nazariy tajribaga ega bo‘lgan malakali instruktorlar tomonidan o‘tkazilinadi.")}</Text>
            </Box>
        </Box>
    );
}

export default Main;

const css = {
    title: {
        fontSize: {
            base: "18px",
        },
        lineHeight: {
            base: "26px",
            md: "32px",
        },
        color: "#4D4D4D",
        fontWeight: "600",
        width: {
            base: "100%",
            lg: "900px"
        }
    },
    text: {
        color: "#717171",
        margin: "12px 0",
        fontSize: {
            base: "16px",
            lg: "18px"
        },
        fontWeight: "500",
        width: {
            base: "100%",
            lg: "900px"
        }
    }
}