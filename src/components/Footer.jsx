import React from "react";
import content from "../utils/content_lan.js";
 

export default function Footer({ language }) {
  const currentContent = content[language];

  return (
    <footer className="bg-[#16240F] text-white py-8">
      <section
        className="contact py-16 bg-cover bg-center text-white text-center"
      >
        <h2 className="text-3xl font-semibold text-[#AECA59] mb-6">
          {currentContent.contactTitle}
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-4">
          {currentContent.email}{" "}
          <a
            href="mailto:daliborka.z@yahoo.com"
            className="underline text-[#AECA59] font-bold"
          >
            daliborka.z@yahoo.com
          </a>{" "}
          {currentContent.call}{" "}
          <a
            href="tel:+38162844544"
            className="underline text-[#AECA59] font-bold"
          >
            (+381) 62 844 544
          </a>
          .
        </p>
        <p className="mt-4">{currentContent.contactText}</p>
      </section>

      <div className="bg-[#5B7D47] py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ZELENILO ORIGINAL 019 d.o.o. {currentContent.footerText}
        </p>
      </div>
    </footer>
  );
}
