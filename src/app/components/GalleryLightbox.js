import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const GalleryLightbox = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
  return (
    <>
      <LightGallery
        onInit={onInit}
        onBeforeSlide={onBeforeSlide}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        <a href="../assets/images/barossa_screenshots/full-page.png">
          <img
            alt="Barossa Bushwalks Home Page"
            src="../assets/images/barossa_screenshots/full-page.png"
            className="img-fluid"
          />
        </a>
        <a href="../assets/images/barossa_screenshots/Respectful-Hiking-Barossa.png">
          <img
            alt="Respectful-Hiking-Barossa"
            src="../assets/images/barossa_screenshots/Respectful-Hiking-Barossa.png"
            className="img-fluid"
          />
        </a>
        ...
      </LightGallery>
    </>
  );
};

export default GalleryLightbox;
