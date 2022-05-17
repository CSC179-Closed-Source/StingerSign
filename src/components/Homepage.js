import React, { useEffect } from "react";
import { awsConfig } from "./../AWS/ConfigAws";

export default function Dashboard() {
  useEffect(() => {
    awsConfig();
    localStorage.removeItem("emails");
    localStorage.removeItem("ids");
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-links">
        <hr />
        <br />
        <p> Signatures Required</p>
        <br />
        <hr />
        <br />
        <p> Manage Documents</p>
        <br />
        <hr />
        <br />
        <p> Send Document</p>
        <br />
        <hr />
        <br />
      </div>
    </div>
  );
}
