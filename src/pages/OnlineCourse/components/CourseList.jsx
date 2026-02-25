import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../api";
import { useTranslation } from "react-i18next";

const CourseList = () => {
  const { t, i18n } = useTranslation();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/courses/main`)
      .then((res) => setCourse(res?.data?.data));
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 pb-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {course.map((course) => (
          <div
            key={course.course_id}
            className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary"
          >
            <img
              src={`${API_URL}/uploads/images/${course?.images?.[0]?.src}`}
              className="h-64 object-cover w-full"
              alt=""
            />

            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-bold text-foreground line-clamp-2">
                    {course[`name_${i18n?.language}`]}
                  </h3>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-base font-bold text-foreground">
                  {course?.price ? course?.price / 100 : 0} {t("sum")}
                </span>
                <Link
                  to={`/online-course/${course.course_id}`}
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="block"
                >
                  <button className="py-2 px-4 bg-teal-700 text-white rounded-lg hover:bg-teal-700 max-w-max transition-colors font-semibold">
                    {t("Batafsil")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CourseList;
