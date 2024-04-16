import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import MasterDetailPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "", element: <HomePage></HomePage> }, //or { index: true, element: <HomePage></HomePage> }
      { path: "login", element: <LoginPage></LoginPage> },
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
