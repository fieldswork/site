"use client";

import Sidebar from "../components/sidebar";

export default function Portfolio() {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Portfolio Content */}
            <div className="main-content" style={{ padding: "20px", fontFamily: '"Courier New", monospace', marginLeft: "260px" }}>
                {/* Contact information */}
                <div style={{ marginBottom: "20px" }}>
                    <p>
                        <b>Email:</b> <a href="mailto:arthur@salmonline.us">arthur@salmonline.us</a><br />
                        <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/arthur-upfield/" target="_blank" rel="noopener noreferrer">Arthur Upfield</a>
                    </p>
                </div>

                <h2>Portfolio</h2>
                <hr style={{ margin: "10px 0", border: "1px solid #eb620e" }} />
                <section style={{ marginBottom: "20px" }}>
                    <h1>Deloitte</h1>
                    <p>Coming soon!</p>
                </section>
                <hr style={{ margin: "20px 0", border: "1px solid #eb620e" }} />
                <section style={{ marginBottom: "20px" }}>
                    <h1>SkillStorm</h1>
                    <p>Coming soon!</p>
                </section>
                <hr style={{ margin: "20px 0", border: "1px solid #eb620e" }} />
                <section style={{ marginBottom: "20px" }}>
                    <h1>University of Central Florida</h1>
                    <p><b>2018 - 2024</b><br />Computer Science BS</p>
                    <ul style={{ paddingLeft: "20px" }}>
                        <li>
                            Completed courses in computer science, object-oriented programming, computer graphics, systems software, cybersecurity, discrete mathematics, robotics, AWS cloud infrastructure, and more.
                        </li>
                        <li>
                            Built projects in various languages, including a PL/0 compiler in C, a graphics rendering pipeline in JavaScript, financial software in Java, and applications in C, Pascal, Python, Haskell, R, and assembly.
                        </li>
                        <li>
                            Passed the Foundation Exam and Senior Design classes.
                        </li>
                    </ul>
                    <h3>Lasso</h3>
                    <section style={{ marginBottom: "20px" }}>
                        <p>
                            <b>Spring 2024</b><br />
                            Side-scrolling 2.5D platformer made in Unity
                        </p>
                        <ul style={{ paddingLeft: "20px" }}>
                            <li>
                                Conceptualized and implemented the novel “Lasso” mechanic.
                            </li>
                            <li>
                                Utilized C#’s object-oriented features for development.
                            </li>
                            <li>
                                Designed player movement, game flow, and collision handling.
                            </li>
                            <li>
                                Built AI for enemies using state machines and raycast-based sight cones.
                            </li>
                            <li>
                                Designed and constructed levels, including tutorial, “Canyon,” and “Lone Star.”
                            </li>
                            <li>
                                Led a 4-person group using Git, Discord, Trello, and Google Drive.
                            </li>
                            <li>
                                Received the class’s Best Game Design award.
                            </li>
                        </ul>
                        <p>
                            <b>Lasso Project Links:</b><br />
                            <a href="https://github.com/salmoncore/Lasso" target="_blank" rel="noopener noreferrer">GitHub Repository</a><br />
                            <a href="https://salmoncore.itch.io/lasso" target="_blank" rel="noopener noreferrer">Lasso Website</a><br />
                            <a href="https://youtu.be/ott2DcjtEjs?si=K-5IrCzJEYXp0ZE1&t=17410" target="_blank" rel="noopener noreferrer">Gameplay Stream</a>
                        </p>
                    </section>
                </section>
                <hr style={{ margin: "20px 0", border: "1px solid #eb620e" }} />
                <section style={{ marginBottom: "20px" }}>
                    <h1>VEX Robotics</h1>
                    <p>
                        <b>2016 - 2018</b><br />
                        VEX Competitive Robotics, Team 5245A - Varsity Team Lead & Lead Programmer
                    </p>
                    <ul style={{ paddingLeft: "20px" }}>
                        <li>
                            Worked in a team to conceptualize, construct, and program robots for driver and autonomous tasks.
                        </li>
                        <li>
                            Code and competition records available on <a href="https://github.com/salmoncore/vex_robotics" target="_blank" rel="noopener noreferrer">GitHub</a>.
                        </li>
                        <li>
                            Competed in programming challenges and technical interviews, qualifying for and attending the VEX Worlds & US Open Championships (2017-2018).
                        </li>
                        <li>
                            Taught robotics programming in C using the VEX Cortex Microcontroller as a mentor at Polk State College’s TALON Robotics program.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}