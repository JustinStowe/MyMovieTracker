import React from "react";
import LogOut from "../LogOut/LogOut";

export default function Aside({ user, setUser }) {
  return (
    <main className="">
      <aside>
        <img src="" alt="" />
        <p>Name</p>
        <LogOut user={user} setUser={setUser} />
      </aside>
    </main>
  );
}
