import styles from "./topNavigation.module.scss";

export default function TopNavigation () {
  return (
    <div className={styles.mainCon}>
      <p className={styles.active}>Home</p>
      <p >News</p>
      <p >Contact</p>
      <p >About</p>
    </div>
  );
}