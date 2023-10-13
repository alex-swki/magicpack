import styles from "./WakeButton.module.scss";
import React, { useState, useEffect, useRef, ReactNode } from "react";
import { IconPower } from "@tabler/icons-react";

export default function ({ mac, children }: { mac: string; children: ReactNode }) {
  const [wakeComputerTrigger, setWakeComputerTrigger] = useState(0);

  const isMounted = useRef(false);

  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mac: mac }),
  };

  useEffect(() => {
    // if (isMounted.current) {
    fetch("http://localhost:3000/api/wake", requestOptions);
    // } else {
    isMounted.current = true;
    // }
  }, [wakeComputerTrigger]);

  return (
    <div className={styles.power}>
      <div className={styles.power}>
        <button onClick={() => setWakeComputerTrigger(wakeComputerTrigger + 1)}>
          <IconPower />
        </button>
      </div>
      {children}
    </div>
  );
}
