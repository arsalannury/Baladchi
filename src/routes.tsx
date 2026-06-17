import { createBrowserRouter } from "react-router";
import Layout from "./shared/layout/Layout";
import Home from "./pages/Home";
import Topics from "./pages/Topics";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "topics", Component: Topics },
      { path: "*", Component: Home },
    ],
  },
]);

export default routes;
