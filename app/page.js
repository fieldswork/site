"use client";

import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";

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
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <Sidebar systemInfo={systemInfo} visitorCount={visitorCount} />

            {/* Main Content */}
            <div className="main-content">
                <header>
                    <p>hello there! welcome to salmonline.us 🙂‍↕️</p>
                    <img
                        src="website-under-construction-image-6.gif"
                        alt="site_construction_sign_gif"
                        width="400"
                        height="400"
                    />
                    <p>this site is currently under construction. please check back weekly for new content! 🙇</p>
                    <p>- fields</p>
                </header>
            </div>
        </div>
    );
}