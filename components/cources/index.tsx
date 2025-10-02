"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import CourseCard from "./CourseCard";
import CourseModal from "./CourseModal";
import courseData from "./courseData";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  return (
    <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16 dark:from-gray-800 dark:to-gray-900 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <SectionTitle
          title="Our Courses"
          paragraph="Our studio offers hands-on training in photography, videography, editing, and design to help you master creative skills."
          center
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courseData().map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              delay={index * 0.2}
              onClick={setSelectedCourse}
            />
          ))}
        </div>
      </div>

      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </section>
  );
};

export default Courses;
