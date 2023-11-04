"use client";
import React, { useState, useEffect, useRef } from "react";

import styles from "./page.module.scss";
import Header from "../../components/Header";
import Description from "../../components/Description";
import Computer from "../../components/Computer";
import WakeButton from "../../components/WakeButton";
import PoweredBy from "../../components/Footer";
import PingCheck from "../../components/PingCheck";

export default function ({ params }: { params: { user: string } }) {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [userName, setUserName] = useState("");
  const [isAlive, setIsAlive] = useState(false);
  const [pingMs, setPingMs] = useState(0);
  const [refreshIn, setRefreshIn] = useState(3);
  const [computerData, setComputerData] = useState({
    location: "undefined",
    name: "undefined",
    mac: "undefined",
    dns: "undefined",
    isAlive: false,
  });

  const hasMounted = useRef(false);

  useEffect(() => {
    fetch("/api/" + params.user)
      .then((res) => res.json())
      .then((data) => {
        setUserName(data.name);
        setComputerData(data.computer);
        setIsAlive(data.computer.isAlive);
        setPingMs(data.computer.ms);
        hasMounted.current = true;
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
  }, [hasMounted, refreshIn]);

  useEffect(() => {
    fetch("/api/" + params.user)
      .then((res) => res.json())
      .then((data) => {
        setIsAlive(data.computer.isAlive);
        setPingMs(data.computer.ms);
      });
  }, [refreshTrigger]);

  if (computerData) {
    return (
      <main className={styles.main}>
        <Header username={userName} />
        <Description />
        <div className={styles.center_wrap}>
          <Computer location={computerData.location} name={computerData.name} mac={computerData.mac} dns={computerData.dns} isAlive={isAlive}>
            <WakeButton mac={computerData.mac}>
              <PingCheck pingms={pingMs} refreshIn={refreshIn} />
            </WakeButton>
          </Computer>
        </div>
        <PoweredBy />
      </main>
    );
  }
}
