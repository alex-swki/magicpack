import styles from "./page.module.scss";
import Image from "next/image";
import Logo from "../components/Logo";
import PoweredBy from "../components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo imagewidth={240} />
      <PoweredBy />
    </main>
  );
}
