import { useState } from "react";
import {NavLink} from "react-router-dom";
import("../css/Navbar.css");


const UserRegisterLogin = () => {
  return(
    <>
       <li className="nav-item">
          <NavLink className="nav-link" activeClassName="navlink_active" aria-current="page" exact to="/signin">SignIn</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="navlink_active" aria-current="page" exact to="/login">Login</NavLink>
        </li>
    </>
  );
}

const UserLogout = () => {
  return(
    <>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="navlink_active" aria-current="page" exact to="/logout">Logout</NavLink>
        </li>
    </>
  );
}

const Navbar = ({userLoginStatus}) => {
    return(
    <>
   <nav className="navbar navbar-expand-lg fixed-top shadow">
  <div className="container">
    <NavLink className="navbar-brand" to="/">Sun-Tech</NavLink>
    <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-0">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="navlink_active"   aria-current="page"  exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="navlink_active"   aria-current="page"  exact to="/weather">Weather</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="navlink_active" aria-current="page" exact to="/about">AboutUs</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="navlink_active" aria-current="page" exact to="/contact">ContactUs</NavLink>
        </li>
          {
            userLoginStatus ?  <UserLogout /> : < UserRegisterLogin />
          }
        </ul>
    </div>
  </div>
</nav>
        </>
    );
}

export default Navbar;