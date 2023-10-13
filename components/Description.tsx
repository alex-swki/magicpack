import styles from "./Description.module.scss";

export default function () {
  return (
    <section className={styles.description}>
      <h1>{process.env.NEXT_PUBLIC_PAGE_TITLE}</h1>
      <p>{process.env.NEXT_PUBLIC_PAGE_DESC1}</p>
      <p>{process.env.NEXT_PUBLIC_PAGE_DESC2}</p>
    </section>
  );
}
