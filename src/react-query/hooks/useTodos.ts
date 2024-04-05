import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {

    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        //queryFn: apiClient.getAll,  // this keyword looses context and becomes undefined (it "can't" be part of an object, must be standalone function)
        //queryFn: apiClient.getAll.bind(apiClient), // works but kinda ugly
        queryFn: todoService.getAll,
        staleTime: 10 * 1000 //10 seconds
      });
}

export default useTodos;