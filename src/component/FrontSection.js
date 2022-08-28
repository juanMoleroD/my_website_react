import React from "react";
import "./HeroSection.css";

const FrontSection = () => {
    return (
        <section id="frontend" className="hero-section hero-section-white">
            <section className="hero-text-section">
                <section className="hero-text hero-text-black">
                    <h2>Front End</h2>
                    <h3>JS, HTML5, CSS3, Node, ReactJS, Bootstrap</h3>
                    <p>
                        Started learning HTML over 10 year ago creating simple websites (first one being about my favourite sandwiches) and using CSS. 
                        Learned JavaScript on my own back in 2018 developing simple console applications, and recently learned how to put the two together
                        during my intensive 16 week course using the ES6 version of JS, as well as the new tags and best practices in HTML5 and CSS3,
                        now more versatile than ever. Learned about Reactive websites and using the React framework doing standalone one page applications as
                        well as creating a tight integration with the Back-end to create full stack website applications.
                    </p>
                </section>
            </section>
            <aside className="hero-image-section">
                <img className="hero-image" alt="frontend diagram" src="/img/frontend.svg"/>
            </aside>
        </section>
    )
}

export default FrontSection;