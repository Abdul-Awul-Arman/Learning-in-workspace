import React from "react";
import WorldLogo from "../src/assets/world.svg"


export default function Header(){
    return(
        <header className="bg-[#f55a5a]  flex  justify-center items-center h-14 gap-0.5" >
            <img src={WorldLogo}  alt="Site Logo" className=" w-10 h-[24px]  " />
            <span className="text-white  font-inter font-medium " >My Travel Journal</span>
        </header>
    )
};
