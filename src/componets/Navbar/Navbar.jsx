import React from 'react';

import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    
      <img
        className={styles.logo}
        width="82px"
        height="25.35px"
        alt="Air Bnb logo"
        src="/logo.png"
      ></img>
    </nav>
  );
};
