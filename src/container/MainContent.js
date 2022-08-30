import React from "react";
import BackSection from "../component/BackSection";
import FrontSection from "../component/FrontSection";
import ProfileSection from "../component/ProfileSection";
import TechnologySection from "../component/TechnologySection";

const MainContent = ({selectedSection}) => {
    return (
        <>
            <ProfileSection /> 
            <FrontSection />
            <BackSection />
            <TechnologySection />
        </>
    )
}

export default MainContent;