import React, { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { useRef } from "react";
import { useEffect } from "react";  


export default function Main() {


    const [ingredient, setIngredient] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);

    const [recipeShown, setRecipeShown] = useState(false);
     
     const recipeRef = useRef(null);

     console.log(recipeRef);


    function handleSubmit($event) {

        $event.preventDefault();

        const formData = new FormData($event.currentTarget);

        const newIngredient = formData.get("ingredient");



        setIngredient((prev) => {
            return [...prev, newIngredient];
        });

        $event.currentTarget.reset()

    };

    function handleIsshown() {
        setRecipeShown(true);
    }

    useEffect(()=>{
        if(recipeShown){
            recipeRef.current.scrollIntoView({behavior:"smooth"});
        }
    },[recipeShown])


    return (
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


            {
                ingredient.length > 0 &&
                <section className="  w-[594px] mt-[50px] ">

                    <IngredientsList elements={ingredient} />

                    {/* Condition for rendering get  */}

                    {ingredient.length > 3 &&

                        <div className="bg-[#F0EFEB] w-[594px] h-[109px] rounded-[8px] flex justify-around items-center mt-[30px]">
                            <div className="w-[340px]" ref={recipeRef} >
                                <h3 className="text-[#141413] text-[18px] font-[500] mb-[8px]" >Ready for a recipe?</h3>
                                <p className="text-[#6B7280] text-[14px] ">Generate a recipe from your list of ingredients</p>
                            </div>
                            <button onClick={handleIsshown} className="w-[115px]  bg-[#D17557] text-[#FAFAF8] rounded-[6px] text-[14px] p-[7px] mt-[15px] ">Get a recipe</button>
                        </div>

                    }

                </section>
            }


            {/* Api response section */}

            {recipeShown === true && <ClaudeRecipe/>} />}



        </main>
    )
}