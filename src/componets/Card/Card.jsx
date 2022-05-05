/* eslint-disable react/prop-types */
import React from 'react';
//import classNames from 'classnames/bind';

import styles from './Card.module.css';

//const cx = classNames.bind(styles);

export const Card = ({ item }) => {
  let badgeText;

  if (item.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (item.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className={styles.card}>
      {badgeText && <div className={styles.cardBadge}>{badgeText}</div>}
      <img className={styles.cardImage} src={item.coverImg} alt="image" height={400} width={300} />
      <div className={styles.cardStats}>
        <img src="/star.png" alt="star" width="14px" height="14px" />
        <span>{item.rating} </span>
        <span className={styles.gray}>({item.reviewCount}) • </span>
        <span className={styles.gray}>{item.location}</span>
      </div>
      <p className={styles.cardTitle}>{item.title}</p>

      <p className={styles.cardPrice}>
        <span className={styles.bold}>From ${item.price}</span> / person
      </p>
    </div>
  );
};
