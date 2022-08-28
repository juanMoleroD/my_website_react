import React from "react";
import "./HeroSection.css"

const HeroSection = ({sectionName}) => {
    return(
        <section id={sectionName} className="hero-section">
            <aside className="hero-image-section">
                <img className="hero-image" alt="Image" src="/Profile-image.jpg"/>
            </aside>
            <section className="hero-text-section">
                <section className="hero-text">
                    <h2>Juan Molero Di Meco</h2>
                    <h3>Software Engineer</h3>
                    <p>I am a self-taught full stack software engineer with 
                    experience in multiple technologies. Born problem-solver, 
                    always with an open mind, a desire to learn and outstanding 
                    communication skills. Every day there is a chance to learn something 
                    new and be better, and there is a lot I want to learn.</p>
                </section>
            </section>
        </section>
    )
}

export default HeroSection;