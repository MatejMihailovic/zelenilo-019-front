import React from "react";
import Gallery from "./Gallery";
import content from "../utils/content_lan.js";

import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/10.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/2.jpg";
import img5 from "../assets/img/4.jpg";
import img6 from "../assets/img/5.jpg";
import img7 from "../assets/img/6.jpg";
import img8 from "../assets/img/7.jpg";
import img9 from "../assets/img/8.jpg";
import img10 from "../assets/img/9.jpg";
import img11 from "../assets/img/11.jpg";
import img12 from "../assets/img/12.jpg";
import img13 from "../assets/img/13.jpg";
import img14 from "../assets/img/14.jpg";
import img15 from "../assets/img/15.jpg";
import img16 from "../assets/img/16.jpg";
import img17 from "../assets/img/17.jpg";

//Imports for images
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
]

export default function GalleryPage({ language }) {
  const currentContent = content[language];

  return (
    <div>
      <Gallery images={images} title={currentContent.galleryTitle} />
    </div>
  );
}