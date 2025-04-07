import React, { useEffect, useState } from "react";

export default function Sidebar() {
    const [systemInfo, setSystemInfo] = useState({});
    const [visitorCount, setVisitorCount] = useState(0);

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

    return (
        <div className="sidebar">
            <div className="sidebar-links">
                <h3><a href="/">Home</a></h3>
                <h3><a href="/portfolio">Portfolio</a></h3>
            </div>

            <div className="sidebar-bottom">
                <b>MULE System Monitor</b>
                <p>CPU Temp: <b>{systemInfo.cpuTemp}°C</b></p>
                <p>CPU Utilization: <b>{systemInfo.cpuUsage}%</b></p>
                <p>
                    RAM: <b>{systemInfo.memoryUsage?.used} / {systemInfo.memoryUsage?.total}GiB</b>
                </p>

                <br />

                <b title="Number of times the page has been loaded, including development tasks.">
                    Page Hits: {visitorCount}
                </b>
            </div>
        </div>
    );
}