import { createBrowserRouter } from "react-router-dom";

import MainFrame from "@/components/MainFrame.tsx";
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/user/login";

const router = createBrowserRouter([
  {
    path: "/user",
    Component: MainFrame,
    children: [
      {
        path: "/user/login",
        Component: Login,
      },
    ],
  },
  {
    path: "/index",
    Component: MainFrame,
    children: [
      {
        path: "/index/dashboard",
        Component: Dashboard,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
]);
export default router;
