import React from "react";
import './About.css'

function About() {
 
  return (
      <div className="about">

           <div className ="aboutTop-section">
            <h1 style={{textAlign: "center"}}>Created with love by Team Closed Source</h1>
            <p style={{textAlign: "center"}}></p>
            </div>

            <div className="aboutIntro">
                <h1> About Stinger Sign</h1>
                <p>  This website was created for CSC 179.</p>
                <p> The purpose is to easily access, manage and share documents that need signatures.</p>
            </div>
            

            <div className="aboutTeam">
                <h1> Team Closed Source</h1>
                <p> Juan Ambriz</p>
                <p> Nataly Avalos </p>
                <p> Harish Kandaswamy </p>
                <p> Abdul Tareq Khaliq </p>
                <p> Harjap Singh </p>
                <p> Keith Valdes </p>
            </div>          
      </div>
     

    
  );
}
export default About;
