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
                    <h3>Java, Python, Spring, Flask, SQL and NonSQL, CICD, Kafka/RabbitMQ</h3>
                    <p>
                        Started learning Java in the summer of 2021 with online courses and a mentor, who 
                        instilled the Agile Approach to software design, TDD and Clean Code. After completing 
                        my intensive course at CodeClan and a lot of self Study, I learned how to develop and deploy 
                        Python applications using Flask, and Spring applications using Java, liked a presistence
                        layer using SQL and MongoDB to perform CRUD operations, querying APIs as well as using 
                        messaging broker technologies like Kafka, RabbitMQ and WebSocket, and using CircleCI and 
                        AWS to deploy using a CICD/DevOps pipeline.
                    
                    </p>
                </section>
            </section>
        </section>
    )
}

export default BackSection;