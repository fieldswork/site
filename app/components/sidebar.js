import React, { useEffect, useState } from "react";

export default function Sidebar({ onSidebarToggle }) {
    const [systemInfo, setSystemInfo] = useState({});
    const [visitorCount, setVisitorCount] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [hasMounted, setHasMounted] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWidth(window.innerWidth);
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

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

    const sidebarStateClass = !hasMounted ? "open" : (isSidebarOpen && width < 1300 ? "closed" : "open");

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
            <div className={`sidebar ${sidebarStateClass} ${hasMounted ? "transition" : ""}`}>
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