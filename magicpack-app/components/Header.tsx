import styles from "./Header.module.scss";
import { Logo } from "./Logo";
import User from "./User";

export default function Header({ username }: { username: string }) {
  return (
    <header className={styles.header}>
      <Logo imagewidth={process.env.NEXT_PUBLIC_COMPANY_LOGO_WIDTH} />
      <User name={username} />
    </header>
  );
}
