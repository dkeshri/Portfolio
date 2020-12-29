import React from 'react'
import '../../../assets/css/Pages/Home/SkillCard.css'
function SkillCard(Props) {
    return (
        <div className="skill-card">
            <i className={Props.iconCss}></i>
            <span class="skill-card-title">{Props.titles}</span>
        </div>
    )
}

export default SkillCard
