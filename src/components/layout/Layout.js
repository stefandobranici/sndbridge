import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import VisitUs from "./footer/VisitUs";

import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <VisitUs />
      <Footer />
    </div>
  );
}
