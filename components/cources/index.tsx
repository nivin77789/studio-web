import SectionTitle from "../Common/SectionTitle";
import CourseCard from "./CourseCard";
import courseData from "./courseData";

const Courses = () => {
  return (
    <section
      id="courses"
      className="bg-gradient-to-r from-purple-100 to-pink-100 py-16 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Courses"
          paragraph="Our studio offers hands-on training in photography, videography, editing, and design to help you master creative skills."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {courseData().map((course, index) => (
            <div key={course.id} className="w-full">
              {/* Add stagger animation delay for nicer entry effect */}
              <CourseCard course={course} delay={index * 0.2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
