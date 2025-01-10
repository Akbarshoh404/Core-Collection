import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import img from "../../../Components/Icons/Location.png";

const locations = [
  {
    address: "Buyuk Ipak Yuli Street, 58",
    link: "https://yandex.com/maps/org/172890047909?si=d5zdckpyqfy0rw6k5dt6eckutm",
  },
  {
    address: "Yunusabad District, Kashgar Residential Area, 4",
    link: "https://yandex.com/maps/org/73091402728?si=d5zdckpyqfy0rw6k5dt6eckutm",
  },
  {
    address: "Tashkent, Kukcha Darvoza Street (Samarkand Darvoza, 3rd floor)",
    link: "https://yandex.com/maps/org/116321125963?si=d5zdckpyqfy0rw6k5dt6eckutm",
  },
  {
    address: "Matbuotchilar Street, 17",
    link: "https://yandex.com/maps/org/4784104806?si=d5zdckpyqfy0rw6k5dt6eckutm",
  },
  {
    address: "Babur Street, 6 (NEXT, 3rd floor)",
    link: "https://yandex.com/maps/org/24050636684?si=d5zdckpyqfy0rw6k5dt6eckutm",
  },
  {
    address: "Samarkand, Shohrukh Mirzo Street, 17",
    link: "https://yandex.com/maps/org/241687131413?si=d5zdckpyqfy0rw6k5dt6eckutm",
  },
];

const Section3 = () => {
  const handleNavigation = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.section}>
      <p className={styles.p1}>OUR LOCATIONS</p>
      <div className={styles.container}>
        {locations.map((location, index) => (
          <div
            key={index}
            className={styles.locationCard}
            onClick={() => handleNavigation(location.link)}
            style={{ cursor: "pointer" }}
          >
            <img src={img} alt="location icon" />
            <p>{location.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
