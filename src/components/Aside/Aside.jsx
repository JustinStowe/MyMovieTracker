import React from "react";
import LogOut from "../LogOut/LogOut";
import styles from "./Aside.module.scss";
import { useController } from "../../Controller";
import { useEffect } from "react";

export default function Aside({ user, setUser }) {
  const { friends, getAllFriends, users, addFriend, getAllUsers } =
    useController();
  useEffect(() => {
    if (users.length < 1) {
      getAllFriends();
    }
  }, []);
  return (
    <aside className={styles.Aside}>
      {/* <p>{user.name}</p> */}
      <img className={styles.pic} src={user.picture} alt={user.name} />
      <LogOut user={user} setUser={setUser} />
      {users.map((singleUser) => {
        return (
          <div className={styles.div3} key={singleUser._id}>
            <h3>{singleUser.name}</h3>
            <button
              onClick={() => {
                addFriend(singleUser._id);
                getAllUsers();
                // updateMovie(movie._id, movie);
              }}
            >
              Add User to be your friend
            </button>
          </div>
        );
      })}
      {friends.map((friend) => {
        return (
          <div className={styles.div3} key={friend._id}>
            <h3>{friend.name}</h3>
            <button onClick={() => {}}>See Movies your frind has</button>
          </div>
        );
      })}
    </aside>
  );
}
