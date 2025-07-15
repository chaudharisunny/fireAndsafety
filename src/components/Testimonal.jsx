import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

function Testimonal() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      text: "Great service! Very professional and quick. Highly recommended.",
    },
    {
      name: "Neha Gupta",
      text: "Impressed by their fire safety knowledge. Thank you for the smooth installation!",
    },
    {
      name: "Raj Patel",
      text: "Friendly team, excellent support, and detailed consultation. 10/10 experience.",
    },
  ];

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8" id="testimonal">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 mx-auto max-w-2xl h-64 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out hover:scale-105">
                <svg
                  className="w-10 h-10 text-red-500 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 5H6a2 2 0 0 0-2 2v6h3.4l-.4 4h4V7a2 2 0 0 0-2-2H7.17zm9 0H15a2 2 0 0 0-2 2v6h3.4l-.4 4h4V7a2 2 0 0 0-2-2h-1.83z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-300 text-base italic mb-4 max-w-[80%] overflow-hidden">
                  “{item.text}”
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  — {item.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonal;
