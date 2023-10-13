import styles from "./User.module.scss";
import { IconUser } from "@tabler/icons-react";

export default function ({ name }: { name: string }) {
  return (
    <div className={styles.user}>
      <h6>{name}</h6>
      <IconUser />
    </div>
  );
}
