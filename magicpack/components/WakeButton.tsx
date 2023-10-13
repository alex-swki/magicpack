import { IconRefresh, IconPower } from "@tabler/icons-react";
import styles from "./WakeButton.module.scss";
import React, { useState, useEffect } from "react";

export default function ({ mac, refreshIn, pingms }: { mac: string; refreshIn: number; pingms: number }) {
  const [wakeComputerTrigger, setWakeComputerTrigger] = useState(0);

  useEffect(() => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mac: mac }),
    };
    fetch("http://localhost:3000/api/wake", requestOptions).then((res) => {
      console.log(res);
    });
  }, [wakeComputerTrigger]);

  return (
    <div className={styles.power}>
      <div className={styles.power}>
        <button onClick={() => setWakeComputerTrigger(wakeComputerTrigger + 1)}>
          <IconPower />
        </button>
      </div>
      <div>
        <h5 className={pingms > 50 ? styles.highlatency : styles.online}>Ping {pingms} ms</h5>
        <div>
          <IconRefresh />
          <h6>{refreshIn}s</h6>
        </div>
      </div>
    </div>
  );
}
