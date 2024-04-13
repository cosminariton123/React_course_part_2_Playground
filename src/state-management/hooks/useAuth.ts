import { useContext } from "react";
import AuthContext from "../context/userContext";

const useAuth = () => useContext(AuthContext);

export default useAuth;
