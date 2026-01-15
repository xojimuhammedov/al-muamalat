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
    Image,
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
                            <Image src={aboutData?.image} {...css.image} />
                            <Heading mt={'12px'} {...css.title}>{aboutData?.[`title_${i18n?.language}`]}</Heading>
                            <Text {...css.subtext}
                                dangerouslySetInnerHTML={{
                                    __html: aboutData?.[`text_${i18n?.language}`]
                                }}
                            />
                        </Box>
                    </Flex>
                    <Flex mt={'24px'} flexWrap={'wrap'} justify={'end'} gap={'12px'} align={'center'}>
                        <Link href='https://forms.office.com/r/dcyGkgLvEd' target='_blank' {...css.button}>{t("Registration for preparatory course")}</Link>
                        {/* <Link href='https://forms.office.com/r/9PwAZs16PV' target='_blank' {...css.button}>{t("AAOIFI imtihoniga ro‘yxatdan o‘tish")}</Link> */}
                        {/* <Link href='https://t.me/bfayzullaev_al_muamalat' target='_blank' {...css.button}>{t("Bog‘lanish")}</Link> */}
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
    },
    image: {
        width: "220px",
        height: "80px",
        objectFit: "contain"
    }
}