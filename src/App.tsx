import { useReducer } from "react";
import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/context/tasksContext";
import taskReducer from "./state-management/reducers/tasksReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar></NavBar>
        <HomePage></HomePage>
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
