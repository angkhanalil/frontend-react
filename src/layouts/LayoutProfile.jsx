import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import NavbarAdmin from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Container } from "reactstrap";
const LayoutProfile = () => {
  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <NavbarAdmin />
        {/* <div className="header bg-gradient-uf-info pb-5 pt-5 pt-md-8"></div>{" "} */}
        <Outlet />
        <Container fluid>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default LayoutProfile;
