
interface Login {
    type: "LOGIN";
    username: string;
}

interface Logout {
    type: "LOGOUT";
}

type TaskAction = Login | Logout;

const loginReducer = (state: string, action: TaskAction): string => {
    switch (action.type) {
        case "LOGIN":
            return action.username;
        case "LOGOUT":
            return ""
    }
}

export default loginReducer;
