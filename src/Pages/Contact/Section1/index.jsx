import React from "react";
import styles from "./styles.module.scss";
import locationIcon from "../../../Components/Icons/Location.png";
import phoneIcon from "../../../Components/Icons/Call.png";

import { useTranslation } from "react-i18next";

const Section1 = () => {
  const { t, i18n } = useTranslation();
  const contacts = [
    {
      location: "Buyuk Ipak Yuli Street, 58",
      phone: "+998712335000",
      locationLink:
        "https://yandex.com/maps/org/172890047909?si=d5zdckpyqfy0rw6k5dt6eckutm",
    },
    {
      location: "Yunusabad District, Kashgar Residential Area, 4",
      phone: "+998712344864",
      locationLink:
        "https://yandex.com/maps/org/73091402728?si=d5zdckpyqfy0rw6k5dt6eckutm",
    },
    {
      location:
        "Tashkent, Kukcha Darvoza Street (Samarkand Darvoza, 3rd floor)",
      phone: "+998712051037",
      locationLink:
        "https://yandex.com/maps/org/116321125963?si=d5zdckpyqfy0rw6k5dt6eckutm",
    },
    {
      location: "Matbuotchilar Street, 17",
      phone: "+998712675969",
      locationLink:
        "https://yandex.com/maps/org/4784104806?si=d5zdckpyqfy0rw6k5dt6eckutm",
    },
    {
      location: "Babur Street, 6 (NEXT, 3rd floor)",
      phone: "+998909990331",
      locationLink:
        "https://yandex.com/maps/org/24050636684?si=d5zdckpyqfy0rw6k5dt6eckutm",
    },
    {
      location: "Samarkand, Shohrukh Mirzo Street, 17",
      phone: "+998908306435",
      locationLink:
        "https://yandex.com/maps/org/241687131413?si=d5zdckpyqfy0rw6k5dt6eckutm",
    },
  ];

  const openLink = (url) => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  return (
    <div className={styles.section}>
      <p className={styles.p1}>{t("numbers")}</p>
      <div className={styles.container}>
        {contacts.map((item, index) => (
          <div key={index} className={styles.card}>
            {/* Location Section */}
            <div
              className={styles.iconText}
              onClick={() => openLink(item.locationLink)}
              style={{ cursor: "pointer" }}
            >
              <img src={locationIcon} alt="location" />
              <p>{item.location}</p>
            </div>
            <div className={styles.line}></div>
            {/* Phone Section */}
            <div className={styles.iconText}>
              <img src={phoneIcon} alt="phone" />
              <a
                href={`tel:${item.phone}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p>{item.phone}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
