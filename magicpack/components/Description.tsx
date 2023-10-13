import styles from "./Description.module.scss";

export default function () {
  return (
    <section className={styles.description}>
      <h1>Wake on LAN</h1>
      <p>Wake up your company computer using the button below.</p>
      <p>When your computer is running, you can connect via Remote Desktop.</p>
    </section>
  );
}
