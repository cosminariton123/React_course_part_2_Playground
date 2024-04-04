import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);

  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <div className="my-3">
        <button
          disabled={page === 1}
          className="btn btn-primary"
          onClick={() => setPage(page - 1)}
        >
          Previos
        </button>
        <button
          className="btn btn-primary ms-1"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>{" "}
        {/*Can't code disabled cuz dummy backend doesn't tell us the limit*/}
      </div>
    </>
  );
};

export default PostList;
