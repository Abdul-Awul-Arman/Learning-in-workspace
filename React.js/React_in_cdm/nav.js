import React from "react";
import { createRoot } from "react-dom/client";
  
  const root=document.getElementById("root");

    const Nav=()=>{
        return(
            <nav>
                <h1>Jammatul tulabul ilam</h1>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        );

    }

    createRoot(<Nav/>).render(root);