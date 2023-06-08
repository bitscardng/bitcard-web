import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import DownloadModal from "../components/DownloadModal";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <DownloadModal />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
};

export default MainLayout;
