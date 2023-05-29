import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./layout/MainLayout";
import VirtualCard from "./pages/VirtualCard";
import Crypto from "./pages/Crypto";
import GlobalAccount from "./pages/GlobalAccount";
import Giftcard from "./pages/Giftcard";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import FAQ from "./pages/FAQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "virtual-card",
        element: <VirtualCard />,
      },
      {
        path: "crypto",
        element: <Crypto />,
      },
      {
        path: "global-account",
        element: <GlobalAccount />,
      },
      {
        path: "giftcard",
        element: <Giftcard />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:blogpost",
        element: <BlogDetails />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
