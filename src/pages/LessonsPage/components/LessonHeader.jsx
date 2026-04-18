import React from "react";
import { useTranslation } from "react-i18next";

const LessonHeader = ({ course, progress, language }) => {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col gap-2 border-b border-gray-300 pb-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-900">
        {course?.[`name_${language}`]}
      </h2>
      <div className="flex items-center gap-4">
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FE5D37] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
          {t("O'zlashtirish ko'rsatkichi")}: {progress}%
        </span>
      </div>
    </div>
  );
};

export default LessonHeader;
