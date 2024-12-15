import React from "react";
import Map_icon from "../src/assets/map_icon.svg"

export default function Place(entry) {
   

    return (
        <div className="">
            <article className=" flex justify-center gap-5 items-center w-[700px]  mt-10  " >

                {/* image container */}
                <div className="  w-[125px] h-[168px] overflow-hidden ">
                    <img src={entry.img.src} alt={entry.img.alt} className=" w-[100%] h-[100%]  object-cover rounded-[5px] " />
                </div>

                {/* details-container */}
                <div className="">

                    {/* location */}
                    <div className=" flex gap-2 items-center ]  " >
                        <img src={Map_icon} alt="Map icon" className="w-[7px]" />
                        <span className=" text-[11px] " >{entry.country}</span>
                        <a href={entry.googleMapsLink} className=" text-[10.24px] font-inter text-[#918E9B] underline "> View on Gooogle Maps</a>
                    </div>

                    {/* details */}
                    <div>
                        <h1 className=" text-[#2B283A] text-[25px] font-bold mb-4">{entry.title}</h1>
                        <span  className=" font-inter font-bold text-[10.24px] block mb-2 ">{entry.dates}</span>
                        <p className="   w-[320px] font-light font-inter text-[10.24px]">
                           {entry.text}
                        </p>
                    </div>

                </div>
            </article>
        </div>
    )
}