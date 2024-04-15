import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(params);
  console.log(searchParams.toString()); //Put in link a querry parameter with name and age
  console.log(searchParams.get("name"));

  const location = useLocation();
  console.log(location);

  return <p>User</p>;
};

export default UserDetailPage;
