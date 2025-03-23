"use client";

import { useEffect, useState } from "react";
export const dynamic = 'force-dynamic';

export default function Home() {
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
        <div>
            <header>
                <p>hello there! welcome to salmonline.us 🙂‍↕️</p>
                <img src="website-under-construction-image-6.gif" alt="site_construction_sign_gif" width="400" height="400" />
                <p>this site is currently under construction. please check back later for new content! 🙇</p>
                <p>- fields</p>

                <br />

                <i>MULE System Monitor</i>
                <p>CPU Temp: {systemInfo.cpuTemp}°C</p>
                <p>CPU Utilization: {systemInfo.cpuUsage}%</p>
                <p>RAM: {systemInfo.memoryUsage?.used}GB / {systemInfo.memoryUsage?.total}GB</p>

                <br />

                <i>Visitor Count: {visitorCount}</i>
            </header>
        </div>
    );
}