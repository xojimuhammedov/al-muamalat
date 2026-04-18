import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { API_URL } from "../../../api";

export const useLessonLogic = (courseId) => {
  const [lessons, setLessons] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem(`completed_lessons_${courseId}`);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(`completed_lessons_${courseId}`, JSON.stringify(completedLessons));
  }, [completedLessons, courseId]);

  useEffect(() => {
    axios
      .get(`${API_URL}/lessons?limit=100`)
      .then((response) => setLessons(response?.data?.data))
      .catch((err) => console.log(err));

    axios
      .get(`${API_URL}/courses/main/`)
      .then((res) => setCourses(res?.data?.data))
      .catch((err) => console.log(err));
  }, [courseId]);

  const findCourse = useMemo(() => {
    return courses.find((item) => String(item.course_id) === String(courseId));
  }, [courses, courseId]);

  const filteredLessons = useMemo(() => {
    return lessons?.filter((lesson) => String(lesson?.course_id) === String(courseId));
  }, [lessons, courseId]);

  const progress = useMemo(() => {
    if (!filteredLessons?.length) return 0;
    const completedCount = filteredLessons.filter(l => 
      completedLessons.map(String).includes(String(l.id))
    ).length;
    return Math.round((completedCount / filteredLessons.length) * 100);
  }, [filteredLessons, completedLessons]);

  const currentIndex = useMemo(() => {
    return filteredLessons?.findIndex(l => l.id === selectedLesson?.id);
  }, [filteredLessons, selectedLesson]);

  const handleNext = () => {
    if (selectedLesson) {
      const lessonId = String(selectedLesson.id);
      if (!completedLessons.map(String).includes(lessonId)) {
        setCompletedLessons(prev => [...prev, lessonId]);
      }
    }
    if (currentIndex < filteredLessons.length - 1) {
      setSelectedLesson(filteredLessons[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedLesson(filteredLessons[currentIndex - 1]);
    }
  };

  useEffect(() => {
    if (filteredLessons?.length > 0 && !selectedLesson) {
      setSelectedLesson(filteredLessons[0]);
    }
  }, [filteredLessons, selectedLesson]);

  return {
    lessons: filteredLessons,
    course: findCourse,
    selectedLesson,
    setSelectedLesson,
    completedLessons,
    progress,
    currentIndex,
    handleNext,
    handlePrev
  };
};
