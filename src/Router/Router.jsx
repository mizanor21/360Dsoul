import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Components/Error/ErrorPage";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/About/About";
import BlogPage from "../Pages/BlogPage/BlogPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import TeamPage from "../Pages/TeamPage/TeamPage";
import EventsPage from "../Pages/EventsPage/EventsPage";
import Career from "../Components/Career/Career";
import GalleryPage from "../Pages/GallaryPage/GalleryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/contact-us",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/team",
        element: <TeamPage></TeamPage>,
      },
      {
        path: "/our-events",
        element: <EventsPage></EventsPage>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/gallery",
        element: <GalleryPage></GalleryPage>,
      },
    ],
  },
]);

export default router;
