import { useMutation, useQuery, useQueryClient } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";
import { API, API_URL } from "../../../api";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { get } from "lodash";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import AvatarIcon from "../../../assets/avatar1.jpg";

function Profile() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const removeClick = () => {
    localStorage.removeItem("userToken");

    queryClient.removeQueries(["userMe"]); // 🔥 cache ni tozalaydi

    navigate("/", { replace: true });

    window.scrollTo({ top: 0 });
  };
  const [image, setImage] = useState(null);
  const { data, refetch } = useQuery("userMe", async () => {
    return await API.userMe().catch((err) => {
      console.log(err);
    });
  });

  const { handleSubmit, register, reset } = useForm({
    defaultValues: useMemo(() => {
      return {
        full_name: get(data, "data.data.full_name"),
        // password: get(data, "data.data.password"),
        phone_number: get(data, "data.data.phone_number"),
        address: get(data, "data.data.address"),
      };
    }, [data]),
    mode: "onChange",
  });

  useEffect(() => {
    reset({
      full_name: get(data, "data.data.full_name"),
      // password: get(data, "data.data.password"),
      phone_number: get(data, "data.data.phone_number"),
      address: get(data, "data.data.address"),
    });
  }, [data]);

  const { mutate } = useMutation(async (payload) => {
    return await axios
      .put(`${API_URL}/users/${get(data, "data.data.user_id")}`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        refetch();
        setIsEditing(false);
        toast.success("Profile updated successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Profile update failed");
      });
  });
  const onSubmit = (value) => {
    const submitData = {
      images: image,
      ...value,
    };
    mutate(submitData);
  };

  const profileImage = get(data, "data.data.image_src")
    ? `${API_URL}/uploads/images/${get(data, "data.data.image_src")}`
    : AvatarIcon;

  return (
    <div className="lg:col-span-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sticky top-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="mb-4">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg overflow-hidden">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg
                        className="w-16 h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                      </svg>
                    )}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {get(data, "data.data.full_name")}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  +{get(data, "data.data.phone_number")}
                </p>
              </div>
              <input
                type="file"
                id="setup-profile-img"
                accept="image/*"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                className="hidden"
              />
            </div>

            {/* Form Fields */}
            <div className="space-y-5 mb-8">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2"
                >
                  {t("Ismingizni kiriting")}
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  {...register("full_name")}
                  type="name"
                  autoComplete="off"
                  placeholder={t("Full Name")}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-medium transition-all text-sm ${
                    isEditing
                      ? "border-orange-500 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                      : "border-gray-200 bg-gray-50 text-gray-900 cursor-not-allowed"
                  }`}
                />
              </div>

              {/* Address Field */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2"
                >
                  {t("Manzilingizni kiriting (ixtiyoriy)")}
                </label>
                <input
                  id="address"
                  name="address"
                  {...register("address")}
                  autoComplete="new-address"
                  type="address"
                  placeholder={t("Address")}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-medium transition-all text-sm ${
                    isEditing
                      ? "border-orange-500 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                      : "border-gray-200 bg-gray-50 text-gray-900 cursor-not-allowed"
                  }`}
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2"
                >
                  {t("Password kiriting")}
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  {...register("password")}
                  autoComplete="new-password"
                  placeholder={t("Password")}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-medium transition-all text-sm ${
                    isEditing
                      ? "border-orange-500 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                      : "border-gray-200 bg-gray-50 text-gray-900 cursor-not-allowed"
                  }`}
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone_number"
                  className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2"
                >
                  {t("Sizning raqamingiz")}
                </label>
                <input
                  type="tel"
                  {...register("phone_number")}
                  defaultValue={get(data, "data.data.phone_number")}
                  id="phone_number"
                  placeholder={t("Sizning raqamingiz")}
                  name="phone_number"
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-medium transition-all text-sm ${
                    isEditing
                      ? "border-orange-500 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                      : "border-gray-200 bg-gray-50 text-gray-900 cursor-not-allowed"
                  }`}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {!isEditing ? (
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full px-6 py-2 font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Tahrirlash
                  </button>
                  <div
                    onClick={removeClick}
                    className="w-full px-6 py-2 cursor-pointer font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
                    </svg>
                    Chiqish
                  </div>
                </div>
              ) : (
                <>
                  <button
                    type="submit"
                    className="w-full px-6 py-2 font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Saqlash
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
