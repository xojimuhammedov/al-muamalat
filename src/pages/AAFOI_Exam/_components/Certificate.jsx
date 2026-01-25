import { Box, Button, Heading, Image, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

import SvgIcon from '../../../assets/diploma.svg'
import { ArrowRight } from 'lucide-react';
import { certificateData } from '../../../mockData/certificate';
import { useTranslation } from 'react-i18next';
import AboutModal from './AboutModal';

const Certificate = () => {
    const { t, i18n } = useTranslation()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [certificate, setCertificate] = useState(null)

    const aboutData = certificateData?.find((item) => item?.id === certificate)
    return (
        <>
            <Box p={'36px 0'}>
                <Box className='container'>
                    <Heading {...css.title}>{t("Sertifikatlash dasturlari")}</Heading>
                    <SimpleGrid mt={'36px'} columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: "12px", md: '24px' }}>
                        {certificateData?.map((item) => (
                            <Box {...css.item}>
                                <Image src={item?.image} {...css.image} />
                                <Heading {...css.name}>{item?.[`title_${i18n?.language}`]}</Heading>
                                <Text {...css.subtext}
                                    noOfLines={3}
                                    dangerouslySetInnerHTML={{
                                        __html: item?.[`text_${i18n?.language}`]
                                    }}
                                />
                                <Text onClick={() => {
                                    onOpen();
                                    setCertificate(item?.id)
                                }} {...css.button}>{t("Batafsil ma’lumot")} <ArrowRight color="#EB6845" /></Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
            <AboutModal isOpen={isOpen} onClose={onClose} aboutData={aboutData} />
        </>
    );
}

export default Certificate;

const css = {
    title: {
        color: "#4D4D4D",
        fontSize: {
            base: "28px",
            lg: "36px"
        },
        lineHeight: {
            base: "34px",
            lg: "44px"
        },
        textAlign: "center"
    },
    text: {
        color: "#717171",
        lineHeight: "24px",
        textAlign: "center",
        width: "600px",
        margin: "12px auto"
    },
    item: {
        border: "1px solid #E3E3E3",
        background: "#FAFAFA",
        borderRadius: "18px",
        padding: "20px",
        cursor: "pointer"
    },
    circle: {
        border: "1px solid #E3E3E3",
        background: "#FAFAFA",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    name: {
        fontSize: "20px",
        lineHeight: "26px",
        color: "#12141D",
        fontWeight: "600",
        marginTop: "24px"
    },
    subtext: {
        fontSize: "16px",
        lineHeight: "140%",
        color: "#8A8A8A",
        fontWeight: "400",
        marginTop: "12px"
    },
    button: {
        color: "#EB6845",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        marginTop: "12px",
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "26px"
    },
    image: {
        width: "180px",
        height: "80px",
        objectFit: "contain"
    }
}