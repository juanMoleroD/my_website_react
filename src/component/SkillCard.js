import React from "react";
import './TechnologySection.css';


const SkillCard = ({skill}) => {
    return (
        <section className="skill-card">
            <h3>{skill.skillCategory}</h3>
            <h5>{skill.skillList}</h5>
            <p>{skill.skillDetails}</p>
        </section>
    )
}

export default SkillCard;