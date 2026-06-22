import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InnerBanner from "../Components/inner_banner/InnerBanner";
import Sidebar from "../Components/sidebar/Sidebar";
import "./pages.css";

const Academics = () => {
    const location = useLocation();

    const menu = [
        { name: "Programmes", path: "cdoe-programmes" },
        { name: "Key Featuers", path: "featuers" },
        { name: "Advantages of CDOE", path: "advantages" },
        { name: "Alignment with NEP 2020", path: "alignment-NEP" },
        { name: "Outcome-Based Education (OBE)", path: "obe" },
        { name: "Fee Structure", path: "fee-structure" },
    ];

    // Title mapping
    const titleMap = {
        "cdoe-programmes": "Programmes",
        "featuers": "Key Featuers",
        "advantages": "Advantages of CDOE",
        "alignment-NEP": "Alignment with NEP 2020",
        "obe": "Governance",
        "fee-structure": "Fee Structure"
    };

    // Get dynamic title based on route
    const getTitle = () => {
        const matchedKey = Object.keys(titleMap).find((key) =>
            location.pathname.includes(key),
        );

        return matchedKey ? titleMap[matchedKey] : "About MIT-ADT";
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

export default Academics;
