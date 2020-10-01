import React from 'react'
import '../../../assets/css/Pages/Home/SkillCard.css'
function SkillCard() {
    return (
        <div className="skill-card">
            <i className="fa fa-html5"></i>
            <div className="skill-progress-bar">
                <div className="progress-indicator"></div>
            </div>
            <div className="percentage">
                30%
            </div>
        </div>
    )
}

export default SkillCard
