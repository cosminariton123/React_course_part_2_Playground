import "./App.css";
import Counter from "./state-management/counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <TasksProvider>
      <Counter></Counter>
      <NavBar></NavBar>
      <HomePage></HomePage>
    </TasksProvider>
  );
}

export default App;
