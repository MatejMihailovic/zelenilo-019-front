import React, { useState } from "react";
import { Link } from "react-router-dom";
import content from "../utils/content_lan.js";
import treeIcon from "../assets/img/tree_icon.png";
import enFlag from "../assets/img/en_icon.png";  
import srFlag from "../assets/img/ser_icon.png";

export default function Header({ language, setLanguage }) {
  const currentContent = content[language];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <header className="bg-[#16240F] text-white py-6 px-12 flex justify-between items-center shadow-md">
      <div className="flex items-center text-xl font-bold text-[#AECA59]">
        <Link to="/">ZELENILO ORIGINAL 019</Link>
        <img src={treeIcon} alt="Tree Icon" className="h-8 w-8 object-contain" />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link
              to="/"
              className="flex items-center space-x-2 text-[#AECA59] hover:text-[#8CB139] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span>{currentContent.headerHome}</span>
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="flex items-center space-x-2 text-[#AECA59] hover:text-[#8CB139] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span>{currentContent.headerGallery}</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center space-x-2 text-[#AECA59] hover:text-[#8CB139] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span>{currentContent.headerContact}</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Language Dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="bg-[#AECA59] text-[#16240F] px-4 py-2 rounded shadow-md focus:outline-none hover:bg-[#8CB139] transition-colors duration-200"
        >
          {language === "en" ? (
            <>
              <img src={enFlag} alt="English Flag" className="inline-block w-5 h-5 mr-2" />
              English
            </>
          ) : (
            <>
              <img src={srFlag} alt="Serbian Flag" className="inline-block w-5 h-5 mr-2" />
              Srpski
            </>
          )}
        </button>
        {isOpen && (
          <ul className="absolute right-0 mt-2 pb-2 bg-[#809A96] text-[#16240F] shadow-md rounded w-40">
            <li>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`block w-full px-4 py-2 text-left ${
                  language === "en"
                    ? "bg-[#AECA59] text-white"
                    : "hover:bg-[#AECA59] hover:text-white"
                }`}
              >
                <img
                  src={enFlag}
                  alt="English Flag"
                  className="inline-block w-5 h-5 mr-2"
                />
                English
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLanguageChange("sr")}
                className={`block w-full px-4 py-2 text-left ${
                  language === "sr"
                    ? "bg-[#AECA59] text-white"
                    : "hover:bg-[#AECA59] hover:text-white"
                }`}
              >
                <img
                  src={srFlag}
                  alt="Serbian Flag"
                  className="inline-block w-5 h-5 mr-2"
                />
                Srpski
              </button>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
