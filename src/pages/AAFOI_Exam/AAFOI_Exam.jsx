import React from 'react';
import Main from './_components/Main';
import { Box } from '@chakra-ui/react';
import Certificate from './_components/Certificate';
import { useTranslation } from 'react-i18next';

const examSchedule = [
    {
        name_uz: "CPFAS - Certificate of Proficiency in Financial Accounting Standards",
        name_en: "CPFAS - Certificate of Proficiency in Financial Accounting Standards",
        regLast_uz: "31 Mart 2026",
        regLast_en: "31 March 2026",
        exam_uz: "20 Aprel 2026",
        exam_en: "20 April 2026"
    },
    {
        name_uz: "CPAAGE - Certificate of Proficiency in Audit, Assurance, Governance, and Ethics",
        name_en: "CPAAGE - Certificate of Proficiency in Audit, Assurance, Governance, and Ethics",
        regLast_uz: "",
        regLast_en: "",
        exam_uz: "21 Aprel 2026",
        exam_en: "21 April 2026"
    },
    {
        name_uz: "CPSS - Certificate of Proficiency in Shari’ah Standards",
        name_en: "CPSS - Certificate of Proficiency in Shari’ah Standards",
        regLast_uz: "",
        regLast_en: "",
        exam: "22 Aprel 2026",
    },
    {
        name_uz: "CPFAS - Certificate of Proficiency in Financial Accounting Standards",
        name_en: "CPFAS - Certificate of Proficiency in Financial Accounting Standards",
        regLast_uz: "1 May 2026",
        regLast_en: "1 May 2026",
        exam_uz: "8 Iyun 2026",
        exam_en: "8 June 2026",
    },
    {
        name_uz: "CPAAGE - Certificate of Proficiency in Audit, Assurance, Governance, and Ethics",
        name_en: "CPAAGE - Certificate of Proficiency in Audit, Assurance, Governance, and Ethics",
        regLast_uz: "",
        regLast_en: "",
        exam_uz: "9 Iyun 2026",
        exam_en: "9 June 2026",
    },
    {
        name_uz: "CPSS - Certificate of Proficiency in Shari’ah Standards",
        name_en: "CPSS - Certificate of Proficiency in Shari’ah Standards",
        regLast_uz: "",
        regLast_en: "",
        exam_uz: "10 Iyun 2026",
        exam_en: "10 June 2026",
    },
    {
        name_uz: "CSE – Certified Shari’ah Expert - IFSD",
        name_en: "CSE – Certified Shari’ah Expert - IFSD",
        regLast_uz: "31 Avgust 2026",
        regLast_en: "31 August 2026",
        exam_uz: "21 Sentyabr 2026",
        exam_en: "21 September 2026",
    },
    {
        name_uz: "CSE - Certified Shari’ah Expert - ATS",
        name_en: "CSE - Certified Shari’ah Expert - ATS",
        regLast_uz: "",
        regLast_en: "", exam_uz: "22 Sentyabr 2026",
        exam_en: "22 September 2026",
    },
    {
        name_uz: "CSE - Certified Shari’ah Expert - BRE",
        name_en: "CSE - Certified Shari’ah Expert - BRE",
        regLast_uz: "",
        regLast_en: "", exam_uz: "23 Sentyabr 2026",
        exam_en: "23 September 2026",
    },
    {
        name_uz: "CSE - Certified Shari’ah Expert - SS",
        name_en: "CSE - Certified Shari’ah Expert - SS",
        regLast_uz: "",
        regLast_en: "", exam_uz: "24 Sentyabr 2026",
        exam_en: "24 September 2026",
    },
    {
        name_uz: "CPFAS - Certificate of Proficiency in Financial Accounting Standards",
        name_en: "CPFAS - Certificate of Proficiency in Financial Accounting Standards",
        regLast_uz: "7 Noyabr 2026",
        regLast_en: "7 November 2026",
        exam_uz: "7 Dekabr 2026",
        exam_en: "7 December 2026",
    },
    {
        name_uz: "CPAAGE - Certificate of Proficiency in Audit, Assurance, Governance, and Ethics",
        name_en: "CPAAGE - Certificate of Proficiency in Audit, Assurance, Governance, and Ethics",
        regLast_uz: "",
        regLast_en: "",
        exam_uz: "8 Dekabr 2026",
        exam_en: "8 December 2026",
    },
    {
        name_uz: "CPSS - Certificate of Proficiency in Shari’ah Standards",
        name_en: "CPSS - Certificate of Proficiency in Shari’ah Standards",
        regLast_uz: "",
        regLast_en: "", exam_uz: "9 Dekabr 2026",
        exam_en: "9 December 2026",
    },
];


const AAFOIExam = () => {
    const { t, i18n } = useTranslation()
    const border = "border-2 border-[#2f5a43]";
    const thBase =
        "bg-[#2f5a43] text-white font-bold px-4 py-4 text-left align-middle " + border;
    const tdBase =
        "bg-white px-4 py-4 align-middle text-[#0f1a14] " + border;
    return (
        <Box p={'36px 0'} mt={'72px'}>
            <Main />
            <div className="container">
                <div className={`overflow-hidden rounded-[4px] ${border}`}>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full border-collapse table-fixed text-[16px] min-w-[920px]">
                            <thead>
                                <tr>
                                    <th className={thBase}>{t("Nomi")}</th>
                                    <th className={`${thBase} w-[280px] text-center`}>
                                        {t("Ro‘yxatdan o‘tish oxirgi kuni")}
                                    </th>
                                    <th className={`${thBase} w-[240px] text-center`}>{t("Imtihon sanasi")}</th>
                                </tr>
                            </thead>

                            <tbody>
                                {examSchedule.map((row, idx) => (
                                    <tr key={`${row.name_uz}-${idx}`}>
                                        <td className={`${tdBase} whitespace-normal break-words leading-[1.2]`}>
                                            {row[`name_${i18n?.language}`]}
                                        </td>
                                        <td className={`${tdBase} text-center`}>{row[`regLast_${i18n?.language}`]}</td>
                                        <td className={`${tdBase} text-center`}>{row[`exam_${i18n?.language}`]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Certificate />
        </Box>
    );
}

export default AAFOIExam;
