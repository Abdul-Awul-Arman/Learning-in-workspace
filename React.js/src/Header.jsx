import React from "react";
import ReactLogo from "./assets/react.svg"

const Header = () => {
    return (
        <header>
            <img src={ReactLogo} width="50px" alt="ReactLogo" />
            <nav >
                <ul className="nav-list">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
        </header>
    )

};

export default Header;