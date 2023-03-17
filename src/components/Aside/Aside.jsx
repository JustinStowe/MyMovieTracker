import React from "react";
import LogOut from "../LogOut/LogOut";
import styles from "./Aside.module.scss";

export default function Aside({ user, setUser }) {
  return (
    <aside className={styles.Aside}>
      <p>{user.name}</p>
      <img src="" alt="" />
      <LogOut user={user} setUser={setUser} />
    </aside>
  );
}
