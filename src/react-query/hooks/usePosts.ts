import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

interface PostQuery {
  page: number;
  pageSize: number
}

const usePosts = (query: PostQuery) => {
    const fetchPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts",{
        params: {
          _start: (query.page - 1) * query.pageSize, //Utilizatorul vede pagina 1, nu 0 cum e in programare
          _limit: query.pageSize
        }
      })
      .then((res) => res.data);

    return useQuery<Post[], Error>({
      //like in URL /user/1/posts
        queryKey: ["posts", query],  //Simmillar to dependency array to Effect hook
        //Avem carnatul asta ca sa nu avem cheia urata: [users, null, posts]
        queryFn: fetchPosts,
        staleTime: 1 * 60 * 1000, //1 minute
        placeholderData: keepPreviousData //This keeps the previos data untill the new one arrives
      });
}

export default usePosts;