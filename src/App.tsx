import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/context/tasksContext";
import taskReducer from "./state-management/reducers/tasksReducer";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar></NavBar>
      <HomePage></HomePage>
    </TasksContext.Provider>
  );
}

export default App;
