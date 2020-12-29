import React from 'react'
import '../../../assets/css/Pages/Home/Skill.css'
import SkillCard from './SkillCard'
function Skill() {
    return (
        <div className="skills-container">
            <div className="skills-heading">
                <div className="skill-heading-title">
                    <h1>Skills</h1>
                </div>
            </div>
            <div className="skills-body-container">
                <SkillCard iconCss="fa fa-html5" titles="Html 5"/>
                <SkillCard iconCss="fa fa-css3" titles="Css"/>
                <SkillCard iconCss="fa fa-html5" titles="Javascript"/>
                <SkillCard iconCss="fa fa-html5" titles="React Js"/>
                <SkillCard iconCss="fa fa-html5" titles="C#"/>
                <SkillCard iconCss="fa fa-html5" titles="Asp .net"/>
                <SkillCard iconCss="fa fa-html5" titles="SQL"/>
            </div>

        </div>
    )
}

export default Skill
