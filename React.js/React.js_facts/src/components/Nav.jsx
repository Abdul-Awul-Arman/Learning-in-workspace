import React from "react";
import ReactLogo from "../assets/react.svg"

export default function Nav(){
    return(
    <header>
        <nav>
            <img src={ReactLogo} alt="react-logo" />
            <span>ReactFacts</span>
        </nav>
    </header>
);
};