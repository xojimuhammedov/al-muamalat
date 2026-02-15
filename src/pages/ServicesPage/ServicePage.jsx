import React, { useState } from "react";
import { Box, Heading, VStack, useColorModeValue } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";
import { ServiceCard } from "../../components/ServiceCard";
import { serviceData } from "../../mockData/services";

const ServicesSection = () => {
  const { t, i18n } = useTranslation();

  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Box id="services" bg={bgColor} py={12} pt={28} position="relative" overflow="hidden">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.03}
        pointerEvents="none"
      />

      <Box bg={bgColor} className="container" position="relative" zIndex={1}>
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
        <div className="flex flex-col gap-6">
          {serviceData.map((service) => (
            <div key={service.id}>
              {service.variant === "light" ? (
                <div className="border-b border-t border-border">
                  <ServiceCard service={service} />
                </div>
              ) : (
                <ServiceCard service={service} />
              )}
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default ServicesSection;
