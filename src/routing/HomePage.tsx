import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      <Link to="/users">
        Users with Link from react-router-dom that doesn't use a full page
        reload
      </Link>
      <br></br>
      <a href="/users">Users</a>
    </>
  );
};

export default HomePage;
