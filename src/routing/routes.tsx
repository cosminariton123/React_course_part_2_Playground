import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "", element: <HomePage></HomePage> }, //or { index: true, element: <HomePage></HomePage> }
      { path: "users", element: <UserListPage></UserListPage> },
      { path: "contact", element: <ContactPage></ContactPage> },

      { path: "/users/:id", element: <UserDetailPage></UserDetailPage> },
    ],
  },
]);

export default router;
