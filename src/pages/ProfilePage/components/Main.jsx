import { useTranslation } from "react-i18next";


function Main() {
  const {t} = useTranslation()

  return (
    <div className="container mx-auto ">
      <div className="mt-24 mb-4">
        <h1 className="text-2xl font-semibold text-gray-900">
           {t("Profile")}
        </h1>
        <p className="text-lg text-gray-600">
           {t("Shaxsiy ma'lumotlar va sotib olgan kurslarni boshqarish")}
        </p>
      </div>
    </div>
  );
}

export default Main;
