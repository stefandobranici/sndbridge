import React from "react";
import Banner from "../components/layout/banner/Banner";
import ImageGallery from "../components/image-gallery/ImageGallery";
import { gallery } from "../repository/gallery";

export const Gallery = () => {
  return (
    <div>
      <Banner
        title="The Gallery"
        subtitle="Check out photographies taken from our venues"
      />{" "}
      <ImageGallery gallery={gallery} />
    </div>
  );
};

export default Gallery;
