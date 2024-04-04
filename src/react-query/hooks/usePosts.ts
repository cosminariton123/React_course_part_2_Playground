import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

const usePosts = (userId: number | undefined) => {
    const fetchPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts",{
        params: {
          userId
        }
      })
      .then((res) => res.data);

    return useQuery<Post[], Error>({
      //like in URL /user/1/posts
        queryKey: userId ? ["users", userId, "posts"] : ["posts"],  //Simmillar to dependency array to Effect hook
        //Avem carnatul asta ca sa nu avem cheia urata: [users, null, posts]
        queryFn: fetchPosts,
        staleTime: 1 * 60 * 1000 //1 minute
      });
}

export default usePosts;