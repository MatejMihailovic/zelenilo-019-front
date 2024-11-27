import React from "react";
import content from "../utils/content_lan.js";
import ImageCard from "./ImageCard.jsx";

export default function Home({ language }) {
  const currentContent = content[language];

  return (
      <section className="services py-16 px-8 bg-[#809A96] bg-opacity-90">
        <h2 className="text-4xl font-semibold text-[#AECA59] mb-12 text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {currentContent.servicesTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentContent.services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-[#AECA59] mb-4">
                {service.title}
              </h3>
              <p className="text-[#5B7D47] mb-6">{service.description}</p>
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
