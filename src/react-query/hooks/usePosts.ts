import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

interface PostQuery {
  pageSize: number
}

const usePosts = (query: PostQuery) => {
    const fetchPosts = ( { pageParam = 1 }: any ) =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts",{
        params: {
          _start: (pageParam - 1) * query.pageSize, //Utilizatorul vede pagina 1, nu 0 cum e in programare
          _limit: query.pageSize
        }
      })
      .then((res) => res.data);

    return useInfiniteQuery<Post[], Error>({
      //like in URL /user/1/posts
        queryKey: ["posts", query],  //Simmillar to dependency array to Effect hook
        //Avem carnatul asta ca sa nu avem cheia urata: [users, null, posts]
        queryFn: (parameter) => fetchPosts(parameter),
        staleTime: 1 * 60 * 1000, //1 minute
        placeholderData: keepPreviousData, //This keeps the previos data untill the new one arrives
        initialPageParam: undefined,
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.length > 0 ? allPages.length + 1 : undefined; //Mock backend sends empty array as "lastPage" if it is out
        }
      });
}

export default usePosts;