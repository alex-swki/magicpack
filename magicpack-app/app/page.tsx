"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import Logo from "../components/Logo";
import PoweredBy from "../components/Footer";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [computerRoutes, setComputerRoutes] = useState(Array<string>);

  const getRoutes = (fetch_routes: object) => {
    const routes = [];
    for (const route of Object.keys(fetch_routes)) {
      routes.push("/" + route);
    }

    setComputerRoutes(routes);
  };

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        getRoutes(data);
      });
  }, []);

  return (
    <main className={styles.main}>
      <Logo imagewidth={240} />
      <section className={styles.description}>
        <h1>Great! Everything is working.. Or is it?</h1>
        <p>In order to wake up the computers specified in computers.json, navigate to the according URL. You can also use the API to wake up any computer in your network without using this frontend</p>
        <p>
          See the{" "}
          <a target="_blank" href="https://github.com/alex-swki/magicpack/blob/master/README.md">
            Readme
          </a>
        </p>
        <br />
        <p>Your routes based on your current computers.json:</p>
        <br />
        <ul>
          {computerRoutes.map((route, index) => {
            return (
              <li key={index}>
                <a href={route}>{route}</a>
              </li>
            );
          })}
        </ul>
      </section>
      <PoweredBy />
    </main>
  );
}
