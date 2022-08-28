import React from "react";
import './MainNavbar.css'

const MainNavbar = () => {
    return (
        <header id="main-navbar">
            <h1 id="title">Juan Molero</h1>
            <ul id="navbar-link-list">
                <li>
                    <a href="#frontend">Front</a>
                </li>
                <li>
                    <a href="#backend">Back</a>
                </li>
                <li>
                    <a href="#technologies">Technologies</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="https://github.com/juanMoleroD/">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/juan-molero-di-meco-b7b94a136">LinkedIn</a>
                </li>
            </ul>

        </header>
    )
}

export default MainNavbar;