import { createContext, useState, useLayoutEffect } from "react";
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
import DownloadModal from "./components/DownloadModal";

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
  {
    path: "modal",
    element: <DownloadModal />,
  },
]);

export const ModalContext = createContext();
function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    console.log(window.innerWidth);
    if (!window.innerWidth > 700) {
      window.location.replace("https://m.bitscard.app/");
    }
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    console.log(windowSize);
    window.addEventListener("resize", handleResize);
    if (windowSize.width <= 700) {
      window.location.replace("https://m.bitscard.app/");
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize.width]);
  const [downloadModal, setDownloadModal] = useState(false);
  return (
    <ModalContext.Provider value={[downloadModal, setDownloadModal]}>
      <RouterProvider router={router} />
    </ModalContext.Provider>
  );
}

export default App;
