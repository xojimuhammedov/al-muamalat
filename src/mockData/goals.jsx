export const goals = [
  {
    id: 1,
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bar1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#4A8070" />
            <stop offset="45%" stop-color="#3D6B5E" />
            <stop offset="100%" stop-color="#2E5247" />
          </linearGradient>

          <linearGradient id="bar2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#5A9485" />
            <stop offset="50%" stop-color="#477A6B" />
            <stop offset="100%" stop-color="#356155" />
          </linearGradient>

          <linearGradient id="bar3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#6AA89A" />
            <stop offset="40%" stop-color="#5A8F81" />
            <stop offset="100%" stop-color="#3F6C60" />
          </linearGradient>

          <linearGradient id="trend" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#F4A261" />
            <stop offset="50%" stop-color="#E76F51" />
            <stop offset="100%" stop-color="#E07A5F" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.4" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="shadow" />
            <feFlood flood-color="#000000" flood-opacity="0.25" />
            <feComposite in2="shadow" operator="in" />
            <feOffset dx="1" dy="2" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <line
          x1="6"
          y1="42"
          x2="42"
          y2="42"
          stroke="#2E5247"
          stroke-width="1.8"
          stroke-opacity="0.18"
          stroke-linecap="round"
        />

        <g filter="url(#softShadow)">
          <rect
            x="8"
            y="28"
            width="8"
            height="14"
            rx="4"
            fill="url(#bar1)"
            stroke="#355D52"
            stroke-width="1.4"
          />
          <rect
            x="19"
            y="19"
            width="8"
            height="23"
            rx="4"
            fill="url(#bar2)"
            stroke="#3A6459"
            stroke-width="1.4"
          />
          <rect
            x="30"
            y="9"
            width="8"
            height="33"
            rx="4"
            fill="url(#bar3)"
            stroke="#3F6C60"
            stroke-width="1.4"
          />
        </g>

        <path
          d="M12 24 L24 14 L36 7"
          stroke="url(#trend)"
          stroke-width="3.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          filter="url(#glow)"
        />

        <g filter="url(#glow)">
          <circle
            cx="12"
            cy="24"
            r="3.5"
            fill="#F4A261"
            stroke="#ffffff"
            stroke-width="1.6"
          />
          <circle
            cx="24"
            cy="14"
            r="3.5"
            fill="#F4A261"
            stroke="#ffffff"
            stroke-width="1.6"
          />
          <circle
            cx="36"
            cy="7"
            r="3.5"
            fill="#F4A261"
            stroke="#ffffff"
            stroke-width="1.6"
          />
        </g>

        <path
          d="M33 4 L38 5.5 L36.5 11 L33 4 Z"
          fill="#E07A5F"
          fill-opacity="0.9"
          stroke="#ffffff"
          stroke-width="0.8"
          stroke-opacity="0.4"
        />

        <circle cx="36" cy="7" r="1.8" fill="white" fill-opacity="0.35" />
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
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="roofGrad"
            x1="24"
            y1="4"
            x2="24"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stop-color="#4A8070" />
            <stop offset="40%" stop-color="#3D6B5E" />
            <stop offset="100%" stop-color="#2E5247" />
          </linearGradient>
          <linearGradient id="pillarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#5A9485" />
            <stop offset="50%" stop-color="#477A6B" />
            <stop offset="100%" stop-color="#356155" />
          </linearGradient>
          <linearGradient
            id="baseGrad"
            x1="8"
            y1="30"
            x2="40"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stop-color="#3D6B5E" />
            <stop offset="50%" stop-color="#2E5247" />
            <stop offset="100%" stop-color="#3D6B5E" />
          </linearGradient>

          <radialGradient id="centerGrad" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stop-color="#F4A261" />
            <stop offset="70%" stop-color="#E07A5F" />
            <stop offset="100%" stop-color="#D4882C" stop-opacity="0.7" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.5" result="shadow" />
            <feFlood flood-color="#000" flood-opacity="0.22" />
            <feComposite in2="shadow" operator="in" />
            <feOffset dx="2" dy="3" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <ellipse
          cx="24"
          cy="44"
          rx="18"
          ry="3"
          fill="#2E5247"
          fill-opacity="0.12"
        />

        <g filter="url(#softShadow)">
          <path
            d="M24 4 L6 20 H42 L24 4 Z"
            fill="url(#roofGrad)"
            stroke="#355D52"
            stroke-width="1.8"
            stroke-linejoin="round"
          />
          <path
            d="M24 8 L12 19 H36 L24 8 Z"
            fill="#3D6B5E"
            fill-opacity="0.18"
          />
          <g filter="url(#glow)">
            <circle cx="24" cy="16" r="5.5" fill="url(#centerGrad)" />
            <circle cx="24" cy="16" r="2.8" fill="#fff" fill-opacity="0.75" />
          </g>

          <rect
            x="8"
            y="29"
            width="32"
            height="5"
            rx="2"
            fill="url(#baseGrad)"
            stroke="#355D52"
            stroke-width="1.6"
          />
          <rect
            x="8"
            y="29"
            width="32"
            height="1.5"
            rx="1"
            fill="#fff"
            fill-opacity="0.12"
          />
          <rect
            x="13"
            y="20"
            width="4"
            height="12"
            rx="1.5"
            fill="url(#pillarGrad)"
            stroke="#3A6459"
            stroke-width="1.2"
          />
          <rect
            x="22"
            y="20"
            width="4"
            height="12"
            rx="1.5"
            fill="url(#pillarGrad)"
            stroke="#3A6459"
            stroke-width="1.2"
          />
          <rect
            x="31"
            y="20"
            width="4"
            height="12"
            rx="1.5"
            fill="url(#pillarGrad)"
            stroke="#3A6459"
            stroke-width="1.2"
          />

          <rect
            x="12.5"
            y="20"
            width="5"
            height="1.8"
            rx="0.8"
            fill="#fff"
            fill-opacity="0.15"
          />
          <rect
            x="21.5"
            y="20"
            width="5"
            height="1.8"
            rx="0.8"
            fill="#fff"
            fill-opacity="0.15"
          />
          <rect
            x="30.5"
            y="20"
            width="5"
            height="1.8"
            rx="0.8"
            fill="#fff"
            fill-opacity="0.15"
          />
        </g>

        <path
          d="M38 6 L42 8 L40 13 L38 6 Z"
          fill="#E07A5F"
          fill-opacity="0.85"
          stroke="#fff"
          stroke-width="0.8"
          stroke-opacity="0.4"
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
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="85%">
            <stop offset="0%" stop-color="#3D6B5E" stop-opacity="0.08" />
            <stop offset="100%" stop-color="#2E5247" stop-opacity="0.03" />
          </radialGradient>

          <linearGradient
            id="ringGrad"
            x1="8"
            y1="8"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stop-color="#5A9485" />
            <stop offset="45%" stop-color="#3D6B5E" />
            <stop offset="100%" stop-color="#356155" />
          </linearGradient>

          <linearGradient
            id="checkGrad"
            x1="14"
            y1="16"
            x2="34"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stop-color="#F4A261" />
            <stop offset="50%" stop-color="#E07A5F" />
            <stop offset="100%" stop-color="#D4882C" />
          </linearGradient>

          <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.6" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="shadow" />
            <feFlood flood-color="#000" flood-opacity="0.25" />
            <feComposite in2="shadow" operator="in" />
            <feOffset dx="2" dy="3" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="highlight" cx="30%" cy="30%" r="40%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
          </radialGradient>
        </defs>

        <circle cx="24" cy="24" r="22" fill="url(#bgGrad)" />

        <circle
          cx="24"
          cy="24"
          r="21"
          stroke="#3D6B5E"
          stroke-width="0.8"
          stroke-opacity="0.12"
          stroke-dasharray="4 5"
        />

        <g filter="url(#softShadow)">
          <circle
            cx="24"
            cy="24"
            r="17"
            fill="none"
            stroke="url(#ringGrad)"
            stroke-width="3.5"
            stroke-linecap="round"
          />
        </g>

        <circle
          cx="24"
          cy="24"
          r="15.5"
          fill="none"
          stroke="#3D6B5E"
          stroke-width="1"
          stroke-opacity="0.18"
        />

        <g filter="url(#glow)">
          <path
            d="M15 22 L21 28.5 L33 15"
            stroke="url(#checkGrad)"
            stroke-width="4.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>

        <path
          d="M15 22 L21 28.5 L33 15"
          stroke="url(#highlight)"
          stroke-width="2.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-opacity="0.6"
        />

        <g filter="url(#glow)">
          <circle cx="34" cy="12" r="2.8" fill="#F4A261" fill-opacity="0.9" />
          <circle cx="34" cy="12" r="1.1" fill="#ffffff" fill-opacity="0.7" />
        </g>
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
