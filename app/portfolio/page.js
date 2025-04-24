"use client";

import { useState } from "react";
import Sidebar from "../components/sidebar";

export default function Portfolio() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = (isOpen) => {
        setIsSidebarOpen(isOpen);
    };

    return (
        <div style={{ display: "flex", height: "100%", maxWidth: "800px", margin: "auto" }}>
            <Sidebar onSidebarToggle={handleSidebarToggle} />

            {/* Portfolio Content */}
            <div
                className="main-content"
                style={{
                    transition: "margin-left 0.3s ease",
                    width: "100%",
                    padding: "17px",
                    fontFamily: '"Courier New", monospace',
                    overflowY: "auto",
                }}>

                <h1><b>Portfolio</b></h1>

                {/* Contact Info */}
                <div style={{ marginBottom: "20px" }}>
                    <p>
                        <b>LinkedIn:</b>{" "}
                        <a href="https://www.linkedin.com/in/arthur-upfield/" target="_blank" rel="noopener noreferrer">
                            <b>Arthur Upfield</b>
                        </a>
                        <br />
                        <b>GitHub: </b>{" "}
                        <a href="https://github.com/salmoncore" target="_blank" rel="noopener noreferrer">
                            <b>salmoncore</b>
                        </a>
                        <br />
                        <b>Email: </b>{" "}
                        <a href="mailto:arthur@salmonline.us"><b>arthur@salmonline.us</b></a>
                    </p>
                </div>

                <SectionDivider />

                {/* Deloitte */}
                <Section title="Deloitte">
                    <p><b>Oct 2024 - Present</b><br />Orlando, Florida - Remote<i><br />Contractor through SkillStorm</i></p>

                    <p style={{ marginTop: "10px" }}>
                        <b>Backend Test Automation / Test Engineering Developer</b><br />
                        Responsible for utilizing SoapUI to maintain and document automated REST API regression tests.
                        Communicates with functional testers across projects to identify, diagnose, and resolve failures within development environments.
                        Tracks and documents changes across APIs, regression test results, and associated development artifacts.
                        Develops Groovy scripts to automate repetitive/sensitive workflows within SoapUI, including an OAuth2 updater running within the Jenkins CI/CD pipeline to increase test coverage for previously unautomatable APIs.
                        Works as part of a team to divide workloads, learn existing processes, and share development experience.
                    </p>

                    <h3 style={{ marginTop: "20px" }}>Skills</h3>
                    <ul style={{ paddingLeft: "20px" }}>
                        <li>Test Automation</li>
                        <li>SoapUI</li>
                        <li>Groovy Scripting</li>
                        <li>Team Communication</li>
                        <li>Documentation (IBM Jazz, RQM/CLM)</li>
                    </ul>
                </Section>

                <SectionDivider />

                {/* SkillStorm */}
                <Section title="SkillStorm">
                    <p><b>Jul 2024 - Present</b><br />Orlando, Florida - Remote</p>
                    <p style={{ marginTop: "10px" }}>
                        <b>SDET Apprenticeship</b><br />
                        Trained as part of a cohort to use a variety of technologies for use in an SDET environment, tested weekly on conceptual and practical use of these tools.
                        Received certifications in Java and software testing. Developed <i>InventoryMan</i>, an inventory management application utilizing React, and deployed to AWS using Jenkins for CI/CD.
                        Later added tests in Cucumber/Selenium, JUnit, Mockito, and performed functional testing using Postman and Burp Suite.
                    </p>

                    <p style={{ marginTop: "10px" }}>
                        <b>Certification Links</b><br />
                        <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=EA7056510F1440F8631F9559A32C71A5D870B0480936B848EA77526E34DD3C2C" target="_blank" rel="noopener noreferrer">Java Certified Foundations Associate</a><br />
                        <a href="https://atsqa.org/certified-testers/profile/0fe3474a7baf4c0faa67432b699b996b" target="_blank" rel="noopener noreferrer">ISTQB Certified Tester Foundation Level</a>
                    </p>

                    <h3 style={{ marginTop: "20px" }}>Skills</h3>
                    <ul style={{ paddingLeft: "20px" }}>
                        <li>Software Testing</li>
                        <li>Java</li>
                        <li>SpringBoot</li>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Jenkins</li>
                        <li>PostgreSQL</li>
                        <li>Agile Methodologies</li>
                    </ul>

                    <p style={{ marginTop: "10px" }}>
                        <b>InventoryMan Project:</b><br />
                        <a href="https://github.com/salmoncore/InventoryMan" target="_blank" rel="noopener noreferrer">GitHub Repository</a><br />
                        <a href="https://sonarcloud.io/project/overview?id=salmoncore_InventoryMan" target="_blank" rel="noopener noreferrer">SonarQube Analysis</a>
                    </p>
                </Section>

                <SectionDivider />

                {/* UCF */}
                <Section title="University of Central Florida">
                    <p><b>2018 - 2024</b><br /><a href="https://www.parchment.com/u/award/04b06f6e088e4ca269480a46f03f4efc" target="_blank" rel="noopener noreferrer">UCF Computer Science Bachelor of Science Diploma</a></p>
                    <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                        <li>Completed courses in computer science, object-oriented programming, computer graphics, systems software, cybersecurity, discrete mathematics, robotics, AWS cloud infrastructure, and more.</li>
                        <li>Built projects in various languages, including a PL/0 compiler in C, a graphics rendering pipeline in JavaScript, financial software in Java, and applications in C, Pascal, Python, Haskell, R, and assembly.</li>
                        <li>Passed the Foundation Exam and Senior Design classes.</li>
                    </ul>

                    <h2 style={{ marginTop: "20px" }}>Notable Projects</h2>

                    <h3 style={{ marginTop: "20px" }}>Lasso</h3>
                    <section style={{ marginBottom: "10px" }}>
                        <p><b>Spring 2024</b><br />Side-scrolling 2.5D platformer made in Unity</p>
                        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                            <li>Conceptualized and implemented the novel “Lasso” mechanic.</li>
                            <li>Utilized C#’s object-oriented features for development.</li>
                            <li>Designed player movement, game flow, and collision handling.</li>
                            <li>Built AI for enemies using state machines and raycast-based sight cones.</li>
                            <li>Designed and constructed levels, including tutorial, “Canyon,” and “Lone Star”.</li>
                            <li>Led a 4-person group using Git, Discord, Trello, and Google Drive.</li>
                            <li>Received the class’s Best Game Design award.</li>
                        </ul>

                        <p style={{ marginTop: "10px" }}>
                            <b>Lasso Project Links:</b><br />
                            <a href="https://github.com/salmoncore/Lasso" target="_blank" rel="noopener noreferrer">GitHub Repository</a><br />
                            <a href="https://salmoncore.itch.io/lasso" target="_blank" rel="noopener noreferrer">Lasso itch.io Site</a><br />
                            <a href="https://youtu.be/ott2DcjtEjs?si=K-5IrCzJEYXp0ZE1&t=17410" target="_blank" rel="noopener noreferrer">Gameplay Stream</a>
                        </p>
                    </section>

                    <h3 style={{ marginTop: "20px" }}>Sudokuru</h3>
                    <section style={{ marginBottom: "10px" }}>
                        <p><b>Fall 2022 - Spring 2023</b><br />Open-Source Sudoku Mentoring Application</p>
                        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                            <li>Utilized JavaScript, TypeScript, Node.js, and the React framework, leveraging Expo for cross-platform functionality and Storybook UI frameworks.</li>
                            <li>Primarily responsible for the modular Sudoku board component, delivering a visually interesting and accessibility-focused user experience across web and Android platforms.</li>
                            <li>Contributed to front-end navigation architecture, implementation of React state management techniques, and configuration for Docker, API, and “Backend-For-Frontend”.</li>
                            <li>Collaborated within a 6-person group using Git, Discord, Jira, GitHub Issues, and TeamGantt for version control, issue tracking, deadline monitoring, and sharing resources.</li>
                        </ul>

                        <p style={{ marginTop: "10px" }}>
                            <b>Sudokuru Project Links:</b><br />
                            <a href="https://github.com/SudoKuru" target="_blank" rel="noopener noreferrer">GitHub Repository</a><br />
                            <a href="https://sudokuru.vercel.app" target="_blank" rel="noopener noreferrer">Sudokuru Site</a><br />
                            <a href="https://sudokuru.itch.io/sudokuru" target="_blank" rel="noopener noreferrer">Sudokuru Mobile Application</a>
                        </p>
                    </section>
                </Section>

                <SectionDivider />

                {/* VEX Robotics */}
                <Section title="VEX Robotics">
                    <p><b>2016 - 2018</b><br />VEX Competitive Robotics, Team 5245A - Varsity Team Lead & Lead Programmer</p>
                    <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                        <li>Worked in a team to conceptualize, construct, and program robots for driver and autonomous tasks.</li>
                        <li>Competed in programming challenges and technical interviews, qualifying for and attending the VEX Worlds & US Open Championships (2017-2018).</li>
                        <li>Taught robotics programming in C using the VEX Cortex Microcontroller as a mentor at Polk State College’s TALON Robotics program.</li>
                    </ul>

                    <p style={{ marginTop: "10px" }}>
                        <b>VEX Robotics Links:</b><br />
                        <a href="https://github.com/salmoncore/vex_robotics" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </p>
                </Section>
            </div>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <section style={{ marginBottom: "30px" }}>
            <h1 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{title}</h1>
            {children}
        </section>
    );
}

function SectionDivider() {
    return <hr style={{ margin: "30px 0", border: "1px solid #eb620e" }} />;
}
