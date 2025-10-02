import { Course } from "@/types/course";
import Image from "next/image";
import Link from "next/link";

const SingleCourse = ({ course }: { course: Course }) => {
  const { title, image, description, tags } = course;

  return (
    <div
      className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
      data-wow-delay=".1s"
    >
      <Link
        href="/course-details"
        className="relative block aspect-[37/22] w-full"
      >
        {tags?.length > 0 && (
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
        )}
        <Image src={image} alt={title} fill />
      </Link>

      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        {/* Title */}
        <h3>
          <Link
            href="/course-details"
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-base font-medium text-body-color">{description}</p>
      </div>
    </div>
  );
};

export default SingleCourse;
