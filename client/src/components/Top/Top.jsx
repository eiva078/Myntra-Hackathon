import React from "react";
import topimg from "../../assets/topImage.png";
import styles from "./Top.module.css";

const Top = () => {
  return (
    <div className={styles.topcontainer}>
      <img src={topimg} alt="" className={styles.topimg} />
      <h2 className={styles.topheading}>LET'S CREATE YOUR OWN WARDROBE !</h2>
    </div>
  );
};

export default Top;
