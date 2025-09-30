"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Fullscreen Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1758351754305-fe00523aaefe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D)" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Build Your Startup with Next.js
            </h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md">
              A modern open-source template for SaaS & business websites.
            </p>
            <Link
              href="https://github.com/themewagon/startup-nextjs"
              target="_blank"
              className="px-8 py-4 bg-black/70 hover:bg-black text-white font-semibold rounded-md transition"
            >
              Star on GitHub
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
            style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1666998073876-bcc43aa5a2a0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D)" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Tailwind + Next.js = 💙
            </h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md">
              Beautiful UI components and responsive design out of the box.
            </p>
            <Link
              href="/about"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
            >
              Learn More
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1757918637010-214f0a48ee2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D)" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Open-Source & Free
            </h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md">
              Fully customizable and easy to use for your next project.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition"
            >
              Get Started
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
