import React from "react";
import "./about.css";

const About = () => {
    return (
        <div className="aboutContainer">
            <div className="abtTitleContainer">
                <div className="abtTitleBackground">
                    <h1 className="aboutTitle">About me</h1>
                </div>
            </div>

            <div className="abtTextContainer">
                <p className="aboutText">Hey there! 
                    My name's Bryan, 
                    I'm a self-taught full-stack developer aiming to further develop my software and web development skills,
                    with my background as an auditor working with different teams and liaising with clients, 
                    I am no stranger to working with different types of people.
                </p>
            </div>
        </div>
    );
};

export default About;