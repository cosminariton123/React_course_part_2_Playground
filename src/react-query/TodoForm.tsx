import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    // <What we get from server, The error type class(shoudn't change), What we sent the server>
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),

    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || []; //Make a save for optimistic update to revert if error

      //Function that is called before the mutation is executed
      //APPROACH_3 Like APPROACH_2 but with optimistic update
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []), //Should also work with immer
      ]);

      if (ref.current) ref.current.value = "";

      return { previousTodos }; //Return previos so we will have context in Error function if necessary
    },

    onSuccess: (savedTodo, newTodo) => {
      //newTodo is what we sent, savedTodo is what we recieved

      //APPROACH_1: Invalidating the cache --> NOTE IT DOES NOT WORK WITH MOCK BACKEND CUZ IT JUST SENDS US THE SAME EVERYTIME
      //queryClient.invalidateQueries({
      //  queryKey: ["todos"], //This invalidates all queries that start with todos
      //});

      //APPROACH_2: Updating the cache directly
      //queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
      //  savedTodo,
      //  ...(todos || []), //Should also work with immer
      //]);
      //if (ref.current) ref.current.value = "";

      //APPROACH_3
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      //newTodo is the new object we try to create/update, context
      if (!context) return; //First querry failed. We got no data. There is nothing todo cuz all failed

      queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos); //Revert back to previous "cache"
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
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
          <button disabled={addTodo.isPending} className="btn btn-primary">
            {addTodo.isPending ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
