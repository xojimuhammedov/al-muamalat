import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import { serviceData } from '../mockData/services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      bg="white"
      borderRadius="2xl"
      borderWidth="2px"
      borderColor={isHovered ? 'transparent' : 'gray.200'}
      p={8}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      transform={isHovered ? 'translateY(-12px)' : 'translateY(0)'}
      boxShadow={isHovered ? '0 20px 40px rgba(27, 77, 62, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.07)'}
      position="relative"
      overflow="hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _before={{
        content: '""',
        position: 'absolute',
        top: '-2px',
        left: '-2px',
        right: '-2px',
        bottom: '-2px',
        background: 'linear-gradient(135deg, #FF6B00, #1B4D3E)',
        borderRadius: '2xl',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        zIndex: 0,
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        bg: 'white',
        borderRadius: '2xl',
        zIndex: 0,
      }}
    >

      <Box
        position="absolute"
        top={-1}
        right={-1}
        width="80px"
        height="80px"
        opacity={0.05}
        transform={isHovered ? 'rotate(180deg) scale(1.2)' : 'rotate(0)'}
        transition="all 0.6s ease"
        zIndex={1}
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M0,0 L100,0 L100,100 L50,50 Z" />
        </svg>
      </Box>

      <VStack align="start" spacing={5} position="relative" zIndex={2}>
        <Box
          bgGradient={
            isHovered
              ? 'linear(to-br, #FF6B00, #FF8533)'
              : 'linear(to-br, #1B4D3E, #266D5A)'
          }
          borderRadius="xl"
          p={4}
          transition="all 0.4s ease"
          boxShadow={
            isHovered
              ? '0 8px 20px rgba(255, 107, 0, 0.4)'
              : '0 4px 12px rgba(27, 77, 62, 0.3)'
          }
          transform={isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0)'}
        >
          <Box as={Icon} size="32px" color="white" />
        </Box>

        <Box
          position="absolute"
          top={0}
          right={0}
          bg="green.500"
          color="white"
          borderRadius="full"
          w={8}
          h={8}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="sm"
          fontWeight="bold"
          opacity={isHovered ? 1 : 0.7}
          transition="opacity 0.3s ease"
        >
          {index + 1}
        </Box>

        {/* Title */}
        <Heading
          as="h4"
          size="md"
          color="#1B4D3E"
          fontWeight="700"
          transition="all 0.3s ease"
          bgGradient={isHovered ? 'linear(to-r, #FF6B00, #1B4D3E)' : 'none'}
          bgClip={isHovered ? 'text' : 'none'}
        >
          {title}
        </Heading>

        {/* Description */}
        <Text
          color="gray.600"
          fontSize="sm"
          lineHeight="1.7"
          noOfLines={3}
        >
          {description}
        </Text>

        {/* Bottom accent line */}
        <Box
          width={isHovered ? '100%' : '60px'}
          height="3px"
          bgGradient="linear(to-r, #FF6B00, #1B4D3E)"
          borderRadius="full"
          transition="width 0.4s ease"
          mt={2}
        />
      </VStack>
    </Box>
  );
};

const ServicesSection = () => {
  const { t, i18n } = useTranslation();

  const bgColor = useColorModeValue('gray.50', 'gray.900');


  return (
    <Box bg={bgColor} py={16} position="relative" overflow="hidden">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.03}
        pointerEvents="none"
      />

      <Box bg={bgColor} className='container' position="relative" zIndex={1}>
        <VStack spacing={4} mb={8} textAlign="center">
          <Heading
            as="h2"
            size="2xl"
            color="#1B4D3E"
            fontWeight="700"
            letterSpacing="-1px"
          >
            {t("Xizmatlar")}
          </Heading>
          <Box
            width="80px"
            height="4px"
            bgGradient="linear(to-r, #FF6B00, #1B4D3E)"
            borderRadius="full"
            mb={4}
          />
        </VStack>

        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={20}
          grabCursor={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="services-swiper"
        >
          {serviceData.map((service, index) => (
            <SwiperSlide>
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service[`title_${i18n?.language}`]}
                description={service[`text_${i18n?.language}`]}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default ServicesSection;