import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserList from "./UserList";
import ContactPage from "./ContactPage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import MasterDetailPage from "./UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "", element: <HomePage></HomePage> }, //or { index: true, element: <HomePage></HomePage> }
      {
        path: "users",
        element: <MasterDetailPage></MasterDetailPage>,
        children: [{ path: ":id", element: <UserDetail></UserDetail> }],
      },
      { path: "contact", element: <ContactPage></ContactPage> },
    ],
  },
]);

export default router;
