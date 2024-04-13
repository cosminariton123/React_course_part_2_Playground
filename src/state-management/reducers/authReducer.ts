
interface Login {
    type: "LOGIN";
    username: string;
}

interface Logout {
    type: "LOGOUT";
}

export type AuthAction = Login | Logout;

const authReducer = (state: string, action: AuthAction): string => {
    switch (action.type) {
        case "LOGIN":
            return action.username;
        case "LOGOUT":
            return ""
    }
}

export default authReducer;
