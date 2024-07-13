import React from "react";
import styles from "./Recommendation.module.css";

const Recommendation = ({ items, onTryOn }) => {
  const baseUrl = "http://localhost:4000/assets";

  return (
    <div className={styles.recommendationContainer}>
      <h2 className={styles.recommendationTitle}>RECOMMENDATION</h2>
      <div className={styles.recommendationList}>
        {items.map((item) => {
          const imageUrl = `${baseUrl}${item.image}`;
          return (
            <div key={item.id} className={styles.recommendationItem}>
              <img
                src={imageUrl}
                alt={item.item_name}
                className={styles.itemImage}
              />
              <div className={styles.itemDetails}>
                <div className={styles.rating}>
                  <span>{item.rating.stars} ⭐ |</span>
                  <span>{item.rating.count}</span>
                </div>
                <div className={styles.companyName}>{item.company}</div>
                <div className={styles.itemName}>{item.item_name}</div>
                <div className={styles.price}>
                  <span className={styles.currentPrice}>
                    Rs. {item.current_price}
                  </span>
                  <span className={styles.originalPrice}>
                    Rs. {item.original_price}
                  </span>
                  <span className={styles.discount}>
                    ({item.discount_percentage}% OFF)
                  </span>
                </div>
                <div
                  className={styles.virtualTryOnButton}
                  onClick={() => onTryOn(item)}
                >
                  VIRTUAL TRY-ON
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendation;
