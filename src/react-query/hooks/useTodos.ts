import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { CACHE_KEY_TODOS } from "../constants";

export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

const useTodos = () => {
  const apiClient = new APIClient<Todo>("/todos");

    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        //queryFn: apiClient.getAll,  // this keyword looses context and becomes undefined (it "can't" be part of an object, must be standalone function)
        //queryFn: apiClient.getAll.bind(apiClient), // works but kinda ugly
        queryFn: apiClient.getAll,
        staleTime: 10 * 1000 //10 seconds
      });
}

export default useTodos;