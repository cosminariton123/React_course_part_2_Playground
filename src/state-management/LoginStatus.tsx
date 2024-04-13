import { useContext } from "react";
import AuthContext from "./context/userContext";

const LoginStatus = () => {
  const { user, dispatch } = useContext(AuthContext);

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "Ariton Cosmin" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
