import React from "react";
import "./about.css";

const About = () => {
    return (
        <div className="aboutContainer">
            <div className="abtTitleContainer">
                <h1 className="aboutTitle">About me</h1>
            </div>

            <div className="abtTextContainer">
                <p className="aboutText">Hey there! 
                    My name's Bryan, 
                    I'm a self-taught full-stack developer aiming to further develop my software and web development skills,
                    with my background as an auditor working with different teams and liaising with clients, 
                    I am no stranger to working with different types of people.
                    Outside of coding, I'm constantly trying to learn new things, be it a foreign language or a new cooking recipe!
                </p>
            </div>
        </div>
    );
};

export default About;