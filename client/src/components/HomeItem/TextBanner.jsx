import React from "react";
import styles from "./HomeItem.module.css";

const TextBanner = ({ title }) => {
  return (
    <div className={styles.textBannerContainer}>
      <h4 className={styles.textBannerTitle}>{title}</h4>
    </div>
  );
};

export default TextBanner;
