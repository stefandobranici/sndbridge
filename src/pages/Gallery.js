import React from "react";
import Banner from "../components/layout/banner/Banner";
import ImageGallery from "../components/image-gallery/ImageGallery";
import { gallery } from "../repository/gallery";

export const Gallery = () => {
  return (
    <div>
      <Banner
        title="The Gallery"
        subtitle="Check out all our photos taken at Second Bridge below! See something you don’t like? Let us
        know & we will be happy to remove any photos from our site!"
      />{" "}
      <ImageGallery gallery={gallery} />
    </div>
  );
};

export default Gallery;
