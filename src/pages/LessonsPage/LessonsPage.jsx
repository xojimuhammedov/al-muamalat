import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { API_URL } from "../../api";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function LessonsPage() {
  const { id } = useParams();
  const [, i18n] = useTranslation();
  const [lesson, setLesson] = useState();
  const [course, setCourse] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_URL}/lessons/`)
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
        <div className="flex mt-4 gap-6">
          <div className="w-80">
            <div className="sticky top-8 rounded-lg bg-white shadow-md">
              <div className="h-[670px] overflow-y-auto p-4">
                <div className="space-y-1">
                  {filteredLessons?.map((lesson) => (
                    <button
                      key={lesson?.id}
                      onClick={() => setSelectedLesson(lesson)}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition-all duration-200 ${
                        selectedLesson?.id === lesson?.id
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
          <div className="flex-1 rounded-lg bg-white shadow-md p-4 ">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Kurs</p>
                <h2 className="text-2xl font-bold text-slate-900">
                  {findCourse?.[`name_${i18n?.language}`]}
                </h2>
              </div>
              <Link
                to={"/profile"}
                onClick={() => setSelectedLesson(null)}
                className="group hidden items-center gap-2 rounded-full bg-[#FE5D37] px-5 py-2 text-[13px] font-semibold text-white shadow-lg shadow-[#FE5D37]/20 transition-all duration-300 sm:flex"
              >
                <ArrowLeft className="text-white w-4 h-4" /> Kurslar ro'yxatiga qaytish
              </Link>
            </div>
            <div className="overflow-hidden">
              <div className="space-y-6">
                {/* Video Player */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonsPage;

const css = {
  titles: {
    color: "#103741",
    fontSize: "30px",
    lineHeight: "35px",
    marginTop: "24px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "16px",
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "white",
  },
};
