import React, { Dispatch } from "react";
import { AuthAction } from "./AuthProvider";

interface AuthContextType {
    user: string; //User object in real world with fields like id, name ETC
    dispatch: Dispatch<AuthAction>
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType)

export default AuthContext;
