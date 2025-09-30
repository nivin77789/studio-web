import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div
        className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 
        shadow-md hover:shadow-2xl transition-all duration-500 p-6"
        data-wow-delay=".15s"
      >
        {/* 🔥 Animated gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 animate-gradient-slow transition-opacity duration-700" />

        {/* Icon */}
        <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>

        {/* Paragraph */}
        <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
