import { createBrowserRouter } from "react-router";
import Layout from "./shared/layout/Layout";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Topic from "./pages/Topic";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "topics", Component: Topics },
      { path: "topics/:id", Component: Topic },
      { path: "*", Component: Home },
    ],
  },
]);

export default routes;
