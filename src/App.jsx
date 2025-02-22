import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import ContactPage from "./pages/ContactPage/ContactPage";
import MaterialPage from "./pages/MaterialPage/MaterialPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Header from "./components/Header";
import CoursePage from "./pages/CoursePage/CoursePage";
import CourseAbout from "./pages/CourseAbout/CourseAbout";
import Videos from "./components/Videos";
import CouncilPage from "./pages/CouncilPage/CouncilPage";
import Services from "./components/Services";
import DirectionPage from "./pages/DirectionPage/DirectionPage";
import MyCoursesPage from "./pages/MyCoursesPage/MyCoursesPage";
import LessonsPage from "./pages/LessonsPage/LessonsPage";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/login" ? "" : <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Services />
              <Blog />
              <Partners />
              <Videos />
              <Contact />
            </>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/material" element={<MaterialPage />} />
        <Route path="/council" element={<CouncilPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/course/about" element={<CourseAbout />} />
        <Route path="/direction/:id" element={<DirectionPage />} />
        <Route path="/my-courses/:id" element={<MyCoursesPage />} />
        <Route path="/lessons/:id" element={<LessonsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {location.pathname === "/login" ? "" : <Footer />}
    </>
  );
}

export default App;
