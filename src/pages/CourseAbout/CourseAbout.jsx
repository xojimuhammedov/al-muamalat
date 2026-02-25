import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { API_URL } from "../../api";
import Payment from "./components/Payment";
import { useTranslation } from "react-i18next";

function CourseAbout() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/courses/main/`)
      .then((res) => setCourse(res?.data?.data));
  }, [id]);

  const findCourse = useMemo(() => {
    return course.find(
      (item) => String(item.course_id) === String(id)
    );
  }, [course, id]);

  return (
    <>
      <main className="container mx-auto">
        <section className="py-8 md:px-6 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
              {findCourse?.[`name_${i18n?.language}`]}
            </h1>
          </div>
          <div
            className="text-base text-gray-600"
            dangerouslySetInnerHTML={{
              __html: findCourse?.[`description_${i18n?.language}`],
            }}
          />
        </section>
        <Payment course={findCourse} />
      </main>
    </>
  );
}

export default CourseAbout;
