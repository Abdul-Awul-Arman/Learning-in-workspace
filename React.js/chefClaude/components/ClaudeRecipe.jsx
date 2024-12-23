import React from "react";

export default function ClaudeRecipe() {
    return (
        <section className="w-[594px] mt-[35px]">
            <h2 className="font-[600] text-[30px] text-[#14143] mb-3">Chef Claude Recommends:</h2>
            <article className="text-[#475467] text-[18px]">
                <p className="mb-[20px]">Based on the ingredients you have available, I would recommend making a simple and delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
                <h3 className="mb-[10px]"><strong>Beef Bolognese Pasta</strong></h3>
                <strong className="mb-[20px] block">Ingredients:</strong>
                <ul className="list-disc ml-[20px] leading-[18px] mb-[50px] space-y-[15px]">
                    <li>1 lb. ground beef</li>
                    <li>1 onion, diced</li>
                    <li>3 cloves garlic, minced</li>
                    <li>2 tablespoons tomato paste</li>
                    <li>1 (28 oz) can crushed tomatoes</li>
                    <li>1 cup beef broth</li>
                    <li>1 teaspoon dried oregano</li>
                    <li>1 teaspoon dried basil</li>
                    <li>Salt and pepper to taste</li>
                    <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                </ul>
                <strong>Instructions:</strong>
                <ol className="list-decimal ml-[20px] leading-[18px] space-y-[15px]">
                    <li>Bring a large pot of salted water to a boil for the pasta.</li>
                    <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                    <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                    <li>Stir in the tomato paste and cook for 1 minute.</li>
                    <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                    <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                    <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                    <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                    <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                </ol>
            </article>
        </section>
    );
}