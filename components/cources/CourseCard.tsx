"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import CourseModal from "./CourseModal";

interface Course {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  icon: string;
  image: string;
  tags: string[];
  duration: string;
  details?: string[];
}

const iconVariants = {
  idle: { rotate: 0, scale: 1 },
  hover: {
    scale: [1, 1.3, 1.2],
    rotate: [0, 15, -10, 5, 0],
    transition: { type: "spring", stiffness: 300, damping: 10, duration: 0.6 },
  },
};

const CourseCard = ({ course, delay = 0 }: { course: Course; delay?: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = (FaIcons as any)[course.icon];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ scale: 1.05 }}
        className="p-4 bg-white dark:bg-dark shadow-lg rounded-2xl cursor-pointer overflow-hidden"
        onClick={() => setIsOpen(true)}
      >
        {/* Image with Icon */}
        <div className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          {Icon && (
            <motion.div
              className="absolute top-3 left-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
              variants={iconVariants}
              initial="idle"
              whileHover="hover"
            >
              <Icon className="text-2xl text-primary" />
            </motion.div>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Duration: {course.duration}
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-3">{course.description}</p>

        <div className="flex flex-wrap justify-center gap-2">
          {course.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {isOpen && <CourseModal course={course} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default CourseCard;
