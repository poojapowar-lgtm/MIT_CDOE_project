import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import Sidebar from "../Components/sidebar/Sidebar";
import "./pages.css";

const Admission = () => {
    const location = useLocation();


    const menu = [
        { name: "CDOE — Why Join?", path: "why-cdoe" },
        { name: "Who Should Enroll", path: "who-enroll" },
    ];

    // Title mapping
    const titleMap = {
        "why-cdoe": "CDOE — Why Join?",
        "who-enroll": "Who Should Enroll",
    };

    // Get dynamic title based on route
    const getTitle = () => {
        const matchedKey = Object.keys(titleMap).find((key) =>
            location.pathname.includes(key),
        );

        return matchedKey ? titleMap[matchedKey] : "Amission Procedure";
    };

    const title = getTitle();

    const bgImage = "/assets/images/home/inner_bnr.jpg";

    return (
        <>
            <InnerBanner bgImage={bgImage} title={title} />

            <div className="page-layout">
                <Sidebar menuItems={menu} />
                <div className="page-content">
                    <Outlet />
                </div>


            </div>
        </>
    );
};

export default Admission;
