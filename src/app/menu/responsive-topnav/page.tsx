'use client';
import { Menu } from 'lucide-react';
import styles from './responsiveTopnav.module.scss';
import { useState } from 'react';

export default function ResponsiveTopnav () {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <p>Responsive Top Nav [Resize-window to see the effect]</p>
      <div className={styles.mainCon}>
        <div className={`${styles.topNavCon} ${responsive ? styles.hide : styles.show}`}>
          <div className={styles.active}>Home</div>
          <div >News</div>
          <div >Contact</div>
          <div >About</div>
        </div>
        <div className={styles.menuCon} onClick={() => { setResponsive(!responsive); }}>
          <Menu className={styles.menu} />
        </div>
      </div></>
  );
}