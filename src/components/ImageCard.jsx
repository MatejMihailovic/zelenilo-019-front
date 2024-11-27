import React, { useState } from "react";

export default function ImageCard({ image, title }) {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <div>
      <img
        src={image}
        alt={`${title}`}
        className="w-[500px] h-[300px] object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
        onClick={() => openModal(image)}
      />
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full p-2"
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={modalImage}
              alt="Full view"
              className="max-w-full max-h-screen rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
