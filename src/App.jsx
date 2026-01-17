import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Header from "./components/Header";
import Services from "./components/Services";
import Videos from "./components/Videos";

// Lazy load all page components for code splitting
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const MaterialPage = lazy(() => import("./pages/MaterialPage/MaterialPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const CoursePage = lazy(() => import("./pages/CoursePage/CoursePage"));
const CourseAbout = lazy(() => import("./pages/CourseAbout/CourseAbout"));
const CouncilPage = lazy(() => import("./pages/CouncilPage/CouncilPage"));
const DirectionPage = lazy(() => import("./pages/DirectionPage/DirectionPage"));
const MyCoursesPage = lazy(() => import("./pages/MyCoursesPage/MyCoursesPage"));
const LessonsPage = lazy(() => import("./pages/LessonsPage/LessonsPage"));
const AAFOIExam = lazy(() => import("./pages/AAFOI_Exam/AAFOI_Exam"));
const EducationPage = lazy(() => import("./pages/EducationPage/EducationPage"));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    fontSize: '18px',
    color: '#1B4D3E'
  }}>
    Loading...
  </div>
);

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/login" ? "" : <Navbar />}
      <Suspense fallback={<LoadingFallback />}>
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
          <Route path="/aaoifi-exam" element={<AAFOIExam />} />
          <Route path="/education-course" element={<EducationPage />} />
          <Route path="/council" element={<CouncilPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/course/about" element={<CourseAbout />} />
          <Route path="/direction/:id" element={<DirectionPage />} />
          <Route path="/my-courses/:id" element={<MyCoursesPage />} />
          <Route path="/lessons/:id" element={<LessonsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
      {location.pathname === "/login" ? "" : <Footer />}
    </>
  );
}

export default App;
