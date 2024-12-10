import React from "react";
import reactLogo from './assets/react.svg'
const FunFact = () => {
    return (
        <div>
            <img src={reactLogo} alt="react logo" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
};

export default FunFact