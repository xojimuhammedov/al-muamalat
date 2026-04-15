import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { API_URL } from "../../api";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function LessonsPage() {
  const { id } = useParams();
  const [t, i18n] = useTranslation();
  const [lesson, setLesson] = useState();
  const [course, setCourse] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_URL}/lessons?limit=100`)
      .then((response) => setLesson(response?.data?.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${API_URL}/courses/main/`)
      .then((res) => setCourse(res?.data?.data));
  }, [id]);

  const findCourse = useMemo(() => {
    return course.find((item) => String(item.course_id) === String(id));
  }, [course, id]);

  const filteredLessons = useMemo(() => {
    return lesson?.filter((lesson) => String(lesson?.course_id) === String(id));
  }, [lesson, id]);

  return (
    <div className="mt-24">
      <div className="container mx-auto">
        <h2 className="text-lg md:text-2xl border-b border-gray-300 pb-4 font-bold text-slate-900">
          {findCourse?.[`name_${i18n?.language}`]}
        </h2>
        {filteredLessons?.length > 0 && (
          <div className="flex flex-col lg:flex-row mt-4 gap-6">
            <div className="w-full lg:w-80">
              <div className="sticky top-8 rounded-lg bg-white shadow-md">
                <div className="h-[470px] lg:h-[670px] overflow-y-auto p-4">
                  <div className="space-y-1">
                    {filteredLessons?.map((lesson) => (
                      <button
                        key={lesson?.id}
                        onClick={() => setSelectedLesson(lesson)}
                        className={`w-full rounded-md px-3 py-2 text-left text-sm transition-all duration-200 ${selectedLesson?.id === lesson?.id
                          ? "bg-[#FE5D37] text-white hover:bg-[#FE5D37]/80"
                          : "text-slate-700 hover:bg-slate-100"
                          }`}
                      >
                        <span className="line-clamp-1">
                          {lesson?.[`title_${i18n?.language}`]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-white shadow-md p-4">
              <div className="mb-6 flex flex-col gap-2 lg:flex-row items-baseline lg:items-center justify-between">
                <div>
                  <h2 className="text-lg md:text-2xl font-bold text-slate-900">
                    {findCourse?.[`name_${i18n?.language}`]}
                  </h2>
                </div>
                <Link
                  to={"/profile"}
                  onClick={() => setSelectedLesson(null)}
                  className="group items-center gap-2 rounded-full bg-[#FE5D37] px-5 py-2 text-[13px] font-semibold text-white shadow-lg shadow-[#FE5D37]/20 transition-all duration-300 flex"
                >
                  <ArrowLeft className="text-white w-4 h-4" />{" "}
                  {t("Kurslar ro'yxatiga qaytish")}
                </Link>
              </div>
              {selectedLesson && (
                <div className="overflow-hidden">
                  <div className="space-y-6">
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://player.vimeo.com/video/${selectedLesson?.video_url}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                        title={selectedLesson?.name_uz}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="mt-8 font-medium">
                      {selectedLesson?.[`title_${i18n?.language}`]}
                    </h3>
                    <div className="flex mt-4 flex-col gap-2">
                      {selectedLesson?.documents?.map((file, index) => (
                        <a
                          key={index}
                          href={file?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {file?.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {filteredLessons?.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 text-gray-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-5.755-4.5-10.747-10-10.747z"
              />
            </svg>
            <p className="text-gray-600 mt-4 font-medium">
              {t("Ushbu kursda darslar mavjud emas")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LessonsPage;
