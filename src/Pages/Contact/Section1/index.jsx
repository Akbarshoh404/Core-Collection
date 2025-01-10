import React from "react";
import styles from "./styles.module.scss";
import locationIcon from "../../../Components/Icons/Location.png";
import phoneIcon from "../../../Components/Icons/Call.png";

const Section1 = () => {
  const contacts = [
    {
      location: "Buyuk Ipak Yuli Street, 58",
      phone: "+998 (71) 233 50 00",
    },
    {
      location: "Yunusabad District, Kashgar Residential Area, 4",
      phone: "+998 (71) 234 48 64",
    },
    {
      location:
        "Tashkent, Kukcha Darvoza Street (Samarkand Darvoza, 3rd floor)",
      phone: "+998 (71) 205 10 37",
    },
    {
      location: "Matbuotchilar Street, 17",
      phone: "+998 (71) 267 59 69",
    },
    {
      location: "Babur Street, 6 (NEXT, 3rd floor)",
      phone: "+998 (90) 999 03 31",
    },
    {
      location: "Samarkand, Shohrukh Mirzo Street, 17",
      phone: "+998 (90) 830 64 35",
    },
  ];

  return (
    <div className={styles.section}>
      <p className={styles.p1}>OUR CONTACT NUMBERS</p>
      <div className={styles.container}>
        {contacts.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconText}>
              <img src={locationIcon} alt="location" />
              <p>{item.location}</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.iconText}>
              <img src={phoneIcon} alt="phone" />
              <p>{item.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
