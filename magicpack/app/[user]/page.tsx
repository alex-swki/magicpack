"use client";
import React, { useState, useEffect } from "react";

import styles from "./page.module.scss";
import Header from "../../components/Header";
import Description from "../../components/Description";
import Computer from "../../components/Computer";
import WakeButton from "../../components/WakeButton";
import PoweredBy from "../../components/Footer";

export default function ({ params }: { params: { user: string } }) {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [userName, setUserName] = useState("");
  const [isAlive, setIsAlive] = useState(false);
  const [pingMs, setPingMs] = useState(0);
  const [refreshIn, setRefreshIn] = useState(3);
  const [computerData, setComputerData] = useState({
    location: "",
    name: "",
    mac: "",
    dns: "",
    isAlive: false,
  });

  useEffect(() => {
    fetch("/api/" + params.user)
      .then((res) => res.json())
      .then((data) => {
        setUserName(data.name);
        setComputerData(data.computer);
        setIsAlive(data.computer.isAlive);
        setPingMs(data.computer.ms);
      });
  }, []);

  useEffect(() => {
    const intervalRefreshIn = setInterval(() => {
      if (refreshIn > 1) setRefreshIn(refreshIn - 1);
      if (refreshIn === 1) {
        setRefreshIn(3);
        setRefreshTrigger(refreshTrigger + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalRefreshIn);
    };
  }, [refreshIn]);

  useEffect(() => {
    fetch("/api/" + params.user)
      .then((res) => res.json())
      .then((data) => {
        setIsAlive(data.computer.isAlive);
        setPingMs(data.computer.ms);
      });
  }, [refreshTrigger]);

  return (
    <main className={styles.main}>
      <Header username={userName} />
      <Description />
      <div className={styles.center_wrap}>
        <Computer location={computerData.location} name={computerData.name} mac={computerData.mac} dns={computerData.dns} isAlive={isAlive}>
          <WakeButton mac={computerData.mac} pingms={pingMs} refreshIn={refreshIn} />
          {/* onClick={clearInterval(intervalIsAlive)} */}
        </Computer>
      </div>
      <PoweredBy />
    </main>
  );
}
