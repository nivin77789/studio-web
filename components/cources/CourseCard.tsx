"use client";

import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  description?: string;
  fullDescription?: string;
  icon: string;
  image: string;
  tags: string[];
  duration: string;
  keyTopics?: string[];
  courseStructure?: string[];
  benefits?: string[];
  careerOpportunities?: string[];
}

interface CourseCardProps {
  course: Course;
  delay?: number;
  onClick: (course: Course) => void;
}

const CourseCard = ({ course, delay = 0, onClick }: CourseCardProps) => {
  const Icon = (FaIcons as any)[course.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.06 }}
      className="relative cursor-pointer rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl bg-white dark:bg-gray-800 transition-all duration-300 border border-gray-100 dark:border-gray-700"
      onClick={() => onClick(course)}
    >
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden rounded-t-3xl">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover rounded-t-3xl"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-t-3xl"></div>
        {/* Icon top-left */}
        {Icon && (
          <motion.div
            className="absolute top-4 left-4 p-3 bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg rounded-full text-white"
            whileHover={{ rotate: 20, scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="text-2xl" />
          </motion.div>
        )}
      </div>

      {/* Info */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{course.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">Duration: {course.duration}</p>
        <p className="text-gray-600 dark:text-gray-200 mb-3">
          {course.description || course.fullDescription?.slice(0, 90) + "..."}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {course.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-700 dark:to-pink-700 text-purple-800 dark:text-purple-100 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
