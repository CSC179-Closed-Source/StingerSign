import React, { useEffect } from "react";
import { awsConfig } from "./../AWS/ConfigAws";
import { Link } from "react-router-dom";

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
       <p> <Link to="/pdfviewer">PDF Viewer</Link></p>
        <br />
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
