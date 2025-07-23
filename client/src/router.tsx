import { createBrowserRouter } from "react-router";
import App from "./App";
import About from "./pages/AboutPage/AboutPage";
import Add from "./pages/AddPage/AddPage";
import Contact from "./pages/ContactPage/ContactPage";
import Delete from "./pages/DeletePage/DeletePage";
import HomePage from "./pages/HomePage/HomePage";
import Update from "./pages/UpdatePage/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomePage />,
        path: "home-page",
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Contact />,
        path: "contact",
      },
      {
        element: <Add />,
        path: "add",
      },
      {
        element: <Delete />,
        path: "delete",
      },
      {
        element: <Update />,
        path: "update",
      },
    ],
  },
]);
export default router;
