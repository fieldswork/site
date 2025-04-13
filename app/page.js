"use client";

import { useState } from "react";
import Sidebar from "./components/sidebar";

export const dynamic = 'force-dynamic';

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = (isOpen) => {
        setIsSidebarOpen(isOpen);
    };

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <Sidebar onSidebarToggle={handleSidebarToggle} />

            {/* Main Content */}
            <div
                className="main-content"
                style={{
                    marginLeft: isSidebarOpen ? "265px" : "0",
                    transition: "margin-left 0.3s ease",
                    width: "100%",
                }}
            >
                <header>
                    <p>Hello there! Welcome to <a href="https://salmonline.us">salmonline.us</a>!</p>
                    <img
                        src="website-under-construction-image-6.gif"
                        alt="site_construction_sign_gif"
                        width="400"
                        height="400"
                    />
                    <p>This site is currently under construction. Please check back weekly for new content!</p>
                    <p>- Fields</p>
                </header>
            </div>
        </div>
    );
}