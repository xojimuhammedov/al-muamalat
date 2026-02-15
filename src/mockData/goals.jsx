export const goals = [
  {
    id: 1,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="barGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3D6B5E" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3D6B5E" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3D6B5E" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#3D6B5E" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="barGrad3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3D6B5E" />
            <stop offset="100%" stopColor="#3D6B5E" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="trendLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4882C" />
            <stop offset="100%" stopColor="#E8A54B" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <line
          x1="4"
          y1="35"
          x2="36"
          y2="35"
          stroke="#3D6B5E"
          strokeWidth="1.5"
          strokeOpacity="0.15"
          strokeLinecap="round"
        />

        <rect
          x="6"
          y="23"
          width="7"
          height="12"
          rx="2"
          fill="url(#barGrad1)"
          stroke="#3D6B5E"
          strokeWidth="1.2"
        />
        <rect
          x="6"
          y="23"
          width="7"
          height="3"
          rx="2"
          fill="#3D6B5E"
          fillOpacity="0.15"
        />

        <rect
          x="16.5"
          y="17"
          width="7"
          height="18"
          rx="2"
          fill="url(#barGrad2)"
          stroke="#3D6B5E"
          strokeWidth="1.2"
        />
        <rect
          x="16.5"
          y="17"
          width="7"
          height="3"
          rx="2"
          fill="#3D6B5E"
          fillOpacity="0.2"
        />

        <rect
          x="27"
          y="10"
          width="7"
          height="25"
          rx="2"
          fill="url(#barGrad3)"
          stroke="#3D6B5E"
          strokeWidth="1.2"
        />
        <rect
          x="27"
          y="10"
          width="7"
          height="3"
          rx="2"
          fill="#3D6B5E"
          fillOpacity="0.25"
        />

        <path
          d="M9.5 16L20 9.5L30.5 6"
          stroke="url(#trendLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />

        <circle
          cx="9.5"
          cy="16"
          r="2.5"
          fill="#D4882C"
          stroke="#fff"
          strokeWidth="1.2"
        />
        <circle
          cx="20"
          cy="9.5"
          r="2.5"
          fill="#D4882C"
          stroke="#fff"
          strokeWidth="1.2"
        />
        <circle
          cx="30.5"
          cy="6"
          r="2.5"
          fill="#D4882C"
          stroke="#fff"
          strokeWidth="1.2"
        />

        <path
          d="M27 4.5L31.5 5.5L30.5 10"
          stroke="#D4882C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title_en: "Institutionalize Islamic Finance in Uzbekistan",
    title_uz: "O‘zbekistonda islomiy moliyani institutsional rivojlantirish",
    description_uz:
      "O‘zbekiston moliya tizimiga islomiy bank, takaful, sukuk va islomiy moliya tamoyillariga muvofiq moliyaviy xizmatlarni milliy qonunchilik va xalqaro standartlarga mos ravishda joriy etish va rivojlantirishga ko‘maklashish.",
    description_en:
      "To support the development and formal integration of Islamic banking, takaful, Shariah-compliant financial services in Uzbekistan's finance in national regulations and international standards.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="roofGrad"
            x1="20"
            y1="4"
            x2="20"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3D6B5E" />
            <stop offset="100%" stopColor="#3D6B5E" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient
            id="pillarGrad"
            x1="0"
            y1="18"
            x2="0"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3D6B5E" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3D6B5E" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient
            id="baseGrad"
            x1="8"
            y1="28"
            x2="32"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3D6B5E" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3D6B5E" />
            <stop offset="100%" stopColor="#3D6B5E" stopOpacity="0.8" />
          </linearGradient>
          <filter id="roofShadow">
            <feDropShadow
              dx="0"
              dy="1"
              stdDeviation="1"
              floodColor="#3D6B5E"
              floodOpacity="0.2"
            />
          </filter>
        </defs>

        <path
          d="M20 4L4 18H36L20 4Z"
          fill="url(#roofGrad)"
          stroke="#3D6B5E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#roofShadow)"
        />

        <path d="M20 7L10 16H30L20 7Z" fill="#3D6B5E" fillOpacity="0.1" />

        <circle
          cx="20"
          cy="12.5"
          r="3"
          fill="#D4882C"
          fillOpacity="0.9"
          stroke="#fff"
          strokeWidth="1"
        />
        <circle cx="20" cy="12.5" r="1.2" fill="#fff" fillOpacity="0.8" />

        <rect
          x="6"
          y="17"
          width="28"
          height="2"
          rx="0.5"
          fill="#3D6B5E"
          fillOpacity="0.25"
        />

        <rect
          x="11"
          y="19"
          width="3"
          height="10"
          rx="1"
          fill="url(#pillarGrad)"
          stroke="#3D6B5E"
          strokeWidth="1"
        />
        <rect
          x="18.5"
          y="19"
          width="3"
          height="10"
          rx="1"
          fill="url(#pillarGrad)"
          stroke="#3D6B5E"
          strokeWidth="1"
        />
        <rect
          x="26"
          y="19"
          width="3"
          height="10"
          rx="1"
          fill="url(#pillarGrad)"
          stroke="#3D6B5E"
          strokeWidth="1"
        />

        <rect
          x="10.5"
          y="19"
          width="4"
          height="1.5"
          rx="0.5"
          fill="#3D6B5E"
          fillOpacity="0.35"
        />
        <rect
          x="18"
          y="19"
          width="4"
          height="1.5"
          rx="0.5"
          fill="#3D6B5E"
          fillOpacity="0.35"
        />
        <rect
          x="25.5"
          y="19"
          width="4"
          height="1.5"
          rx="0.5"
          fill="#3D6B5E"
          fillOpacity="0.35"
        />

        <rect
          x="7"
          y="29"
          width="26"
          height="3.5"
          rx="1.2"
          fill="url(#baseGrad)"
          stroke="#3D6B5E"
          strokeWidth="1.2"
        />

        <rect
          x="7"
          y="29"
          width="26"
          height="1"
          rx="0.5"
          fill="#3D6B5E"
          fillOpacity="0.15"
        />

        <ellipse
          cx="20"
          cy="35"
          rx="14"
          ry="1.5"
          fill="#3D6B5E"
          fillOpacity="0.08"
        />
      </svg>
    ),
    title_en: "Build Local Expertise and Professional Capacity",
    title_uz: "Mahalliy kadrlar va ekspert salohiyatini rivojlantirish",
    description_uz:
      "Ta’lim, xalqaro sertifikatlarga tayyorlash va amaliy konsalting loyihalari orqali islomiy moliya sohasida mahalliy mutaxassislar, maslahatchilar va olimlar salohiyatini mustahkamlash.",
    description_en:
      "To develop a strong base of local Islamic finance, advisors, and scholars through training, certification, and consulting engagement.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="circleGrad"
            x1="6"
            y1="6"
            x2="34"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3D6B5E" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#3D6B5E" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient
            id="ringGrad"
            x1="6"
            y1="6"
            x2="34"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3D6B5E" />
            <stop offset="100%" stopColor="#3D6B5E" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="checkGrad"
            x1="13"
            y1="15"
            x2="27"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#D4882C" />
            <stop offset="100%" stopColor="#E8A54B" />
          </linearGradient>
          <filter id="checkGlow">
            <feDropShadow
              dx="0"
              dy="0.5"
              stdDeviation="1.2"
              floodColor="#D4882C"
              floodOpacity="0.35"
            />
          </filter>
          <filter id="ringShadow">
            <feDropShadow
              dx="0"
              dy="1"
              stdDeviation="1.5"
              floodColor="#3D6B5E"
              floodOpacity="0.15"
            />
          </filter>
        </defs>

        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="#3D6B5E"
          strokeWidth="0.5"
          strokeOpacity="0.15"
          strokeDasharray="3 3"
        />

        <circle cx="20" cy="20" r="14" fill="url(#circleGrad)" />

        <circle
          cx="20"
          cy="20"
          r="14"
          stroke="url(#ringGrad)"
          strokeWidth="2"
          filter="url(#ringShadow)"
        />

        <path
          d="M12 10.5A14 14 0 0 1 29.5 12"
          stroke="#3D6B5E"
          strokeWidth="1"
          strokeOpacity="0.12"
          strokeLinecap="round"
        />

        <path
          d="M13 20.5L17.5 25.5L27.5 14.5"
          stroke="url(#checkGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#checkGlow)"
        />

        <circle cx="30" cy="9" r="1.8" fill="#D4882C" fillOpacity="0.7" />
        <circle cx="30" cy="9" r="0.8" fill="#fff" fillOpacity="0.6" />
      </svg>
    ),
    title_en: "Set High Standards of Islamic Governance and Trust",
    title_uz:
      "Islomiy moliya boshqaruvi va ishonch standartlarini yuksaltirish",
    description_uz:
      "O‘zbekistonda Islomiy moliyasiga muvofiqlik, boshqaruv va axloqiy moliya amaliyotlarini oshirish uchun muassasalarga ochiq, mas’uliyatli va xalqaro me’yorlarga mos tizimlarni joriy etishda ko‘mak berish.",
    description_en:
      "To raise the level of Islamic Finance, compliance, and ethical finance practices in Uzbekistan by helping institutions implement transparent, accountable, and aligned frameworks.",
  },
];
