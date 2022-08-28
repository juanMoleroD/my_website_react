import React, {useState} from "react";
import HeroSection from "../component/ProfileSection";
import MainFooter from "../component/MainFooter";
import MainNavbar from "../component/MainNavbar";
import MainContent from "./MainContent";

const MainPageContainer = () => {

    const [selectedSection, setSelectedSection] = useState("");


    return (
        <section id="main-page-container">
            <MainNavbar/>
            <main>
                <MainContent selectedSection={selectedSection}/>
            </main>
            <MainFooter />
        </section>
    )
}

export default MainPageContainer;