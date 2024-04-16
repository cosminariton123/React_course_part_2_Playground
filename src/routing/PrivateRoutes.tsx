import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PrivateRoutes = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login"></Navigate>;

  return <Outlet></Outlet>;
};

export default PrivateRoutes;
