import React, { useMemo } from 'react';
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
        exam_uz: "22 Aprel 2026",
        exam_en: "22 April 2026",
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
    const lang = i18n.language;
    const regMeta = useMemo(() => {
        const meta = examSchedule.map(() => ({ show: true, span: 1 }));

        for (let i = 0; i < examSchedule.length; i++) {
            const currReg = examSchedule[i][`regLast_${lang}`];
            if (!currReg) {
                continue;
            }

            let span = 1;
            for (let j = i + 1; j < examSchedule.length; j++) {
                const nextReg = examSchedule[j][`regLast_${lang}`];

                if (!nextReg) {
                    span++;
                    meta[j].show = false;
                } else {
                    break;
                }
            }

            meta[i].span = span;
            i = i + span - 1;
        }

        return meta;
    }, [examSchedule, lang]);

    const thBase =
        "border border-[#0B3B2B] bg-[#0B3B2B] text-white font-semibold text-[15px] py-3 px-3";
    const tdBase =
        "border border-[#0B3B2B] bg-white text-[#111827] text-[15px] py-3 px-3 align-middle";
    return (
        <Box p={'36px 0'} mt={'96px'}>
            <Main />
            <div className="container">
                <div className={`overflow-hidden rounded-[4px] ${border}`}>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full border-collapse min-w-[920px] table-fixed">
                            <thead>
                                <tr>
                                    <th className={`${thBase} text-left`}>{t("Nomi")}</th>
                                    <th className={`${thBase} w-[280px] text-center`}>
                                        {t("Ro‘yxatdan o‘tish oxirgi kuni")}
                                    </th>
                                    <th className={`${thBase} w-[240px] text-center`}>{t("Imtihon sanasi")}</th>
                                </tr>
                            </thead>

                            <tbody>
                                {examSchedule.map((row, idx) => {
                                    const name = row[`name_${lang}`] ?? "";
                                    const regLast = row[`regLast_${lang}`] ?? "";
                                    const exam = row[`exam_${lang}`] ?? "";

                                    return (
                                        <tr key={`${name}-${idx}`}>
                                            {/* 1-ustun */}
                                            <td className={`${tdBase} text-left whitespace-normal break-words leading-[1.2]`}>
                                                {name}
                                            </td>

                                            {/* 2-ustun (rowSpan) */}
                                            {regMeta[idx].show ? (
                                                <td className={`${tdBase} text-center`} rowSpan={regMeta[idx].span}>
                                                    {regLast}
                                                </td>
                                            ) : null}

                                            {/* 3-ustun */}
                                            <td className={`${tdBase} text-center`}>{exam}</td>
                                        </tr>
                                    );
                                })}
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
