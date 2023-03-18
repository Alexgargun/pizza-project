import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="wrapper">
      <AuthProvider>
        <NavBar />
        <Outlet />
      </AuthProvider>
    </div>
  );
};

export default Layout;
