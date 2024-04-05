import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      //newTodo is what we sent, savedTodo is what we recieved

      //APPROACH_1: Invalidating the cache --> NOTE IT DOES NOT WORK WITH MOCK BACKEND CUZ IT JUST SENDS US THE SAME EVERYTIME
      //queryClient.invalidateQueries({
      //  queryKey: ["todos"], //This invalidates all queries that start with todos
      //});

      //APPROACH_2: Updating the cache directly
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []), //Should also work with immer
      ]);
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className="row mb-3"
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current && ref.current.value)
          addTodo.mutate({
            id: 0,
            title: ref.current.value,
            completed: false,
            userId: 1, //hardcoded but it is just an example
          });
      }}
    >
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
