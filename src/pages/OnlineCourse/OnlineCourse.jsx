import { CheckCircle2 } from "lucide-react";
import React from "react";
import CourseList from "./components/CourseList";
import { useTranslation } from "react-i18next";

const OnlineCourse = () => {
  const { t } = useTranslation();
  const learningPoints = [
    "Gain a comprehensive understanding of Islamic finance principles and ethics.",
    "Build a portfolio with 10+ real-world projects in Islamic financial services.",
    "Learn to develop and manage Sharia-compliant financial products.",
    "Master key concepts in Islamic banking, investment, and wealth management.",
    "Understand the fundamentals of risk management in Islamic finance.",
    "Develop skills to work as an Islamic finance consultant.",
  ];

  const benefits = [
    "Lifetime access",
    "Video lessons",
    "Tests",
    "Projects",
    "Downloadable resources",
    "Access via mobile device",
  ];
  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="px-4 py-8 md:px-6 lg:px-8 mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              International educational programs
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Al Muamalat Education's international study programs offer an
              in-depth learning experience at leading Islamic financial
              institutions around the world.
            </p>
          </div>
        </section>

        <section className="px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* What you'll learn */}
            <div className="bg-slate-50 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-balance">
                What you'll learn
              </h2>
              <div className="space-y-5">
                {learningPoints.map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-teal-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why study */}
            <div className="bg-slate-50 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-balance">
                Why should you study at <br className="hidden sm:block" />
                <span className="text-teal-600">"AL-MUAMALAT"?</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                    <p className="text-gray-700 text-sm md:text-base">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <CourseList />
    </>
  );
};

export default OnlineCourse;
