import React from "react";
import { createRoot } from "react-dom/client";


const SmplePage = () => {
    return (
        <div >
            <h1>My awesome website in React</h1>
            <h3>Reasons  love React</h3>
            <ol>
                <li>It &apos;s composable</li>
                <li>It &apos; declarative</li>
                <li>It &apos; a hireable skill</li>
                <li>It &apos; actively maintained by skilled people</li>
            </ol>
        </div >

    )
};

const root = document.getElementById('root');

createRoot(root).render(<SmplePage />);





