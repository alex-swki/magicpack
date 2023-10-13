import styles from "./Footer.module.scss";
import Logo from "./Logo";

export default function () {
  return (
    <footer className={styles.footer}>
      <hr className={styles.divider}></hr>
      <div className={styles.wrapper}>
        <h6 className={styles.text}>Powered by</h6>
        <Logo imagewidth={110} />
      </div>
    </footer>
  );
}
