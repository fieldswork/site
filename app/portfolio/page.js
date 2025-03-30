"use client";

import Sidebar from "../components/sidebar";

export default function Portfolio() {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="main-content" style={{ padding: "20px", fontFamily: '"Courier New", monospace' }}>
                <h1>Portfolio</h1>
                <hr style={{ margin: "10px 0", border: "1px solid #eb620e" }} />
                <section style={{ marginBottom: "20px" }}>
                    <h2>Deloitte</h2>
                    <p>Coming soon!</p>
                </section>
                <section style={{ marginBottom: "20px" }}>
                    <h2>SkillStorm</h2>
                    <p>Coming soon!</p>
                </section>
                <section style={{ marginBottom: "20px" }}>
                    <h2>University of Central Florida</h2>
                    <p>Coming soon!</p>
                    <h3>Lasso</h3>
                    <p>Coming soon!</p>
                    <h3>Sudokuru</h3>
                    <p>Coming soon!</p>
                </section>
                <section style={{ marginBottom: "20px" }}>
                    <h2>VEX Robotics</h2>
                    <p>Coming soon!</p>
                </section>
            </div>
        </div>
    );
}