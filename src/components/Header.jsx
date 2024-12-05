import React, { useState } from "react";
import { Link } from "react-router-dom";
import content from "../utils/content_lan.js";
import treeIcon from "../assets/img/tree_icon.png";
import enFlag from "../assets/img/en_icon.png";  
import srFlag from "../assets/img/ser_icon.png";

export default function Header({ language, setLanguage }) {
  const currentContent = content[language];
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <header className="bg-[#16240F] text-white py-4 px-6 sm:py-6 sm:px-12 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-lg sm:text-m font-bold text-[#AECA59]">
          <Link to="/">ZELENILO ORIGINAL 019</Link>
        </div>

        {/* Navigation Links for Larger Screens */}
        <nav className="hidden sm:flex space-x-8 items-center text-lg">
          <Link
            to="/"
            className="text-[#AECA59] hover:text-[#8CB139] transition-colors duration-200"
          >
            {currentContent.headerHome}
          </Link>
          <Link
            to="/gallery"
            className="text-[#AECA59] hover:text-[#8CB139] transition-colors duration-200"
          >
            {currentContent.headerGallery}
          </Link>
          <Link
            to="/contact"
            className="text-[#AECA59] hover:text-[#8CB139] transition-colors duration-200"
          >
            {currentContent.headerContact}
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className="sm:hidden text-[#AECA59] hover:text-[#8CB139] focus:outline-none"
          onClick={toggleNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6h16.5M3.75 12h16.5m-16.5 6h16.5"
            />
          </svg>
        </button>

        {/* Language Dropdown for Larger Screens */}
        <div className="relative hidden sm:block">
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
      </div>

      {/* Navigation Links and Language Selector for Mobile */}
      {isNavOpen && (
        <nav className="sm:hidden mt-4">
          <ul className="space-y-4 text-lg">
            <li>
              <Link
                to="/"
                className="block text-[#AECA59] hover:text-[#8CB139] transition-colors duration-200"
                onClick={() => setIsNavOpen(false)}
              >
                {currentContent.headerHome}
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block text-[#AECA59] hover:text-[#8CB139] transition-colors duration-200"
                onClick={() => setIsNavOpen(false)}
              >
                {currentContent.headerGallery}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-[#AECA59] hover:text-[#8CB139] transition-colors duration-200"
                onClick={() => setIsNavOpen(false)}
              >
                {currentContent.headerContact}
              </Link>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="bg-[#AECA59] text-[#16240F] px-4 py-2 rounded shadow-md w-full focus:outline-none hover:bg-[#8CB139] transition-colors duration-200"
                >
                  {language === "en" ? (
                    <>
                      <img
                        src={enFlag}
                        alt="English Flag"
                        className="inline-block w-5 h-5 mr-2"
                      />
                      English
                    </>
                  ) : (
                    <>
                      <img
                        src={srFlag}
                        alt="Serbian Flag"
                        className="inline-block w-5 h-5 mr-2"
                      />
                      Srpski
                    </>
                  )}
                </button>
                {isOpen && (
                  <ul className="absolute right-0 mt-2 pb-2 bg-[#809A96] text-[#16240F] shadow-md rounded w-full z-50">
                    <li>
                      <button
                        onClick={() => handleLanguageChange("en")}
                        className={`block w-full px-4 py-2 text-left ${
                          language === "en"
                            ? "bg-[#AECA59] text-white"
                            : "hover:bg-[#AECA59] hover:text-white"
                        }`}
                      >
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
                        Srpski
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
