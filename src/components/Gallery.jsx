import React, { useState, useEffect } from "react";

export default function Gallery({ images, title }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  // Handlers for modal navigation
  const openModal = (index) => setCurrentImageIndex(index);
  const closeModal = () => setCurrentImageIndex(null);
  const nextImage = () =>
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  const prevImage = () =>
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (currentImageIndex !== null) {
        if (event.key === "ArrowRight") {
          nextImage();
        } else if (event.key === "ArrowLeft") {
          prevImage();
        } else if (event.key === "Escape") {
          closeModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImageIndex]); 

  return (
    <div className="gallery py-16 px-8 bg-[#809A96]">
      <h2 className="text-4xl font-semibold text-[#AECA59] mb-12 text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 w-full h-48"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full p-3 transform transition-all duration-300 hover:bg-[#AECA59] hover:scale-11"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Image Display */}
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="rounded-lg shadow-lg max-w-full max-h-screen"
            />

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 text-2xl transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 transition-all duration-300 hover:bg-[#AECA59] hover:scale-110"
              onClick={prevImage}
            >
              &#8592;
            </button>
            <button
              className="absolute right-4 top-1/2 text-2xl transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 transition-all duration-300 hover:bg-[#AECA59] hover:scale-110"
              onClick={nextImage}
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
