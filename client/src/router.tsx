import { createBrowserRouter } from "react-router";
import App from "./App";
import About from "./pages/AboutPage/AboutPage";
import Contact from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import Landscape from "./pages/LandscapePage/LandscapePage";
import Portrait from "./pages/ PortraitPage/PortraitPage";
import Toddler from "./pages/ToddlerPage/ToddlerPage";

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
        element: <Landscape />,
        path: "landscape",
      },
      {
        element: <Portrait />,
        path: "portrait",
      },
      {
        element: <Toddler />,
        path: "toddler",
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Contact />,
        path: "contact",
      },
    ],
  },
]);
export default router;
