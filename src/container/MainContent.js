import React from "react";
import BackSection from "../component/BackSection";
import FrontSection from "../component/FrontSection";
import ProfileSection from "../component/ProfileSection";

const MainContent = ({selectedSection}) => {
    return (
        <>
            <ProfileSection /> 
            <FrontSection />
            <BackSection />
        </>
    )
}

export default MainContent;