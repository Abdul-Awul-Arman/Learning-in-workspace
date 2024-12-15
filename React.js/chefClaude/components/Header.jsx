import React from 'react';



export default function Header() {

    return (
        <header className=" flex gap-2 h-[111px]   items-center justify-center  shadow-md">
            <img src="../src/assets/ChefClaude.svg" alt="logo" className="  w-[43px]" />
            <span className=" text-[#141413] text-[32px]  font-normal">Chef Claude</span>
        </header>
    );

};