import React from "react"; 
import content from "../utils/content_lan.js";
import ImageCard from "./ImageCard.jsx";

export default function Home({ language }) {
  const currentContent = content[language];

  return (
    <section className="services py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8 bg-[#809A96] bg-opacity-90">
      <h2 className="text-3xl sm:text-4xl font-semibold text-[#AECA59] mb-8 sm:mb-12 text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {currentContent.servicesTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {currentContent.services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#AECA59] mb-2 sm:mb-4">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-[#5B7D47] mb-4 sm:mb-6">
              {service.description}
            </p>
            <ImageCard
              image={service.afterImage}
              title={service.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
