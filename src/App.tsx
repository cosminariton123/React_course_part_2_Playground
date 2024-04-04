import "./App.css";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      <div className="mb-5">
        <h1>TodoList</h1>
        <TodoList></TodoList>
      </div>
      <div>
        <h1>PostList</h1>
        <PostList></PostList>
      </div>
    </>
  );
}

export default App;
