import React from 'react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    SimpleGrid,
    Link,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';

const AboutModal = ({ onClose, isOpen, aboutData }) => {
    const { t, i18n } = useTranslation()

    return (
        <Modal isCentered size={'xl'} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW={{ base: "100%", lg: '960px' }} maxH={{ base: "100%", lg: "768px" }} overflowY={'scroll'} >
                <ModalCloseButton />
                <ModalBody m={'36px 0'}>
                    <Flex gap={'24px'}>
                        <Box>
                            <Heading {...css.title}>{aboutData?.[`title_${i18n?.language}`]}</Heading>
                            <Text {...css.subtext}
                                dangerouslySetInnerHTML={{
                                    __html: aboutData?.[`text_${i18n?.language}`]
                                }}
                            />
                            {aboutData?.id === 4 && (
                                <>
                                    <Heading mt={'24px'} {...css.name}>{t("four_title")}</Heading>
                                    <Text mt={0} {...css.subtext}>{t("four_text")}:</Text>
                                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12px", lg: "24px" }} mt={'12px'}>
                                        <Box {...css.item}>
                                            <Heading {...css.modul}>Module 1</Heading>
                                            <Text>{t("CPSS — Certificate of Proficiency in Sharia Standards")}</Text>
                                            <Text>{t("AAOIFI tomonidan ishlab chiqilgan barcha Shari’ah standartlarini o‘rganishni qamrab oladi.")}</Text>
                                        </Box>
                                        <Box {...css.item}>
                                            <Heading {...css.modul}>Module 2</Heading>
                                            <Text>{t("CPAAGE — Certificate of Proficiency in Audit, Assurance, Governance and Ethics")}</Text>
                                            <Text>{t("Shariat auditi, boshqaruv va etika bo‘yicha AAOIFI standartlarini, jumladan Etika kodeksini qamrab oladi.")}</Text>
                                        </Box>
                                    </SimpleGrid>
                                    <Heading mt={'24px'} {...css.name}>{t("CSAA imtihoniga kirish talablari")}:</Heading>
                                    <Text {...css.text}>1. {t("CSAA uchun kirish talabi buxgalteriya hisobi, audit, biznes yoki menejment va moliya kurslarini o‘z ichiga olgan to‘rt yillik universitet darajasi (AAOIFI tomonidan tan olingan universitetdan) yoki tan olingan professional buxgalteriya malakasi hisoblanadi.")}</Text>
                                    <Text {...css.text}>2. {t("Bunday ma’lumotga ega bo‘lmagan nomzodlar PRC (pre-requisite competency) imtihonlarini topshirishlari kerak bo‘ladi. PRC bo‘yicha imtihon AAOIFIning BRE va AAE o‘quv matnlari asosida o‘tkaziladi.")}</Text>
                                    <Text {...css.text}>3. {t("AAOIFI ilmiy darajalari ushbu shartlardan ozod etilishi mumkin bo‘lgan universitetlar ro‘yxatini yuritadi va e’lon qiladi.")}</Text>

                                    {/* <Heading mt={'24px'} {...css.name}>Imtihon formati</Heading>
                                    <Text {...css.text}>• Har bir modul 100 ta savoldan iborat, imtihon davomiyligi: 3 soat, har bir modul imtihoni alohida kunda topshiriladi</Text>
                                    <Text {...css.text}>• Ikkala modul muvaffaqiyatli yakunlangach, nomzod CSAA Fellowship malakasini qo‘lga kiritadi</Text> */}
                                </>
                            )}
                            {aboutData?.id === 5 && (
                                <>
                                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12px", lg: "24px" }} mt={'12px'} >
                                        <Box {...css.item}>
                                            <Heading {...css.modul}>Module 1</Heading>
                                            <Text>{t("Shari’ah Standards (SS) – 30%")}</Text>
                                        </Box>
                                        <Box {...css.item}>
                                            <Heading {...css.modul}>Module 2</Heading>
                                            <Text>{t("Islamic Financial Structuring and Development (IFSD) – 30%")}</Text>
                                        </Box>
                                        <Box {...css.item}>
                                            <Heading {...css.modul}>Module 3</Heading>
                                            <Text>{t("AAOIFI Technical Standards (ATS) – 20%")}</Text>
                                        </Box>
                                        <Box {...css.item}>
                                            <Heading {...css.modul}>Module 4</Heading>
                                            <Text>{t("Business and Regulatory Environment (BRE) – 20%")}</Text>
                                        </Box>
                                    </SimpleGrid>
                                </>
                            )}
                            {aboutData?.id === 6 && (
                                <>
                                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12px", lg: "24px" }} mt={'12px'}>
                                        <Box {...css.item}>
                                            <Heading {...css.modul}>Module 1</Heading>
                                            <Text>{t("CPSS — Certificate of Proficiency in Shari’ah Standards. AAOIFI tomonidan ishlab chiqilgan barcha Islomiy moliya standartlarini o‘rganish.")}</Text>
                                        </Box>
                                        <Box {...css.item}>
                                            <Heading {...css.modul}>Module 2</Heading>
                                            <Text>{t("CPFAS — Certificate of Proficiency in Financial Accounting Standards. AAOIFI’ning islomiy moliyaviy hisob (accounting) bo‘yicha mutaxassislar uchun mo‘ljallangan ilg‘or darajadagi professional malakasi.")}</Text>
                                        </Box>
                                        <Box {...css.item}>
                                            <Heading {...css.modul}>Module 3</Heading>
                                            <Text>{t("CPAAGE — Certificate of Proficiency in Audit, Assurance, Governance and Ethics. Shariat auditi, korporativ boshqaruv va etika bo‘yicha AAOIFI’ning barcha standartlarini, jumladan Etika kodeksini qamrab oladi.")}</Text>
                                        </Box>
                                    </SimpleGrid>
                                    <Heading mt={'24px'} {...css.name}>{t("CIPA imtihoniga kirish talablari")}:</Heading>
                                    <Text {...css.text}>1. {t("CIPA uchun kirish talabi buxgalteriya hisobi, audit, biznes yoki menejment va moliya kurslarini o‘z ichiga olgan to‘rt yillik universitet darajasi (AAOIFI tomonidan tan olingan universitetdan) yoki tan olingan professional buxgalteriya malakasi hisoblanadi.")}</Text>
                                    <Text {...css.text}>2. {t("Bunday ma’lumotga ega bo‘lmagan nomzodlar PRC (pre-requisite competency) imtihonlarini topshirishlari kerak bo‘ladi. PRC bo‘yicha imtihon AAOIFIning BRE va AAE o‘quv matnlari asosida o‘tkaziladi.")}</Text>
                                    <Text {...css.text}>3. {t("AAOIFI ilmiy darajalari ushbu shartlardan ozod etilishi mumkin bo‘lgan universitetlar ro‘yxatini yuritadi va e’lon qiladi.")}</Text>
                                    <Text {...css.text}>{t("CIPA darajasi barcha uchta modul va amaliy tajriba talablarini (PER) muvaffaqiyatli bajarilgandan so‘ng beriladi. PER nomzodning buxgalteriya bilan bog‘liq ish tajribasini tasdiqlovchi batafsil ish tavsifi bilan nomzod tashkilotining Inson resurslari tomonidan berilgan Ma’lumotnoma taqdim etish orqali isbotlanadi.")}</Text>
                                </>
                            )}
                        </Box>
                    </Flex>
                    <Flex mt={'24px'} flexWrap={'wrap'} justify={'end'} gap={'12px'} align={'center'}>
                        <Link href='https://forms.office.com/r/dcyGkgLvEd' target='_blank' {...css.button}>{t("Tayyorlov kursiga yozilish")}</Link>
                        <Link href='https://forms.office.com/r/9PwAZs16PV' target='_blank' {...css.button}>{t("AAOIFI imtihoniga ro‘yxatdan o‘tish")}</Link>
                        <Link href='https://t.me/bfayzullaev_al_muamalat' target='_blank' {...css.button}>{t("Bog‘lanish")}</Link>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default AboutModal;

const css = {
    title: {
        fontSize: {
            base: "18px",
            lg: "22px"
        },
        lineHeight: "28px",
        fontWeight: "600",
        color: "#4D4D4D"
    },
    subtext: {
        fontSize: {
            base: "14px",
            lg: "16px"
        },
        lineHeight: "26px",
        color: "#333333",
        fontWeight: "400",
        marginTop: "12px"
    },
    modul: {
        color: "#EB6845",
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "28px",
        marginBottom: "12px"
    },
    item: {
        backgroundColor: "#FAFAFA",
        border: "1px solid #E3E3E3",
        borderRadius: "18px",
        padding: "20px"
    },
    text: {
        fontSize: "16px",
        lineHeight: "26px",
        color: "#333333",
        fontWeight: "400",
        margin: "6px 0"
    },
    name: {
        fontSize: "18px",
        lineHeight: "26px",
        fontWeight: "600",
        color: "#4D4D4D"
    },
    button: {
        backgroundColor: "#EB6845",
        border: "none",
        borderRadius: "8px",
        height: "45px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px 8px",
    }
}