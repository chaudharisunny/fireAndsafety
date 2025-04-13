import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

function Testimonal() {
  return (
    <section className="bg-gray-900 py-16  px-4 sm:px-6 lg:px-8" id='testimonal'>
      <div className="max-w-4xl p-10  mx-auto ">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {[
            { name: "Rahul Sharma", text: "Great service! Very professional and quick. Highly recommended." },
            { name: "Neha Gupta", text: "Impressed by their fire safety knowledge. Thank you for the smooth installation!" },
            { name: "Raj Patel", text: "Friendly team, excellent support, and detailed consultation. 10/10 experience." },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mx-auto text-center max-w-xl">
                <h3 className="text-gray-900 dark:text-white text-2xl font-semibold mb-3">{item.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-base">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonal;
