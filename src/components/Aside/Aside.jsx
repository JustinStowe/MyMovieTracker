import React from "react";
import LogOut from "../LogOut/LogOut";
import styles from "./Aside.module.scss";

export default function Aside({ user, setUser }) {
  return (
    <aside className={styles.Aside}>
      <img src="" alt="" />
      <p>Name</p>
      <LogOut user={user} setUser={setUser} />
    </aside>
  );
}
