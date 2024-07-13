import React from "react";
import styles from "./TryOnPage.module.css";
import Top from "../../components/Top/Top";
import Features from "../../components/Features/Features";
import TryOn from "../../components/TryOn/TryOn";

const TryOnPage = () => {
  return (
    <div className={styles.container}>
      <Top />
      <Features />
      <TryOn />
    </div>
  );
};

export default TryOnPage;
