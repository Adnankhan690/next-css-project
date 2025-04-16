'use client';
import { useState } from 'react';
import styles from './menu-icon.module.scss';

export default function MenuIcon () {
  const [toggleMenuIcon, setToggleMenuIcon] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenuIcon(!toggleMenuIcon);
    console.log("toggle");

  };

  return (
    <div className={styles.iconCon}>
      <div className={styles.menuIcon}>
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>


      {/* Animated Menu Icon */}
      <div>
        <div className={`${styles.animatedMenuIcon}  ${toggleMenuIcon && styles.change} `} onClick={handleMenuToggle}>
          <div className={`${styles.bar1}`} />
          <div className={`${styles.bar2}`} />
          <div className={`${styles.bar3}`} />
        </div>
        <p>Animated Menu Icon</p>
      </div>
    </div>
  );
}