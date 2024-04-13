import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/context/tasksContext";
import taskReducer from "./state-management/reducers/tasksReducer";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/context/userContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar></NavBar>
        <HomePage></HomePage>
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
