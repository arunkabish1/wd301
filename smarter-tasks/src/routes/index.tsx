import Signup from "../pages/signup";
import Projects from "../pages/projects";
import Members from "../pages/members";
import Logout from "../pages/Logout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AccountLayout from "../layouts/account";
import ProtectedRoute from "./ProtectedRoute";
import Signin from "../pages/signin";
import Notfound from "../pages/Notfound";
const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "members",
        element: <Members />,
      },
    ],
  },
]);

export default router;