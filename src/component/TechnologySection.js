import React from "react";
import './TechnologySection.css';
import techStack from "./technologies";
import SkillCard from "./SkillCard";

const TechnologySection = () => {

    const skillNodes = techStack.map( (skill, index) => {
        return <SkillCard key={index} skill={skill} />
    })

    return (
        <section id="technologies">
            <section id="tech-grid">
                <section className="tech-grid-row">
                    {skillNodes.slice(0, 3)}
                </section>
                <section className="tech-grid-row">
                    {skillNodes.slice(3, 5)}
                </section>
            </section>
        </section>
    )
}

export default TechnologySection;