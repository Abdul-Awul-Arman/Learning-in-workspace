import React from "react"
import {useState} from "react"


export default function Main(){


    const [ingredient,setIngredient]=useState([]);

    const ingredientElement=ingredient.map((element)=>{
        return(
            <li key={"element"+Math.random()}>{element}</li>
        );
    });

    function handleSubmit($event){

        $event.preventDefault();

        const formData=new FormData($event.currentTarget);

        const newIngredient=formData.get("ingredient");

        setIngredient((prev)=>{
            return [...prev,newIngredient];
        });

    }


    return(
        <main className=" flex justify-center  flex-col items-center bg-[#FAFAF8] mt-[60px] ">
            <form onSubmit={handleSubmit} className=" flex gap-[10px] " action="">
                <input type="text"
                 placeholder="e.g. oregano"
                 aria-label="Add ingredient"
                 name="ingredient"
                    className="  focus:outline-double placeholder-[#6B7280] rounded-[6px] border-[#D1D5DB] border-[1px]  w-[399px] h-[38px] shadow-[0px_1px_2px_0px_rgba(0, 0, 0, 0.05);]  border-[#D1D5DB] placeholder:text-start pl-4 text-[14px]"
                  />
            <button className="bg-[#141413] w-[183px] h-[38px] rounded-md text-center font-inter text-[#FAFAF8]">+ Add ingredient</button>
            </form>
            <ul className="mt-[30px] ml-[10px] self-center w-[600px] self-start">
                {ingredientElement}
            </ul>
        </main>
    )
}