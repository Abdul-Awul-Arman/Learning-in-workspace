import React from "react";
import Map_icon from "../src/assets/map_icon.svg"

export default function Place() {
    return (
        <div className="">
            <article className=" flex justify-center gap-5 items-center w-[700px]  mt-10  " >

                {/* image container */}
                <div className="  w-[125px] h-[168px] overflow-hidden ">
                    <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount fuji" className=" w-[100%] h-[100%]  object-cover rounded-[5px] " />
                </div>

                {/* details-container */}
                <div className="">

                    {/* location */}
                    <div className=" flex gap-2 items-center ]  " >
                        <img src={Map_icon} alt="Map icon" className="w-[7px]" />
                        <span className=" text-[11px] " >JAPAN</span>
                        <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className=" text-[10.24px] font-inter text-[#918E9B] underline "> View on Gooogle Maps</a>
                    </div>

                    {/* details */}
                    <div>
                        <h1 className=" text-[#2B283A] text-[25px] font-bold mb-4">Mount Fuji</h1>
                        <span  className=" font-inter font-bold text-[10.24px] block mb-2 ">12 Jan,2023 - 24 Jan,2023</span>
                        <p className="   w-[320px] font-light font-inter text-[10.24px]">
                            Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                        </p>
                    </div>

                </div>
            </article>
        </div>
    )
}