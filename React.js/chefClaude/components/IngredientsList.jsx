import React from "react";

export default function IngredientsList({ elements }) {

    return (
        <>
            <h2 className=" text-[28px] font-semibold mb-[20px]">Ingredients on hand:</h2>
            <ul className="list-disc ml-[20px] leading-[18px] mb-[50px] space-y-[15px]">
                {
                    elements.map((element) => {
                        return <li className=" list-disc mb-[18px] " key={"element" + Math.random()}>{element}</li>
                    })
                }
            </ul>
        </>

    )
}