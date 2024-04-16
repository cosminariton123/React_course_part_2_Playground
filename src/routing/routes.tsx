import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import UserPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "", element: <HomePage></HomePage> }, //or { index: true, element: <HomePage></HomePage> }
      { path: "login", element: <LoginPage></LoginPage> },
      { path: "contact", element: <ContactPage></ContactPage> },
    ],
  },
  {
    element: <PrivateRoutes></PrivateRoutes>, //Layout route for enforcing business routes
    children: [
      {
        path: "users",
        element: <UserPage></UserPage>,
        children: [{ path: ":id", element: <UserDetail></UserDetail> }],
      },
    ],
  },
]);

export default router;
