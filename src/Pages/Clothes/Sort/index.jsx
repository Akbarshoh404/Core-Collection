import React, { useState } from "react";
import { data } from "../../../Data/clothes"; // Adjust path as needed
import styles from "./style.module.scss";

const Sort = () => {
  const [sortType, setSortType] = useState("all");

  const sortedData = data.filter((item) => {
    return sortType === "all" || item.type === sortType;
  });

  const handleSortChange = (type) => {
    setSortType(type);
  };

  return (
    <>
      <div className={styles["sort-container"]}>
        <div
          className={`${styles["sort-option"]} ${
            sortType === "all" ? styles.active : ""
          }`}
          onClick={() => handleSortChange("all")}
        >
          All
        </div>
        <div
          className={`${styles["sort-option"]} ${
            sortType === "highlights" ? styles.active : ""
          }`}
          onClick={() => handleSortChange("highlights")}
        >
          Highlights
        </div>
        <div
          className={`${styles["sort-option"]} ${
            sortType === "new arrivals" ? styles.active : ""
          }`}
          onClick={() => handleSortChange("new arrivals")}
        >
          New Arrivals
        </div>
        <div
          className={`${styles["sort-option"]} ${
            sortType === "spring/summer collection" ? styles.active : ""
          }`}
          onClick={() => handleSortChange("spring/summer collection")}
        >
          Spring/Summer Collection
        </div>
        <div
          className={`${styles["sort-option"]} ${
            sortType === "autumn/winter collection" ? styles.active : ""
          }`}
          onClick={() => handleSortChange("autumn/winter collection")}
        >
          Autumn/Winter Collection
        </div>
      </div>

      <div className={styles["clothes-container"]}>
        {sortedData.map((item) => (
          <div key={item.id} className={styles["clothes-item"]}>
            <img src={item.img} alt={item.name1} />
            <div className={styles["clothes-details"]}>
              <h3>{item.type}</h3>
              <div className={styles["clothes-names"]}>
                <p>
                  {item.name1} - {item.price1}
                </p>
                <p>
                  {item.name2} - {item.price2}
                </p>
                <p>
                  {item.name3} - {item.price3}
                </p>
                <p>
                  {item.name4} - {item.price5}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sort;
