import React from "react";
import CourseList from "./components/CourseList";
import { useTranslation } from "react-i18next";

const OnlineCourse = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className="bg-white">
        <section className="py-8 md:px-6 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              {t("Online courses")}
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              {t(
                "Al Muamalat Education's international study programs offer an in-depth learning experience at leading Islamic financial institutions around the world.",
              )}
            </p>
          </div>
        </section>
      </main>
      <CourseList />
    </>
  );
};

export default OnlineCourse;
