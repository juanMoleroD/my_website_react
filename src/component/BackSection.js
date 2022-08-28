import React from "react";
import "./HeroSection.css"

const BackSection = () => {
    return(
        <section id="backend" className="hero-section">
            <aside className="hero-image-section">
                <img className="hero-image" alt="author portrait" src="/img/backend.svg"/>
            </aside>
            <section className="hero-text-section">
                <section className="hero-text">
                    <h2>Backend</h2>
                    <h3>Java, Spring, SQL, Unix, Python, Flask</h3>
                    <p>
                        Started learning Java in the summer of 2021 with online courses and a mentor, who 
                        really helped me appreciate the Agile Approach to software design, architecture,  He introduced me 
                        to other mentors in the form of books, and pointed me towards understanding the 
                        importance of software design and architecture. I started creating simple projects 
                    
                    </p>
                </section>
            </section>
        </section>
    )
}

export default BackSection;