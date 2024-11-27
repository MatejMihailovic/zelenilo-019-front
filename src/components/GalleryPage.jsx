import React from "react";
import Gallery from "./Gallery";
import content from "../utils/content_lan.js";

//Imports for images
const images = [
  "/src/assets/img/1.jpg",
  "/src/assets/img/10.jpg",
  "/src/assets/img/3.jpg",
  "/src/assets/img/2.jpg",
  "/src/assets/img/4.jpg",
  "/src/assets/img/5.jpg",
  "/src/assets/img/6.jpg",
  "/src/assets/img/7.jpg",
  "/src/assets/img/8.jpg",
  "/src/assets/img/9.jpg"
]

export default function GalleryPage({ language }) {
  const currentContent = content[language];

  return (
    <div>
      <Gallery images={images} title={currentContent.galleryTitle} />
    </div>
  );
}