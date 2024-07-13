import React from "react";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <div className={styles.featurecontainer}>
      <div className={styles.feature}>
        <img src={img1} alt="" className={styles.featureimg} />
        <h4 className={styles.featuredescp}>UPLOAD YOUR OWN STYLING</h4>
      </div>
      <div className={styles.feature}>
        <img src={img2} alt="" className={styles.featureimg} />
        <h4 className={styles.featuredescp}>EMBRACE YOUR BODY TYPE</h4>
      </div>
      <div className={styles.first}>
        <img src={img3} alt="" className={styles.featureimg} />
        <h4 className={styles.featuredescp}>CHOOSE YOUR BEAUTIFUL SKIN</h4>
      </div>
      <div className={styles.feature}>
        <img src={img4} alt="" className={styles.featureimg} />
        <h4 className={styles.featuredescp}>EVENTS AND REGIONS</h4>
      </div>
    </div>
  );
};

export default Features;
