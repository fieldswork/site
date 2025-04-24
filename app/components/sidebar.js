import React, { useEffect, useState } from "react";

export default function Sidebar({ onSidebarToggle }) {
    const [systemInfo, setSystemInfo] = useState({});
    const [visitorCount, setVisitorCount] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [width, setWidth] = React.useState(window.innerWidth);

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

        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);

        fetchSystemDetails();
        fetchVisitorCount();

        return () => {
            window.removeElementListener("resize", handleResizeWindow);
        }
    }, []);

    const toggleSidebar = () => {
        if (width < 1300) {
            const newState = !isSidebarOpen;
            setIsSidebarOpen(newState);
            onSidebarToggle(newState);
        }
    };

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
            <div className={`sidebar ${isSidebarOpen && (width < 1300) ? "closed" : "open"}`}>
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

//<p>width: <b>{width}px</b></p>