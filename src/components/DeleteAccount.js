import React, { useContext } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../GraphQL/Mutations";
import AuthApi from "../AuthApi";
import Cookies from "js-cookie";

export default function DeleteAccount() {
  const [remove_UserInfo_async] = useMutation(DELETE_USER);
  const loggedIn = window.localStorage.getItem("state");
  const Auth = useContext(AuthApi);


  const handleOnDelete = () => {
    let answer = window.confirm(
      "You can not undo this action, Are you sure you want to delete this account?"
    );
    console.log(answer);
    if (answer) {
      Auth.setAuth(false);
      remove_UserInfo_async({
        variables: {
          id: loggedIn,
        },
      });
      Cookies.remove("user", "loginTrue");
      window.localStorage.clear();
    }
  };
  return (
      <span className="delete-link" onClick={handleOnDelete}>
        Delete Account
      </span>
  );
}
