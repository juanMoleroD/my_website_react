import React from "react";
import "./HeroSection.css"

const ProfileSection = () => {
    return(
        <section id="main" className="hero-section">
            <aside className="hero-image-section">
                <img className="hero-image" alt="author portrait" src="/img/Profile-image.jpg"/>
            </aside>
            <section className="hero-text-section">
                <section className="hero-text">
                    <h2>Juan Molero Di Meco</h2>
                    <h3>Software Engineer</h3>
                    <p>I am a full stack software engineer with experience in multiple technologies, 
                    including Java, JavaScript and Python, and a passion for TDD and Clean Code. I changed 
                    my 7+ years Insurance carreer to pursue my passion for software and technology when I 
                    completed the 16 week intensive Software Development Course at CodeClan.
                    Quick on my feet, born problem-solver and great communicator, I keep an open mind 
                    to continually learn.</p>
                </section>
            </section>
        </section>
    )
}

export default ProfileSection;