import React from "react";
import content from "../utils/content_lan.js";

export default function ContactPage({language}) {
  const currentContent = content[language];

  return (
    <div className="container mx-auto bg-[#809A96] px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 bg-gray-100 p-6 rounded shadow text-black">
          <h2 className="text-2xl text-[#AECA59] font-bold mb-4">{currentContent.contactTitle}</h2>
          <p className="text-lg">
            <strong>{currentContent.adressTitle}</strong> {currentContent.adressText}
          </p>
          <p className="text-lg mb-2">
            <strong>{currentContent.phoneTitle}</strong>{" "}
            <a href="tel:+38162844544" className="text-[#AECA59] hover:underline">
              {currentContent.phoneText}
            </a>
          </p>
          <p className="text-lg mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:daliborka.z@yahoo.com" className="text-[#AECA59] hover:underline">
              daliborka.z@yahoo.com
            </a>
          </p>
          <p className="text-lg">
            <strong>{currentContent.workHoursTitle}</strong> {currentContent.workHoursText}
          </p>
          <p className="text-lg">
            <strong>{currentContent.taxIdTitle}</strong> 114474418
          </p>
          <p className="text-lg">
            <strong>{currentContent.registerTitle}</strong> 22028464
          </p>
        </div>

        <div className="md:w-1/2">
          <iframe
            title="Company Location"
            className="w-full h-96 rounded shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.9775196361134!2d22.531149475689343!3d44.228121215058316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47539545c523f0c3%3A0xa5113155e0f087ef!2sJna%2010%2C%20Negotin!5e0!3m2!1sen!2srs!4v1732619252888!5m2!1sen!2srs"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
