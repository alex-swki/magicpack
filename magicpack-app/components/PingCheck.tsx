import styles from "./PingCheck.module.scss";
import { IconRefresh } from "@tabler/icons-react";

export default function ({ pingms, refreshIn }: { pingms: number; refreshIn: number }) {
  return (
    <div className={styles.pingCheck}>
      <h5 className={pingms > 50 ? styles.highlatency : pingms === -1 ? styles.offline : styles.online}>Ping {pingms === -1 ? "---" : pingms} ms</h5>
      <div>
        <IconRefresh />
        <h6>{refreshIn}s</h6>
      </div>
    </div>
  );
}
