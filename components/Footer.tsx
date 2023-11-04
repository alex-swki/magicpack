import styles from "./Footer.module.scss";
import { MagicPackLogo } from "./Logo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles.wrapper}>
        <h6 className={styles.text}>Powered by</h6>
        <MagicPackLogo imagewidth={110} />
      </div>
    </footer>
  );
}
