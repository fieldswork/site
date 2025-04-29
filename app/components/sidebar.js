import React, { useEffect, useState, useRef } from "react";
import getPageMounted from "../utils/getPageMounted.js";
import useWindowSize from "../utils/useWindowSize.js";

export default function Sidebar({ onSidebarToggle }) {
    const [systemInfo, setSystemInfo] = useState({});
    const [visitorCount, setVisitorCount] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { width } = useWindowSize();
    const isMounted = getPageMounted();

    useEffect(() => {
        async function fetchSystemDetails() {
            try {
                const res = await fetch('/api/systemDetails');
                if (!res.ok) throw new Error('Failed to fetch system details');
                const details = await res.json();
                setSystemInfo(details);
            } catch (error) {
                console.error(error);
            }
        }

        async function fetchVisitorCount() {
            try {
                const res = await fetch('/api/visitorCount', { method: 'POST' });
                if (!res.ok) throw new Error('Failed to fetch visitor count');
                const data = await res.json();
                setVisitorCount(data.count);
            } catch (error) {
                console.error(error);
            }
        }

        fetchSystemDetails();
        fetchVisitorCount();
    }, []);

    const toggleSidebar = () => {
        if (width < 1300) {
            const newState = !isSidebarOpen;
            setIsSidebarOpen(newState);
            onSidebarToggle(newState);
        }
    };

    const sidebarStateClass = !isMounted ? "open" : (isSidebarOpen && width < 1300 ? "closed" : "open");

    return (
        <>
            <header className="header-bar">
                <button
                    className="sidebar-button"
                    onClick={toggleSidebar}
                    aria-label="Toggle sidebar"
                >
                    Directory
                </button>
            </header>

            {/* Sidebar */}
            <div className={`sidebar ${sidebarStateClass} ${isMounted ? "transition" : ""}`}>
                <div className="sidebar-links">
                    <a href="/">Home</a><br />
                    <a href="/portfolio">Portfolio</a>
                </div>

                <div className="sidebar-bottom">
                    <b>MULE System Monitor</b>
                    <p>CPU Temp: <b>{systemInfo.cpuTemp}°C</b></p>
                    <p>CPU Utilization: <b>{systemInfo.cpuUsage}%</b></p>
                    <p>
                        RAM: <b>{systemInfo.memoryUsage?.used} / {systemInfo.memoryUsage?.total}GiB</b>
                    </p>
                    <b title="Number of times the page has been loaded, including development tasks.">
                        Page Hits: {visitorCount}
                    </b>
                </div>
            </div>
        </>
    );
}

//<p>Width: <b>{width}</b> | Height: <b>{height}</b></p>