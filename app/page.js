"use client";

import Sidebar from "./components/sidebar";

export const dynamic = 'force-dynamic';

export default function Home() {
    return (
        <div style={{ display: "flex", height: "100vh"}}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="main-content" style={{ marginLeft: "265px", marginTop: "15px" }}>
                <header>
                    <p>Hello there! Welcome to <a href="https://salmonline.us" target="_blank" rel="noopener noreferrer">salmonline.us</a>!</p>
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