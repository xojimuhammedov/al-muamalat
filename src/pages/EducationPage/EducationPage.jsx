import { Box } from '@chakra-ui/react';
import React from 'react';
import Main from './_components/Main';
import Course from './_components/Course';
import { useTranslation } from 'react-i18next';

const courses = [
    {
        no: 1,
        name_uz:
            "CPSS - Certificate of Proficiency in Shari’ah Standards sertifikatiga tayyorlov kursi",
        name_en: "CPSS - Certificate of Proficiency in Shari’ah Standards Preparatory Courses",
        lang_uz: "Ingliz",
        lang_en: "English",
        lessons: 25,
        format_uz: "Jonli onlayn",
        format_en: "Live online",
    },
    {
        no: 2,
        name_uz:
            "CPFAS - Certificate of Proficiency in Financial Accounting Standards sertifikatiga tayyorlov kursi",
        name_en: "CPFAS - Certificate of Proficiency in Financial Accounting Standards  Preparatory Courses",
        lang_uz: "Ingliz",
        lang_en: "English",
        lessons: 15,
        format_uz: "Jonli onlayn",
        format_en: "Live online",
    },
    {
        no: 3,
        name_uz:
            "CPAAGE - Certificate of Proficiency in Audit, Assurance, Governance, and Ethics sertifikatiga tayyorlov kursi",
        name_en: "CPAAGE - Certificate of Proficiency in Audit, Assurance, Governance, and Ethics Preparatory Courses",
        lang_uz: "Ingliz",
        lang_en: "English",
        lessons: 15,
        format_uz: "Jonli onlayn",
        format_en: "Live online",
    },
    {
        no: 4,
        name_uz: "Islomiy moliya, bank ishi va qimmatli qog‘ozlar ilg‘or kursi",
        name_en: "Advanced Course in Islamic Finance, Banking, and Securities",
        lang_uz: "O‘zbek",
        lang_en: "Uzbek",
        lessons: 16,
        format_uz: "Jonli onlayn / gibrid",
        format_en: "Live online / hybrid"
    },
    {
        no: 5,
        name_uz: "Islomiy moliya va shariat standartlari kursi",
        name_en: "Islamic Finance and Shari’ah Standards Course",
        lang_uz: "Rus",
        lang_en: "Russian",
        lessons: 15,
        format_uz: "Jonli onlayn",
        format_en: "Live online",
    },
];


const EducationPage = () => {
    const { t, i18n } = useTranslation()
    const border = "border-2 border-[#2f5a43]";
    const thBase =
        "bg-[#2f5a43] text-white font-bold px-4 py-4 text-left align-middle " + border;
    const tdBase =
        "bg-white px-4 py-4 align-middle text-[#0f1a14] " + border;
    return (
        <Box p={'36px 0'} mt={'72px'}>
            <Main />
            <div className='container'>
                <div className={`overflow-hidden rounded-[4px] ${border}`}>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full border-collapse table-fixed text-[16px] min-w-[920px]">
                            <thead>
                                <tr>
                                    <th className={`${thBase} w-[70px] text-center`}>No</th>
                                    <th className={thBase}>{t("Kurs nomi")}</th>
                                    <th className={`${thBase} w-[140px] text-center`}>{t("Ta’lim tili")}</th>
                                    <th className={`${thBase} w-[140px] text-center`}>{t("Darslar soni")}</th>
                                    <th className={`${thBase} w-[180px] text-center`}>{t("Format")}</th>
                                </tr>
                            </thead>

                            <tbody>
                                {courses?.map((row) => (
                                    <tr key={row.no}>
                                        <td className={`${tdBase} text-center`}>{row.no}</td>
                                        <td className={`${tdBase} whitespace-normal break-words leading-[1.2]`}>
                                            {row[`name_${i18n?.language}`]}
                                        </td>
                                        <td className={`${tdBase} text-center`}>{row[`lang_${i18n?.language}`]}</td>
                                        <td className={`${tdBase} text-center`}>{row.lessons}</td>
                                        <td className={`${tdBase} text-center`}>{row[`format_${i18n?.language}`]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Course />
        </Box>
    );
}

export default EducationPage;
