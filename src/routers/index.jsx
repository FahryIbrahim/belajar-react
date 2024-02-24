import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Index";
import Blog from "../pages/blogs";
import Post from "../pages/blogs/_id";
import About from "../pages/About";

import ErrorPage from "../components/ErrorPage.jsx";
import { posts, postById } from "../apis/loaders.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
        errorElement: <ErrorPage />,
        loader: posts,
      },
      {
        path: "/blog/:id",
        element: <Post />,
        errorElement: <ErrorPage />,
        loader: postById,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
