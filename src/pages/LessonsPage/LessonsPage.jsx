import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";

// Hooks
import { useLessonLogic } from "./hooks/useLessonLogic";

// Components
import LessonHeader from "./components/LessonHeader";
import LessonSidebar from "./components/LessonSidebar";
import LessonVideoPlayer from "./components/LessonVideoPlayer";
import DiscussionSection from "./components/DiscussionSection";

function LessonsPage() {
  const { id } = useParams();
  const [t, i18n] = useTranslation();
  
  const {
    lessons,
    course,
    selectedLesson,
    setSelectedLesson,
    completedLessons,
    progress,
    currentIndex,
    handleNext,
    handlePrev
  } = useLessonLogic(id);

  if (lessons && lessons.length === 0) {
    return (
      <div className="mt-24 container mx-auto text-center py-24">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-5.755-4.5-10.747-10-10.747z" />
            </svg>
          </div>
          <p className="text-xl font-medium text-slate-600">
            {t("Ushbu kursda darslar mavjud emas")}
          </p>
          <Link to="/profile" className="inline-flex items-center gap-2 text-[#FE5D37] font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4" /> {t("Kurslar ro'yxatiga qaytish")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-24 pb-20">
      <div className="container mx-auto px-4">
        <LessonHeader 
          course={course} 
          progress={progress} 
          language={i18n.language} 
        />

        <div className="flex flex-col lg:flex-row mt-8 gap-8">
          <LessonSidebar
            lessons={lessons}
            selectedLesson={selectedLesson}
            setSelectedLesson={setSelectedLesson}
            completedLessons={completedLessons}
            currentIndex={currentIndex}
            language={i18n.language}
          />

          <div className="flex-1 rounded-2xl bg-white shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">
                {course?.[`name_${i18n.language}`]}
              </h2>
              <Link
                to="/profile"
                className="inline-flex items-center gap-2 rounded-full bg-[#FE5D37] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#FE5D37]/30 hover:bg-[#FE5D37]/90 transition-all active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" /> 
                {t("Kurslar ro'yxatiga qaytish")}
              </Link>
            </div>

            {selectedLesson && (
              <div className="space-y-8">
                <LessonVideoPlayer
                  selectedLesson={selectedLesson}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  currentIndex={currentIndex}
                  totalLessons={lessons.length}
                  isCompleted={completedLessons.map(String).includes(String(selectedLesson.id))}
                  language={i18n.language}
                />
                <DiscussionSection courseId={id} lessonId={selectedLesson.id} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonsPage;
