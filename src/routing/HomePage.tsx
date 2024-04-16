import { Link } from "react-router-dom";

const HomePage = () => {
  //throw new Error("Something failed"); Also goes to routes error;

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
