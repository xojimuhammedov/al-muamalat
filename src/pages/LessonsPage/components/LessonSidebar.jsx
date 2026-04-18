import React from "react";
import { CheckCircle2, Lock } from "lucide-react";

const LessonSidebar = ({ 
  lessons, 
  selectedLesson, 
  setSelectedLesson, 
  completedLessons, 
  currentIndex, 
  language 
}) => {
  return (
    <div className="w-full lg:w-80">
      <div className="sticky top-8 rounded-lg bg-white shadow-md">
        <div className="h-[470px] lg:h-[670px] overflow-y-auto p-4">
          <div className="space-y-1">
            {lessons?.map((lesson, index) => {
              const lessonIdString = String(lesson.id);
              const isCompleted = completedLessons.map(String).includes(lessonIdString);
              const isSelected = String(selectedLesson?.id) === lessonIdString;
              const isLocked = index > currentIndex && !isCompleted;

              return (
                <button
                  key={lesson?.id}
                  onClick={() => !isLocked && setSelectedLesson(lesson)}
                  disabled={isLocked}
                  className={`w-full rounded-md px-3 py-2 text-left text-sm transition-all duration-200 group ${isSelected
                    ? "bg-[#FE5D37] text-white"
                    : isLocked
                      ? "text-slate-400 cursor-not-allowed opacity-60"
                      : "text-slate-700 hover:bg-slate-100"
                    }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold transition-colors ${
                        isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                      }`}>
                        {index + 1}
                      </span>
                      <span className="line-clamp-1">
                        {lesson?.[`title_${language}`]}
                      </span>
                    </div>
                    <div className="flex-shrink-0 ml-2">
                      {isCompleted ? (
                        <CheckCircle2 className={`w-4 h-4 ${isSelected ? "text-white" : "text-green-500"}`} />
                      ) : isLocked ? (
                        <Lock className="w-3.5 h-3.5 text-slate-400" />
                      ) : null}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonSidebar;
