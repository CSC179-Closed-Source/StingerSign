import React, { useContext, useState } from "react";
import Cookies from "js-cookie";
import { ALL_USERS } from "../GraphQL/Query";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthApi from "../AuthApi";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const Auth = useContext(AuthApi);
  const [toRefetchData, setToRefetchData] = useState(0);
  const [formError, setFormError] = useState("");
  const [formValues, setFormValues] = useState(initialValues);
  const { error, loading, data, refetch } = useQuery(ALL_USERS);

  if (error) return <div> ERROR {error.message} </div>;

  const handleOnClick = () => {
    Auth.setAuth(true);
    Cookies.set("user", "loginTrue");
  };

  const handleChange = (e) => {
    if (toRefetchData < 1) {
      refetch();
      console.log("Refetched");
      setToRefetchData((toRefetchData) => toRefetchData + 1);
    }
    setFormError("");
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateUser();
  };

  const validateUser = async () => {
    let errors = "";
    let hashedPasswordForUser = "";
    let validEmail = false;
    let userId = "";

    data.list_UserInfoItems._UserInfoItems.map((item) => {
      if (item.userEmail === formValues.email.toLowerCase()) {
        validEmail = true;
        hashedPasswordForUser = item.userPassword;
        userId = item._id;
      }
    });
    const isCorrectPassword = await checkPasswordWithHashedPassword(hashedPasswordForUser);
    if (validEmail && isCorrectPassword === true) {
      setFormError("");
      handleOnClick();
      Auth.setLoggedInUser(userId);
      window.localStorage.setItem("state", userId);
    } else {
      errors = "Incorrect Information";
      setFormError(errors);
    }
  };

  const checkPasswordWithHashedPassword = async (vendiaStoredPassword) => {
    let temp = false;
    const options = {
      method: "GET",
      url: "http://localhost:8000/comparePassword",
      params: {
        plainPassword: formValues.password,
        hashedPassword: vendiaStoredPassword,
      },
    };

    await axios
      .request(options)
      .then((response) => {
        temp = response.data;
      })
      .catch((error) => {
        console.error(error);
      });

    return temp;
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1 className="login-header">Welcome &nbsp;to &nbsp;Stinger-Sign</h1>
        <div></div>
        <div className="login-allinputs">
          <p className="login-inputheader">Login</p>
          <div className="login-email">
            <label>Email </label>
            <input
            className="login-email-input"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p> </p>
          </div>
          <div className="login-password">
            <label>Password </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="login-errormessage"> {formError} </p>
          </div>
          <div className="login-loginbutton">
          {!loading ? (
            <button className="login-workingbutton">Log In</button>
          ) : (
            <button className="login-notworkingbutton" disabled>
              Loading...
            </button>
          )}
          </div>
        </div>
        <div className="login-noaccount">
        <span> Don't have an Account? </span>
        <Link to="/signup">
          <span onClick={refetch}> Create Account</span>
        </Link>
        </div>
        <br />
      </form>
    </div>
  );
}

export default Login;
