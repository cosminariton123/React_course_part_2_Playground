import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage></HomePage> },
  { path: "/users", element: <UserListPage></UserListPage> },
]);

export default router;
