import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const links = [
  { path: "/", text: "Home" },
  { path: "about", text: "About" },
  { path: "login", text: "Login" },
  { path: "profile", text: "Profile" },
];

const NavBar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const hangleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar">
        <ul>
          {links.map((link) => {
            return (
              <React.Fragment key={link.text}>
                {link.path === "login" ? (
                  !user && (
                    <li>
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  )
                ) : link.path === "profile" ? (
                  user && (
                    <li>
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  )
                ) : (
                  <li>
                    <NavLink to={link.path}>{link.text}</NavLink>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
      {user && (
        <div className="logout">
          <p>{user}</p>
          <button onClick={hangleLogout}>logout</button>
        </div>
      )}
    </>
  );
};

export default NavBar;
