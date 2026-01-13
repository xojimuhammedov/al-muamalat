import React from 'react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Flex,
    Image,
    Box,
    Heading,
    Text,
    Link,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';

import LinkedinIcon from "../assets/linkedin.png";

const BlogModal = ({ onClose, isOpen, aboutData }) => {
    const { t, i18n } = useTranslation()
    return (
        <Modal isCentered size={'xl'} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW={{ base: "90%", lg: '700px' }} maxH={{ base: "100%" }} >
                <ModalCloseButton />
                <ModalBody m={'36px 0'}>
                    <Flex flexDirection={{ base: "column", lg: "row" }} gap={'24px'}>
                        <Image {...css.image} src={aboutData?.image} />
                        <Box>
                            <Heading {...css.title}>{aboutData?.[`title_${i18n?.language}`]}</Heading>
                            <Heading {...css.name}>{aboutData?.[`job_${i18n?.language}`]}</Heading>
                            <Link href={aboutData?.link} target='_blank'>
                                <Image {...css.icon} src={LinkedinIcon} />
                            </Link>
                            <Text {...css.text}>{aboutData?.[`text_${i18n?.language}`]}</Text>
                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default BlogModal;


const css = {
    title: {
        fontSize: "22px",
        lineHeight: "28px",
        fontWeight: "600"
    },
    image: {
        width: {
            base: "100%",
            lg: "250px"
        },
        objectFit: "cover",
        borderRadius: "26px",
        minHeight: {
            base: "320px",
            lg: "260px"
        },
        maxHeight: {
            base: "340px",
            lg: "260px"
        },
        boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    },
    text: {
        color: "#74787c",
        fontSize: "14px",
        lineHeight: "20px",
        paddingTop: "12px",
        letterSpacing: "0.5px"
    },
    name: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "600",
        marginTop: "8px"
    },
    icon: {
        width: "35px",
        height: "35px",
        margin: "8px 0"
    },
}