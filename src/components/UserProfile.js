import React from "react";
import { USER_INFO } from "../GraphQL/Query";
import { useQuery } from "@apollo/client";

export default function Dashboard() {
  const loggedIn = window.localStorage.getItem("state");
  const { error, data } = useQuery(USER_INFO, {
    variables: {
      id: loggedIn,
    },
  });

  if (error) return <div> ERROR </div>;

  return (
    <div className="profile-background">
      {data ? (
        <div className="profile-info">
          <table>
            <th className="tableheader" colSpan="5">
              My Account
            </th>
            <tr>
              <th className="tablehead">First Name</th>
              <th className="tablehead">Last Name</th>
              <th className="tablehead">Email </th>
              <th className="tablehead">Company</th>
              <th className="tablehead">Job Title</th>
            </tr>
            <tr key={data.get_UserInfo.userEmail}>
              <td>{data.get_UserInfo.userFirstName}</td>
              <td>{data.get_UserInfo.userLastName}</td>
              <td>{data.get_UserInfo.userEmail}</td>
              <td>{data.get_UserInfo.userCompany}</td>
              <td>{data.get_UserInfo.userJobTitle}</td>
            </tr>
          </table>
        </div>
      ) : null}
    </div>
  );
};
