"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CourseModalProps {
  course: any;
  onClose: () => void;
}

const CourseModal = ({ course, onClose }: CourseModalProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-dark rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{course.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Duration: {course.duration}</p>

        <div className="w-full h-64 relative mb-4 rounded-xl overflow-hidden">
          <Image src={course.image} alt={course.title} fill className="object-cover rounded-xl" sizes="100vw" />
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{course.fullDescription}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.map((tag: string, idx: number) => (
            <span key={idx} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Key Topics */}
        {course.keyTopics && (
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Key Topics:</h3>
            <ul className="list-disc list-inside space-y-1">
              {course.keyTopics.map((topic: string, i: number) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Course Structure */}
        {course.courseStructure && (
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Course Structure:</h3>
            <ul className="list-disc list-inside space-y-1">
              {course.courseStructure.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits */}
        {course.benefits && (
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Benefits:</h3>
            <ul className="list-disc list-inside space-y-1">
              {course.benefits.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Career Opportunities */}
        {course.careerOpportunities && (
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Career Opportunities:</h3>
            <ul className="list-disc list-inside space-y-1">
              {course.careerOpportunities.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CourseModal;
