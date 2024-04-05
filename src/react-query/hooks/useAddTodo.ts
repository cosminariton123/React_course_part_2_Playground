import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService , { Todo } from "../services/todoService";


interface AddTodoContext {
    previousTodos: Todo[];
  }

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({ // <What we get from server, The error type class(shoudn't change), What we sent the server>
    mutationFn: todoService.post,

    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || []; //Make a save for optimistic update to revert if error

      //Function that is called before the mutation is executed
      //APPROACH_3 Like APPROACH_2 but with optimistic update
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [ //If undefined it will become [] and makes the bellow code cleaner
        newTodo,
        ...todos, //Should also work with immer
      ]);

      //if (ref.current) ref.current.value = ""; We don't update directly anymore the UI, we should give the component a callback function
      onAdd();  //This is the callback function

      return { previousTodos }; //Return previos so we will have context in Error function if necessary
    },

    onSuccess: (savedTodo, newTodo) => {
      //newTodo is what we sent, savedTodo is what we recieved

      //APPROACH_1: Invalidating the cache --> NOTE IT DOES NOT WORK WITH MOCK BACKEND CUZ IT JUST SENDS US THE SAME EVERYTIME
      //queryClient.invalidateQueries({
      //  queryKey: CACHE_KEY_TODOS, //This invalidates all queries that start with todos
      //});

      //APPROACH_2: Updating the cache directly
      //queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
      //  savedTodo,
      //  ...(todos || []), //Should also work with immer
      //]);
      //if (ref.current) ref.current.value = "";

      //APPROACH_3
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      //newTodo is the new object we try to create/update, context
      if (!context) return; //First querry failed. We got no data. There is nothing todo cuz all failed

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos); //Revert back to previous "cache"
    },
  });
}

export default useAddTodo;