import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { CustomerSupportWidget } from "../components/CustomerSupportWidget/CustomerSupportWidget";

const Layout = () => {
  return (
    <>
      <CustomerSupportWidget />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
