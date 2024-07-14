import React from "react";
import styles from "./HomeItem.module.css";

const ImgLinkContainer = ({ images, containerClass }) => {
  return (
    <div className={styles[containerClass]}>
      {images.map((img, index) => (
        <a href={img.link} key={index}>
          <img src={img.src} alt={img.alt} />
        </a>
      ))}
    </div>
  );
};

export default ImgLinkContainer;
