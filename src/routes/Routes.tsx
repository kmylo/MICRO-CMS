import { lazy } from "react";
// import { useParams } from "react-router-dom";

// import Blog from "../pages/Blog";
import { AboutPage } from "../pages/AboutPage/AboutPage";

import { ContactPage } from "../pages/ContactPage/ContactPage";
import { PostDetails, PostPage } from "../pages/TmpAll";

import { AppRoute } from "../types";
import { basePostRoute } from "../utils/constants";

import PostEdit from "../pages/PostEdit";
import PostCreate from "../pages/PostCreate";
import NotFound from "../pages/NotFound";
const HomePage = lazy(() => import("../pages/Home"));
const BlogPage = lazy(() => import("../pages/Blog"));

export const APP_ROUTES: AppRoute[] = [
  {
    element: <HomePage />,
    path: "/",
    title: "Home"
  },
  {
    element: <AboutPage />,
    path: "/about",
    title: "About"
  },
  {
    element: <BlogPage />,
    path: "/blog",
    title: "Blog",
    children: [
      {
        element: <div className="border">SOME OUTLET</div>,
        index: true
      }
    ]
  },
  {
    element: <PostCreate />,
    path: `${basePostRoute}/new`
  },
  {
    element: <PostPage />,
    path: `${basePostRoute}:postParam`,
    // check if is good idea to do
    children: [
      {
        element: <div className="border">SOME OUTLET</div>,
        index: true
      },
      {
        element: <PostDetails />,
        path: "details"
      }
    ]
  },
  {
    element: <PostEdit />,
    path: `${basePostRoute}:postParam/edit`
  },
  {
    element: <ContactPage />,
    path: "/contact",
    title: "Contact"
  },
  {
    element: <NotFound />,
    path: "*"
  }
];

// useNavigate("./") to go up a nested path
// useNavigate(-1) to go back in history, as if the user clicked the back button in a browser
// useNavigate("/pathname") to go to a specific path
