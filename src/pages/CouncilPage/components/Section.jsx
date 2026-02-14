import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

import MaxsusImageOne from '../../../assets/maxsus1.png'
import MaxsusImageTwo from '../../../assets/maxsus2.png'
import { useTranslation } from 'react-i18next';

const Section = () => {
    const { t } = useTranslation()
    return (
        <Box py={8} pt={{ base: "96px", md: "120px" }}>
            <Box className='container'>
                <Heading fontSize={{ base: "25px", lg: "30px" }}
                    color="#103741"
                    mb={"2rem"}
                    textAlign={"center"}>{t("MAXSUS KENGASH")}</Heading>
                <SimpleGrid mt={'24px'} gap={'24px'} columns={{ base: 1 }}>
                    <Flex {...css.item}>
                        <Image {...css.image} src={MaxsusImageOne} />
                        <Box p={'24px'}>
                            <Heading className='council-name' {...css.name}>QODIROV HASAN KARIMBERDIEVICH</Heading>
                            <Text className='council-texts' {...css.text}>{t("maxsus_text2")}</Text>
                        </Box>
                    </Flex>
                    <Flex {...css.item}>
                        <Image {...css.image} src={MaxsusImageTwo} />
                        <Box p={'24px'}>
                            <Heading className='council-name' {...css.name}>ABIEV XIKMATILLA HASANOVICH</Heading>
                            <Text className='council-texts' {...css.text}>{t("maxsus_text")}</Text>
                        </Box>
                    </Flex>
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default Section;


const css = {
    item: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
        height: {
            base: "150px",
            lg: "300px"
        },
    },
    image: {
        height: "100%",
        width: {
            base: "120px",
            lg: "250px"
        },
        borderRadius: "12px 0 0 12px"
    },
    text: {
        fontSize: {
            base: "12px",
            lg: "16px"
        },
        marginTop: "10px",
        lineHeight: {
            base: "18px",
            lg: "26px"
        }
    },
    name: {
        fontSize: {
            base: "16px",
            lg: "18px"
        },
        color: "#103741",
    }
}