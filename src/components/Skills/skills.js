import React from "react";
import "./skills.css";
import { skillImages } from './skillIndex';

const SkillDivs = (props) => {
    return (
        <div data-a={props.dataA} className="skillDiv">
            {props.children}
        </div>
    );
};

const getSkills = (images, skills) => {
    images.map(({id, source, name}) => {
        skills.push(
            <SkillDivs data-a={name} className="s" id={id}>
                <img src={source}/>
            </SkillDivs>
        );
        return skills;
    });
}

const Skills = (props) => {
    const programSkills = [];

    getSkills(skillImages, programSkills);

    return (
        <div className="skillsContainer">
            <div className="sTitleContainer">
                <h1 className="skillsTitle">Skills</h1>
            </div>

            <div className="allSkills">
                <div className="skills">
                    {programSkills}
                </div>
            </div>
        </div>
    );
};

export default Skills;