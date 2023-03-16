import { logOut } from "../../utilities/user-services";
import styles from "./LogOut.module.scss";

export default function UserLogOut({ user, setUser }) {
  console.log(user);
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className={styles.LogOut}>
      <p>LogOut</p>
      <div>{user.name}</div>
      <div className="">{user.email}</div>
      <button className="btn-sm" onClick={handleLogOut}>
        LOG OUT
      </button>
    </div>
  );
}
