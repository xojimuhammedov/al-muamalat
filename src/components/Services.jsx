import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

function Services() {
  var settings = {
    speed: 5000,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [t, i18n] = useTranslation();
  const serviceData = [
    {
      id: 1,
      title_uz: "Ta'lim va Treninglar",
      title_en: "Education and Training",
      text_uz:
        "Biz qisqa muddatli trening kurslari, mutaxassislar tomonidan olib boriladigan seminarlar, konferensiyalar va yetakchi Islomiy moliyaviy institutlarga sayohat treninglarini taqdim etamiz.",
      text_en:
        "We provide short training courses, expert-led workshops, seminars, and field trip trainings to leading Islamic financial institutions.",
    },
    {
      id: 2,
      title_uz: "Islomiy Banklar uchun",
      title_en: "For Islamic Banks",
      text_uz:
        "Biz Islomiy Bank va Islomiy Bank darchalari tashkil qilish bo’yicha va boshqarish bo’yicha tajribada sinalgan maslahatlarimizni taqdim etamiz. Shariat tamoyillariga asoslangan holda raqobatbardosh moliyaviy mahsulotlar va xizmatlarni ishlab chiqishda ko’maklashamiz.",
      text_en:
        "We offer proven advisory services for the establishment and management of Islamic Banks and Islamic Banking Windows. We assist in the development of competitive financial products and services based on Shariah principles.",
    },
    {
      id: 3,
      title_uz: "Islom Kapital bozori",
      title_en: "Islamic Capital Market",
      text_uz:
        "Biz Islom kapital bozori, jumladan, shariatga mos investitsiya mahsulotlari, sukuk emissiyasi va portfelni axloqiy boshqarish bo'yicha ekspert maslahatlarini beramiz.",
      text_en:
        "We provide expert guidance on the Islamic Capital Market, including Shari’ah-compliant investment products, issuing sukuk, and managing ethical portfolios.",
    },
    {
      id: 4,
      title_uz: "Shariat Nazorati va Audit xizmati",
      title_en: "Shariah Supervision and Audit Service",
      text_uz:
        "Biz biznes modellarining Shariat tamoyillariga muvofiqligini o’rganib, Shariat nazorati va auditi xizmatlarini taqdim etamiz.",
      text_en:
        "We provide Shariah supervision and audit services by assessing the compliance of business models with Shariah principles.",
    },
    {
      id: 5,
      title_uz: "Takaful bozori",
      title_en: "Takaful",
      text_uz:
        "Mutaxassislarimiz takaful (Islom sugʻurtasi) mahsulotlarini ishlab chiqish va boshqarish, shariat tamoyillariga rioya etilishini taʼminlash va sugʻurtalovchilarga foyda keltirishda yordam beradi.",
      text_en:
        "Our experts assist in developing and managing Takaful (Islamic insurance) products, ensuring compliance with Shariah principles and delivering value to policyholders.",
    },
    {
      id: 6,
      title_uz: "Islomiy Fond Boshqaruvi",
      title_en: "Islamic Fund Management",
      text_uz:
        "Chakana va institutsional mijozlarga pul mablag’larini Islomiy tamoyillarga muvofiq boshqarishda yordam beramiz va halol sarmoya kiritish bo’yicha amaliy tavsiyalar ishlab chiqamiz.",
      text_en:
        "We assist our clients in managing their wealth according to Islamic principles and recommend strategies to help them allocate their wealth to halal investments.",
    },
    {
      id: 7,
      title_uz: "Xalqaro Hamkorlik",
      title_en: "International Cooperation",
      text_uz:
        "Biz mahalliy Islomiy moliya sohasida faoliyat yuritayotgan tashkilotlar uchun Turkiya, Indoneziya va Malayziyadagi Islomiy moliya tashkilotlari bilan amaliy hamkorlik o’rnatishda yordam beramiz. Tajriba almashinuvi safarlarini tashkil etamiz.",
      text_en:
        " We assist local organizations operating in the Islamic finance  sector in establishing practical partnerships with Islamic  financial institutions in Turkey, Indonesia, and Malaysia. We also organize exchange visits for knowledge sharing.",
    },
  ];
  return (
    <Box>
      <Box py={"3rem"} className="container">
        <Heading
          fontSize={{ base: "25px", lg: "30px" }}
          color="#103741"
          mb={"2rem"}
          textAlign={"center"}>
          {t("BIZNING XIZMATLARIMIZ")}
        </Heading>
        <Slider {...settings}>
          {serviceData.map((item, index) => (
            <Box key={index} {...css.item}>
              <Heading {...css.title}>
                {item[`title_${i18n?.language}`]}
              </Heading>
              <Text {...css.text}>{item[`text_${i18n?.language}`]}</Text>
            </Box>
          ))}
        </Slider>
        <Heading
          fontSize={{ base: "25px", lg: "30px" }}
          color="#103741"
          mb={"2rem"}>
          Al Muamalat
        </Heading>
        <SimpleGrid gap={"16px"} columns={{ base: 1, md: 2 }}>
          <Box>
            <Text>{t("text15")}</Text>
          </Box>
          <Box>
            <Text>{t("text16")}</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Services;

const css = {
  item: {
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "white",
    height: {
      base: "200px",
      md: "180px",
    },
  },
  title: {
    fontSize: "20px",
    color: "#103741",
  },
  text: {
    fontSize: "14px",
    marginTop: "16px",
    color: "#74787c",
  },
};
