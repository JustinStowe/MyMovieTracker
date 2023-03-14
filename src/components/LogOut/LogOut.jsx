import { logOut } from "../../utilities/user-services";

export default function UserLogOut({ user, setUser }) {
  console.log(user);
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className="">
      <p>LogOut</p>
      <div>{user.name}</div>
      <div className="">{user.email}</div>
      <button className="btn-sm" onClick={handleLogOut}>
        LOG OUT
      </button>
    </div>
  );
}
