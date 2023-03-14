import { logOut } from "../../utilities/users-service";

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className="">
      <p>LogOut</p>
      {/* <div>{user.name}</div>
      <div className="">{user.email}</div>
      <button className="btn-sm" onClick={handleLogOut}>
        LOG OUT
      </button> */}
    </div>
  );
}
