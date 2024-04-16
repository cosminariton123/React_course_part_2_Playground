import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main">
        <Outlet></Outlet> {/*This is a placeholder for a child component*/}
      </div>
    </>
  );
};

export default Layout;
