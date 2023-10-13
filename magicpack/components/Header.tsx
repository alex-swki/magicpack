import styles from "./Header.module.scss";
import Logo from "./Logo";
import User from "./User";

export default function ({ username }: { username: string }) {
  return (
    <header className={styles.header}>
      <Logo imagewidth={240} />
      <User name={username} />
    </header>
  );
}
