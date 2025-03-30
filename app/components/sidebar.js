import React from "react";

export default function Sidebar({ systemInfo, visitorCount }) {
    return (
        <div className="sidebar">
            <div className="sidebar-links">
                <a href="/">Home</a>
                <a href="/portfolio">Portfolio</a>
            </div>

            <div className="sidebar-bottom">
                <b>MULE System Monitor</b>
                <p>CPU Temp: <b>{systemInfo.cpuTemp}°C</b></p>
                <p>CPU Utilization: <b>{systemInfo.cpuUsage}%</b></p>
                <p>
                    RAM: <b>{systemInfo.memoryUsage?.used}GB / {systemInfo.memoryUsage?.total}GB</b>
                </p>

                <br />

                <b>Visitor Count: {visitorCount}</b>
            </div>
        </div>
    );
}