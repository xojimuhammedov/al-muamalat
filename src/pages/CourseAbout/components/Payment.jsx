import { CheckCircle2 } from "lucide-react";
import React from "react";
import { API, API_URL } from "../../../api";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { get } from "lodash";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { formatPrice } from "../../../utils/helper";

const Payment = ({ course }) => {
  const { t } = useTranslation();
  const { data } = useQuery("userMe", async () => {
    return await API.userMe().catch((err) => {
      console.log(err);
    });
  });

  const { mutate, isLoading } = useMutation(async (payload) => {
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
        // toast.error("Bu kurs uchun oldin to'lov qilgansiz!");
      });
  });
  const onSubmit = () => {
    const submitData = {
      course_id: course?.course_id,
      user_id: get(data, "data.data.user_id"),
    };
    mutate(submitData);
  };

  const features = [
    t("Doimiy egalik"),
    t("Moslanuvchan o‘quv jadvali"),
    t("Istalgan qurilmada (telefon/kompyuter) qulay foydalanish"),
  ];
  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left Section - Services/Benefits */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-8 md:p-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
               {t("Kurs Qismlari")}
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("Ishonchli o'quv dasturi")}
                    </h3>
                    <p className="text-teal-50 leading-relaxed text-sm md:text-base">
                      {t(
                        "Kursda barcha zarur mavzular bo'yicha ta'lim beriladi. Siz har bir darsni o'z vaqtingizda o'qiy olasiz va qayta ko'rib chiqishingiz mumkin.",
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("Professional o'qituvchilar")}
                    </h3>
                    <p className="text-teal-50 leading-relaxed text-sm md:text-base">
                      {t(
                        "Kursni sohaning eng yaxshi mutaxassislari tuzgan va o'tgan. Ular haqiqiy tajribani va yangi bilimlarni sizga o'rgatadi.",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Payment Details */}
          <div className="border-2 border-teal-600 p-8 md:p-10 bg-gradient-to-br from-white to-blue-50">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("To'lov")}
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {t("Kursning imkonyatlari")}:
              </h3>
              <ul className="space-y-4">
                {features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-br from-teal-600 to-teal-700 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm md:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Section */}
            <div className="border-t border-blue-200 pt-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 font-medium">
                  {t("Kurs narxi")}:
                </span>
                <span className="text-2xl md:text-3xl font-bold text-teal-600">
                {formatPrice(course?.price / 100)} {t("sum")}
                </span>
              </div>
            </div>

            {/* Purchase Button */}
            <button
              onClick={onSubmit}
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                isLoading
                  ? "bg-gradient-to-br from-teal-600 to-teal-700 text-white cursor-wait"
                  : "bg-gradient-to-br from-teal-600 to-teal-700 text-white hover:bg-teal-600 active:scale-95"
              }`}
            >
              {isLoading ? t("Jarayonda...") : t("To'lov qilish")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
