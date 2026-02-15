import { useTranslation } from "react-i18next";
import { goals } from "../mockData/goals";
import { Box, Heading, VStack, useColorModeValue } from "@chakra-ui/react";

export function CoreGoals() {
  const { t, i18n } = useTranslation();

  const bgColor = useColorModeValue("gray.50", "gray.900");
  return (
    <Box bgColor={bgColor} className="pb-8 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <VStack spacing={4} mb={8} textAlign="center">
          <Heading
            as="h2"
            size="2xl"
            color="#1B4D3E"
            fontWeight="700"
            letterSpacing="-1px"
          >
            {t("Our Core Goals")}
          </Heading>
          <Box
            width="80px"
            height="4px"
            bgGradient="linear(to-r, #FF6B00, #1B4D3E)"
            borderRadius="full"
            mb={4}
          />
        </VStack>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goals.map((goal) => (
            <div
              key={goal.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
              className="flex flex-col items-center text-center px-6 py-10 md:px-4 md:py-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon circle */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  border: "2px solid #3D6B5E",
                  backgroundColor: "transparent",
                }}
                className="flex items-center justify-center mb-6"
              >
                {goal.icon}
              </div>

              {/* English title */}
              <h3
                style={{
                  color: "#1a1a1a",
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                }}
                className="text-lg md:text-xl font-medium leading-snug mb-4 text-balance"
              >
                {goal[`title_${i18n?.language}`]}
              </h3>

              {/* English description */}
              <p
                style={{ color: "#555555", lineHeight: "1.7" }}
                className="text-sm mb-6 leading-relaxed"
              >
                {goal[`description_${i18n?.language}`]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
