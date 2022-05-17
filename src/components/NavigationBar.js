import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import AuthApi from "../AuthApi";
import Cookies from "js-cookie";
import { USER_INFO_BASIC } from "../GraphQL/Query";
import DeleteAccount from "./DeleteAccount";

const Navbar = () => {
  const loggedIn = window.localStorage.getItem("state");
  const Auth = useContext(AuthApi);
  const { data } = useQuery(USER_INFO_BASIC, {
    variables: {
      id: loggedIn,
    },
  });

  const reloadPage = () => {
    window.location.reload();
  };

  const handleOnClick = () => {
    Auth.setAuth(false);
    Cookies.remove("user", "loginTrue");
    window.localStorage.clear();
  };

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <div className="navbar">
      <h3 className="header-navbar" align="center" onClick={reloadPage}>
        Stinger Sign
      </h3>

      {data ? (
        <div className="dropdown">
          <Link to="/navigationbar/aboutus"className="link">
          <span className="dropbtn">About Us</span>
          </Link>
          <button onClick={myFunction} className="dropbtn">
            My Account
          </button>
          <div id="myDropdown" className="dropdown-content">
          <Link to="/navigationbar/myprofile">
              <p>View My Account</p>
            </Link>
            <Link to="/">
              <p>Homepage</p>
            </Link>
            <Link onClick={handleOnClick}>
              <p>Log Out</p>
            </Link>
            <Link>
              <DeleteAccount />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
