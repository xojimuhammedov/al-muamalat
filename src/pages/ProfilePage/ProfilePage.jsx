import Main from "./components/Main";
import Profile from "./components/Profile";
import Courses from "./components/Courses";
import { useTranslation } from "react-i18next";

function ProfilePage() {
  return (
    <>
      <Main />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <Profile />
           <Courses />
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
