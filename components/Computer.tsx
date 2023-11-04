import styles from "./Computer.module.scss";
import { Source_Code_Pro } from "next/font/google";

import React, { ReactNode } from "react";

const sourcecodepro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
});

export default function Computer({ location, name, mac, dns, isAlive, children }: { location: string; name: string; mac: string; dns: string; isAlive: boolean; children: ReactNode }) {
  return (
    <article className={styles.computer + " " + sourcecodepro.className}>
      <section className={styles.title}>
        <div>
          <h3>Computer</h3>
          <h4>{location}</h4>
        </div>
        <h4 className={isAlive ? styles.online : styles.offline}>{isAlive ? "online" : "offline"}</h4>
      </section>
      <div className={styles.grid}>
        <h3>Comuter name</h3>
        <h4>{name}</h4>
        <h3>MAC address</h3>
        <h4>{mac}</h4>
        <h3>DNS name</h3>
        <h4>{dns}</h4>
      </div>
      {children}
    </article>
  );
}
