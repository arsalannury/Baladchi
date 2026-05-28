import { createBrowserRouter } from "react-router";
import Layout from "./shared/layout/Layout";
import Home from "./pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "*", Component: Home },
    ],
  },
]);

export default routes;
