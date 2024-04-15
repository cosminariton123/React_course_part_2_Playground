import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TasksContext from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const counter = useCounterStore((s) => s.counter);

  console.log("Render NavBar");

  return (
    <nav className="navbar d-flex justify-content-between">
      <div>
        Nr of tasks:{" "}
        <span className="badge text-bg-secondary">{tasks.length}</span>
      </div>
      <div>
        Nr from counter:{" "}
        <span className="badge text-bg-secondary">{counter}</span>
      </div>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
