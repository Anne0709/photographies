import { createBrowserRouter } from "react-router";
import App from "./App";
import About from "./pages/AboutPage/AboutPage";
import Add from "./pages/AddPage/AddPage";
import Contact from "./pages/ContactPage/ContactPage";
import Edit from "./pages/EditPage/EditPage";
import HomePage from "./pages/HomePage/HomePage";
import Update from "./pages/UpdatePage/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomePage />,
        path: "",
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
        element: <Edit />,
        path: "edit/:id",
      },
      {
        element: <Update />,
        path: "update/:id",
      },
    ],
  },
]);
export default router;
