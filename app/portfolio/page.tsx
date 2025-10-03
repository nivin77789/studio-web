"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type Category = {
  name: string;
  images: string[];
};

// Example categories with Unsplash placeholders
const categories: Category[] = [
  {
    name: "Baby Shower",
    images: [
      "https://images.unsplash.com/photo-1601093451182-2f68f7b93705",
      "https://images.unsplash.com/photo-1615874959477-fc7f77d16465",
      "https://images.unsplash.com/photo-1605462863863-3dce5aa7d38f",
    ],
  },
  {
    name: "Portraits",
    images: [
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    ],
  },
  {
    name: "Housewarming",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1598300052764-4ef0041b0c55",
      "https://images.unsplash.com/photo-1600585154340-be6161c3f6f5",
    ],
  },
  {
    name: "Wedding",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1503264116251-35a269479413",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    ],
  },
  {
    name: "Engagement",
    images: [
      "https://images.unsplash.com/photo-1533236893560-87c124b1d5de",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      "https://images.unsplash.com/photo-1524504388940-87c124b1d5de",
    ],
  },
  {
    name: "Birthday",
    images: [
      "https://images.unsplash.com/photo-1541427370559-25b1e10f28b7",
      "https://images.unsplash.com/photo-1599010132289-b9b946a72f3d",
      "https://images.unsplash.com/photo-1594007652150-5a1e119a3ffb",
    ],
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Studio Portfolio</h1>
        <p className="text-xl mb-8">
          Capturing your precious moments — Baby Shower, Portraits, Weddings, and more.
        </p>
      </section>

      {/* Category Menu */}
      <section className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                selectedCategory.name === cat.name
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {selectedCategory.images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={img + "?auto=format&fit=crop&w=800&q=80"}
                alt={selectedCategory.name + " photo"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-lg font-semibold rounded-xl">
                {selectedCategory.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
