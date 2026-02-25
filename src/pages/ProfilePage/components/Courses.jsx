import { useMutation, useQuery } from "react-query";
import { API, API_URL } from "../../../api";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { get } from "lodash";

function Courses() {
  const { t, i18n } = useTranslation();
  const { data, isLoading } = useQuery("myCourses", async () => {
    return await API.myCourses().catch((err) => {
      console.log(err);
    });
  });

  const { data: userMe } = useQuery("userMe", async () => {
    return await API.userMe().catch((err) => {
      console.log(err);
    });
  });

  const { mutate } = useMutation(async (payload) => {
    return await API.purchasesPost(payload)
      .then((res) => {
        axios
          .get(`${API_URL}/courses/purchase/${res?.data?.data?.id}`)
          .then((response) => {
            const url = get(response, "data.data.data"); // Response ichidan URL ni olish
            console.log(get(response, "data.data.data"));
            console.log(get(response, "data.data"));
            if (url) {
              // Dinamik <a> tegi yaratish
              const aTag = document.createElement("a");
              aTag.href = url; // URL ni href ga qo'yish
              aTag.target = "_blank"; // Sahifani yangi oynada ochish
              aTag.rel = "noopener noreferrer"; // Xavfsizlik uchun rel qo'shish
              document.body.appendChild(aTag); // <a> tegini DOM ga qo'shish
              aTag.click(); // Linkni avtomatik bosish (foydalanuvchini yo'naltirish)
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "Please login in to get access") {
          toast.error(t("To'lov qilish uchun ro'yhatdan o'ting iltimos!"));
        }
      });
  });
  const onSubmit = (course) => {
    console.log(course);
    const submitData = {
      course_id: course?.id,
      user_id: get(userMe, "data.data.user_id"),
    };
    mutate(submitData);
  };
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {t("Sotib olgan kurslar")}
            </h2>
          </div>
          <Link
            to="/online-course"
            className="px-4 py-2 font-medium text-white bg-[#FE5D37] hover:bg-orange-600 rounded-lg transition-colors flex items-center gap-2 hover:shadow-lg"
          >
            {t("Barcha kurslar")}
          </Link>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {data?.data?.data?.courses?.map((course) => (
            <>
              {course?.courses?.map((item) => (
                <div
                  key={item?.id}
                  className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary"
                >
                  <img
                    src={`${API_URL}/uploads/images/${item?.images?.[0]?.src}`}
                    className="h-64 object-cover w-full"
                    alt=""
                  />

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground line-clamp-2">
                          {item[`name_${i18n?.language}`]}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span
                        className={`px-4 py-2 text-xs rounded-lg text-white font-medium cursor-pointer ${course?.purchase_status === "created" ? "bg-red-600" : "bg-green-600"}`}
                      >
                        {course?.purchase_status === "created"
                          ? t("To'lov qilinmagan")
                          : t("To'lov qilingan")}
                      </span>
                      {course?.purchase_status === "paid" && (
                        <Link
                          to={`/my-courses/${item?.id}`}
                          onClick={() => window.scrollTo({ top: 0 })}
                          className="block"
                        >
                          <button className="py-2 px-4 text-base bg-teal-600 text-white rounded-lg hover:bg-teal-700 max-w-max transition-colors font-semibold">
                            {t("Batafsil")}
                          </button>
                        </Link>
                      )}
                      {course?.purchase_status === "created" && (
                        <button
                          onClick={() => onSubmit(item)}
                          type="submit"
                          className="py-2 px-4 bg-teal-600 text-base text-white rounded-lg hover:bg-teal-700 max-w-max transition-colors font-semibold"
                        >
                          {t("To'lov qilish")}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>

        {/* Empty State Message */}
        {data?.data?.data?.courses?.length === 0 && (
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
            <p className="text-gray-600 font-medium">
               {t("Hali kurs sotib olmadingiz")}
            </p>
            <p className="text-sm text-gray-500 mt-1">
               {t("Barcha kurslar bo'limiga o'tib kurs xarid qiling")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;
