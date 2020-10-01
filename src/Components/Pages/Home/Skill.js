import React from 'react'
import '../../../assets/css/Pages/Home/Skill.css'
import SkillCard from './SkillCard'
function Skill() {
    return (
        <div className="skill-container">
            <div className="skills-heading">
                <div className="skill-heading-title">
                    <h1>Skills</h1>
                </div>
            </div>
            <div className="skills-container">
                <div className="fornt-end">
                    <div className="skill-title"><h3>Front-End Skills</h3></div>
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                </div>
                <div className="server-side">
                    <div className="skill-title"><h3>Server-Side Skills</h3></div>
                    <SkillCard />
                </div>
                <div className="back-end">
                    <div className="skill-title"><h3>Back-End Skills</h3></div>
                    <SkillCard />
                </div>
            </div>

        </div>
    )
}

export default Skill
