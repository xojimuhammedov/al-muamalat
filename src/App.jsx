import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import Partners from "./components/Partners";
import Header from "./components/Header";
import Videos from "./components/Videos";
import NewFooter from "./components/NewFooter";
import { CoreGoals } from "./components/CoreGoals";
import Navbar from "./components/Navbar";
import ServicesSection from "./pages/ServicesPage/ServicePage";
import Services from "./components/Services";
import { AboutHero } from "./components/About";
import OnlineCourse from "./pages/OnlineCourse/OnlineCourse";
import CourseAbout from "./pages/CourseAbout/CourseAbout";

// Lazy load all page components for code splitting
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const MaterialPage = lazy(() => import("./pages/MaterialPage/MaterialPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const CouncilPage = lazy(() => import("./pages/CouncilPage/CouncilPage"));
const AAFOIExam = lazy(() => import("./pages/AAFOI_Exam/AAFOI_Exam"));
const EducationPage = lazy(() => import("./pages/EducationPage/EducationPage"));
const OurTeam = lazy(() => import("./pages/OurTeam/OurTeam"));

// Loading fallback component
const LoadingFallback = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh",
      fontSize: "18px",
      color: "#1B4D3E",
    }}
  >
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
                <AboutHero />
                <CoreGoals />
                <Services />
                <Partners />
                <Videos />
              </>
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/material" element={<MaterialPage />} />
          <Route path="/aaoifi-exam" element={<AAFOIExam />} />
          <Route path="/education-course" element={<EducationPage />} />
          <Route path="/council" element={<CouncilPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/online-course" element={<OnlineCourse />} />
          <Route path="/online-course/:id" element={<CourseAbout />} />
        </Routes>
      </Suspense>
      {location.pathname === "/login" ? "" : <NewFooter />}
    </>
  );
}

export default App;
