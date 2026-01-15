import CpssImage from '../assets/cpss.png'
import CpfasImage from '../assets/cpfas.png'
import CpaageImage from '../assets/cpaage.png'
import IslomMoliyaImage from '../assets/islom-moliya.png'
import MoliyaRuImage from '../assets/moliya-ru.png'

export const courseData = [
    {
        id: 1,
        title_uz: "Certificate of Proficiency in Shari’ah Standards (CPSS)",
        title_en: "Certificate of Proficiency in Shari’ah Standards (CPSS)",
        text_uz: `
            CPSS - bu AAOIFI Shariat standartlari talablarini to‘g‘ri tushunish, sharhlash va amalda qo‘llash ko‘nikmalarini rivojlantirishni istagan islomiy moliya sohasidagi mutaxassislar uchun mo‘ljallangan yuqori darajadagi sertifikat dasturi. Ushbu dastur texnik va amaliy bilimlarni rivojlantirishga alohida e’tibor qaratadi.
            <br /> AAOIFI tashkilotining CPSS sertifikatiga Al Muamalat Consulting kompaniyasining tayyorlov kursi:
            <p>• Islom moliyasi amaliyotini tartibga soluvchi 59 Shariat standartlari va tamoyillarini chuqur o‘rgatadi.</p>
            <p>• Darslar 25 sessiyadan iborat bo‘lib, onlayn jonli formatda o‘tkaziladi va qayta ko‘rish uchun yozib olinadi.</p>
            <p>• Ishtirokchilar uchun har bir mavzuning taqdimoti pdf shaklida ulashilinadi.</p>
            <p>• Xalqaro tan olingan shariat auditi va maslahat mutaxassisi sifatida malakaga ega bo‘lishga ko‘mak beradi.</p>
            <br /> Tayyorlov kursi: Ingliz tilida.
        `,
        text_en: `
            CPSS is an advanced certification program designed for Islamic finance professionals who seek to develop the skills needed to correctly understand, interpret, and apply AAOIFI Shari’ah Standards in practice. The program places particular emphasis on strengthening both technical knowledge and practical, hands-on competence.
            <br /> Al Muamalat Consulting preparatory course for AAOIFI’s CPSS certificate:
            <p>• Deeply teaches 59 Shari’ah standards and principles that regulate Islamic finance practice.</p>
            <p>• Consists of 25 sessions which will be held in a live online format and recorded for review.</p>
            <p>• Includes presentations on each topic which will be shared in pdf format for participants.</p>
            <p>• Helps to qualify as an internationally recognized Shariah audit and consulting specialist.</p>
            <br /> Course language: English.
        `,
        image: CpssImage
    },
    {
        id: 2,
        title_uz: "Certificate of Proficiency in Financial Accounting Standards (CPFAS)",
        title_en: "Certificate of Proficiency in Financial Accounting Standards (CPFAS)",
        text_uz: `
            CPFAS - AAOIFI hisob standartlarini ishlatish, moliyaviy hisobotlarni to‘g‘ri yuritish va islomiy buxgalteriya amaliyotini o‘rganish istagan islomiy moliya sohasidagi mutaxassislar uchun mo‘ljallangan yuqori darajadagi sertifikat dasturi. Ushbu dastur texnik va amaliy bilimlarni rivojlantirishga alohida e’tibor qaratadi.
            <br /> AAOIFI tashkilotining CPFAS sertifikatiga Al Muamalat Consulting kompaniyasining tayyorlov kursi:
            <p>• Islom moliyasi amaliyotini tartibga soluvchi 28 Shariat standartlari va tamoyillarini chuqur o‘rgatadi.</p>
            <p>• Darslar 15 sessiyadan iborat bo‘lib, onlayn jonli formatda o‘tkaziladi va qayta ko‘rish uchun yozib olinadi.</p>
            <p>• Ishtirokchilar uchun har bir mavzuning taqdimoti pdf shaklida ulashilinadi.</p>
            <p>• Islomiy buxgalteriya va moliyaviy hisobotlarni to‘g‘ri yuritish bo‘yicha mutaxassisi sifatida malakaga ega bo‘lishga ko‘mak beradi.</p>
            <br /> Tayyorlov kursi: Ingliz tilida.
        `,
        text_en: `
             CPFAS is an advanced certification program designed for specialists in Islamic finance who wish to learn how to use AAOIFI accounting standards, properly maintain financial statements, and study Islamic accounting practices. This program pays special attention to the development of technical and practical knowledge.
            <br /> Al Muamalat Consulting preparatory course for AAOIFI’s CPFAS certificate:
            <p>• Deeply teaches 28 Shari’ah standards and principles that regulate Islamic finance practice.</p>
            <p>• Consists of 15 sessions which will be held in a live online format and recorded for review.</p>
            <p>• Includes presentations on each topic which will be shared in pdf format for participants.</p>
            <p>• Helps to qualify as an internationally recognized Islamic accounting and financial reporting specialist.</p>
            <br /> Course language: English.
        `,
        image: CpfasImage
    },
    {
        id: 3,
        title_uz: "Certificate of Proficiency in Audit, Assurance, Governance, and Ethics (CPAAGE)",
        title_en: "Certificate of Proficiency in Audit, Assurance, Governance, and Ethics (CPAAGE)",
        text_uz: `
            CPAAGE – islomiy moliya sohasidagi mutaxassislar uchun mo‘ljallangan ilg‘or sertifikat bo‘lib, u islomiy moliya institutlarida to‘liq muvofiqlik va samarali nazoratni ta’minlash maqsadida AAOIFI’ning audit, korporativ boshqaruv, etika hamda shar’iy (Shari’ah) ko‘rib chiqish standartlarini texnik jihatdan amaliy tatbiq etishga yo‘naltirilgan.
            <br /> Tayyorlov kursi: Ingliz tilida.
        `,
        text_en: `
            CPAAGE is an advanced certification program designed for specialists in Islamic finance, aimed at the technical practical implementation of AAOIFI’s auditing, corporate governance, ethics, and Shari’ah standards to ensure full compliance and effective oversight in Islamic financial institutions.
            <br /> Course language: English.
        `,
        image: CpaageImage
    },
    {
        id: 4,
        title_uz: "Islomiy moliya, bank ishi va qimmatli qog‘ozlar ilg‘or kursi (o‘zbek tilida)",
        title_en: "Advanced course in Islamic Finance, Banking and Securities (in Uzbek)",
        text_uz: `
            Islomiy moliya, bank ishi va qimmatli qog‘ozlar ilg‘or kursi Islomiy bank mexanizmlari, investitsiya mahsulotlari hamda mintaqaviy moliya institutlarida qo‘llaniladigan kapital bozori amaliyotlari bo‘yicha mustahkam nazariy asos va amaliy ko‘nikmalarni uyg‘unlashtiradi.
            <br /> Markaziy Osiyo kontekstida islomiy bank amaliyotlari va kapital bozorlarida amaliy ekspertizaga ega bo‘lishni istagan mutaxassislar uchun mo‘ljallangan, to‘liq o‘zbek tilida olib boriladigan 16 sessiyalik kompleks dastur.
            <br /> Jonli interaktiv sessiyalar hamda moslashuvchan o‘qish uchun yozib olingan materiallar taqdim etiladi.
            <br /> Tayyorlov kursi: O'zbek tilida.
        `,
        text_en: `
            Advanced course in Islamic Finance, Banking and Securities combines solid theoretical foundations and practical skills in Islamic banking mechanisms, investment products, and capital market practices used in regional financial institutions.
            <br /> A comprehensive 16 session program, conducted entirely in Uzbek language, designed for specialists wishing to gain practical expertise in Islamic banking practices and capital markets in the context of Central Asia.
            <br /> Live interactive sessions and recorded materials are provided for flexible reading.
            <br /> Course language: Uzbek.
        `,
        image: IslomMoliyaImage
    },
    {
        id: 5,
        title_uz: "Islomiy moliya va shariat standartlari kursi (Rus tilida)",
        title_en: "Course on Islamic Finance and Shari’ah Standards (in Russian)",
        text_uz: `
            Islomiy moliya va shariat standartlari kursi – shariat standartlari talablari asosida ishlab chiqilgan amaliy kurs bo‘lib, islomiy moliya amaliyotida AAOIFI Shariat standartlarini to‘g‘ri tushunish, talqin qilish va bitimlarda qo‘llash ko‘nikmalarini shakllantirishga qaratiladi.
            <br /> Onlayn interaktiv sessiyalar hamda moslashuvchan o‘qish uchun yozib olingan materiallar taqdim etiladi.
            <br /> Kursdagi sessiyalar soni 15 ta bo‘lib, amaliyotda eng ko‘p qo‘llaniladigan shariatga mos shartnomalar va bitimlarni o‘z ichiga oladi.
            <br /> Tayyorlov kursi: Rus tilida.
        `,
        text_en: `
            Course on Islamic Finance and Shari’ah Standards – a practical course developed based on Shari’ah standards requirements, focused on developing skills in correctly understanding, interpreting, and applying AAOIFI Shari’ah standards in Islamic finance practice.
            <br /> Online interactive sessions and recorded materials are provided for flexible reading.
            <br /> The number of sessions in the course is 15, which includes the most commonly used Shari’ah-compliant contracts and agreements in practice.
            <br /> Course language: Russian.
        `,
        image: MoliyaRuImage
    },
]