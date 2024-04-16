import { Navigate, Outlet } from "react-router-dom";
import UserList from "./UserList";

const UserPage = () => {
  return (
    <div className="row">
      <div className="col">
        <UserList></UserList>
      </div>
      <div className="col">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default UserPage;
