import { lazy } from "react";

import { PostDetails } from "../pages/TmpAll";

import { AppRoute } from "../types";
import { basePostRoute } from "../utils/constants";

import PostEdit from "../pages/PostEdit";
import PostCreate from "../pages/PostCreate";
import NotFound from "../pages/NotFound";
import SinglePost from "../pages/SinglePost";

const HomePage = lazy(() => import("../pages/Home"));
const BlogPage = lazy(() => import("../pages/Blog"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

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
    title: "Blog"
  },
  {
    element: <PostCreate />,
    path: `${basePostRoute}/new`
  },
  {
    element: <SinglePost />,
    path: `${basePostRoute}:postParam`
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
