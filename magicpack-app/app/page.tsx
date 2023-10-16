import styles from "./page.module.scss";
import Image from "next/image";
import Logo from "../components/Logo";
import PoweredBy from "../components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo imagewidth={240} />
      <section className={styles.description}>
        <h1>
          Great! Everything is working.. <br />
          <br />
          Or is it?
        </h1>
        <p>{process.env.NEXT_PUBLIC_PAGE_DESC1}</p>
        <p>{process.env.NEXT_PUBLIC_PAGE_DESC2}</p>
      </section>
      <PoweredBy />
    </main>
  );
}
