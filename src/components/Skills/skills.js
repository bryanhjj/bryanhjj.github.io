import React from "react";
import "./skills.css";
import { skillImages1, skillImages2, skillImages3 } from './skillIndex';

const SkillDivs = (props) => {
    return (
        <div className="skillDiv">
            {props.children}
        </div>
    );
};

const getSkills = (images, skills) => {
    images.map(({id, source, name}) => {
        skills.push(
            <SkillDivs id={id} key={name}>
                <img src={source} className='icons' alt={name}/>
            </SkillDivs>
        );
        return skills;
    });
}

const Skills = (props) => {
    const programSkills1 = [];
    const programSkills2 = [];
    const programSkills3 = [];

    getSkills(skillImages1, programSkills1);
    getSkills(skillImages2, programSkills2);
    getSkills(skillImages3, programSkills3);

    return (
        <div className="skillsContainer">
            <div className="sTitleContainer">
                <div className="sTitleBackground">
                    <h1 className="skillsTitle">Skills</h1>
                </div>
            </div>

            <div className="allSkills">
                <div className="row1">
                    {programSkills1}
                </div>
                <div className="row2">
                    {programSkills2}
                </div>
                <div className="row3">
                    {programSkills3}
                </div>
                <p>...and more</p>
            </div>
        </div>
    );
};

export default Skills;