import React from "react";
import HeroSection from "../component/HeroSection";
import MainFooter from "../component/MainFooter";
import MainNavbar from "../component/MainNavbar";

const MainPageContainer = () => {
    return (
        <section id="main-page-container">
            <MainNavbar/>
            <main>
                <HeroSection sectionName={"Main"}/>
            </main>
            <MainFooter />
        </section>
    )
}

export default MainPageContainer;