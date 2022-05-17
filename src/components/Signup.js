import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { ALL_USERS } from "../GraphQL/Query";
import { ADD_USER } from "../GraphQL/Mutations";
import { useQuery, useMutation } from "@apollo/client";
import axios from "axios";

function Signup() {
  const initialValues = {
    email: "",
    password: "",
    conPassword: "",
    fname: "",
    lname: "",
    company: "",
    jobtitle: "",
    gen: "",
    req: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [err, setErr] = useState(false);
  const { error, loading, data, refetch } = useQuery(ALL_USERS);
  const [add_UserInfo_async, { loading: l }] = useMutation(ADD_USER);

  if (l) <div>Loading...</div>;
  if (error) return <div> ERROR </div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validateUser());
    setErr(false);
  };

  const validateUser = () => {
    refetch();
    const errors = {};
    data.list_UserInfoItems._UserInfoItems.map((item) => {
      if (item.userEmail === formValues.email) {
        errors.email = "Email is already in use";
        errors.gen = "Error";
      }
      if (
        !formValues.fname ||
        !formValues.lname ||
        !formValues.password ||
        !formValues.email ||
        !formValues.conPassword
      ) {
        errors.req = "Missing Required Fields";
        errors.gen = "Error";
      }

      if (formValues.password.length <= 5) {
        if (errors.req !== "Missing Required Fields") {
          errors.password = "Password must be at least 6 characters long";
          errors.gen = "Error";
        }
      }

      if (
        formValues.password !== formValues.conPassword &&
        errors.password !== "Password must be at least 6 characters long"
      ) {
        if (errors.req !== "Missing Required Fields") {
          errors.conPassword = "Passwords do not match";
          errors.gen = "Error";
        }
      }
    });
    return errors;
  };

  const handleSubmit = (e) => {
    refetch();
    setFormErrors(validateUser());
    if (
      formErrors.email === "Email is already in use" ||
      !formValues.fname ||
      !formValues.lname ||
      !formValues.email ||
      !formValues.password ||
      !formValues.conPassword ||
      (formValues.password !== formValues.conPassword &&
        formValues.password !==
          "Password must be at least 6 characters long") ||
      formValues.password.length <= 5
    ) {
      setErr(true);
      e.preventDefault();
    } else {
      addUser();
      setErr(false);
      setIsSubmit(true);
    }
  };

  const addUser = async () => {
    const hashedPW = await getHashedPassword();
    if (!formValues.company) {
      formValues.company = "N/A";
    }
    if (!formValues.jobtitle) {
      formValues.jobtitle = "N/A";
    }
    const data = add_UserInfo_async({
      variables: {
        userEmail: formValues.email.toLowerCase(),
        userFirstName: formValues.fname,
        userLastName: formValues.lname,
        userPassword: hashedPW,
        userCompany: formValues.company,
        userJobTitle: formValues.jobtitle,
      },
    });
  };

  const getHashedPassword = async () => {
    let tempPW = "";
    const options = {
      method: "GET",
      url: "http://localhost:8000/hashedPassword",
      params: { plainPassword: formValues.password },
    };

    await axios
      .request(options)
      .then((response) => {
        tempPW = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
    return tempPW;
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit}>
        {isSubmit && !l ? <Redirect to="/" /> : null}
        <h2 className="signup-header">Welcome &nbsp;to &nbsp;Stinger-Sign</h2>
        <div className="signup-allfields">
          <p className="signup-inputheader"> Create An Account</p>
          <div>
            <label>First Name* </label>
            <br />
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={formValues.fname}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label>Last Name* </label>
            <br />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={formValues.lname}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label>Company </label>
            <br />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formValues.company}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label>Job Title </label>
            <br />
            <input
              type="text"
              name="jobtitle"
              placeholder="Job Title"
              value={formValues.jobtitle}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label>Email* </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label>Password* </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label>Confirm Password* </label>
            <br />
            <input
              type="password"
              name="conPassword"
              placeholder="Confirm Password"
              value={formValues.conPassword}
              onChange={handleChange}
            />
          </div>
          <br />
          {err ? (
            formErrors.gen === "Error" ? (
              <div className="signup-error">
                <p className="errormessage">{formErrors.email}</p>
                <p className="errormessage">{formErrors.req}</p>
                <p className="errormessage">{formErrors.password}</p>
                <p className="errormessage">{formErrors.conPassword}</p>
              </div>
            ) : null
          ) : null}
          <div className="signup-createbutton">
          {!loading ? (
            <button className="signup-createbutton">Create</button>
          ) : (
            <button className="signup-disabledcreatebutton" disabled>Loading...</button>
          )}
          </div>
        </div>
        <span> Already have an account? </span>
        <Link to="/">
          <span> Log In</span>
        </Link>
      </form>
    </div>
  );
}

export default Signup;
