import styles from "./Footer.module.scss";
import Logo from "./Logo";

export default function () {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles.wrapper}>
        <h6 className={styles.text}>Powered by</h6>
        <Logo imagewidth={110} />
      </div>
    </footer>
  );
}
