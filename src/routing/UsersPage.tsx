import { Navigate, Outlet } from "react-router-dom";
import UserList from "./UserList";
import useAuth from "./hooks/useAuth";

const MasterDetailPage = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login"></Navigate>;

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

export default MasterDetailPage;
